import { createContext, useContext, useMemo } from 'react';
import useApiCache from '../hooks/useApiCache';
import {
  blogService,
  caseStudyService,
  serviceService,
  testimonialService,
  teamService,
  siteService,
} from '../services/api';
import PAGE_CONTENT, { STATIC_CLIENT_LOGOS, STATIC_FAQS } from '../data/pageContentBundle';
import staticBlogs from '../data/blogs';
import staticCaseStudies from '../data/caseStudies';
import staticTestimonials from '../data/testimonials';
import staticServices from '../data/services';
import { leadership as staticLeadership } from '../data/teamPage';

const CATEGORY_LABELS = {
  'about-allied-axis': 'About Allied Axis',
  'case-study': 'Case Study',
  'industry-guide': 'Industry Guide',
  'thought-leadership': 'Thought Leadership',
  education: 'Education',
};

const TESTI_THEMES = ['orange', 'green', 'purple', 'gold', 'blue', 'purple', 'teal', 'pink'];

function mapBlog(b) {
  if (!b) return null;
  if (b.slug && b.title && b.excerpt) {
    return {
      id: b.id || b._id || b.slug,
      slug: b.slug,
      title: b.title,
      excerpt: b.excerpt,
      category: b.category,
      categoryLabel: b.categoryLabel || CATEGORY_LABELS[b.category] || b.category,
      date: b.date || '',
      readTime: b.readTime,
      content: b.content,
      isFeatured: b.isFeatured,
      featured: b.isFeatured,
    };
  }
  return {
    id: b._id || b.slug,
    slug: b.slug,
    title: b.title,
    excerpt: b.excerpt,
    category: b.category,
    categoryLabel: CATEGORY_LABELS[b.category] || b.category,
    date: b.publishedAt
      ? new Date(b.publishedAt).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })
      : '',
    readTime: b.readTime,
    content: b.content,
    isFeatured: b.isFeatured,
  };
}

function mapTestimonial(t, index = 0) {
  const i = typeof index === 'number' ? index : 0;
  const id = t.legacyId ?? t.id ?? (typeof t._id === 'number' ? t._id : index + 1);
  return {
    id,
    _id: t._id,
    quote: t.quote,
    author: t.author,
    role: t.role,
    company: t.company,
    location: t.location,
    countryCode: t.countryCode,
    rating: t.rating,
    metric: t.metric,
    avatar: t.avatar,
    theme: t.theme || TESTI_THEMES[i % TESTI_THEMES.length],
    avatarIndex: t.avatarIndex ?? i % 8,
    isFeatured: t.isFeatured ?? t.featured,
    featured: t.isFeatured ?? t.featured,
  };
}

function mapCaseStudy(cs) {
  if (!cs) return null;
  return {
    id: cs.id ?? cs._id,
    slug: cs.slug,
    title: cs.title,
    client: cs.client,
    industry: cs.industry,
    market: cs.market,
    problem: cs.problem,
    solution: cs.solution,
    solutionPoints: cs.solutionPoints || [],
    results: cs.results || [],
    testimonial: cs.testimonial,
    coverImage: cs.coverImage,
  };
}

function mapService(s, i = 0) {
  return {
    id: s.id ?? s._id ?? i,
    title: s.title,
    slug: s.slug,
    shortDescription: s.shortDescription || s.shortDesc || s.description,
    description: s.description,
    icon: s.icon,
    features: s.features || [],
    category: s.category,
    order: s.order ?? i,
  };
}

function mapLeader(m) {
  return {
    ...m,
    id: m.externalId || m.id || m._id?.toString(),
    externalId: m.externalId || m.id || m._id?.toString(),
    _id: m._id || m.id,
    tag: m.tag || m.role,
    title: m.title || m.role,
    color: m.color || '#e05c26',
    imageFirst: m.imageFirst !== false,
  };
}

async function loadSiteBootstrap() {
  try {
    const res = await siteService.getBootstrap();
    if (res?.data) return res.data;
  } catch {
    /* use static fallbacks */
  }
  return null;
}

const defaultContext = {
  pages: PAGE_CONTENT,
  faqs: STATIC_FAQS,
  clientLogos: STATIC_CLIENT_LOGOS,
  siteLoading: true,
  error: null,
};

const SiteDataContext = createContext(defaultContext);

export function SiteDataProvider({ children }) {
  const { data: bootstrap, loading: siteLoading, error } = useApiCache('site-bootstrap', loadSiteBootstrap);

  const pages = useMemo(() => {
    if (bootstrap?.pages && Object.keys(bootstrap.pages).length > 0) {
      return { ...PAGE_CONTENT, ...bootstrap.pages };
    }
    return PAGE_CONTENT;
  }, [bootstrap]);

  const faqs = bootstrap?.faqs?.length ? bootstrap.faqs : STATIC_FAQS;
  const clientLogos = bootstrap?.clientLogos?.length ? bootstrap.clientLogos : STATIC_CLIENT_LOGOS;

  const value = useMemo(
    () => ({
      pages,
      faqs,
      clientLogos,
      siteLoading,
      pagesLoading: siteLoading,
      error,
    }),
    [pages, faqs, clientLogos, siteLoading, error]
  );

  return <SiteDataContext.Provider value={value}>{children}</SiteDataContext.Provider>;
}

export function useSiteData() {
  return useContext(SiteDataContext);
}

export function usePageContent(key) {
  const { pages, pagesLoading, error } = useSiteData();
  return {
    content: pages?.[key] ?? PAGE_CONTENT[key] ?? null,
    loading: pagesLoading,
    error,
  };
}

export function useFaqs() {
  const { faqs, siteLoading, error } = useSiteData();
  return { faqs, loading: siteLoading, error };
}

export function useClientLogos() {
  const { clientLogos, siteLoading, error } = useSiteData();
  return { logos: clientLogos, clientLogos, loading: siteLoading, error };
}

async function loadBlogs() {
  try {
    const res = await blogService.getAll({ limit: 50 });
    if (res?.data?.length) return res.data.map(mapBlog);
  } catch {
    /* API optional — use static */
  }
  return staticBlogs.map(mapBlog);
}

export function useBlogs() {
  const { data, loading } = useApiCache('blogs', loadBlogs);
  const blogs = data ?? staticBlogs.map(mapBlog);
  return { blogs, loading: loading && !data };
}

async function loadCaseStudies() {
  try {
    const res = await caseStudyService.getAll();
    if (res?.data?.length) return res.data.map(mapCaseStudy);
  } catch {
    /* static fallback */
  }
  return staticCaseStudies.map(mapCaseStudy);
}

export function useCaseStudies() {
  const { data, loading } = useApiCache('case-studies', loadCaseStudies);
  const caseStudies = data ?? staticCaseStudies.map(mapCaseStudy);
  return { caseStudies, loading: loading && !data };
}

async function loadServices() {
  try {
    const res = await serviceService.getAll();
    if (res?.data?.length) return res.data.map(mapService);
  } catch {
    /* static fallback */
  }
  return staticServices.map(mapService);
}

export function useServices() {
  const { data, loading } = useApiCache('services', loadServices);
  const services = data ?? staticServices.map(mapService);
  return { services, loading: loading && !data };
}

async function loadTestimonials() {
  try {
    const res = await testimonialService.getAll();
    if (res?.data?.length) return res.data.map((t, i) => mapTestimonial(t, i));
  } catch {
    /* static fallback */
  }
  return staticTestimonials.map((t, i) => mapTestimonial(t, i));
}

export function useTestimonials() {
  const { data, loading } = useApiCache('testimonials', loadTestimonials);
  const testimonials = data ?? staticTestimonials.map((t, i) => mapTestimonial(t, i));
  return { testimonials, loading: loading && !data };
}

async function loadTeam() {
  try {
    const res = await teamService.getAll();
    if (res?.data?.length) return res.data.map(mapLeader);
  } catch {
    /* static fallback */
  }
  return staticLeadership.map(mapLeader);
}

export function useTeam() {
  const { data, loading } = useApiCache('team-leadership', loadTeam);
  const leadership = data ?? staticLeadership.map(mapLeader);
  return { leadership, team: leadership, loading: loading && !data };
}

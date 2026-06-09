require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('../models/User');
const Service = require('../models/Service');
const Testimonial = require('../models/Testimonial');
const CaseStudy = require('../models/CaseStudy');
const TeamMember = require('../models/TeamMember');
const Blog = require('../models/Blog');
const Faq = require('../models/Faq');
const ClientLogo = require('../models/ClientLogo');
const PageContent = require('../models/PageContent');
const logger = require('../utils/logger');
const { loadArrayExport, loadNamedModule } = require('./loadClientData');
const { buildPageContentEntries } = require('./buildPages');

function parseBlogDate(dateStr) {
  if (!dateStr) return new Date();
  const parsed = new Date(dateStr);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

function toBlogDoc(blog, index) {
  const coverSlug = blog.slug === 'who-is-maryam-fatima'
    ? 'maryam'
    : blog.slug;
  return {
    title: blog.title,
    slug: blog.slug,
    metaTitle: blog.title.slice(0, 70),
    metaDescription: blog.excerpt.slice(0, 160),
    primaryKeyword: blog.slug.replace(/-/g, ' '),
    category: blog.category,
    excerpt: blog.excerpt,
    content: blog.content,
    readTime: blog.readTime || 5,
    author: 'Maryam Fatima',
    isFeatured: index === 0,
    isPublished: true,
    publishedAt: parseBlogDate(blog.date),
    coverImage: blog.slug === 'who-is-maryam-fatima'
      ? '/images/maryam.jpeg'
      : `/images/blog/${blog.slug}.jpg`,
  };
}

function toServiceDoc(service, index) {
  return {
    title: service.title,
    slug: service.slug,
    shortDescription: service.shortDescription,
    description: service.description || service.shortDescription,
    icon: service.icon || 'briefcase',
    features: service.features || [],
    category: service.category,
    order: service.order ?? index + 1,
    isActive: true,
  };
}

function toTestimonialDoc(t, index) {
  return {
    legacyId: t.id,
    quote: t.quote,
    author: t.author,
    role: t.role || t.author || 'Client',
    company: t.company,
    location: t.location,
    countryCode: t.countryCode,
    rating: t.rating ?? 5,
    metric: t.metric,
    avatar: t.avatar,
    image: t.image,
    theme: t.theme,
    avatarIndex: t.avatarIndex ?? index,
    featured: t.featured ?? false,
    isFeatured: t.isFeatured ?? false,
    order: index + 1,
    isPublished: true,
  };
}

function toCaseStudyDoc(cs, index) {
  return {
    title: cs.title,
    slug: cs.slug,
    client: cs.client,
    industry: cs.industry,
    market: cs.market,
    problem: cs.problem,
    solution: cs.solution,
    solutionPoints: cs.solutionPoints || [],
    results: cs.results || [],
    testimonial: cs.testimonial,
    order: index + 1,
    isPublished: true,
  };
}

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    logger.info('Connected to MongoDB for seeding');

    const blogs = loadArrayExport('blogs.js');
    const caseStudies = loadArrayExport('caseStudies.js');
    const services = loadArrayExport('services.js');
    const testimonials = loadArrayExport('testimonials.js');
    const teamPage = loadNamedModule('teamPage.js');
    const pageEntries = buildPageContentEntries();

    const staticFaqs = [
      { q: 'How do you start a new project?', a: 'We begin with a free discovery call to understand your business goals, target audience, and challenges. Then we craft a tailored strategy before any work begins.', order: 1 },
      { q: 'Can you work with small businesses?', a: 'Absolutely. We work with startups, SMEs, and enterprises across UAE, UK, and Pakistan. Every package is designed to deliver ROI regardless of business size.', order: 2 },
      { q: 'Will I be involved in the process?', a: "Yes — we involve you at every key milestone. You approve strategy, design, and copy before we proceed. You're always in control.", order: 3 },
      { q: 'How do you measure campaign success?', a: 'We track leads, cost per lead, conversion rates, and ROI. You get a monthly dashboard with complete transparency.', order: 4 },
      { q: 'Are there any hidden fees?', a: 'Zero. Pricing is 100% transparent. Full asset ownership is always included — no retainers, no lock-ins.', order: 5 },
      { q: 'How long does a project take?', a: 'Most projects go live in 2–4 weeks. Complex ecosystems with AI automation can take 6–8 weeks depending on scope.', order: 6 },
    ];

    const clientLogosData = loadNamedModule('clientLogos.js');
    const staticLogos = (clientLogosData.CLIENT_LOGOS || []).map(({ name, src, order }) => ({
      name,
      src,
      order,
    }));

    await Promise.all([
      User.deleteMany({}),
      Service.deleteMany({}),
      Testimonial.deleteMany({}),
      CaseStudy.deleteMany({}),
      TeamMember.deleteMany({}),
      Blog.deleteMany({}),
      Faq.deleteMany({}),
      ClientLogo.deleteMany({}),
      PageContent.deleteMany({}),
    ]);
    logger.info('Cleared existing data');

    await User.create({
      name: 'Maryam Fatima',
      email: 'admin@alliedaxis.digital',
      password: 'AdminPass2026!',
      role: 'admin',
    });
    logger.info('Admin user created');

    await Service.insertMany(services.map(toServiceDoc));
    logger.info(`Services seeded (${services.length})`);

    await Testimonial.insertMany(testimonials.map(toTestimonialDoc));
    logger.info(`Testimonials seeded (${testimonials.length})`);

    await CaseStudy.insertMany(caseStudies.map(toCaseStudyDoc));
    logger.info(`Case studies seeded (${caseStudies.length})`);

    await Blog.insertMany(blogs.map(toBlogDoc));
    logger.info(`Blogs seeded (${blogs.length})`);

    const leadership = teamPage.leadership || [];
    if (leadership.length) {
      await TeamMember.insertMany(
        leadership.map((leader, i) => ({
          name: leader.name,
          role: leader.role,
          bio: leader.bio,
          image: leader.image,
          order: i + 1,
          externalId: leader.id,
          tag: leader.tag,
          title: leader.title,
          color: leader.color,
          imageFirst: leader.imageFirst !== false,
          certsLabel: leader.certsLabel,
          useCertLogos: leader.useCertLogos || false,
          highlights: leader.highlights || [],
          isActive: true,
        }))
      );
      logger.info(`Team leadership seeded (${leadership.length})`);
    }

    await Faq.insertMany(staticFaqs);
    logger.info(`FAQs seeded (${staticFaqs.length})`);

    await ClientLogo.insertMany(staticLogos);
    logger.info(`Client logos seeded (${staticLogos.length})`);

    await PageContent.insertMany(pageEntries);
    logger.info(`Page content seeded (${pageEntries.length} keys)`);

    logger.info('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    logger.error(`Seeding error: ${err.message}`);
    console.error(err);
    process.exit(1);
  }
};

seedDB();

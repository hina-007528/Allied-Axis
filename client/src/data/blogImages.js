/**
 * Cover images for blog cards.
 * First two About posts use site assets; others use client/public/images/blog/*.jpg
 */
const SITE_ASSETS = {
  'who-is-maryam-fatima': {
    src: '/images/maryam.jpeg',
    fit: 'cover',
    objectPosition: 'center 18%',
  },
};

/** Featured post — dashboard / laptop cover (reference) */
const blogCoverImages = {
  'what-is-allied-axis': '/images/blog/what-is-allied-axis.jpg',

  'case-study-ai-lead-generation-b2b-commodities': '/images/blog/case-study-ai-lead-generation-b2b-commodities.jpg',
  'case-study-uae-tourism-startup-digital-launch': '/images/blog/case-study-uae-tourism-startup-digital-launch.jpg',
  'case-study-uae-hr-consulting-operations': '/images/blog/case-study-uae-hr-consulting-operations.jpg',
  'case-study-uk-digital-agency-operations': '/images/blog/case-study-uk-digital-agency-operations.jpg',
  'travel-tourism-marketing-uae': '/images/blog/travel-tourism-marketing-uae.jpg',
  'consulting-firm-lead-generation-uae': '/images/blog/consulting-firm-lead-generation-uae.jpg',
  'hr-recruitment-marketing-uae': '/images/blog/hr-recruitment-marketing-uae.jpg',
  'visa-immigration-consulting-marketing-uae': '/images/blog/visa-immigration-consulting-marketing-uae.jpg',
  'management-consulting-marketing-uae': '/images/blog/management-consulting-marketing-uae.jpg',
  'executive-search-marketing-uae': '/images/blog/executive-search-marketing-uae.jpg',
  'ai-marketing-dubai-business-growth': '/images/blog/ai-marketing-dubai-business-growth.jpg',
  'lead-generation-pakistan-pipelines': '/images/blog/lead-generation-pakistan-pipelines.jpg',
  'tour-operator-marketing-pakistan': '/images/blog/tour-operator-marketing-pakistan.jpg',
  'recruitment-agency-marketing-pakistan': '/images/blog/recruitment-agency-marketing-pakistan.jpg',
  'tourism-marketing-strategy-uae': '/images/blog/tourism-marketing-strategy-uae.jpg',
  'professional-services-digital-growth-uae': '/images/blog/professional-services-digital-growth-uae.jpg',
  'why-ai-marketing-agencies-fail-maryam-fatima': '/images/blog/why-ai-marketing-agencies-fail-maryam-fatima.jpg',
  'maryam-fatima-b2b-lead-generation-framework': '/images/blog/maryam-fatima-b2b-lead-generation-framework.jpg',
  'businesses-dont-have-marketing-problem': '/images/blog/businesses-dont-have-marketing-problem.jpg',
  'school-website-losing-parents': '/images/blog/school-website-losing-parents.jpg',
  'education-enrolment-systems-maryam-fatima': '/images/blog/education-enrolment-systems-maryam-fatima.jpg',
};

const categoryFallbacks = {
  'about-allied-axis': '/images/logo.png',
  'case-study': '/images/blog/case-study-ai-lead-generation-b2b-commodities.jpg',
  'industry-guide': '/images/blog/travel-tourism-marketing-uae.jpg',
  'thought-leadership': '/images/blog/maryam-fatima-b2b-lead-generation-framework.jpg',
  education: '/images/blog/education-enrolment-systems-maryam-fatima.jpg',
};

export function getBlogCover(slug, category) {
  if (SITE_ASSETS[slug]) {
    return { fit: 'cover', ...SITE_ASSETS[slug] };
  }
  const src = blogCoverImages[slug] ?? categoryFallbacks[category] ?? '/images/logo.png';
  return { src, fit: 'cover' };
}

export function getBlogImageSrc(slug, category) {
  return getBlogCover(slug, category).src;
}

const blogImageMap = {
  ...blogCoverImages,
  ...Object.fromEntries(Object.entries(SITE_ASSETS).map(([k, v]) => [k, v.src])),
};

export default blogImageMap;

const services = [
  {
    id: 1, title: 'Branding & Creative', slug: 'branding-creative', icon: 'palette', tagline: 'No consistent brand identity?',
    shortDescription: 'Logo design, brand guidelines, business cards, company profile, and complete visual identity built to position you as the premium choice.',
    features: ['Logo Design (3 concepts, 2 revisions)', 'Letterhead Design (print & digital)', 'Business Card Design (premium double-sided)', 'Complete Branding Package', 'Company Profile / Portfolio Design', 'Brand Guidelines', 'Basic Social Accounts Setup'],
    category: 'branding',
  },
  {
    id: 2, title: 'AI Workflow & Automation', slug: 'ai-workflow-automation', icon: 'cpu', tagline: 'Manual prospecting eating your week?',
    shortDescription: 'Automated outreach, AI lead scoring, follow-up sequences, and CRM workflows — so your pipeline grows without manual effort.',
    features: ['AI Workflow Automation', 'AI-Powered Outreach Systems (LinkedIn, email, WhatsApp)', 'Automated Follow-Up Sequences', 'AI Content Generation', 'AI-Powered Analytics & Performance Tracking'],
    category: 'ai-automation',
  },
  {
    id: 3, title: 'Website & Technical', slug: 'website-technical', icon: 'globe', tagline: 'Website not converting visitors?',
    shortDescription: 'Full-stack websites built to convert — responsive design, domain, SSL, professional email setup, e-commerce back-end, and 24/7 monitoring & support.',
    features: ['Responsive HTML/CSS/JS, modern frameworks (React, Vue)', 'Performance optimisation, lazy loading, code splitting', 'Back-End Development (Node.js, Python, PHP)', 'Database design (MySQL, PostgreSQL, MongoDB)', 'CMS (custom or WordPress, Strapi, Sanity)', 'E-commerce back-end', 'CI/CD pipelines, version control', '24/7 Website Monitoring & Support'],
    category: 'technical',
  },
  {
    id: 4, title: 'Performance Marketing Systems', slug: 'performance-marketing', icon: 'trending-up', tagline: 'Ad spend without clear ROAS?',
    shortDescription: 'Meta, Google, LinkedIn & TikTok campaigns with ad creative production, retargeting, A/B testing, and full monthly ROAS reporting.',
    features: ['Campaign Strategy', 'Ad Creative Production', 'Retargeting Campaigns', 'Funnel Optimisation', 'Conversion Tracking Setup', 'A/B Testing for Ad Variations', 'Monthly Performance Reporting (ROAS, CPA, CTR)'],
    category: 'marketing',
  },
  {
    id: 5, title: 'Social Media Management', slug: 'social-media-management', icon: 'share2', tagline: 'Inconsistent posting and engagement?',
    shortDescription: 'Daily posting, engagement, reels, analytics, community management, and LinkedIn personal branding for executives.',
    features: ['Social Media Account Setup (up to 3 platforms)', 'Social Media Management (daily posting, engagement)', '30-Day Content Calendar', 'Social Media Post Design', 'Carousel & Story Graphics', 'Community Management', 'LinkedIn Personal Branding (for executives)'],
    category: 'marketing',
  },
  {
    id: 6, title: 'CRM & Lead Management', slug: 'crm-lead-management', icon: 'users', tagline: 'Leads falling through the cracks?',
    shortDescription: 'CRM setup, pipeline optimisation, lead generation systems, prospect list building, and weekly pipeline reporting.',
    features: ['CRM Systems (selection, setup, customisation)', 'CRM Automation & Pipeline Optimisation', 'Lead Generation System', 'Targeted Prospect List Building', 'Lead Qualification & Scoring Setup', 'Weekly Lead Reports & Pipeline Tracking'],
    category: 'strategy',
  },
  {
    id: 7, title: 'Outreach Systems', slug: 'outreach-systems', icon: 'send',
    shortDescription: 'Multi-channel outreach across LinkedIn, email, and WhatsApp with personalised messaging and A/B testing.',
    features: ['Multi-Channel Outreach', 'LinkedIn Outreach Campaigns', 'Email Outreach Sequences', 'WhatsApp Outreach Campaigns', 'Personalised Messaging Templates', 'A/B Testing for Outreach Copy', 'Outreach Performance Analytics'],
    category: 'ai-automation',
  },
  {
    id: 8, title: 'SEO & Growth Intelligence', slug: 'seo-growth-intelligence', icon: 'search',
    shortDescription: 'Keyword strategy, on-page optimisation, technical audits, backlink tracking, conversion tracking, and monthly analytics.',
    features: ['SEO Management (keyword strategy, on-page, backlinks)', 'Keyword Tracking & Competitor Analysis', 'Technical SEO Audits & Fixes', 'Local SEO Optimisation', 'Analytics & Reporting', 'Conversion Tracking & Goal Setup'],
    category: 'marketing',
  },
  {
    id: 9, title: 'Authority Content Systems', slug: 'authority-content-systems', icon: 'file-text',
    shortDescription: 'SEO-optimised blog posts, case studies, whitepapers, website copy, email copy, scripts, and content distribution.',
    features: ['Blog Posts (SEO-optimised)', 'Case Studies & Whitepapers', 'Website Copy', 'Email Copy', 'Script Writing', 'Content Distribution'],
    category: 'content',
  },
  {
    id: 10, title: 'Email Marketing', slug: 'email-marketing', icon: 'mail',
    shortDescription: 'Campaign creation, automation setup, deliverability optimisation (SPF/DKIM/DMARC), nurture sequences, and segmentation.',
    features: ['Email Marketing Campaigns', 'Email Hosting Configuration', 'Email Signature Design', 'SPF, DKIM, DMARC Setup', 'Automated Nurture Sequences', 'List Segmentation & Performance Tracking'],
    category: 'marketing',
  },
  {
    id: 11, title: 'Video Editing & Production', slug: 'video-editing-production', icon: 'video',
    shortDescription: 'Professional editing with transitions, captions, music. Reels, short-form, long-form, UGC ad creations, and voice over integration.',
    features: ['Performance Video Editing', 'Reel / Short-Form Video Editing', 'Long-Form Video Editing', 'UGC Ad Creations', 'Voice Over Integration', 'Video Optimisation for Social Platforms'],
    category: 'content',
  },
  {
    id: 12, title: 'Strategy & Growth Advisory', slug: 'strategy-growth-advisory', icon: 'target', tagline: 'Growth stalling without a roadmap?',
    shortDescription: 'Executive growth strategy workshops, digital maturity assessment, fractional advisory, and investor-grade roadmaps.',
    features: ['Executive growth strategy workshops', 'Digital maturity assessment', 'Fractional growth advisory', 'Investor-grade growth roadmap', 'Market entry planning', 'Board-level advisory'],
    category: 'strategy',
  },
];

export const launchPackages = [
  {
    name: 'Essential Launch',
    items: ['Logo Design', 'Letterhead Design', 'Business Card Design', '5-Page Website Development', 'Professional Email Setup', 'Basic Social Accounts Setup'],
  },
  {
    name: 'Growth Launch',
    description: 'Everything in Essential Launch, plus:',
    items: ['30-Day Content Calendar', '10 Reel Scripts', 'Basic Digital Growth Strategy'],
  },
  {
    name: 'Complete Launch',
    description: 'Everything in Growth Launch, plus:',
    items: ['Lead Generation System', 'Full Brand Guidelines', 'Stock Media Library', '2 Content Calendars', '1 Month Social Media Management'],
  },
];

export const monthlyRetainers = [
  { service: 'Search & Growth Intelligence', included: 'Keyword strategy, on-page SEO, technical audits, competitor tracking, and monthly performance reporting.' },
  { service: 'Social Media Management', included: 'Daily posting, engagement, reels, analytics, community management, and executive LinkedIn branding.' },
  { service: 'Lead Generation & Outreach', included: 'Prospect lists, multi-channel outreach, CRM setup, pipeline tracking, and weekly lead reports.' },
  { service: 'Paid Media Management', included: 'Meta, Google, LinkedIn & TikTok campaigns with creative production, retargeting, and ROAS reporting.' },
  { service: 'Content & Authority Systems', included: 'SEO blog posts, case studies, website copy, email copy, and content distribution.' },
  { service: 'Strategy & Advisory', included: 'Executive workshops, digital maturity assessment, fractional advisory, and growth roadmaps.' },
];

export default services;

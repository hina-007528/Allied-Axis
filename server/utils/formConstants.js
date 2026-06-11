/** Allowed values — keep in sync with client/src/data/contactPageContent.js */
const CONTACT_SERVICES = [
  'essential-launch',
  'growth-launch',
  'complete-launch',
  'seo',
  'social',
  'lead-gen',
  'b2b',
  'other',
  'Free Website Audit',
];

const CONTACT_BUDGETS = ['under-5k', '5k-15k', '15k-30k', '30k-plus'];

const CONTACT_SOURCES = ['website', 'contact-call', 'contact-message', 'home-audit-banner'];

const CONTACT_INTENTS = ['call', 'message'];

const CONTACT_STATUSES = ['new', 'read', 'replied', 'archived'];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const PHONE_REGEX = /^[\d\s+\-().]{7,30}$/;

const FIELD_LIMITS = {
  name: 100,
  email: 254,
  phone: 30,
  company: 200,
  role: 100,
  message: 2000,
};

module.exports = {
  CONTACT_SERVICES,
  CONTACT_BUDGETS,
  CONTACT_SOURCES,
  CONTACT_INTENTS,
  CONTACT_STATUSES,
  EMAIL_REGEX,
  PHONE_REGEX,
  FIELD_LIMITS,
};

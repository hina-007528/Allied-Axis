export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
export const PHONE_REGEX = /^[\d\s+\-().]{7,30}$/;

export const FIELD_LIMITS = {
  name: 100,
  email: 254,
  phone: 30,
  company: 200,
  role: 100,
  message: 2000,
};

const CONTACT_SERVICES = new Set([
  'essential-launch',
  'growth-launch',
  'complete-launch',
  'seo',
  'social',
  'lead-gen',
  'b2b',
  'other',
]);

const CONTACT_BUDGETS = new Set(['under-5k', '5k-15k', '15k-30k', '30k-plus']);

const CV_ALLOWED_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

const CV_ALLOWED_EXT = new Set(['pdf', 'doc', 'docx']);

export function isValidEmail(email) {
  const value = String(email || '').trim();
  return value.length <= FIELD_LIMITS.email && EMAIL_REGEX.test(value);
}

export function isValidPhone(phone) {
  const value = String(phone || '').trim();
  return value.length <= FIELD_LIMITS.phone && PHONE_REGEX.test(value);
}

export function validateContactForm(form) {
  const name = String(form.name || '').trim();
  const email = String(form.email || '').trim();
  const phone = String(form.phone || '').trim();
  const company = String(form.company || '').trim();
  const service = String(form.service || '').trim();
  const budget = String(form.budget || '').trim();
  const message = String(form.message || '').trim();

  if (name.length < 2 || name.length > FIELD_LIMITS.name) {
    return { ok: false, message: 'Please enter your full name (2–100 characters).' };
  }
  if (!isValidEmail(email)) {
    return { ok: false, message: 'Please enter a valid email address.' };
  }
  if (!isValidPhone(phone)) {
    return { ok: false, message: 'Please enter a valid phone or WhatsApp number.' };
  }
  if (company.length < 2 || company.length > FIELD_LIMITS.company) {
    return { ok: false, message: 'Please enter your business name.' };
  }
  if (!CONTACT_SERVICES.has(service)) {
    return { ok: false, message: 'Please select a service.' };
  }
  if (!CONTACT_BUDGETS.has(budget)) {
    return { ok: false, message: 'Please select a budget range.' };
  }
  if (message.length < 10) {
    return { ok: false, message: 'Message must be at least 10 characters.' };
  }
  if (message.length > FIELD_LIMITS.message) {
    return { ok: false, message: `Message must be ${FIELD_LIMITS.message} characters or less.` };
  }

  return { ok: true };
}

export function validateAuditEmail(email) {
  const value = String(email || '').trim();
  if (!isValidEmail(value)) {
    return { ok: false, message: 'Please enter a valid email address.' };
  }
  return { ok: true, email: value.toLowerCase() };
}

export function validateApplyForm(form, cvFile) {
  const name = String(form.name || '').trim();
  const email = String(form.email || '').trim();
  const role = String(form.role || '').trim();

  if (name.length < 2 || name.length > FIELD_LIMITS.name) {
    return { ok: false, message: 'Please enter your full name (2–100 characters).' };
  }
  if (!isValidEmail(email)) {
    return { ok: false, message: 'Please enter a valid email address.' };
  }
  if (role.length > FIELD_LIMITS.role) {
    return { ok: false, message: `Role must be ${FIELD_LIMITS.role} characters or less.` };
  }
  if (!cvFile) {
    return { ok: false, message: 'Please upload your CV.' };
  }

  const ext = cvFile.name.split('.').pop()?.toLowerCase();
  const okExt = CV_ALLOWED_EXT.has(ext || '');
  const okType = CV_ALLOWED_TYPES.has(cvFile.type) || okExt;
  if (!okType || !okExt) {
    return { ok: false, message: 'Please upload a PDF, DOC, or DOCX file.' };
  }
  if (cvFile.size > 5 * 1024 * 1024) {
    return { ok: false, message: 'CV must be 5 MB or smaller.' };
  }

  return { ok: true };
}

export function formSecurityFields(formStartedAt, websiteUrl = '') {
  return {
    formStartedAt,
    websiteUrl,
  };
}

/** Hidden honeypot wrapper styles — bots often fill visible-looking traps. */
export const honeypotInputProps = {
  tabIndex: -1,
  autoComplete: 'off',
  'aria-hidden': true,
};

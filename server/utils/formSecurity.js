const AppError = require('./AppError');

const MIN_SUBMIT_MS = Number(process.env.FORM_MIN_SECONDS || 3) * 1000;
const MAX_SUBMIT_MS = 24 * 60 * 60 * 1000;

function sanitizeSubjectPart(value) {
  return String(value || '')
    .replace(/[\r\n\t]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 80);
}

function sanitizeFilename(name, fallback = 'cv.pdf') {
  const base = String(name || fallback).split(/[/\\]/).pop() || fallback;
  const cleaned = base.replace(/[^a-zA-Z0-9._-]/g, '_').replace(/_+/g, '_');
  return cleaned.slice(0, 120) || fallback;
}

function rejectIfHoneypotFilled(body) {
  const trap = String(body?.websiteUrl || body?.companyWebsite || '').trim();
  if (trap) {
    throw new AppError('Invalid submission.', 400);
  }
}

function rejectIfTooFast(body) {
  const started = Number(body?.formStartedAt);
  if (!Number.isFinite(started) || started <= 0) return;

  const elapsed = Date.now() - started;
  if (elapsed < MIN_SUBMIT_MS) {
    throw new AppError('Please wait a moment before submitting.', 400);
  }
  if (elapsed > MAX_SUBMIT_MS) {
    throw new AppError('This form session expired. Please refresh and try again.', 400);
  }
}

function runFormSecurityChecks(body) {
  rejectIfHoneypotFilled(body);
  rejectIfTooFast(body);
}

module.exports = {
  sanitizeSubjectPart,
  sanitizeFilename,
  runFormSecurityChecks,
  rejectIfHoneypotFilled,
  rejectIfTooFast,
};

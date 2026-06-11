const path = require('path');
const AppError = require('./AppError');
const { sanitizeFilename } = require('./formSecurity');

const ALLOWED_MIMES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

const ALLOWED_EXT = new Set(['.pdf', '.doc', '.docx']);

function sniffCvType(buffer) {
  if (!buffer || buffer.length < 4) return null;
  const head = buffer.subarray(0, 8);

  if (head.toString('ascii', 0, 4) === '%PDF') return '.pdf';
  if (head[0] === 0xd0 && head[1] === 0xcf && head[2] === 0x11 && head[3] === 0xe0) return '.doc';
  if (head[0] === 0x50 && head[1] === 0x4b && head[2] === 0x03 && head[3] === 0x04) return '.docx';

  return null;
}

function assertValidCvFile(file) {
  if (!file?.buffer?.length) {
    throw new AppError('Please upload your CV (PDF, DOC, or DOCX).', 400);
  }

  const ext = path.extname(file.originalname || '').toLowerCase();
  if (!ALLOWED_EXT.has(ext)) {
    throw new AppError('CV must be a PDF, DOC, or DOCX file.', 400);
  }

  if (!ALLOWED_MIMES.has(file.mimetype)) {
    throw new AppError('CV file type is not allowed.', 400);
  }

  const sniffed = sniffCvType(file.buffer);
  if (!sniffed || sniffed !== ext) {
    throw new AppError('CV file content does not match its type. Upload a valid PDF, DOC, or DOCX.', 400);
  }

  return {
    safeName: sanitizeFilename(file.originalname, `cv${ext}`),
    ext: sniffed,
  };
}

module.exports = {
  assertValidCvFile,
  sniffCvType,
  ALLOWED_EXT,
  ALLOWED_MIMES,
};

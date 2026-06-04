const path = require('path');
const multer = require('multer');
const AppError = require('../utils/AppError');

const ALLOWED_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);
const ALLOWED_EXT = new Set(['.pdf', '.doc', '.docx']);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024, files: 1 },
  fileFilter: (_req, file, cb) => {
    const ext = path.extname(file.originalname || '').toLowerCase();
    if (ALLOWED_TYPES.has(file.mimetype) || ALLOWED_EXT.has(ext)) {
      cb(null, true);
      return;
    }
    cb(new AppError('CV must be a PDF, DOC, or DOCX file.', 400));
  },
});

module.exports = upload.single('cv');

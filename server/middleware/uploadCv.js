const path = require('path');
const multer = require('multer');
const AppError = require('../utils/AppError');
const { ALLOWED_EXT, ALLOWED_MIMES } = require('../utils/cvValidation');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024, files: 1 },
  fileFilter: (_req, file, cb) => {
    const ext = path.extname(file.originalname || '').toLowerCase();
    if (!ALLOWED_EXT.has(ext) || !ALLOWED_MIMES.has(file.mimetype)) {
      cb(new Error('CV must be a PDF, DOC, or DOCX file.'));
      return;
    }
    cb(null, true);
  },
});

const uploadSingle = upload.single('cv');

module.exports = (req, res, next) => {
  uploadSingle(req, res, (err) => {
    if (!err) return next();
    if (err.code === 'LIMIT_FILE_SIZE') {
      return next(new AppError('CV must be 5 MB or smaller.', 400));
    }
    if (err.code === 'LIMIT_UNEXPECTED_FILE') {
      return next(new AppError('Invalid upload. Please attach one CV file only.', 400));
    }
    return next(new AppError(err.message || 'CV upload failed.', 400));
  });
};

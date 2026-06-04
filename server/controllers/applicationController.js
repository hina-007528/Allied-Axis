const TeamApplication = require('../models/TeamApplication');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const logger = require('../utils/logger');
const { sendTeamApplicationEmail } = require('../utils/email');

exports.submitTeamApplication = asyncHandler(async (req, res) => {
  if (!req.file) {
    throw new AppError('Please upload your CV (PDF, DOC, or DOCX).', 400);
  }

  const name = (req.body.name || '').trim();
  const email = (req.body.email || '').trim().toLowerCase();
  const role = (req.body.role || '').trim();

  if (!name) throw new AppError('Full name is required.', 400);
  if (!email) throw new AppError('Email address is required.', 400);

  const application = await TeamApplication.create({
    name,
    email,
    role,
    cvFileName: req.file.originalname,
    cvMimeType: req.file.mimetype,
    cvSize: req.file.size,
  });

  logger.info(`New team application from ${application.email}`);

  res.status(201).json({
    success: true,
    message: 'Thank you! Your application was received. We will review it and get back to you soon.',
    data: { id: application._id },
  });

  sendTeamApplicationEmail(application, req.file).catch((err) => {
    logger.error(`Team application email failed: ${err.message}`);
  });
});

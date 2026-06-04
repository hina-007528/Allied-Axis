const CaseStudy = require('../models/CaseStudy');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');

exports.getCaseStudies = asyncHandler(async (req, res) => {
  const studies = await CaseStudy.find({ isPublished: true }).sort('order');
  res.status(200).json({ success: true, count: studies.length, data: studies });
});

exports.getCaseStudy = asyncHandler(async (req, res, next) => {
  const study = await CaseStudy.findOne({ slug: req.params.slug, isPublished: true });
  if (!study) return next(new AppError('Case study not found', 404));
  res.status(200).json({ success: true, data: study });
});

exports.createCaseStudy = asyncHandler(async (req, res) => {
  const study = await CaseStudy.create(req.body);
  res.status(201).json({ success: true, data: study });
});

exports.updateCaseStudy = asyncHandler(async (req, res, next) => {
  const study = await CaseStudy.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!study) return next(new AppError('Case study not found', 404));
  res.status(200).json({ success: true, data: study });
});

exports.deleteCaseStudy = asyncHandler(async (req, res, next) => {
  const study = await CaseStudy.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true });
  if (!study) return next(new AppError('Case study not found', 404));
  res.status(200).json({ success: true, data: {} });
});

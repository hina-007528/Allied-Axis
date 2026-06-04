const Testimonial = require('../models/Testimonial');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');

exports.getTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find({ isPublished: true }).sort('order');
  res.status(200).json({ success: true, count: testimonials.length, data: testimonials });
});

exports.getFeaturedTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find({ isPublished: true, isFeatured: true }).sort('order').limit(6);
  res.status(200).json({ success: true, data: testimonials });
});

exports.createTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.create(req.body);
  res.status(201).json({ success: true, data: testimonial });
});

exports.updateTestimonial = asyncHandler(async (req, res, next) => {
  const t = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!t) return next(new AppError('Testimonial not found', 404));
  res.status(200).json({ success: true, data: t });
});

exports.deleteTestimonial = asyncHandler(async (req, res, next) => {
  const t = await Testimonial.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true });
  if (!t) return next(new AppError('Testimonial not found', 404));
  res.status(200).json({ success: true, data: {} });
});

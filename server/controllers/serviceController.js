const Service = require('../models/Service');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');

exports.getServices = asyncHandler(async (req, res) => {
  const services = await Service.find({ isActive: true }).sort('order');
  res.status(200).json({ success: true, count: services.length, data: services });
});

exports.getService = asyncHandler(async (req, res, next) => {
  const service = await Service.findOne({ slug: req.params.slug, isActive: true });
  if (!service) return next(new AppError('Service not found', 404));
  res.status(200).json({ success: true, data: service });
});

exports.createService = asyncHandler(async (req, res) => {
  const service = await Service.create(req.body);
  res.status(201).json({ success: true, data: service });
});

exports.updateService = asyncHandler(async (req, res, next) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!service) return next(new AppError('Service not found', 404));
  res.status(200).json({ success: true, data: service });
});

exports.deleteService = asyncHandler(async (req, res, next) => {
  const service = await Service.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true });
  if (!service) return next(new AppError('Service not found', 404));
  res.status(200).json({ success: true, data: {} });
});

const TeamMember = require('../models/TeamMember');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');

exports.getTeamMembers = asyncHandler(async (req, res) => {
  const members = await TeamMember.find({ isActive: true }).sort('order');
  res.status(200).json({ success: true, count: members.length, data: members });
});

exports.createTeamMember = asyncHandler(async (req, res) => {
  const member = await TeamMember.create(req.body);
  res.status(201).json({ success: true, data: member });
});

exports.updateTeamMember = asyncHandler(async (req, res, next) => {
  const member = await TeamMember.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!member) return next(new AppError('Team member not found', 404));
  res.status(200).json({ success: true, data: member });
});

exports.deleteTeamMember = asyncHandler(async (req, res, next) => {
  const member = await TeamMember.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true });
  if (!member) return next(new AppError('Team member not found', 404));
  res.status(200).json({ success: true, data: {} });
});

const Blog = require('../models/Blog');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const APIFeatures = require('../utils/apiFeatures');

exports.getBlogs = asyncHandler(async (req, res) => {
  const features = new APIFeatures(Blog.find({ isPublished: true }), req.query)
    .filter()
    .search(['title', 'content', 'tags'])
    .sort()
    .limitFields()
    .paginate();

  const blogs = await features.query;
  const total = await Blog.countDocuments({ isPublished: true, isDeleted: { $ne: true } });

  res.status(200).json({
    success: true,
    count: blogs.length,
    total,
    pagination: features.pagination,
    data: blogs,
  });
});

exports.getBlog = asyncHandler(async (req, res, next) => {
  const blog = await Blog.findOne({ slug: req.params.slug, isPublished: true });
  if (!blog) return next(new AppError('Blog post not found', 404));

  blog.views += 1;
  await blog.save({ validateBeforeSave: false });

  res.status(200).json({ success: true, data: blog });
});

exports.getFeaturedBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ isFeatured: true, isPublished: true })
    .sort('-publishedAt')
    .limit(6)
    .select('title slug excerpt category coverImage author publishedAt readTime');

  res.status(200).json({ success: true, data: blogs });
});

exports.createBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.create(req.body);
  res.status(201).json({ success: true, data: blog });
});

exports.updateBlog = asyncHandler(async (req, res, next) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!blog) return next(new AppError('Blog post not found', 404));
  res.status(200).json({ success: true, data: blog });
});

exports.deleteBlog = asyncHandler(async (req, res, next) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true });
  if (!blog) return next(new AppError('Blog post not found', 404));
  res.status(200).json({ success: true, data: {} });
});

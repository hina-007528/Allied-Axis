const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, index: true },
    slug: { type: String, required: true, unique: true, lowercase: true, index: true },
    metaTitle: { type: String, required: true, maxlength: 70 },
    metaDescription: { type: String, required: true, maxlength: 160 },
    primaryKeyword: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ['about-allied-axis', 'case-study', 'industry-guide', 'thought-leadership', 'education'],
    },
    excerpt: { type: String, required: true, maxlength: 300 },
    content: { type: String, required: true },
    coverImage: { type: String, default: '/images/blog-default.jpg' },
    author: { type: String, default: 'Maryam Fatima' },
    readTime: { type: Number, default: 5 },
    tags: [{ type: String, trim: true }],
    isFeatured: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: true },
    publishedAt: { type: Date, default: Date.now },
    views: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

blogSchema.index({ title: 'text', content: 'text', tags: 'text' });

blogSchema.pre(/^find/, function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

module.exports = mongoose.model('Blog', blogSchema);

const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema(
  {
    legacyId: { type: Number },
    quote: { type: String, required: true },
    author: { type: String, required: true },
    role: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String },
    country: { type: String },
    countryCode: { type: String },
    rating: { type: Number, default: 5, min: 1, max: 5 },
    metric: { value: String, label: String },
    avatar: { type: String },
    image: { type: String },
    theme: { type: String },
    avatarIndex: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

testimonialSchema.pre(/^find/, function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

module.exports = mongoose.model('Testimonial', testimonialSchema);

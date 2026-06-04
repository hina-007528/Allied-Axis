const mongoose = require('mongoose');

const caseStudySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    client: { type: String, required: true },
    industry: { type: String, required: true },
    market: { type: String, required: true },
    problem: { type: String, required: true },
    solution: { type: String, required: true },
    solutionPoints: [{ type: String }],
    results: [{ metric: String, value: String }],
    testimonial: { quote: String, author: String, role: String },
    coverImage: { type: String, default: '/images/case-default.jpg' },
    order: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

caseStudySchema.pre(/^find/, function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

module.exports = mongoose.model('CaseStudy', caseStudySchema);

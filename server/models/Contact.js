const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is required'], trim: true },
    email: { type: String, required: [true, 'Email is required'], trim: true, lowercase: true },
    phone: { type: String, trim: true },
    company: { type: String, trim: true },
    service: { type: String },
    budget: { type: String },
    message: { type: String, required: [true, 'Message is required'], maxlength: 2000 },
    source: { type: String, default: 'website' },
    status: { type: String, enum: ['new', 'read', 'replied', 'archived'], default: 'new' },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

contactSchema.pre(/^find/, function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

module.exports = mongoose.model('Contact', contactSchema);

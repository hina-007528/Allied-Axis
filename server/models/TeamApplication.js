const mongoose = require('mongoose');

const teamApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is required'], trim: true },
    email: { type: String, required: [true, 'Email is required'], trim: true, lowercase: true },
    role: { type: String, trim: true, default: '' },
    cvFileName: { type: String, required: true },
    cvMimeType: { type: String },
    cvSize: { type: Number },
    status: { type: String, enum: ['new', 'read', 'archived'], default: 'new' },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

teamApplicationSchema.pre(/^find/, function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

module.exports = mongoose.model('TeamApplication', teamApplicationSchema);

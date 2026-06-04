const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true },
    bio: { type: String, required: true },
    image: { type: String },
    linkedin: { type: String },
    email: { type: String },
    certifications: [{ type: String }],
    externalId: { type: String },
    tag: { type: String },
    title: { type: String },
    color: { type: String },
    imageFirst: { type: Boolean, default: true },
    certsLabel: { type: String },
    useCertLogos: { type: Boolean, default: false },
    highlights: [{ type: String }],
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

teamMemberSchema.pre(/^find/, function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

module.exports = mongoose.model('TeamMember', teamMemberSchema);

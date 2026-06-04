const mongoose = require('mongoose');

const clientLogoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    src: { type: String, required: true },
    order: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ClientLogo', clientLogoSchema);

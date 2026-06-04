const mongoose = require('mongoose');

const pageContentSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true, trim: true },
    content: { type: mongoose.Schema.Types.Mixed, required: true },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('PageContent', pageContentSchema);

const Faq = require('../models/Faq');
const ClientLogo = require('../models/ClientLogo');
const PageContent = require('../models/PageContent');
const asyncHandler = require('../utils/asyncHandler');

exports.getBootstrap = asyncHandler(async (req, res) => {
  const [faqs, clientLogos, pageDocs] = await Promise.all([
    Faq.find({ isPublished: true }).sort('order').lean(),
    ClientLogo.find({ isPublished: true }).sort('order').lean(),
    PageContent.find({ isPublished: true }).lean(),
  ]);

  const pages = pageDocs.reduce((acc, doc) => {
    acc[doc.key] = doc.content;
    return acc;
  }, {});

  res.status(200).json({
    success: true,
    data: {
      faqs: faqs.map(({ q, a }) => ({ q, a })),
      clientLogos: clientLogos.map(({ name, src }) => ({ name, src })),
      pages,
    },
  });
});

exports.getPageContent = asyncHandler(async (req, res) => {
  const doc = await PageContent.findOne({ key: req.params.key, isPublished: true }).lean();
  if (!doc) {
    return res.status(200).json({ success: true, data: null });
  }
  res.status(200).json({ success: true, data: doc.content });
});

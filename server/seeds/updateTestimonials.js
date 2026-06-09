/**
 * Update testimonial records from client data without wiping other collections.
 * Safe to run on production after static testimonial image/author changes.
 */
require('dotenv').config();
const mongoose = require('mongoose');
const Testimonial = require('../models/Testimonial');
const logger = require('../utils/logger');
const { loadArrayExport } = require('./loadClientData');

function toTestimonialDoc(t, index) {
  return {
    legacyId: t.id,
    quote: t.quote,
    author: t.author,
    role: t.role || t.author || 'Client',
    company: t.company,
    location: t.location,
    countryCode: t.countryCode,
    rating: t.rating ?? 5,
    metric: t.metric,
    avatar: t.avatar,
    image: t.image,
    theme: t.theme,
    avatarIndex: t.avatarIndex ?? index,
    featured: t.featured ?? false,
    isFeatured: t.isFeatured ?? false,
    order: index + 1,
    isPublished: true,
  };
}

async function updateTestimonials() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not set');
    }

    await mongoose.connect(process.env.MONGO_URI);
    logger.info('Connected to MongoDB for testimonial update');

    const testimonials = loadArrayExport('testimonials.js');
    const ops = testimonials.map((t, i) => ({
      updateOne: {
        filter: { legacyId: t.id },
        update: { $set: toTestimonialDoc(t, i) },
        upsert: true,
      },
    }));

    const result = await Testimonial.bulkWrite(ops);
    logger.info(
      `Testimonials synced: ${result.modifiedCount} updated, ${result.upsertedCount} inserted, ${testimonials.length} total in source`
    );

    process.exit(0);
  } catch (err) {
    logger.error(`Testimonial update error: ${err.message}`);
    console.error(err);
    process.exit(1);
  }
}

updateTestimonials();

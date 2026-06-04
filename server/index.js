require('dotenv').config();
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const path = require('path');

const connectDB = require('./config/db');
const { corsOptions } = require('./config/cors');
const errorHandler = require('./middleware/errorHandler');
const { apiLimiter } = require('./middleware/rateLimiter');
const logger = require('./utils/logger');

const blogRoutes = require('./routes/blogRoutes');
const caseStudyRoutes = require('./routes/caseStudyRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');
const teamRoutes = require('./routes/teamRoutes');
const siteRoutes = require('./routes/siteRoutes');

const app = express();

connectDB();

app.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }));
app.use(cors(corsOptions()));
app.use(compression());
const jsonParser = express.json({ limit: '10kb' });
const urlencodedParser = express.urlencoded({ extended: true, limit: '10kb' });

app.use((req, res, next) => {
  if (req.is('multipart/form-data')) return next();
  jsonParser(req, res, (err) => {
    if (err) return next(err);
    urlencodedParser(req, res, next);
  });
});
app.use(mongoSanitize());
app.use(hpp());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined', {
    stream: { write: (message) => logger.http(message.trim()) },
  }));
}

app.use('/api', apiLimiter);

app.use('/api/v1/blogs', blogRoutes);
app.use('/api/v1/case-studies', caseStudyRoutes);
app.use('/api/v1/services', serviceRoutes);
app.use('/api/v1/testimonials', testimonialRoutes);
app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/team', teamRoutes);
app.use('/api/v1/site', siteRoutes);

const { isEmailConfigured, getEmailProvider, verifySmtpConnection } = require('./utils/email');

app.get('/api/v1/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
    commit: process.env.RENDER_GIT_COMMIT || process.env.VERCEL_GIT_COMMIT_SHA || 'local',
    emailProvider: getEmailProvider(),
    emailConfigured: isEmailConfigured(),
    notifyEmail: process.env.CONTACT_NOTIFY_EMAIL || null,
  });
});

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Allied Axis API — use /api/v1/* routes',
    health: '/api/v1/health',
    contactSubmit: 'POST /api/v1/contact',
  });
});

const clientBuildDir = path.join(__dirname, '../client/build');
const shouldServeClient =
  process.env.SERVE_CLIENT !== 'false' &&
  fs.existsSync(path.join(clientBuildDir, 'index.html'));

if (process.env.NODE_ENV === 'production' && shouldServeClient) {
  app.use(express.static(clientBuildDir));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(clientBuildDir, 'index.html'));
  });
}

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  verifySmtpConnection().catch(() => {});
});

process.on('unhandledRejection', (err) => {
  logger.error(`Unhandled Rejection: ${err.message}`);
  server.close(() => process.exit(1));
});

process.on('SIGTERM', () => {
  logger.info('SIGTERM received. Shutting down gracefully...');
  server.close(() => process.exit(0));
});

module.exports = app;

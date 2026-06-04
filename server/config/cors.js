function parseAllowedOrigins() {
  const origins = new Set();

  if (process.env.ALLOWED_ORIGINS) {
    process.env.ALLOWED_ORIGINS.split(',')
      .map((o) => o.trim())
      .filter(Boolean)
      .forEach((o) => origins.add(o));
  }

  if (process.env.CLIENT_URL) {
    origins.add(process.env.CLIENT_URL.trim());
  }

  if (origins.size === 0) {
    origins.add('http://localhost:3000');
  }

  return [...origins];
}

function isOriginAllowed(origin) {
  if (!origin) return true;

  const allowed = parseAllowedOrigins();
  if (allowed.includes(origin)) return true;

  if (process.env.ALLOW_VERCEL_PREVIEWS === 'true' && /^https:\/\/[\w-]+\.vercel\.app$/.test(origin)) {
    return true;
  }

  return false;
}

function corsOptions() {
  return {
    origin(origin, callback) {
      if (isOriginAllowed(origin)) {
        callback(null, origin || true);
      } else {
        callback(null, false);
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    optionsSuccessStatus: 204,
    maxAge: 86400,
  };
}

module.exports = { corsOptions, parseAllowedOrigins };

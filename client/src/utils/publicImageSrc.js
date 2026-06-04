/** Resolve static assets from /public (supports PUBLIC_URL and spaced filenames). */
export function publicImageSrc(path) {
  const base = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const parts = normalized.split('/').filter(Boolean);
  return `${base}/${parts.map(encodeURIComponent).join('/')}`.replace(/\/{2,}/g, '/');
}

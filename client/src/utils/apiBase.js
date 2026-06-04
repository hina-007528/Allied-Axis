const DEFAULT_API_BASE = 'http://localhost:5000/api/v1';

/** CRA inlines REACT_APP_* at build time — must be a full https URL on Vercel. */
export function getApiBase() {
  const raw = process.env.REACT_APP_API_URL || DEFAULT_API_BASE;
  const base = String(raw).trim().replace(/\/$/, '');

  if (!/^https?:\/\//i.test(base)) {
    if (process.env.NODE_ENV === 'production') {
      console.error(
        '[Allied Axis] REACT_APP_API_URL must be a full URL (e.g. https://allied-axis-api.onrender.com/api/v1). Got:',
        raw
      );
    }
    return DEFAULT_API_BASE;
  }

  return base;
}

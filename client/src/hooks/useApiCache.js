import { useEffect, useState } from 'react';

const cache = new Map();

export default function useApiCache(key, fetcher, { enabled = true } = {}) {
  const [data, setData] = useState(() => (cache.has(key) ? cache.get(key).data : null));
  const [loading, setLoading] = useState(enabled && !cache.has(key));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!enabled) return undefined;

    if (cache.has(key)) {
      const hit = cache.get(key);
      setData(hit.data);
      setLoading(false);
      setError(hit.error ?? null);
      return undefined;
    }

    let cancelled = false;
    setLoading(true);

    Promise.resolve()
      .then(() => fetcher())
      .then((result) => {
        if (cancelled) return;
        cache.set(key, { data: result, error: null });
        setData(result);
        setError(null);
      })
      .catch((err) => {
        if (cancelled) return;
        const message = err?.message || 'Failed to load';
        cache.set(key, { data: null, error: message });
        setError(message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [key, enabled]);

  return { data, loading, error };
}

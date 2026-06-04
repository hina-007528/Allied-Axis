import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Fallback scroll reset when Lenis is not active.
 * Primary reset runs in LuxuryMotion (Lenis.scrollTo).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

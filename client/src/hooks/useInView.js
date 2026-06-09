import { useEffect, useRef, useState } from 'react';

function isInViewport(el, threshold = 0.15) {
  const rect = el.getBoundingClientRect();
  const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
  if (visibleHeight <= 0) return false;
  return visibleHeight / rect.height >= threshold || rect.top < window.innerHeight * 0.92;
}

/**
 * @param {number} threshold
 * @param {{ once?: boolean }} options — once: false replays when re-entering viewport
 */
export default function useInView(threshold = 0.15, { once = true } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (isInViewport(el, threshold)) {
      setVisible(true);
      if (once) return undefined;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (once) {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        } else {
          setVisible(entry.isIntersecting);
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);

  return [ref, visible];
}

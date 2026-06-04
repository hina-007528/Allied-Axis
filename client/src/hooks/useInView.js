import { useEffect, useRef, useState } from 'react';

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
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);

  return [ref, visible];
}

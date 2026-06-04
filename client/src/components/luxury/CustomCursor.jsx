import { useEffect, useRef, useState } from 'react';

const HOVER_SELECTOR = 'a, button, img, video, .interactive-card, .srv-card, .testi-card, .case-card, .blog-card, .team-card, .why-card, .stat-card, .hero-stat-ring, .btn, .nav-cta, .mob-cta, .wa-float';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return undefined;

    document.documentElement.classList.add('luxury-cursor-active');
    setEnabled(true);

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const loop = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    const onOver = (e) => {
      const t = e.target.closest(HOVER_SELECTOR);
      document.body.classList.toggle('cursor-hover', Boolean(t));
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove('luxury-cursor-active');
      document.body.classList.remove('cursor-hover');
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="luxury-cursor" aria-hidden="true">
      <div ref={dotRef} className="luxury-cursor-dot" />
      <div ref={ringRef} className="luxury-cursor-ring" />
    </div>
  );
}

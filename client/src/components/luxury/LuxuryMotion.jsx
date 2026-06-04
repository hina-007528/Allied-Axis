import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initSplitHeadings } from '../../utils/splitHeading';
import { initImageReveals } from '../../utils/imageReveal';
import { initCardBorderGlow } from '../../utils/cardBorderGlow';

gsap.registerPlugin(ScrollTrigger);

/**
 * Global motion layer: Lenis smooth scroll + GSAP ScrollTrigger refresh.
 * Does not alter routing, data, or layout structure.
 */
export default function LuxuryMotion({ children }) {
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.add('lenis');
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      document.documentElement.classList.remove('lenis');
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  /* New route = always start at top (Lenis owns scroll, not window.scrollTo alone) */
  useEffect(() => {
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  useEffect(() => {
    const run = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          initSplitHeadings();
          initImageReveals();
          initCardBorderGlow();
          ScrollTrigger.refresh();
        });
      });
    };

    const t = window.setTimeout(run, 120);
    const t2 = window.setTimeout(run, 500);

    return () => {
      window.clearTimeout(t);
      window.clearTimeout(t2);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [location.pathname]);

  return children;
}

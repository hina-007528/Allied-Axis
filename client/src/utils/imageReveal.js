import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** GSAP scroll-driven mask + scale reveal for existing images. */
export function initImageReveals() {
  document.querySelectorAll('[data-image-reveal]').forEach((wrap) => {
    if (wrap.dataset.revealInit === '1') return;
    wrap.dataset.revealInit = '1';

    const inner = wrap.querySelector('.image-reveal-inner') || wrap;
    gsap.set(wrap, { clipPath: 'inset(8% 8% 8% 8%)', force3D: true });
    gsap.set(inner, { scale: 1.3, force3D: true });

    gsap.to(wrap, {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.2,
      ease: 'power3.out',
      force3D: true,
      scrollTrigger: {
        trigger: wrap,
        start: 'top 85%',
        once: true,
      },
    });

    gsap.to(inner, {
      scale: 1,
      duration: 1.35,
      ease: 'power3.out',
      force3D: true,
      scrollTrigger: {
        trigger: wrap,
        start: 'top 85%',
        once: true,
      },
    });
  });
}

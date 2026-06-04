import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Founder portrait — height follows image; full horizontal rotateY reveal on scroll.
 */
export default function FounderImage3D({ src, alt }) {
  const sceneRef = useRef(null);
  const flipRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const flip = flipRef.current;
    if (!scene || !flip) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const canTilt = !reduceMotion && !coarsePointer;

    gsap.set(flip, {
      transformPerspective: 1600,
      transformStyle: 'preserve-3d',
      rotateY: reduceMotion ? 0 : -360,
      opacity: reduceMotion ? 1 : 0.35,
    });

    const playReveal = () => {
      gsap.to(flip, {
        rotateY: 0,
        opacity: 1,
        duration: reduceMotion ? 0.01 : 1.65,
        ease: 'power2.inOut',
      });
    };

    const resetReveal = () => {
      if (reduceMotion) return;
      gsap.set(flip, { rotateY: -360, opacity: 0.35 });
    };

    const st = ScrollTrigger.create({
      trigger: scene,
      start: 'top 82%',
      onEnter: playReveal,
      onLeaveBack: resetReveal,
    });

    let rotX;
    let tiltZ;
    const onMove = (e) => {
      if (!canTilt) return;
      const rect = flip.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rotX(-py * 10);
      tiltZ(px * 8);
    };
    const onLeave = () => {
      if (!canTilt) return;
      rotX(0);
      tiltZ(0);
    };

    if (canTilt) {
      rotX = gsap.quickTo(flip, 'rotateX', { duration: 0.45, ease: 'power2.out' });
      tiltZ = gsap.quickTo(flip, 'z', { duration: 0.45, ease: 'power2.out' });
      flip.addEventListener('mousemove', onMove);
      flip.addEventListener('mouseleave', onLeave);
    }

    return () => {
      flip.removeEventListener('mousemove', onMove);
      flip.removeEventListener('mouseleave', onLeave);
      st.kill();
    };
  }, []);

  return (
    <div className="founder-3d-scene" ref={sceneRef}>
      <div className="founder-3d-glow" aria-hidden="true" />
      <div className="founder-3d-flip" ref={flipRef}>
        <div className="founder-3d-face">
          <img src={src} alt={alt} loading="lazy" decoding="async" />
          <span className="founder-3d-shine" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

import { useEffect } from 'react';
import { aboutSolutionLayers, aboutSolutionTagline } from '../../data/aboutSolution';
import useInView from '../../hooks/useInView';
import { initCardBorderGlow } from '../../utils/cardBorderGlow';
import AboutSolutionCard from './AboutSolutionCard';

function FadeIn({ children, delay = 0 }) {
  const [ref, visible] = useInView(0.06);
  return (
    <div
      ref={ref}
      className={`fade-in about-solution-fade${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function AboutSolutionSection() {
  const [sectionRef, inView] = useInView(0.04);

  useEffect(() => {
    if (!inView) return undefined;
    const id = window.requestAnimationFrame(() => initCardBorderGlow());
    return () => window.cancelAnimationFrame(id);
  }, [inView]);

  return (
    <section ref={sectionRef} className="section about-solution-section">
      <div className="container">
        <FadeIn>
          <header className="about-solution-header">
            <span className="about-solution-label">THE SOLUTION WE BUILD</span>
            <h2 className="about-solution-heading">
              One Accountable Partner.{' '}
              <span className="about-solution-heading-accent">Six Integrated Layers.</span>
            </h2>
          </header>
        </FadeIn>

        <div className="about-solution-bento">
          <div className="about-solution-grid">
            {aboutSolutionLayers.map((layer, index) => (
              <FadeIn key={layer.num} delay={index * 90}>
                <AboutSolutionCard layer={layer} index={index} />
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={560}>
          <p className="about-solution-tagline">{aboutSolutionTagline}</p>
        </FadeIn>
      </div>
    </section>
  );
}

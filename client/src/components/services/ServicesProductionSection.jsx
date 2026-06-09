import { useEffect } from 'react';
import { servicesProduction, servicesProductionIntro } from '../../data/servicesProduction';
import useInView from '../../hooks/useInView';
import { initCardBorderGlow } from '../../utils/cardBorderGlow';
import ServiceProductionCard from './ServiceProductionCard';

function FadeSection({ children }) {
  const [ref, visible] = useInView(0.06);
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

export default function ServicesProductionSection() {
  const [sectionRef, inView] = useInView(0.04);

  useEffect(() => {
    if (!inView) return undefined;
    const id = window.requestAnimationFrame(() => initCardBorderGlow());
    return () => window.cancelAnimationFrame(id);
  }, [inView]);

  const { label, heading, headingAccent } = servicesProductionIntro;

  return (
    <section ref={sectionRef} className="section services-production-section">
      <div className="container">
        <header className="services-production-header">
          <span className="services-production-label">{label}</span>
          <h2 className="services-production-heading">
            {heading}{' '}
            <span className="services-production-heading-accent">{headingAccent}</span>
          </h2>
        </header>

        <div className="services-production-grid">
          {servicesProduction.map((service) => (
            <FadeSection key={service.slug}>
              <ServiceProductionCard service={service} />
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect } from 'react';
import { servicesIndividual, servicesIndividualIntro } from '../../data/servicesIndividual';
import useInView from '../../hooks/useInView';
import { initCardBorderGlow } from '../../utils/cardBorderGlow';
import ServiceIndividualCard from './ServiceIndividualCard';

function FadeSection({ children }) {
  const [ref, visible] = useInView(0.06);
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

export default function ServicesIndividualSection() {
  const [sectionRef, inView] = useInView(0.04);

  useEffect(() => {
    if (!inView) return undefined;
    const id = window.requestAnimationFrame(() => initCardBorderGlow());
    return () => window.cancelAnimationFrame(id);
  }, [inView]);

  const { label, heading, headingAccent } = servicesIndividualIntro;

  return (
    <section ref={sectionRef} className="section services-individual-section">
      <div className="container">
        <header className="services-individual-header">
          <span className="services-individual-label">{label}</span>
          <h2 className="services-individual-heading">
            {heading} <span className="services-individual-heading-accent">{headingAccent}</span>
          </h2>
        </header>

        <div className="services-individual-grid">
          {servicesIndividual.map((service) => (
            <FadeSection key={service.slug}>
              <ServiceIndividualCard service={service} />
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}

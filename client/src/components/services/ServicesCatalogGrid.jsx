import { useEffect } from 'react';
import { servicesCatalog } from '../../data/servicesCatalog';
import useInView from '../../hooks/useInView';
import { initCardBorderGlow } from '../../utils/cardBorderGlow';
import ServiceCatalogCard from './ServiceCatalogCard';

function FadeSection({ children }) {
  const [ref, visible] = useInView(0.06);
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

export default function ServicesCatalogGrid() {
  const [sectionRef, inView] = useInView(0.04);

  useEffect(() => {
    if (!inView) return undefined;
    const id = window.requestAnimationFrame(() => initCardBorderGlow());
    return () => window.cancelAnimationFrame(id);
  }, [inView]);

  return (
    <section ref={sectionRef} className="section section-dark services-catalog-section">
      <div className="container">
        <div className="services-catalog-grid">
          {servicesCatalog.map((service, index) => (
            <FadeSection key={service.slug}>
              <ServiceCatalogCard service={service} index={index} />
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}

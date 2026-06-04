import useInView from '../../hooks/useInView';
import { b2bServices } from '../../data/b2bPage';
import { b2bServicesIntro } from '../../data/b2bPageContent';
import B2BServiceCard from './B2BServiceCard';

function FadeSection({ children }) {
  const [ref, visible] = useInView(0.08);
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

export default function B2BServicesSection() {
  const { label, heading, headingAccent } = b2bServicesIntro;

  return (
    <section className="section section-dark b2b-services-section">
      <div className="container">
        <header className="b2b-services-header">
          <span className="b2b-services-label">{label}</span>
          <h2 className="b2b-services-heading">
            {heading} <span className="b2b-services-heading-accent">{headingAccent}</span>
          </h2>
        </header>

        <div className="b2b-services-grid">
          {b2bServices.map((service) => (
            <FadeSection key={service.title}>
              <B2BServiceCard service={service} />
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}

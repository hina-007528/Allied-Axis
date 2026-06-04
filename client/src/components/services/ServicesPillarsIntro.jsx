import { servicesPillarsContent } from '../../data/servicesPageContent';

export default function ServicesPillarsIntro() {
  const { label, heading, headingAccent } = servicesPillarsContent;

  return (
    <section className="services-pillars-section" aria-labelledby="services-pillars-heading">
      <div className="container">
        <span className="services-pillars-label">{label}</span>
        <h2 id="services-pillars-heading" className="services-pillars-heading">
          {heading} <span className="services-pillars-heading-accent">{headingAccent}</span>
        </h2>
      </div>
    </section>
  );
}

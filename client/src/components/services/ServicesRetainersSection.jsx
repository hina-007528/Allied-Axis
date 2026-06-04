import { servicesRetainersIntro, servicesRetainersRows } from '../../data/servicesRetainers';

export default function ServicesRetainersSection() {
  const { label, heading, headingAccent, footnote } = servicesRetainersIntro;

  return (
    <section className="section services-retainers-section">
      <div className="container">
        <header className="services-retainers-header">
          <span className="services-retainers-label">{label}</span>
          <h2 className="services-retainers-heading">
            {heading} <span className="services-retainers-heading-accent">{headingAccent}</span>
          </h2>
        </header>

        <div className="services-retainers-table" role="table">
          <div className="services-retainers-table-head" role="row">
            <span role="columnheader">Service</span>
            <span role="columnheader">What&apos;s Included</span>
          </div>
          {servicesRetainersRows.map((row) => (
            <div key={row.service} className="services-retainers-row" role="row">
              <div className="services-retainers-service" role="cell">
                <strong>{row.service}</strong>
              </div>
              <div className="services-retainers-included" role="cell">
                {row.included}
              </div>
            </div>
          ))}
        </div>

        <p className="services-retainers-footnote">{footnote}</p>
      </div>
    </section>
  );
}

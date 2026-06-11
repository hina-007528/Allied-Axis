import {
  aboutCoreServiceRows,
  aboutCoreServicesFootnote,
  aboutMissionVision,
} from '../../data/aboutCoreServices';

function ServiceItem({ item }) {
  return (
    <div className="about-core-service-item">
      <h3 className="about-core-service-title">
        <span
          className={`about-core-service-dot${
            item.accent ? ' about-core-service-dot--accent' : ''
          }`}
          aria-hidden="true"
        />
        {item.title}
      </h3>
      <p className="about-core-service-desc">{item.desc}</p>
    </div>
  );
}

export default function AboutCoreServicesSection() {
  return (
    <section className="about-core-services-wrap">
      <div className="about-core-services-light section">
        <div className="container">
          <header className="about-core-services-header">
            <span className="about-core-services-label">WHAT WE DO</span>
            <h2 className="about-core-services-heading">
              Core Services <span className="about-core-services-heading-accent">At a Glance</span>
            </h2>
          </header>

          <div className="about-core-services-grid">
            {aboutCoreServiceRows.map((row) => (
              <div key={row[0].title} className="about-core-services-row">
                <ServiceItem item={row[0]} />
                <ServiceItem item={row[1]} />
              </div>
            ))}
          </div>

          <p className="about-core-services-footnote">{aboutCoreServicesFootnote}</p>
        </div>
      </div>

      <div className="about-mission-vision section">
        <div className="container">
          <div className="about-mission-vision-grid">
            <article
              className={`about-mv-card about-mv-card--${aboutMissionVision.mission.variant} interactive-card`}
            >
              <span className="about-mv-label">{aboutMissionVision.mission.label}</span>
              <p className="about-mv-text">{aboutMissionVision.mission.text}</p>
            </article>
            <article
              className={`about-mv-card about-mv-card--${aboutMissionVision.vision.variant} interactive-card`}
            >
              <span className="about-mv-label">{aboutMissionVision.vision.label}</span>
              <p className="about-mv-text">{aboutMissionVision.vision.text}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

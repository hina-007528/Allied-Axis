import { aboutSolutionLayers, aboutSolutionTagline } from '../../data/aboutSolution';

export default function AboutSolutionSection() {
  return (
    <section className="section about-solution-section">
      <div className="container">
        <header className="about-solution-header">
          <span className="about-solution-label">THE SOLUTION WE BUILD</span>
          <h2 className="about-solution-heading">
            One Accountable Partner.{' '}
            <span className="about-solution-heading-accent">Six Integrated Layers.</span>
          </h2>
        </header>

        <div className="about-solution-grid">
          {aboutSolutionLayers.map((layer) => (
            <article
              key={layer.num}
              className={`about-solution-card interactive-card${
                layer.muted ? ' about-solution-card--muted' : ''
              }`}
            >
              <span className="about-solution-watermark" aria-hidden="true">
                {layer.num}
              </span>
              <h3 className="about-solution-card-title">{layer.title}</h3>
              <p className="about-solution-card-desc">{layer.desc}</p>
            </article>
          ))}
        </div>

        <p className="about-solution-tagline">{aboutSolutionTagline}</p>
      </div>
    </section>
  );
}

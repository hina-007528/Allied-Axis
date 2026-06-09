import AboutLayerVisual from './AboutLayerVisual';

export default function AboutSolutionCard({ layer, index = 0 }) {
  return (
    <article
      className="about-solution-card interactive-card"
      style={{ '--layer-accent': layer.accent, '--layer-i': index }}
    >
      <header className="about-solution-card-header">
        <div className="about-solution-layer-label">
          <span className="about-solution-layer-bar" aria-hidden="true" />
          LAYER {layer.num}
        </div>
        <span className="about-solution-visual-kpi">{layer.kpi}</span>
      </header>

      <div className="about-solution-visual-stage">
        <AboutLayerVisual type={layer.visual} />
      </div>

      <h3 className="about-solution-card-title">{layer.title}</h3>
      <p className="about-solution-card-desc">{layer.desc}</p>
    </article>
  );
}

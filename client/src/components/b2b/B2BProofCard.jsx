import { Link } from 'react-router-dom';

export default function B2BProofCard({ card }) {
  const watermarkWide = String(card.watermark).length > 3;

  return (
    <Link
      to={`/portfolio/${card.slug}`}
      className="home-proof-card interactive-card b2b-proof-card"
      style={{ '--proof-accent': card.tagColor, '--card-beam-accent': card.tagColor }}
    >
      <div className="home-proof-card-head">
        <span className="home-proof-num">{card.num}</span>
        <span className="home-proof-tag">{card.tag}</span>
      </div>
      <div className="home-proof-body">
        <span
          className={`home-proof-watermark b2b-proof-watermark${
            watermarkWide ? ' home-proof-watermark--wide' : ''
          }`}
          aria-hidden="true"
        >
          {card.watermark}
        </span>
        <h3>{card.title}</h3>
        <p className="home-proof-desc">{card.desc}</p>
      </div>
      <div className="home-proof-metrics b2b-proof-metrics">
        {card.metrics.map((m) => (
          <div key={m.label} className="home-proof-metric b2b-proof-metric">
            <span className="home-proof-metric-val">{m.value}</span>
            <span className="home-proof-metric-lbl">{m.label}</span>
          </div>
        ))}
      </div>
      <div className="home-proof-pills">
        {card.pills.map((p) => (
          <span key={p} className="home-proof-pill">
            {p}
          </span>
        ))}
      </div>
    </Link>
  );
}

import { Link } from 'react-router-dom';

export default function HomeProofCard({ card }) {
  return (
    <Link
      to={`/portfolio/${card.slug}`}
      className="home-proof-card"
      style={{ '--proof-accent': card.tagColor, '--card-beam-accent': card.tagColor }}
    >
      <div className="home-proof-card-head">
        <span className="home-proof-num">{card.num}</span>
        <span className="home-proof-tag">{card.tag}</span>
      </div>
      <div className="home-proof-body">
        <span
          className={`home-proof-watermark${
            String(card.watermark).length > 2 ? ' home-proof-watermark--wide' : ''
          }`}
          aria-hidden="true"
        >
          {card.watermark}
        </span>
        <h3>{card.title}</h3>
        {card.desc && <p className="home-proof-desc">{card.desc}</p>}
      </div>
      <div className="home-proof-pills">
        {card.pills.map((p) => (
          <span key={p} className="home-proof-pill">
            {p}
          </span>
        ))}
      </div>
      <div className="home-proof-metrics">
        {card.metrics.map((m) => (
          <div key={m.label} className="home-proof-metric">
            <span className="home-proof-metric-val">{m.value}</span>
            <span className="home-proof-metric-lbl">{m.label}</span>
          </div>
        ))}
      </div>
      <span className="home-proof-link">View Case Study →</span>
    </Link>
  );
}

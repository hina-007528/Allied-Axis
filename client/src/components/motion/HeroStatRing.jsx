/** Hero stat with animated SVG rings around the number. */
export default function HeroStatRing({ value, label, index = 0 }) {
  const delay = index * 0.6;

  return (
    <div className="hero-stat-ring interactive-card">
      <div className="hero-stat-ring-visual" style={{ '--ring-delay': `${delay}s` }}>
        <svg className="hero-stat-ring-outer" viewBox="0 0 128 128" aria-hidden="true">
          <circle className="hero-stat-ring-track" cx="64" cy="64" r="58" />
          <circle className="hero-stat-ring-arc hero-stat-ring-arc-a" cx="64" cy="64" r="58" />
        </svg>
        <svg className="hero-stat-ring-inner" viewBox="0 0 128 128" aria-hidden="true">
          <circle className="hero-stat-ring-track hero-stat-ring-track-dim" cx="64" cy="64" r="46" />
          <circle className="hero-stat-ring-arc hero-stat-ring-arc-b" cx="64" cy="64" r="46" />
        </svg>
        <span className="hero-stat-ring-dot" aria-hidden="true" />
        <span className="hero-stat-ring-value">{value}</span>
      </div>
      <span className="hero-stat-ring-label">{label}</span>
    </div>
  );
}

function AboutStatCell({ value, label }) {
  return (
    <div className="about-stat-cell">
      <div className="about-stat-value">
        {value}
      </div>
      <div className="about-stat-label">{label}</div>
    </div>
  );
}

export default function AboutHeroStats({ items }) {
  return (
    <div className="about-hero-stats" aria-label="Key performance metrics">
      <div className="about-hero-stats-inner">
        {items.map((s) => (
          <AboutStatCell
            key={s.label}
            value={s.value}
            label={s.label}
          />
        ))}
      </div>
    </div>
  );
}

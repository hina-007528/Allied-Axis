/** Dark stats row — matches reference (portfolio, testimonials, home). */
export default function StatsBar({ items, className = '' }) {
  return (
    <div className={`stats-bar${className ? ` ${className}` : ''}`}>
      {items.map((s) => (
        <div className="stat-item" key={s.label}>
          <div className="stat-value">{s.value}</div>
          <div className="stat-label">{s.label}</div>
          {s.sub && <div className="stat-sub">{s.sub}</div>}
        </div>
      ))}
    </div>
  );
}

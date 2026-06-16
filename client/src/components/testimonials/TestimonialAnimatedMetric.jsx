export default function TestimonialAnimatedMetric({
  value,
  label,
  variant = 'headline',
  accent,
}) {
  if (variant === 'badge') {
    return (
      <p className="testi-ref-metric-badge" style={{ '--testi-accent': accent }}>
        <strong>{value}</strong> {label}
      </p>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div className="testi-ref-side-metric" style={{ '--testi-accent': accent }}>
        <span className="testi-ref-side-metric-val">{value}</span>
        <span className="testi-ref-side-metric-lbl">{label}</span>
      </div>
    );
  }

  return (
    <div className="testi-ref-metric-head" style={{ '--testi-accent': accent }}>
      <span className="testi-ref-metric-value">{value}</span>
      <span className="testi-ref-metric-label">{label}</span>
    </div>
  );
}

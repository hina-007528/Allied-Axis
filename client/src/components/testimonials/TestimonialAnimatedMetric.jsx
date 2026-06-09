import useCountUp from '../../hooks/useCountUp';

export default function TestimonialAnimatedMetric({
  value,
  label,
  active,
  variant = 'headline',
  delay = 0,
  accent,
}) {
  const { display } = useCountUp(value, active, 2000, delay);

  if (variant === 'badge') {
    return (
      <p className="testi-ref-metric-badge" style={{ '--testi-accent': accent }}>
        <strong aria-live="polite">{display}</strong> {label}
      </p>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div className="testi-ref-side-metric" style={{ '--testi-accent': accent }}>
        <span className="testi-ref-side-metric-val" aria-live="polite">{display}</span>
        <span className="testi-ref-side-metric-lbl">{label}</span>
      </div>
    );
  }

  return (
    <div className="testi-ref-metric-head" style={{ '--testi-accent': accent }}>
      <span className="testi-ref-metric-value" aria-live="polite">
        {display}
      </span>
      <span className="testi-ref-metric-label">{label}</span>
    </div>
  );
}

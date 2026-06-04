import { useEffect, useState } from 'react';
import useCountUp from '../../hooks/useCountUp';

function AboutStatCell({ value, label, active, delay = 0 }) {
  const { display } = useCountUp(value, active, 2000, delay);

  return (
    <div className="about-stat-cell">
      <div className="about-stat-value" aria-live="polite">
        {display}
      </div>
      <div className="about-stat-label">{label}</div>
    </div>
  );
}

export default function AboutHeroStats({ items }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setActive(true), 250);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="about-hero-stats" aria-label="Key performance metrics">
      <div className="about-hero-stats-inner">
        {items.map((s, i) => (
          <AboutStatCell
            key={s.label}
            value={s.value}
            label={s.label}
            active={active}
            delay={i * 90}
          />
        ))}
      </div>
    </div>
  );
}

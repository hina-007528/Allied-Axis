import useCountUp from '../../hooks/useCountUp';
import useInView from '../../hooks/useInView';
import { b2bHeroStats } from '../../data/b2bPageContent';

function B2BStatCell({ value, label, active, delay = 0 }) {
  const { display } = useCountUp(value, active, 2000, delay);

  return (
    <div className="b2b-stat-cell">
      <span className="b2b-stat-value" aria-live="polite">
        {display}
      </span>
      <span className="b2b-stat-label">{label}</span>
    </div>
  );
}

export default function B2BStatsBar() {
  const [sectionRef, inView] = useInView(0.2);

  return (
    <section ref={sectionRef} className="b2b-stats-bar" aria-label="B2B performance metrics">
      <div className="container">
        <div className="b2b-stats-bar-inner">
          {b2bHeroStats.map((stat, i) => (
            <B2BStatCell
              key={stat.label}
              value={stat.value}
              label={stat.label}
              active={inView}
              delay={i * 90}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

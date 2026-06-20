import useInView from '../../hooks/useInView';

const metrics = [
  { label: 'Inquiries / Month', before: '60', after: 'Same Volume', icon: '📊' },
  { label: 'Conversion Rate', before: '30%', after: 'Up to 45%', icon: '📈' },
  { label: 'Response Time', before: 'Slow (Days)', after: 'Minutes', icon: '⚡' },
  { label: 'Admissions Boost', before: '0%', after: '+18%', icon: '🎓' },
];

const targets = [
  {
    icon: '🏫',
    title: 'Private Schools',
    desc: 'Cambridge, Matric, O/A-Levels managing stretched staff and high inquiry volume.',
    color: '#e05c26',
  },
  {
    icon: '🏛️',
    title: 'Colleges',
    desc: 'FSc, FA, ICS, ICom handling high-volume seasonal admission cycles.',
    color: '#7c3aed',
  },
  {
    icon: '🎓',
    title: 'Universities & Institutes',
    desc: 'BBA, BS, MBA programs requiring longer decision cycles and structured follow-ups.',
    color: '#10b981',
  },
];

export default function EduImpactSection() {
  const [ref, visible] = useInView(0.1);
  const [targetRef, targetVisible] = useInView(0.1);

  return (
    <section className="section edu-impact-section">
      <div className="container">
        <div className={`edu-section-header fade-in ${visible ? 'visible' : ''}`} ref={ref}>
          <span className="sec-label">Expected Impact</span>
          <h2 className="sec-heading">
            Real Numbers.{' '}
            <span className="accent">Real Results.</span>
          </h2>
          <p className="sec-sub center">
            Based on our analysis of Allied School B-17: recovering just 30–50% of missed
            opportunities can add Rs. 750,000 – 1.5M annually.
          </p>
        </div>

        {/* Before / After comparison */}
        <div className="edu-compare-table">
          <div className="edu-compare-header">
            <div className="edu-compare-metric-col">Metric</div>
            <div className="edu-compare-col edu-compare-col--before">
              <span className="edu-compare-badge edu-compare-badge--before">❌ Before System</span>
            </div>
            <div className="edu-compare-col edu-compare-col--after">
              <span className="edu-compare-badge edu-compare-badge--after">✅ After System</span>
            </div>
          </div>
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="edu-compare-row"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="edu-compare-metric-col">
                <span className="edu-compare-row-icon" aria-hidden="true">{m.icon}</span>
                {m.label}
              </div>
              <div className="edu-compare-col edu-compare-col--before">
                <span className="edu-compare-val edu-compare-val--before">{m.before}</span>
              </div>
              <div className="edu-compare-col edu-compare-col--after">
                <span className="edu-compare-val edu-compare-val--after">{m.after}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Net result callout */}
        <div className="edu-result-cards">
          <div className="edu-result-card edu-result-card--admissions">
            <div className="edu-result-num">+9</div>
            <div className="edu-result-label">Additional Admissions</div>
            <div className="edu-result-sub">Per Month (Conservative)</div>
          </div>
          <div className="edu-result-card edu-result-card--revenue">
            <div className="edu-result-num">Rs. 450K+</div>
            <div className="edu-result-label">Additional Monthly Revenue</div>
            <div className="edu-result-sub">Potential Upside</div>
          </div>
          <div className="edu-result-card edu-result-card--annual">
            <div className="edu-result-num">Rs. 1.5M</div>
            <div className="edu-result-label">Annual Revenue Recovery</div>
            <div className="edu-result-sub">At 50% Missed Lead Recovery</div>
          </div>
        </div>

        {/* Who we work with */}
        <div
          ref={targetRef}
          className={`edu-targets fade-in ${targetVisible ? 'visible' : ''}`}
        >
          <h3 className="edu-targets-title">Who We Work With</h3>
          <div className="edu-targets-grid">
            {targets.map((t) => (
              <div key={t.title} className="edu-target-card">
                <div
                  className="edu-target-icon"
                  style={{ background: `${t.color}18`, color: t.color }}
                >
                  {t.icon}
                </div>
                <h4 className="edu-target-title" style={{ color: t.color }}>{t.title}</h4>
                <p className="edu-target-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import useInView from '../../hooks/useInView';
import EduProblemGraph from './EduProblemGraphs';

const problems = [
  {
    icon: '🗂️',
    title: 'No Central Tracking',
    desc: 'Scattered channels mean leadership cannot track monthly conversions or know where leads come from.',
    color: '#e05c26',
  },
  {
    icon: '⏰',
    title: 'Inconsistent Response',
    desc: 'Late replies — weekend messages answered Monday — mean parents enroll elsewhere before you respond.',
    color: '#7c3aed',
  },
  {
    icon: '👻',
    title: 'Non-existent Follow-Ups',
    desc: 'Parents who say "we\'ll think about it" are completely forgotten. Zero structured re-engagement.',
    color: '#ef4444',
  },
  {
    icon: '🔗',
    title: 'Single-Person Dependency',
    desc: 'If your admissions coordinator is absent or leaves, the entire inquiry pipeline collapses overnight.',
    color: '#f59e0b',
  },
  {
    icon: '📊',
    title: 'Blind Leadership',
    desc: 'No concrete data on channel performance, conversion rates, or real-time inquiry volume.',
    color: '#10b981',
  },
  {
    icon: '💬',
    title: 'Unresolved Public Outreach',
    desc: 'Unanswered questions on Facebook posts cost active enrollments — publicly visible trust damage.',
    color: '#3b82f6',
  },
];

function ProblemCard({ item, index, delay }) {
  const [ref, visible] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`edu-problem-card fade-in ${visible ? 'visible' : ''}`}
      style={{
        transitionDelay: `${delay}s`,
        '--card-beam-accent': item.color,
      }}
    >
      {/* Mini analytics graph — matches HomeWhyCard style */}
      <EduProblemGraph index={index} accent={item.color} />

      {/* Card footer: icon + title + desc */}
      <div className="edu-problem-foot">
        <div
          className="edu-problem-icon"
          style={{ background: `${item.color}18`, color: item.color }}
        >
          <span aria-hidden="true">{item.icon}</span>
          <div className="edu-problem-ring" style={{ borderColor: `${item.color}40` }} />
        </div>
        <div className="edu-problem-foot-text">
          <h3 className="edu-problem-title">{item.title}</h3>
          <p className="edu-problem-desc">{item.desc}</p>
        </div>
      </div>

      <div className="edu-problem-bar" style={{ background: item.color }} />
    </div>
  );
}

/* ── Animated SVG Arrow Connector ── */
function AnimatedArrow() {
  return (
    <div className="edu-revenue-arrow" aria-hidden="true">
      <svg className="edu-revenue-arrow-svg" viewBox="0 0 48 24" fill="none">
        {/* dashed track */}
        <line className="edu-revenue-arrow-line"
          x1="4" y1="12" x2="40" y2="12" strokeWidth="1.5" />
        {/* arrowhead */}
        <path className="edu-revenue-arrow-head"
          d="M36 7 L44 12 L36 17 Z" />
        {/* travelling dot */}
        <circle className="edu-revenue-arrow-dot" cx="4" cy="12" r="3" />
      </svg>
    </div>
  );
}

/* ── Revenue Stat Box ── */
function RevenueBox({ icon, iconBg, label, value, valClass, barClass, pct, pctLabel, delay }) {
  const [ref, visible] = useInView(0.3);
  return (
    <div className="edu-revenue-box" ref={ref}>
      <div className="edu-revenue-box-glow" style={{ background: iconBg }} />
      <div className="edu-revenue-icon" style={{ background: `${iconBg}22`, color: iconBg }}>
        {icon}
      </div>
      <span className="edu-revenue-label">{label}</span>
      <span className={`edu-revenue-val ${valClass}`}>{value}</span>
      <div className="edu-revenue-bar-track">
        <div
          className={`edu-revenue-bar ${barClass} ${visible ? 'is-animated' : ''}`}
          style={{ transitionDelay: delay }}
        />
      </div>
      <span className="edu-revenue-pct">{pctLabel}</span>
    </div>
  );
}

function RevenueVisual() {
  return (
    <div className="edu-revenue-visual">
      <RevenueBox
        icon="📬"
        iconBg="#3b82f6"
        label="Monthly Inquiries"
        value="80–100"
        valClass="edu-revenue-val--blue"
        barClass="edu-revenue-bar--total"
        pctLabel="100% incoming"
        delay="0s"
      />
      <AnimatedArrow />
      <RevenueBox
        icon="📉"
        iconBg="#ef4444"
        label="Current Conversion"
        value="30–40%"
        valClass="edu-revenue-val--red"
        barClass="edu-revenue-bar--converted"
        pctLabel="Only 35% convert"
        delay="0.15s"
      />
      <AnimatedArrow />
      <RevenueBox
        icon="💸"
        iconBg="#e05c26"
        label="Annual Revenue Lost"
        value="Rs. 2.5M – 3M"
        valClass="edu-revenue-val--orange"
        barClass="edu-revenue-bar--lost"
        pctLabel="65% leads walk away"
        delay="0.3s"
      />
    </div>
  );
}

export default function EduProblemsSection() {
  const [headerRef, headerVisible] = useInView(0.1);

  return (
    <section className="section edu-problems-section">
      <div className="container">
        <div
          ref={headerRef}
          className={`edu-section-header fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <span className="sec-label">The Problem</span>
          <h2 className="sec-heading">
            Six Liabilities Draining{' '}
            <span className="accent">Your Admissions</span>
          </h2>
          <p className="sec-sub center">
            Most private schools lose 30–50% of interested families — not because of price or quality,
            but because of avoidable system failures.
          </p>
        </div>

        {/* Revenue loss visual */}
        <RevenueVisual />

        {/* Scenario callout */}
        <div className="edu-scenario-card">
          <div className="edu-scenario-icon" aria-hidden="true">💬</div>
          <div className="edu-scenario-body">
            <div className="edu-scenario-label">Real Scenario — Happening Right Now</div>
            <p className="edu-scenario-text">
              Parent WhatsApps <em>(Friday evening)</em>: "What's your fee for class 3?"
              <br />
              School replies <em>(Monday morning)</em>: "Thanks for concerning, it's 3000..."
              <br />
              <strong>Result: The child is already enrolled in another school.</strong>
            </p>
          </div>
        </div>

        <div className="edu-problems-grid">
          {problems.map((item, i) => (
            <ProblemCard key={item.title} item={item} index={i} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

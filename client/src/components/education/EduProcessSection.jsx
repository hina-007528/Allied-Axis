import useInView from '../../hooks/useInView';

const steps = [
  {
    day: 'Day 1',
    title: 'Discovery & Audit',
    desc: 'We map your current inquiry journey. Every channel. Every gap. We document what exists and what\'s missing.',
    icon: '🔍',
  },
  {
    day: 'Day 2–3',
    title: 'System Build',
    desc: 'Tracker configured. WhatsApp Business set up. Templates written. Workflow documented. Broadcast lists prepared.',
    icon: '🛠️',
  },
  {
    day: 'Day 4',
    title: 'Training Session 1',
    desc: 'Live session with your admissions team. System overview. Inquiry handling. Response protocols. Follow-up schedule.',
    icon: '🎓',
  },
  {
    day: 'Day 5–6',
    title: 'Testing & Refinement',
    desc: 'Every workflow tested. Every template reviewed. Issues caught and fixed before go-live.',
    icon: '🧪',
  },
  {
    day: 'Day 7+',
    title: 'Go-Live + Ongoing Support',
    desc: 'System goes live. Training Session 2 completes. Weekly performance reports begin. We review and optimise at Week 2.',
    icon: '🚀',
  },
];

export default function EduProcessSection() {
  const [ref, visible] = useInView(0.1);

  return (
    <section className="section section-dark edu-process-section">
      <div className="container">
        <div
          ref={ref}
          className={`edu-section-header fade-in ${visible ? 'visible' : ''}`}
        >
          <span className="sec-label">Our Process</span>
          <h2 className="sec-heading" style={{ color: '#fff' }}>
            From Audit to Live System in{' '}
            <span className="accent">7 to 14 Days</span>
          </h2>
          <p className="sec-sub center" style={{ color: 'var(--text-on-dark-muted)' }}>
            Proven 5-step process. No long delays. Your team is operating
            independently before the end of week two.
          </p>
        </div>

        <div className={`edu-process-steps fade-in ${visible ? 'visible' : ''}`}>
          <div className="edu-process-line" aria-hidden="true" />
          {steps.map((step, i) => (
            <div
              key={step.day}
              className="edu-process-step"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="edu-process-dot" aria-hidden="true">
                <span className="edu-process-dot-icon">{step.icon}</span>
              </div>
              <div className="edu-process-content">
                <span className="edu-process-day">{step.day}</span>
                <h3 className="edu-process-title">{step.title}</h3>
                <p className="edu-process-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import useInView from '../../hooks/useInView';
import { FaCheckCircle } from 'react-icons/fa';

const deliverables = [
  {
    icon: '📋',
    title: 'Centralized Inquiry Tracker',
    desc: '1 Google Sheet with inquiry database, dashboard, follow-up reminders, and reporting tabs — complete visibility for leadership.',
    badge: 'Day 1–3',
    color: '#10b981',
  },
  {
    icon: '💬',
    title: 'WhatsApp Quick Replies',
    desc: '7 ready-to-use templates: /fee, /process, /visit, /documents, /contact, /timeline, /faqs — respond instantly.',
    badge: 'Day 2–3',
    color: '#3b82f6',
  },
  {
    icon: '🔄',
    title: 'Structured Follow-Up Workflow',
    desc: 'Automated sequence Day 0–14: Inquiry → Welcome → Follow-up Call → Share Info → Close/Convert.',
    badge: 'Day 3–4',
    color: '#7c3aed',
  },
  {
    icon: '🎓',
    title: 'Staff Training (2 Sessions)',
    desc: 'Two live training sessions covering system usage, response handling, and go-live readiness. Full team independence.',
    badge: 'Day 4 & 7',
    color: '#e05c26',
  },
  {
    icon: '📡',
    title: 'Broadcast Lists',
    desc: 'Separate lists for prospects, current parents, and waitlist families with pre-written engagement templates.',
    badge: 'Day 5–6',
    color: '#f59e0b',
  },
  {
    icon: '📈',
    title: 'Weekly Performance Reports',
    desc: 'Four weekly reports covering inquiries, response times, admissions, and conversion metrics — data-driven optimization.',
    badge: 'Week 2–4',
    color: '#ec4899',
  },
];

const timeline = [
  { day: 'Day 1', task: 'Discovery & Process Review' },
  { day: 'Day 2–3', task: 'System Setup' },
  { day: 'Day 4', task: 'Training Session 1' },
  { day: 'Day 5–6', task: 'Testing & Refinement' },
  { day: 'Day 7', task: 'Go-Live & Training Session 2' },
  { day: 'Week 2–4', task: 'Reporting & Optimization' },
];

function DeliverableCard({ item, delay }) {
  const [ref, visible] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`edu-deliverable-card fade-in ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="edu-deliverable-top">
        <div
          className="edu-deliverable-icon"
          style={{ background: `${item.color}18`, color: item.color }}
        >
          {item.icon}
        </div>
        <span className="edu-deliverable-badge" style={{ background: `${item.color}22`, color: item.color }}>
          {item.badge}
        </span>
      </div>
      <h3 className="edu-deliverable-title">{item.title}</h3>
      <p className="edu-deliverable-desc">{item.desc}</p>
      <div className="edu-deliverable-check">
        <FaCheckCircle style={{ color: item.color }} aria-hidden />
        <span>Included in Growth Package</span>
      </div>
    </div>
  );
}

export default function EduSolutionSection() {
  const [headerRef, headerVisible] = useInView(0.1);
  const [timelineRef, timelineVisible] = useInView(0.1);

  return (
    <section className="section section-dark edu-solution-section">
      <div className="container">
        <div
          ref={headerRef}
          className={`edu-section-header fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <span className="sec-label">The Solution</span>
          <h2 className="sec-heading" style={{ color: '#fff' }}>
            Growth Package —{' '}
            <span className="accent">Built in 14 Days</span>
          </h2>
          <p className="sec-sub center" style={{ color: 'var(--text-on-dark-muted)' }}>
            A complete admissions infrastructure setup. No subscriptions. No new software.
            Runs entirely on WhatsApp Business and Google Sheets.
          </p>
        </div>

        {/* Zero software pill */}
        <div className="edu-zero-software">
          <span>✅ Zero Subscription Fees</span>
          <span>✅ WhatsApp Business</span>
          <span>✅ Google Sheets</span>
          <span>✅ Done For You</span>
        </div>

        {/* Deliverables grid */}
        <div className="edu-deliverables-grid">
          {deliverables.map((item, i) => (
            <DeliverableCard key={item.title} item={item} delay={i * 0.08} />
          ))}
        </div>

        {/* Implementation timeline */}
        <div
          ref={timelineRef}
          className={`edu-timeline fade-in ${timelineVisible ? 'visible' : ''}`}
        >
          <h3 className="edu-timeline-title">Implementation Timeline</h3>
          <div className="edu-timeline-track">
            <div className="edu-timeline-line-bg" />
            <div className="edu-timeline-line-fill" />
            {timeline.map((step, i) => (
              <div key={step.day} className="edu-timeline-step">
                <div
                  className="edu-timeline-dot"
                  style={{
                    transitionDelay: `${i * 0.2}s`,
                    animationDelay: `${i * 0.2 + 0.4}s`,
                  }}
                />
                <div
                  className="edu-timeline-content"
                  style={{ transitionDelay: `${i * 0.2 + 0.1}s` }}
                >
                  <span className="edu-timeline-day">{step.day}</span>
                  <span className="edu-timeline-task">{step.task}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

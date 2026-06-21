import useInView from '../../hooks/useInView';
import { FaCheckCircle } from 'react-icons/fa';

const deliverables = [
  {
    icon: '📋',
    title: 'Centralised Inquiry Dashboard',
    desc: 'Every inquiry — WhatsApp, Facebook, phone, walk-in, referral — captured in one tracker. Single source of truth. Leadership sees the full pipeline at any moment.',
    color: '#10b981',
  },
  {
    icon: '💬',
    title: 'WhatsApp Business + Auto-Response Templates',
    desc: '7 professional templates for the most common parent questions. Auto-acknowledgement so responses happen immediately, not the next morning. Parents feel heard.',
    color: '#3b82f6',
  },
  {
    icon: '🔄',
    title: 'Structured Follow-Up Workflow',
    desc: 'A documented Day 2, Day 4, Day 7, Day 10 follow-up schedule. Every inquiry gets assigned a next-action date. Nothing falls through.',
    color: '#7c3aed',
  },
  {
    icon: '🎓',
    title: 'Staff Training (2 Live Sessions)',
    desc: 'Your admissions team operates the system independently from day one. No ongoing dependency on us. You own it completely.',
    color: '#e05c26',
  },
  {
    icon: '📡',
    title: 'Broadcast Lists & Automated Communication',
    desc: 'Separate lists for prospects, current parents, waitlist families. Pre-written templates for announcements, reminders, updates. Consistent communication without manual effort.',
    color: '#f59e0b',
  },
  {
    icon: '📈',
    title: 'Weekly Performance Reports',
    desc: 'Inquiry volume. Response times. Follow-up completion. Pipeline status. Leadership reviews data, not impressions.',
    color: '#ec4899',
  },
  {
    icon: '🔧',
    title: 'Performance Review & Optimisation',
    desc: 'Week 2 checkpoint — we review message timing, response quality, workflow gaps. Adjustments made before full handover to your team.',
    color: '#06b6d4',
  },
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
      </div>
      <h3 className="edu-deliverable-title">{item.title}</h3>
      <p className="edu-deliverable-desc">{item.desc}</p>
      <div className="edu-deliverable-check">
        <FaCheckCircle style={{ color: item.color }} aria-hidden />
        <span>Included</span>
      </div>
    </div>
  );
}

export default function EduSolutionSection() {
  const [headerRef, headerVisible] = useInView(0.1);

  return (
    <section className="section section-dark edu-solution-section" id="what-we-build">
      <div className="container">
        <div
          ref={headerRef}
          className={`edu-section-header fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <span className="sec-label">Your Admission Infrastructure</span>
          <h2 className="sec-heading" style={{ color: '#fff' }}>
            Your Complete{' '}
            <span className="accent">Inquiry Management System</span>
          </h2>
          <p className="sec-sub center" style={{ color: 'var(--text-on-dark-muted)' }}>
            Seven components. One integrated system. Built in 7 to 14 days. Runs on
            tools your staff already uses.
          </p>
        </div>

        {/* Zero software pill */}
        <div className="edu-zero-software">
          <span>✅ Zero New Software</span>
          <span>✅ Zero Subscriptions</span>
          <span>✅ WhatsApp Business</span>
          <span>✅ Google Sheets</span>
          <span>✅ Zero Technical Expertise Required</span>
        </div>

        {/* Deliverables grid */}
        <div className="edu-deliverables-grid">
          {deliverables.map((item, i) => (
            <DeliverableCard key={item.title} item={item} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

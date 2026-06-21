import useInView from '../../hooks/useInView';
import EduProblemGraph from './EduProblemGraphs';

const problems = [
  {
    icon: '🗂️',
    title: 'No Central Tracking',
    desc: 'WhatsApp messages, phone calls, Facebook comments, walk-ins — scattered across four channels with no single place to see them. By month-end, no one can tell you how many inquiries came in or how many converted.',
    color: '#e05c26',
  },
  {
    icon: '⏰',
    title: 'Response Is Inconsistent',
    desc: 'A parent messages Thursday evening. They get a reply Monday morning. By then, they\'ve already enrolled elsewhere. Speed matters. Consistency matters more.',
    color: '#7c3aed',
  },
  {
    icon: '👻',
    title: 'Follow-Up Doesn\'t Exist',
    desc: 'A parent says "we\'ll think about it" and never hears from you again. There\'s no Day 3 call. No Day 7 message. No systematic approach. The inquiry just dies.',
    color: '#ef4444',
  },
  {
    icon: '🔗',
    title: 'Everything Lives in One Person\'s Head',
    desc: 'When your admissions coordinator is absent, the process stops. When they leave, you lose institutional knowledge, continuity, and all your pending inquiries. That\'s not a system. That\'s a liability.',
    color: '#f59e0b',
  },
  {
    icon: '📊',
    title: 'Leadership Is Flying Blind',
    desc: 'You can\'t answer basic questions: How many families inquired this month? What\'s your conversion rate? Which channels perform best? You\'re operating on memory and season-end estimates.',
    color: '#10b981',
  },
  {
    icon: '💬',
    title: 'Parents Research Before They Reach Out',
    desc: 'Before contacting you, they check your Facebook, read reviews, and look for signs of responsiveness. Unanswered admission comments on your page cost you enrollments before the conversation even starts.',
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

export default function EduProblemsSection() {
  const [headerRef, headerVisible] = useInView(0.1);

  return (
    <section className="section edu-problems-section">
      <div className="container">
        <div
          ref={headerRef}
          className={`edu-section-header fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <span className="sec-label">The Real Issue</span>
          <h2 className="sec-heading">
            Your Inquiry Process Isn't Broken.{' '}
            <span className="accent">It Doesn't Exist.</span>
          </h2>
          <p className="sec-sub center">
            Inquiries arrive. Staff respond when they remember. Some families get
            follow-ups. Most don't. There's no system — just hope.
          </p>
        </div>

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

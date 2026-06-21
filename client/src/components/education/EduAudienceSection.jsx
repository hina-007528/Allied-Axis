import useInView from '../../hooks/useInView';

const audiences = [
  {
    icon: '🏫',
    title: 'Private Schools',
    desc: 'Cambridge, Matric, O-Levels, A-Levels. Whether you have 200 students or 2,000 — the admissions problem is the same. Multiple inquiry channels. Stretched staff. Inconsistent follow-up. A system solves this.',
    tags: ['Pre-School', 'Primary', 'Secondary', 'Cambridge', 'O-Levels', 'A-Levels'],
    color: '#e05c26',
  },
  {
    icon: '🏛️',
    title: 'Colleges',
    desc: 'FSc, FA, ICS, ICom. High inquiry volume during peak season, limited staff, families comparing options. A structured inquiry system gives your team a clear process and leadership visibility into pipeline.',
    tags: ['FSc', 'FA', 'ICS', 'ICom', 'Pre-Medical', 'Pre-Engineering'],
    color: '#7c3aed',
  },
  {
    icon: '🎓',
    title: 'Universities & Institutes',
    desc: 'BBA, BS, MBA, professional certifications. Longer decision cycles and multiple decision-makers require more structure. Contact us first to discuss whether your institution is a fit before we proceed.',
    tags: ['BBA/BS', 'MBA', 'Engineering', 'Medical', 'Law', 'Professional Certs'],
    color: '#10b981',
  },
];

function AudienceCard({ item, delay }) {
  const [ref, visible] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`edu-audience-card fade-in ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div
        className="edu-audience-icon"
        style={{ background: `${item.color}18`, color: item.color }}
      >
        {item.icon}
      </div>
      <h3 className="edu-audience-title" style={{ color: item.color }}>{item.title}</h3>
      <p className="edu-audience-desc">{item.desc}</p>
      <div className="edu-audience-tags">
        {item.tags.map((tag) => (
          <span key={tag} className="edu-audience-tag" style={{ background: `${item.color}14`, color: item.color, border: `1px solid ${item.color}30` }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function EduAudienceSection() {
  const [ref, visible] = useInView(0.1);

  return (
    <section className="section edu-audience-section">
      <div className="container">
        <div
          ref={ref}
          className={`edu-section-header fade-in ${visible ? 'visible' : ''}`}
        >
          <span className="sec-label">Who We Work With</span>
          <h2 className="sec-heading">
            Built for Pakistan's{' '}
            <span className="accent">Education Institutions</span>
          </h2>
          <p className="sec-sub center">
            Schools, colleges, and universities across Islamabad, Rawalpindi,
            Lahore, Karachi, and beyond.
          </p>
        </div>

        <div className="edu-audience-grid">
          {audiences.map((item, i) => (
            <AudienceCard key={item.title} item={item} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

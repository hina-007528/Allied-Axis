import SEO from '../components/common/SEO';
import useInView from '../hooks/useInView';

function FadeSection({ children }) {
  const [ref, visible] = useInView(0.1);
  return <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>{children}</div>;
}

const team = [
  {
    name: 'Maryam Fatima', role: 'Founder & CEO', image: '/images/maryam.jpeg',
    bio: 'Scalable AI systems, 3+ years across three markets, 19+ certifications from Google, Deloitte, Mastercard, CBRE, UNITAR, The Open University. Personally reviews every client engagement.',
  },
  {
    name: 'Abdul Rehman', role: 'Co-Founder', image: '/images/abdulrehman.png',
    bio: 'Operational execution, scalable frameworks, process efficiency. Ensures every system delivers consistent, measurable results across all client engagements.',
  },
];

export default function Team() {
  return (
    <>
      <SEO title="Our Team" description="Meet the leadership team behind Allied Axis — Maryam Fatima (Founder & CEO) and Abdul Rehman (Co-Founder)." canonical="/team" />
      <section className="page-header" style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="sec-label">Our Team</span>
          <h1 className="sec-heading">The people behind <span className="accent">the systems</span></h1>
          <p className="sec-sub center">Strategy led by experience. Execution driven by precision.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="team-grid">
            {team.map(m => (
              <FadeSection key={m.name}>
                <div className="team-card">
                  <div className="team-img"><img src={m.image} alt={m.name} /></div>
                  <h3>{m.name}</h3>
                  <div className="team-role">{m.role}</div>
                  <p>{m.bio}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Work With Us</h2>
          <p>Every engagement begins with a free 30-minute diagnostic. Reviewed personally by Maryam Fatima.</p>
          <a href="https://wa.me/971585882972" target="_blank" rel="noopener noreferrer" className="btn-white">📞 Book Strategy Call</a>
        </div>
      </section>
    </>
  );
}

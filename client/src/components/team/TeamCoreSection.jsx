import useInView from '../../hooks/useInView';
import { coreTeam } from '../../data/teamPage';
import { teamCoreIntro } from '../../data/teamPageContent';

function FadeSection({ children }) {
  const [ref, visible] = useInView(0.08);
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

export default function TeamCoreSection() {
  const { label, heading, headingAccent } = teamCoreIntro;

  return (
    <section className="section section-dark team-core-section">
      <div className="container">
        <FadeSection>
          <header className="team-core-header">
            <span className="team-core-label">{label}</span>
            <h2 className="team-core-heading">
              {heading} <span className="team-core-heading-accent">{headingAccent}</span>
            </h2>
          </header>
        </FadeSection>

        <div className="team-core-grid">
          {coreTeam.map((member) => (
            <FadeSection key={`${member.name || 'role'}-${member.role}`}>
              <article
                className="team-core-card interactive-card"
                style={{ '--team-accent': member.color }}
              >
                {member.name ? <h3 className="team-core-name">{member.name}</h3> : null}
                <span className="team-core-pill">{member.role.toUpperCase()}</span>
                <p className="team-core-desc">{member.desc}</p>
              </article>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}

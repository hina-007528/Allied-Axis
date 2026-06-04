import useInView from '../../hooks/useInView';
import { hiringPerks } from '../../data/teamPage';
import { teamHiringIntro } from '../../data/teamPageContent';
import TeamApplyForm from './TeamApplyForm';

function FadeSection({ children }) {
  const [ref, visible] = useInView(0.08);
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

export default function TeamHiringSection() {
  const { label, heading, headingAccent, sub } = teamHiringIntro;

  return (
    <section className="section section-gray team-hiring-section">
      <div className="container">
        <FadeSection>
          <header className="team-hiring-header">
            <p className="team-hiring-label" aria-label={label}>
              <span className="team-hiring-label-dot" aria-hidden="true">
                •
              </span>
              {label}
              <span className="team-hiring-label-dot" aria-hidden="true">
                •
              </span>
            </p>
            <h2 className="team-hiring-heading">
              {heading} <span className="team-hiring-heading-accent">{headingAccent}</span>
            </h2>
            <p className="team-hiring-sub">{sub}</p>
          </header>
        </FadeSection>

        <div className="team-hiring-perks">
          {hiringPerks.map((perk) => (
            <FadeSection key={perk.title}>
              <article className="team-hiring-perk interactive-card">
                <span className="team-hiring-perk-icon" aria-hidden="true">
                  {perk.icon}
                </span>
                <h3 className="team-hiring-perk-title">{perk.title}</h3>
                <p className="team-hiring-perk-desc">{perk.desc}</p>
              </article>
            </FadeSection>
          ))}
        </div>

        <div className="team-apply-wrap">
          <TeamApplyForm />
        </div>
      </div>
    </section>
  );
}

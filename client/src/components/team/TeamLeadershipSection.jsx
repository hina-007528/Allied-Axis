import useInView from '../../hooks/useInView';
import { usePageContent, useTeam } from '../../context/SiteDataContext';
import TeamLeadershipCard from './TeamLeadershipCard';
import DataLoading from '../common/DataLoading';

function FadeSection({ children }) {
  const [ref, visible] = useInView(0.08);
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

export default function TeamLeadershipSection() {
  const { leadership, loading } = useTeam();
  const { content: pageIntro } = usePageContent('team-page-content');
  const { label, heading, headingAccent } = pageIntro?.teamLeadershipIntro || {};

  if (loading && !leadership.length) {
    return <DataLoading minHeight="320px" />;
  }

  return (
    <section className="section section-gray team-leadership-section">
      <div className="container">
        <FadeSection>
          <header className="team-leadership-header">
            <span className="team-leadership-label">{label}</span>
            <h2 className="team-leadership-heading">
              {heading}{' '}
              <span className="team-leadership-heading-accent">{headingAccent}</span>
            </h2>
          </header>
        </FadeSection>

        <div className="team-lead-list">
          {leadership.map((leader) => (
            <FadeSection key={leader.externalId || leader._id}>
              <TeamLeadershipCard leader={leader} />
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}

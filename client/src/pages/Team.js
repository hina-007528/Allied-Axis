import { useEffect } from 'react';
import SEO from '../components/common/SEO';
import TeamPageHero from '../components/team/TeamPageHero';
import TeamLeadershipSection from '../components/team/TeamLeadershipSection';
import TeamCoreSection from '../components/team/TeamCoreSection';
import TeamHiringSection from '../components/team/TeamHiringSection';
import { initCardBorderGlow } from '../utils/cardBorderGlow';

export default function Team() {
  useEffect(() => {
    const id = window.requestAnimationFrame(() => initCardBorderGlow());
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <div className="team-page">
      <SEO
        title="Our Team"
        description="Meet the Allied Axis leadership and core team — strategy-led growth across UAE, UK & Pakistan."
        canonical="/team"
      />

      <TeamPageHero />
      <TeamLeadershipSection />
      <TeamCoreSection />
      <TeamHiringSection />
    </div>
  );
}

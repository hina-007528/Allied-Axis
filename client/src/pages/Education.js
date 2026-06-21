import { useEffect } from 'react';
import SEO from '../components/common/SEO';
import EduHero from '../components/education/EduHero';
import EduProblemsSection from '../components/education/EduProblemsSection';
import EduTimingSection from '../components/education/EduTimingSection';
import EduAudienceSection from '../components/education/EduAudienceSection';
import EduSolutionSection from '../components/education/EduSolutionSection';
import EduProofSection from '../components/education/EduProofSection';
import EduProcessSection from '../components/education/EduProcessSection';
import EduAssessmentSection from '../components/education/EduAssessmentSection';
import EduFaqSection from '../components/education/EduFaqSection';
import EduCtaSection from '../components/education/EduCtaSection';
import { initCardBorderGlow } from '../utils/cardBorderGlow';

export default function Education() {
  useEffect(() => {
    const id = window.requestAnimationFrame(() => initCardBorderGlow());
    return () => window.cancelAnimationFrame(id);
  }, []);
  return (
    <div className="edu-page">
      <SEO
        title="Admission Inquiry Management Systems Pakistan | Allied Axis — Schools, Colleges & Universities"
        description="Allied Axis helps Pakistan private schools, colleges and universities build organised admission inquiry systems. Islamabad-based. No chaos. No missed parents."
        canonical="/education"
      />
      <EduHero />
      <EduProblemsSection />
      <EduTimingSection />
      <EduAudienceSection />
      <EduSolutionSection />
      <EduProofSection />
      <EduProcessSection />
      <EduAssessmentSection />
      <EduFaqSection />
      <EduCtaSection />
    </div>
  );
}

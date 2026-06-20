import { useEffect } from 'react';
import SEO from '../components/common/SEO';
import EduHero from '../components/education/EduHero';
import EduProblemsSection from '../components/education/EduProblemsSection';
import EduSolutionSection from '../components/education/EduSolutionSection';
import EduImpactSection from '../components/education/EduImpactSection';
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
        title="Education Admissions Systems | Allied Axis"
        description="Stop losing 30–50% of interested families. We build centralized inquiry tracking, WhatsApp quick replies, and structured follow-up workflows for schools and colleges across Pakistan."
        canonical="/education"
      />
      <EduHero />
      <EduProblemsSection />
      <EduSolutionSection />
      <EduImpactSection />
      <EduFaqSection />
      <EduCtaSection />
    </div>
  );
}

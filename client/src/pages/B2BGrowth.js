import { useEffect } from 'react';
import SEO from '../components/common/SEO';
import B2BPageHero from '../components/b2b/B2BPageHero';
import B2BStatsBar from '../components/b2b/B2BStatsBar';
import B2BRealitySection from '../components/b2b/B2BRealitySection';
import B2BServicesSection from '../components/b2b/B2BServicesSection';
import B2BWhySection from '../components/b2b/B2BWhySection';
import B2BProofSection from '../components/b2b/B2BProofSection';
import B2BClosingCta from '../components/b2b/B2BClosingCta';
import { initCardBorderGlow } from '../utils/cardBorderGlow';

export default function B2BGrowth() {
  useEffect(() => {
    const id = window.requestAnimationFrame(() => initCardBorderGlow());
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <div className="b2b-page">
      <SEO
        title="B2B Growth Systems"
        description="Turn your pipeline into revenue — 500+ qualified B2B leads per week with AI-powered outreach across global markets."
        canonical="/b2b-growth"
      />

      <B2BPageHero />
      <B2BStatsBar />
      <B2BRealitySection />
      <B2BServicesSection />
      <B2BWhySection />
      <B2BProofSection />
      <B2BClosingCta />
    </div>
  );
}

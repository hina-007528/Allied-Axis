import SEO from '../components/common/SEO';
import AboutPageHero from '../components/about/AboutPageHero';
import useInView from '../hooks/useInView';
import AboutProblemSection from '../components/about/AboutProblemSection';
import AboutSolutionSection from '../components/about/AboutSolutionSection';
import AboutCoreServicesSection from '../components/about/AboutCoreServicesSection';
import AboutWhyWinSection from '../components/about/AboutWhyWinSection';
import AboutGrowthFrameworkSection from '../components/about/AboutGrowthFrameworkSection';
import AboutMarketsSection from '../components/about/AboutMarketsSection';
import AboutIndustriesSection from '../components/about/AboutIndustriesSection';
import AboutTrackRecordSection from '../components/about/AboutTrackRecordSection';
import AboutEngagementSection from '../components/about/AboutEngagementSection';
import AboutClosingCta from '../components/about/AboutClosingCta';
import AboutFounderSection from '../components/about/AboutFounderSection';

function FadeSection({ children, className = '' }) {
  const [ref, visible] = useInView(0.1);
  return <div ref={ref} className={`fade-in ${visible ? 'visible' : ''} ${className}`}>{children}</div>;
}

export default function About() {
  return (
    <>
      <SEO title="About Allied Axis" description="Allied Axis is an AI-powered digital growth firm operating across the UAE, United Kingdom, and Pakistan. We build revenue infrastructure, not campaigns." canonical="/about" />

      <AboutPageHero />

      <section className="section about-who-section">
        <div className="container">
          <FadeSection>
            <div className="about-who-inner">
              <span className="sec-label">WHO WE ARE</span>
              <h2 className="about-who-heading">
                Allied Axis is an AI-powered digital growth firm operating across the UAE, United
                Kingdom, and Pakistan.
              </h2>
              <p className="about-who-text">
                We don&apos;t sell campaigns. We build revenue infrastructure — a single, connected
                engine that aligns brand, lead generation, conversion, and retention.
              </p>
              <p className="about-who-text">
                Most businesses do not have a marketing problem. They have a structure problem.
                Fragmented vendors, disconnected channels, no single accountable partner. Revenue
                rises and falls with individual effort.
              </p>
              <p className="about-who-text about-who-closing">
                We were founded to fix exactly that.
              </p>
            </div>
          </FadeSection>
        </div>
      </section>

      <FadeSection>
        <AboutFounderSection />
      </FadeSection>

      <FadeSection>
        <AboutProblemSection />
      </FadeSection>

      <FadeSection>
        <AboutSolutionSection />
      </FadeSection>

      <FadeSection>
        <AboutCoreServicesSection />
      </FadeSection>

      <FadeSection>
        <AboutWhyWinSection />
      </FadeSection>

      <FadeSection>
        <AboutGrowthFrameworkSection />
      </FadeSection>

      <FadeSection>
        <AboutMarketsSection />
      </FadeSection>

      <FadeSection>
        <AboutIndustriesSection />
      </FadeSection>

      <FadeSection>
        <AboutTrackRecordSection />
      </FadeSection>

      <FadeSection>
        <AboutEngagementSection />
      </FadeSection>

      <AboutClosingCta />

    </>
  );
}

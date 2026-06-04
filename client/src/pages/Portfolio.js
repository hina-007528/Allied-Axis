import { useEffect } from 'react';
import SEO from '../components/common/SEO';
import useInView from '../hooks/useInView';
import PortfolioPageHero from '../components/portfolio/PortfolioPageHero';
import { useCaseStudies, usePageContent } from '../context/SiteDataContext';
import { PortfolioSpotlight, PortfolioCaseCard } from '../components/portfolio/PortfolioCards';
import PortfolioClosingCta from '../components/portfolio/PortfolioClosingCta';
import DataLoading from '../components/common/DataLoading';
import { initCardBorderGlow } from '../utils/cardBorderGlow';

function FadeSection({ children }) {
  const [ref, visible] = useInView(0.08);
  return <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>{children}</div>;
}

export default function Portfolio() {
  const { caseStudies, loading } = useCaseStudies();
  const { content: page } = usePageContent('portfolio-page');
  const [featured, ...rest] = caseStudies;
  const [sectionRef, inView] = useInView(0.04);
  const intro = page?.portfolioCaseStudiesIntro;

  useEffect(() => {
    if (!inView) return undefined;
    const id = window.requestAnimationFrame(() => initCardBorderGlow());
    return () => window.cancelAnimationFrame(id);
  }, [inView, caseStudies.length]);

  if (loading && !caseStudies.length) {
    return <DataLoading />;
  }

  return (
    <div className="portfolio-page">
      <SEO
        title="Portfolio"
        description="Case studies and client results from Allied Axis — 500+ leads in one week, zero churn over 18 months, six-figure revenue in month one."
        canonical="/portfolio"
      />

      <PortfolioPageHero page={page} />

      <section ref={sectionRef} className="section section-gray portfolio-case-studies-section">
        <div className="container">
          <FadeSection>
            <header className="portfolio-case-studies-header">
              <span className="portfolio-case-studies-label">{intro?.label}</span>
              <h2 className="portfolio-case-studies-heading">
                {intro?.heading}{' '}
                <span className="portfolio-case-studies-heading-accent">
                  {intro?.headingAccent}
                </span>
              </h2>
            </header>
          </FadeSection>
          {featured && (
            <FadeSection>
              <PortfolioSpotlight cs={featured} />
            </FadeSection>
          )}
          <div className="portfolio-case-grid">
            {rest.map((cs, i) => (
              <FadeSection key={cs.slug}>
                <PortfolioCaseCard cs={cs} index={i + 1} />
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <PortfolioClosingCta cta={page?.portfolioClosingCta} />
    </div>
  );
}

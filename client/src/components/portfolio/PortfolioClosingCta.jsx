import ContactCta from '../common/ContactCta';
import { portfolioClosingCta } from '../../data/portfolioPageContent';

export default function PortfolioClosingCta() {
  const { heading, headingAccent, sub, ctaLabel } = portfolioClosingCta;

  return (
    <section className="section portfolio-closing-cta">
      <div className="portfolio-closing-cta-glow" aria-hidden="true" />
      <div className="container portfolio-closing-cta-inner">
        <h2 className="portfolio-closing-cta-heading">
          {heading} <span className="portfolio-closing-cta-heading-accent">{headingAccent}</span>
        </h2>
        <p className="portfolio-closing-cta-sub">{sub}</p>
        <ContactCta className="btn btn-hero-primary portfolio-closing-cta-btn" arrow>
          {ctaLabel}
        </ContactCta>
      </div>
    </section>
  );
}

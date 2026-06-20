import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { portfolioClosingCta } from '../../data/portfolioPageContent';

export default function PortfolioClosingCta() {
  const { heading, headingAccent, sub } = portfolioClosingCta;

  return (
    <section className="section portfolio-closing-cta">
      <div className="portfolio-closing-cta-glow" aria-hidden="true" />
      <div className="container portfolio-closing-cta-inner">
        <h2 className="portfolio-closing-cta-heading">
          {heading} <span className="portfolio-closing-cta-heading-accent">{headingAccent}</span>
        </h2>
        <p className="portfolio-closing-cta-sub">{sub}</p>
        <Link to="/b2b-growth" className="btn btn-hero-primary portfolio-closing-cta-btn">
          Explore B2B Growth <FaArrowRight className="btn-arrow" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

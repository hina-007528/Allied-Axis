import { Link } from 'react-router-dom';
import HeroBackground from '../home/HeroBackground';
import ContactCta from '../common/ContactCta';
import { b2bHeroContent } from '../../data/b2bPageContent';

export default function B2BPageHero() {
  const { label, titleLine, titleAccent, sub } = b2bHeroContent;

  return (
    <section className="page-header page-header-dark page-header-center b2b-page-hero">
      <div className="hero-grid" aria-hidden="true" />
      <HeroBackground />
      <div className="hero-glow about-page-glow" aria-hidden="true" />
      <div className="container">
        <p className="b2b-hero-label" aria-label={label}>
          <span className="b2b-hero-label-dot" aria-hidden="true">
            •
          </span>
          {label}
          <span className="b2b-hero-label-dot" aria-hidden="true">
            •
          </span>
        </p>
        <h1 className="b2b-hero-title">
          <span className="b2b-hero-title-line">{titleLine}</span>
          <span className="b2b-hero-title-line b2b-hero-title-accent">{titleAccent}</span>
        </h1>
        <p className="b2b-hero-sub">{sub}</p>
        <div className="b2b-hero-actions">
          <ContactCta className="btn btn-hero-primary" arrow>
            Book Strategy Call
          </ContactCta>
          <Link to="/portfolio" className="btn btn-hero-ghost">
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}

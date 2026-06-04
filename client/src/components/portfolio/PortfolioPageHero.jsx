import HeroBackground from '../home/HeroBackground';
import AboutHeroStats from '../about/AboutHeroStats';
import { portfolioHeroContent, portfolioHeroStats } from '../../data/portfolioPageContent';

export default function PortfolioPageHero() {
  const { label, titleLine, titleAccent, sub } = portfolioHeroContent;

  return (
    <section className="page-header page-header-dark page-header-center portfolio-page-hero">
      <div className="hero-grid" aria-hidden="true" />
      <HeroBackground />
      <div className="hero-glow about-page-glow" aria-hidden="true" />
      <div className="container">
        <p className="portfolio-hero-label" aria-label={label}>
          <span className="portfolio-hero-label-dot" aria-hidden="true">
            •
          </span>
          {label}
          <span className="portfolio-hero-label-dot" aria-hidden="true">
            •
          </span>
        </p>
        <h1 className="portfolio-hero-title">
          <span className="portfolio-hero-title-line">{titleLine}</span>
          <span className="portfolio-hero-title-line portfolio-hero-title-accent">{titleAccent}</span>
        </h1>
        <p className="portfolio-hero-sub">{sub}</p>
        <AboutHeroStats items={portfolioHeroStats} />
      </div>
    </section>
  );
}

import HeroBackground from '../home/HeroBackground';
import { teamHeroContent } from '../../data/teamPageContent';

export default function TeamPageHero() {
  const { label, titleLine, titleAccent, sub } = teamHeroContent;

  return (
    <section className="page-header page-header-dark page-header-center team-page-hero">
      <div className="hero-grid" aria-hidden="true" />
      <HeroBackground />
      <div className="hero-glow about-page-glow" aria-hidden="true" />
      <div className="container">
        <p className="team-hero-label" aria-label={label}>
          <span className="team-hero-label-dot" aria-hidden="true">
            •
          </span>
          {label}
          <span className="team-hero-label-dot" aria-hidden="true">
            •
          </span>
        </p>
        <h1 className="team-hero-title">
          <span className="team-hero-title-line">{titleLine}</span>
          <span className="team-hero-title-line team-hero-title-accent">{titleAccent}</span>
        </h1>
        <p className="team-hero-sub">{sub}</p>
      </div>
    </section>
  );
}

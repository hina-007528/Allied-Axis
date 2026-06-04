import HeroBackground from '../home/HeroBackground';
import { servicesHeroContent } from '../../data/servicesPageContent';

export default function ServicesPageHero() {
  const { label, titleLine, titleAccent, sub } = servicesHeroContent;

  return (
    <section className="page-header page-header-dark page-header-center about-page-hero services-page-hero">
      <div className="hero-grid" aria-hidden="true" />
      <HeroBackground />
      <div className="hero-glow about-page-glow" aria-hidden="true" />
      <div className="container">
        <div className="about-page-label-wrap">
          <span className="hero-pill-dot" aria-hidden="true" />
          <span className="about-page-label">{label}</span>
        </div>
        <h1 className="about-page-title">
          <span className="about-page-title-line">{titleLine}</span>
          <span className="about-page-title-line about-page-title-accent">{titleAccent}</span>
        </h1>
        <p className="about-page-sub">{sub}</p>
      </div>
    </section>
  );
}

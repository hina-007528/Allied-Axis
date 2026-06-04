import HeroBackground from '../home/HeroBackground';
import AboutHeroStats from '../about/AboutHeroStats';
import {
  testimonialsHeroContent,
  testimonialsHeroStats,
} from '../../data/testimonialsPageContent';

export default function TestimonialsPageHero() {
  const { label, titleLine, titleAccent, sub } = testimonialsHeroContent;

  return (
    <section className="page-header page-header-dark page-header-center testimonials-page-hero">
      <div className="hero-grid" aria-hidden="true" />
      <HeroBackground />
      <div className="hero-glow about-page-glow" aria-hidden="true" />
      <div className="container">
        <p className="testimonials-hero-label" aria-label={label}>
          <span className="testimonials-hero-label-dot" aria-hidden="true">
            •
          </span>
          {label}
          <span className="testimonials-hero-label-dot" aria-hidden="true">
            •
          </span>
        </p>
        <h1 className="testimonials-hero-title">
          <span className="testimonials-hero-title-line">{titleLine}</span>
          <span className="testimonials-hero-title-line testimonials-hero-title-accent">
            {titleAccent}
          </span>
        </h1>
        <p className="testimonials-hero-sub">{sub}</p>
        <AboutHeroStats items={testimonialsHeroStats} />
      </div>
    </section>
  );
}

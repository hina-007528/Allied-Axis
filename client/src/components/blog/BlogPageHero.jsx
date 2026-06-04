import HeroBackground from '../home/HeroBackground';
import { blogHeroContent } from '../../data/blogPageContent';

export default function BlogPageHero() {
  const { label, titleLine, titleAccent, sub } = blogHeroContent;

  return (
    <section className="page-header page-header-dark page-header-center blog-page-hero">
      <div className="hero-grid" aria-hidden="true" />
      <HeroBackground />
      <div className="hero-glow about-page-glow" aria-hidden="true" />
      <div className="container">
        <p className="blog-hero-label" aria-label={label}>
          <span className="blog-hero-label-dot" aria-hidden="true">
            •
          </span>
          {label}
          <span className="blog-hero-label-dot" aria-hidden="true">
            •
          </span>
        </p>
        <h1 className="blog-hero-title">
          <span className="blog-hero-title-line">{titleLine}</span>
          <span className="blog-hero-title-line blog-hero-title-accent">{titleAccent}</span>
        </h1>
        <p className="blog-hero-sub">{sub}</p>
      </div>
    </section>
  );
}

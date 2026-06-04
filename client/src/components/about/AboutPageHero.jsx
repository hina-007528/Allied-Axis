import HeroBackground from '../home/HeroBackground';
import AboutHeroStats from './AboutHeroStats';

const aboutHeroStats = [
  { value: '485+', label: 'B2B LEADS / WEEK' },
  { value: '77%', label: 'LESS MANUAL WORK' },
  { value: '2x', label: 'AVERAGE ROI' },
  { value: '13D', label: 'TO GO LIVE' },
];

export default function AboutPageHero() {
  return (
    <section className="page-header page-header-dark page-header-center about-page-hero">
      <div className="hero-grid" aria-hidden="true" />
      <HeroBackground />
      <div className="hero-glow about-page-glow" aria-hidden="true" />
      <div className="container">
        <div className="about-page-label-wrap">
          <span className="hero-pill-dot" aria-hidden="true" />
          <span className="about-page-label">ABOUT ALLIED AXIS</span>
        </div>
        <h1 className="about-page-title">
          <span className="about-page-title-line">Where Strategy Meets</span>
          <span className="about-page-title-line about-page-title-accent">Scalable Growth.</span>
        </h1>
        <p className="about-page-sub">
          Allied Axis is an AI-powered digital growth firm operating across the UAE, United Kingdom,
          and Pakistan — building revenue infrastructure for businesses ready to scale.
        </p>
        <AboutHeroStats items={aboutHeroStats} />
      </div>
    </section>
  );
}

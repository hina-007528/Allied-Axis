import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineClock,
  HiOutlineCheckBadge,
} from 'react-icons/hi2';
import HeroBackground from '../home/HeroBackground';
import { contactHeroContent } from '../../data/contactPageContent';

const PILL_ICONS = {
  'no-pitch': HiOutlineChatBubbleLeftRight,
  consult: HiOutlineClock,
  honest: HiOutlineCheckBadge,
};

export default function ContactPageHero() {
  const { label, titleLine, titleAccent, sub, pills } = contactHeroContent;

  return (
    <section className="contact-hero page-header page-header-dark page-header-center">
      <div className="hero-grid" aria-hidden="true" />
      <HeroBackground />
      <div className="hero-glow about-page-glow" aria-hidden="true" />
      <div className="container">
        <p className="contact-hero-label" aria-label={label}>
          <span className="contact-hero-label-dot" aria-hidden="true">
            •
          </span>
          {label}
          <span className="contact-hero-label-dot" aria-hidden="true">
            •
          </span>
        </p>
        <h1 className="contact-hero-title">
          <span className="contact-hero-title-line">{titleLine}</span>
          <span className="contact-hero-title-line contact-hero-title-accent">{titleAccent}</span>
        </h1>
        <p className="contact-hero-desc">{sub}</p>
        <div className="contact-hero-pills">
          {pills.map((pill) => {
            const Icon = PILL_ICONS[pill.id];
            return (
              <span key={pill.id} className="contact-hero-pill">
                {Icon && <Icon className="contact-hero-pill-icon" aria-hidden="true" />}
                {pill.text}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

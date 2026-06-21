import { FaWhatsapp } from 'react-icons/fa';
import useInView from '../../hooks/useInView';

export default function EduHero() {
  const [ref, visible] = useInView(0.1);

  const stats = [
    { value: 'Delayed Responses', label: 'The #1 reason families move to another school', icon: '⏳' },
    { value: '7–14 Days', label: 'To a fully operational inquiry system', icon: '⚡' },
    { value: '1 Person', label: 'Most schools rely on to manage all admission channels', icon: '👤' },
    { value: '3+ Channels', label: 'Parents contact through (WhatsApp, phone, walk-in, Facebook)', icon: '📲' },
    { value: 'Many Parents', label: 'Contact multiple schools simultaneously', icon: '👥' },
  ];

  return (
    <section className="edu-hero">
      {/* Animated grid background */}
      <div className="edu-hero-grid" aria-hidden="true" />
      {/* Glowing orbs */}
      <div className="edu-hero-orb edu-hero-orb--1" aria-hidden="true" />
      <div className="edu-hero-orb edu-hero-orb--2" aria-hidden="true" />

      <div className="container">
        <div ref={ref} className={`edu-hero-inner fade-in ${visible ? 'visible' : ''}`}>
          {/* Label pill */}
          <div className="edu-hero-pill">
            <span className="edu-hero-pill-dot" aria-hidden="true" />
            Admission Systems · Pakistan
          </div>

          <h1 className="edu-hero-h1">
            Most Schools Don't Have an{' '}
            <span className="edu-hl">Admissions Problem.</span>
            <br />
            They Have a{' '}
            <span className="edu-hl">Systems Problem.</span>
          </h1>

          <p className="edu-hero-sub">
            Parents are already contacting you. The question is whether you have
            the infrastructure to track, respond, and convert them consistently.{' '}
            <strong>We build that system.</strong>
          </p>

          <div className="edu-hero-btns">
            <a
              href="https://wa.me/923251518471"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaWhatsapp aria-hidden />
              Talk to Us on WhatsApp →
            </a>
            <a href="#what-we-build" className="btn btn-glass">
              See What We Build ↓
            </a>
          </div>

          {/* Stats bar */}
          <div className="edu-hero-stats">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="edu-hero-stat"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <span className="edu-hero-stat-icon" aria-hidden="true">{s.icon}</span>
                <span className="edu-hero-stat-val">{s.value}</span>
                <span className="edu-hero-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

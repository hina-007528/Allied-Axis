import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import useInView from '../../hooks/useInView';

export default function EduHero() {
  const [ref, visible] = useInView(0.1);

  const stats = [
    { value: '30–50%', label: 'Leads Lost Monthly', icon: '📉' },
    { value: '14 Days', label: 'To Full System', icon: '⚡' },
    { value: 'Rs. 2.5M+', label: 'Annual Revenue Lost', icon: '💰' },
    { value: '3+ Channels', label: 'Parents Contact Via', icon: '📲' },
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
          <div className="edu-hero-pill" role="text">
            <span className="edu-hero-pill-dot" aria-hidden="true" />
            Education Sector · Pakistan's #1 Admission System
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
              WhatsApp Us Now
            </a>
            <Link to="/portfolio" className="btn btn-glass">
              View Case Studies →
            </Link>
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

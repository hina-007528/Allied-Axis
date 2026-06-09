import { FaInstagram, FaLinkedinIn, FaPlay } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import AboutSocialIconBadge from './AboutSocialIconBadge';

const ACCENT = '#14b8a6';

export default function AboutLayer04Visual() {
  const bars = [38, 53, 68, 85, 105];

  return (
    <div className="about-layer-visual about-layer04-stage">
      <div className="about-layer04-top">
        <div className="about-layer04-post">
          <div className="about-layer04-thumb">
            <FaPlay size={10} aria-hidden />
          </div>
          <div className="about-layer04-post-lines">
            <span />
            <span />
          </div>
        </div>

        <div className="about-layer04-socials">
          <AboutSocialIconBadge
            className="about-social-chip--instagram"
            label="Instagram"
            delay={0}
            icon={<FaInstagram size={16} />}
          />
          <AboutSocialIconBadge
            className="about-social-chip--linkedin"
            label="LinkedIn"
            delay={80}
            icon={<FaLinkedinIn size={15} />}
          />
          <AboutSocialIconBadge
            className="about-social-chip--x"
            label="X"
            delay={160}
            icon={<FaXTwitter size={14} />}
          />
        </div>
      </div>

      <div className="about-layer04-chart">
        <svg viewBox="0 0 300 88" fill="none" aria-hidden="true" className="about-layer04-chart-svg">
          <defs>
            <linearGradient id="ly04-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={ACCENT} stopOpacity="0.45" />
              <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ly04-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={ACCENT} stopOpacity="0.35" />
              <stop offset="100%" stopColor={ACCENT} />
            </linearGradient>
            <linearGradient id="ly04-bar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.28" />
              <stop offset="22%" stopColor={ACCENT} />
              <stop offset="100%" stopColor={ACCENT} stopOpacity="0.45" />
            </linearGradient>
            <filter id="ly04-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {[22, 38, 54, 70].map((y) => (
            <line key={y} x1="8" y1={y} x2="292" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          ))}

          {bars.map((h, i) => (
            <rect
              key={i}
              className="why-graph-bar"
              x={8 + i * 58}
              y={88 - h - 10}
              width="28"
              height={h}
              rx="3"
              fill="url(#ly04-bar)"
              fillOpacity={0.35 + i * 0.13}
              style={{ transitionDelay: `${i * 0.07}s` }}
            />
          ))}

          <path
            className="why-graph-area"
            d="M22 68 C58 54 94 42 130 32 C146 28 162 22 178 16 L178 78 L22 78 Z"
            fill="url(#ly04-area)"
          />
          <path
            className="why-graph-line"
            d="M22 68 C58 54 94 42 130 32 C146 28 162 22 178 16"
            stroke="url(#ly04-line)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#ly04-glow)"
            pathLength="1"
          />
          <circle className="why-graph-node why-graph-node--pulse" cx="178" cy="16" r="5" fill={ACCENT} />
          <circle cx="178" cy="16" r="10" stroke={ACCENT} strokeOpacity="0.25" strokeWidth="1" fill="none" />
        </svg>
      </div>
    </div>
  );
}

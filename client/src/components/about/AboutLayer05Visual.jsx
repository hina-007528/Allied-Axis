import { FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { FaMeta } from 'react-icons/fa6';

const ACCENT = '#f59e0b';

function PlatformCard({ icon, label, sparkPath, delay = 0 }) {
  return (
    <div className="about-platform-card" style={{ '--platform-delay': `${delay}ms` }}>
      <div className="about-platform-icon" aria-hidden="true">{icon}</div>
      <span className="about-platform-name">{label}</span>
      <svg viewBox="0 0 72 24" fill="none" className="about-platform-spark" aria-hidden="true">
        <polyline
          className="why-graph-line"
          points={sparkPath}
          fill="none"
          stroke={ACCENT}
          strokeWidth="2"
          strokeLinecap="round"
          pathLength="1"
        />
        <polygon className="about-platform-arrow-head" points="66,8 70,12 62,12" fill={ACCENT} />
      </svg>
    </div>
  );
}

export default function AboutLayer05Visual() {
  return (
    <div className="about-layer-visual about-layer05-stage">
      <div className="about-layer05-flow">
        <PlatformCard
          label="Meta"
          delay={0}
          icon={<FaMeta size={22} color="#0081fb" />}
          sparkPath="4,18 16,14 28,15 40,10 56,8"
        />
        <span className="about-layer05-connector" aria-hidden="true" />
        <PlatformCard
          label="Google"
          delay={80}
          icon={<FaGoogle size={20} color="#4285f4" />}
          sparkPath="4,18 14,14 26,15 38,11 52,9"
        />
        <span className="about-layer05-connector" aria-hidden="true" />
        <PlatformCard
          label="LinkedIn"
          delay={160}
          icon={
            <span className="about-platform-linkedin-mark">
              <FaLinkedinIn size={16} color="#fff" />
            </span>
          }
          sparkPath="4,18 16,15 28,14 42,10 58,7"
        />
      </div>
      <div className="about-layer05-progress" aria-hidden="true">
        <span className="about-layer05-progress-fill why-graph-bar-h" />
      </div>
    </div>
  );
}

import { FaChartLine, FaCircle, FaStar, FaChartBar } from 'react-icons/fa';

const orbitStats = [
  {
    value: '500+',
    label: 'LEADS/MONTH',
    position: 'tl',
    icon: FaChartLine,
    iconColor: '#10b981',
    iconBg: 'rgba(16, 185, 129, 0.2)',
  },
  {
    value: '100%',
    label: 'RETENTION',
    position: 'tr',
    icon: FaCircle,
    iconColor: '#a78bfa',
    iconBg: 'rgba(167, 139, 250, 0.22)',
  },
  {
    value: '+45%',
    label: 'CONVERSION RATE',
    position: 'bl',
    icon: FaStar,
    iconColor: '#f05a28',
    iconBg: 'rgba(240, 90, 40, 0.2)',
  },
  {
    value: '80%',
    label: 'LESS PAYOUT',
    position: 'br',
    icon: FaChartBar,
    iconColor: '#eab308',
    iconBg: 'rgba(234, 179, 8, 0.2)',
  },
];

export default function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-wireframe hero-wireframe--tr" aria-hidden="true" />
      <div className="hero-wireframe hero-wireframe--bl" aria-hidden="true" />
      <div className="hero-visual-orbit">
        <div className="hero-orbit-rings" aria-hidden="true">
          <span className="hero-orbit-ring hero-orbit-ring--1" />
          <span className="hero-orbit-ring hero-orbit-ring--2" />
          <span className="hero-orbit-ring hero-orbit-ring--3" />
        </div>
        <div className="hero-orbit-lines" aria-hidden="true">
          <span className="hero-orbit-line hero-orbit-line--tl" />
          <span className="hero-orbit-line hero-orbit-line--tr" />
          <span className="hero-orbit-line hero-orbit-line--bl" />
          <span className="hero-orbit-line hero-orbit-line--br" />
        </div>
        {orbitStats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className={`hero-metric-card hero-metric-card--${s.position}`}>
              <span
                className="hero-metric-icon-wrap"
                style={{ background: s.iconBg, color: s.iconColor }}
              >
                <Icon aria-hidden />
              </span>
              <span className="hero-metric-value">{s.value}</span>
              <span className="hero-metric-label">{s.label}</span>
            </div>
          );
        })}
        <div className="hero-roi-hub">
          <div className="hero-roi-ring-spin" aria-hidden="true">
            <div className="hero-roi-ring" />
          </div>
          <div className="hero-roi-inner">
            <span className="hero-roi-value">8.6x</span>
            <span className="hero-roi-label">AVG. ROI</span>
          </div>
        </div>
      </div>
    </div>
  );
}

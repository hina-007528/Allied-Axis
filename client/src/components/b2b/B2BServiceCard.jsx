import { Link } from 'react-router-dom';
import { FaBullseye, FaLinkedinIn, FaEnvelope, FaChartBar } from 'react-icons/fa';

const iconMap = {
  bullseye: FaBullseye,
  linkedin: FaLinkedinIn,
  mail: FaEnvelope,
  chart: FaChartBar,
};

export default function B2BServiceCard({ service }) {
  const Icon = iconMap[service.icon] || FaBullseye;

  return (
    <article
      className="b2b-service-card interactive-card"
      style={{ '--b2b-accent': service.color }}
    >
      <div
        className="b2b-service-card-icon"
        style={{ background: `${service.color}22`, color: service.color }}
      >
        <Icon aria-hidden="true" />
      </div>
      <h3 className="b2b-service-card-title">{service.title}</h3>
      <p className="b2b-service-card-desc">{service.desc}</p>
      <Link
        to="/contact"
        className="b2b-service-card-link"
        style={{ color: service.color }}
      >
        {service.linkLabel} →
      </Link>
    </article>
  );
}

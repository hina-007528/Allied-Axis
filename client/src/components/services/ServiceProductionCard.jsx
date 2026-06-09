import { Link } from 'react-router-dom';
import {
  FaImages,
  FaMicrophone,
  FaDraftingCompass,
  FaFileAlt,
  FaCheck,
} from 'react-icons/fa';

const iconMap = {
  images: FaImages,
  microphone: FaMicrophone,
  layout: FaDraftingCompass,
  document: FaFileAlt,
};

export default function ServiceProductionCard({ service }) {
  const Icon = iconMap[service.icon] || FaFileAlt;

  return (
    <article
      className="srv-production-card interactive-card"
      style={{ '--srv-prod-accent': service.accent }}
    >
      <div className="srv-production-icon">
        <Icon aria-hidden="true" />
      </div>
      <h3 className="srv-production-title">{service.title}</h3>
      <p className="srv-production-problem">&ldquo;{service.problem}&rdquo;</p>
      <ul className="srv-production-features">
        {service.features.map((feature) => (
          <li key={feature}>
            <FaCheck className="srv-production-check" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="srv-production-inquire">
        Inquire Now →
      </Link>
    </article>
  );
}

import { Link } from 'react-router-dom';
import {
  FaPalette,
  FaCog,
  FaGlobe,
  FaChartLine,
  FaShareAlt,
  FaUsers,
  FaPaperPlane,
  FaSearch,
  FaFileAlt,
  FaEnvelope,
  FaVideo,
  FaBullseye,
  FaHandshake,
  FaMap,
  FaImages,
  FaMicrophone,
  FaThLarge,
  FaFile,
  FaCheck,
} from 'react-icons/fa';

const iconMap = {
  palette: FaPalette,
  cpu: FaCog,
  globe: FaGlobe,
  'trending-up': FaChartLine,
  share2: FaShareAlt,
  users: FaUsers,
  send: FaPaperPlane,
  search: FaSearch,
  'file-text': FaFileAlt,
  mail: FaEnvelope,
  video: FaVideo,
  target: FaBullseye,
  handshake: FaHandshake,
  map: FaMap,
  images: FaImages,
  microphone: FaMicrophone,
  layout: FaThLarge,
  document: FaFile,
};

export default function ServiceIndividualCard({ service }) {
  const Icon = iconMap[service.icon] || FaBullseye;

  return (
    <article
      className="srv-individual-card interactive-card"
      style={{ '--srv-ind-accent': service.accent }}
    >
      <div className="srv-individual-icon">
        {service.emoji ? (
          <span className="srv-individual-emoji" aria-hidden="true">
            {service.emoji}
          </span>
        ) : (
          <Icon aria-hidden="true" style={{ color: service.accent }} />
        )}
      </div>
      <h3 className="srv-individual-title">{service.title}</h3>
      <p className="srv-individual-problem">&ldquo;{service.problem}&rdquo;</p>
      <ul className="srv-individual-features">
        {service.features.map((feature) => (
          <li key={feature}>
            <FaCheck className="srv-individual-check" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="srv-individual-inquire">
        Inquire Now →
      </Link>
    </article>
  );
}

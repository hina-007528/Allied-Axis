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
  FaArrowUp,
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
  bullseye: FaBullseye,
  handshake: FaHandshake,
};

export default function ServiceCatalogCard({ service, index }) {
  const Icon = iconMap[service.icon] || FaBullseye;
  const num = String(index + 1).padStart(2, '0');

  return (
    <article
      className="srv-catalog-card interactive-card"
      style={{ '--srv-accent': service.accent }}
    >
      <span className="srv-catalog-num" aria-hidden="true">
        {num}
      </span>
      <div
        className="srv-catalog-icon"
        style={{ background: `${service.accent}22`, color: service.accent }}
      >
        <Icon aria-hidden="true" />
      </div>
      <h3 className="srv-catalog-title">{service.title}</h3>
      <p className="srv-catalog-desc">{service.description}</p>
      <Link to="/contact" className="srv-catalog-pill">
        <FaArrowUp className="srv-catalog-pill-arrow" aria-hidden="true" />
        <span>{service.pill}</span>
      </Link>
    </article>
  );
}

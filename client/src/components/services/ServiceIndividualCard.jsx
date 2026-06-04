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
  FaCamera,
  FaPrint,
  FaFilm,
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
  camera: FaCamera,
  print: FaPrint,
  film: FaFilm,
};

export default function ServiceIndividualCard({ service }) {
  const Icon = iconMap[service.icon] || FaBullseye;

  return (
    <article
      className="srv-individual-card interactive-card"
      style={{ '--srv-ind-accent': service.accent }}
    >
      <div
        className="srv-individual-icon"
        style={{ background: `${service.accent}18`, color: service.accent }}
      >
        <Icon aria-hidden="true" />
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

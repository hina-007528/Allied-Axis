import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineGlobeAlt,
  HiOutlineClock,
} from 'react-icons/hi';
import { FaLinkedinIn, FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';
import { contactInfoContent } from '../../data/contactPageContent';

const DETAIL_ICONS = {
  email: HiOutlineMail,
  uae: HiOutlinePhone,
  pk: HiOutlinePhone,
  regions: HiOutlineGlobeAlt,
  response: HiOutlineClock,
};

const SOCIAL_ICONS = {
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  facebook: FaFacebookF,
};

export default function ContactInfoPanel() {
  const { label, heading, description, details, socialLabel, socialLinks } = contactInfoContent;

  return (
    <aside
      className="contact-panel contact-info-card interactive-card"
      style={{ '--card-beam-accent': 'neutral' }}
    >
      <header className="contact-info-head">
        <p className="contact-panel-label">{label}</p>
        <h2 className="contact-info-title">{heading}</h2>
        <p className="contact-panel-desc">{description}</p>
      </header>

      <div className="contact-details-list">
        {details.map((item) => {
          const Icon = DETAIL_ICONS[item.id];
          const body = (
            <>
              <span className="contact-detail-label">{item.label}</span>
              <strong className="contact-detail-value">{item.value}</strong>
              {item.sub && <span className="contact-detail-sub">{item.sub}</span>}
            </>
          );

          return (
            <div className="contact-detail" key={item.id}>
              <div className="contact-detail-icon">{Icon && <Icon aria-hidden="true" />}</div>
              <div className="contact-detail-body">
                {item.href ? (
                  <a href={item.href} className="contact-detail-link">
                    {body}
                  </a>
                ) : (
                  body
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="contact-info-social">
        <span className="contact-info-social-label">{socialLabel}</span>
        <div className="contact-social-pills">
          {socialLinks.map((link) => {
            const Icon = SOCIAL_ICONS[link.id];
            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-pill"
              >
                {Icon && <Icon aria-hidden="true" />}
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

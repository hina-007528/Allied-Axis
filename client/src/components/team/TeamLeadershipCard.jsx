import { Link } from 'react-router-dom';
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import { usePageContent } from '../../context/SiteDataContext';
import { publicImageSrc } from '../../utils/publicImageSrc';

export default function TeamLeadershipCard({ leader }) {
  const { content: founder } = usePageContent('about-founder');
  const founderCertifications = founder?.founderCertifications ?? [];
  const reverse = !leader.imageFirst;

  return (
    <article
      className={`team-lead-card interactive-card${reverse ? ' team-lead-card--reverse' : ''}`}
    >
      <div className="team-lead-media">
        <div className="team-lead-photo-wrap">
          <img src={publicImageSrc(leader.image)} alt={leader.name} loading="lazy" />
        </div>
        <div className="team-lead-badge-bar">
          <span className="team-lead-badge-pill">{leader.role}</span>
        </div>
      </div>

      <div className="team-lead-body">
        <span className="team-lead-body-label">OUR LEADERSHIP</span>
        <h3 className="team-lead-name">{leader.name}</h3>
        <p className="team-lead-title" style={{ color: leader.color }}>
          {leader.title}
        </p>
        <p className="team-lead-bio">{leader.bio}</p>

        {leader.id === 'maryam' && (
          <>
            <div className="team-lead-actions">
              <a href="mailto:info@alliedaxis.digital" className="team-lead-social" aria-label="Email">
                <FaEnvelope aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/the-maryam-fatima/"
                target="_blank"
                rel="noopener noreferrer"
                className="team-lead-social"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn aria-hidden="true" />
              </a>
            </div>
            {leader.useCertLogos && (
              <div className="team-lead-certs">
                <p className="team-lead-certs-label">{leader.certsLabel}</p>
                <div className="team-lead-certs-grid">
                  {founderCertifications.map((cert) => (
                    <div key={cert.name} className="team-lead-cert-tile" title={cert.name}>
                      <img
                        src={publicImageSrc(cert.src)}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="team-lead-actions-bottom" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '24px' }}>
              <Link to="/contact" className="btn btn-outline team-lead-cta" style={{ margin: 0 }}>
                Discuss Your Strategy
              </Link>
              <a 
                href="https://www.linkedin.com/in/the-maryam-fatima/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary team-lead-cta"
                style={{ margin: 0, display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--orange)', color: '#fff', borderColor: 'var(--orange)' }}
              >
                <FaLinkedinIn /> Connect on LinkedIn
              </a>
            </div>
          </>
        )}

        {leader.highlights && (
          <ul className="team-lead-highlights">
            {leader.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        {leader.id === 'abdul' && (
          <Link to="/contact" className="btn btn-hero-primary team-lead-cta" style={{ marginTop: 20 }}>
            Get in Touch →
          </Link>
        )}
      </div>
    </article>
  );
}

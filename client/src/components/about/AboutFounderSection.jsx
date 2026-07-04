import { FaCheck, FaLinkedin } from 'react-icons/fa';
import {
  founderAchievements,
  founderCertifications,
  founderCertsFoot,
  founderCertsLabel,
} from '../../data/aboutFounder';
import { publicImageSrc } from '../../utils/publicImageSrc';
import { MARYAM_IMAGE } from '../../data/teamMedia';

function CertTile({ cert }) {
  return (
    <div className="about-founder-cert-tile" title={cert.name}>
      <img src={publicImageSrc(cert.src)} alt="" loading="lazy" decoding="async" />
    </div>
  );
}

export default function AboutFounderSection() {
  return (
    <section className="section about-founder-section">
      <div className="container">
        <header className="about-founder-header">
          <span className="about-founder-eyebrow">Founder &amp; CEO</span>
          <h2 className="about-founder-title">
            Maryam Fatima <span className="about-founder-title-sep">—</span>{' '}
            <span className="about-founder-title-accent">The Founder</span>
          </h2>
        </header>

        <div className="about-founder-block interactive-card">
          <aside className="about-founder-profile">
            <div className="about-founder-avatar-wrap">
              <img
                src={publicImageSrc(MARYAM_IMAGE)}
                alt="Maryam Fatima, Founder and CEO of Allied Axis"
                className="about-founder-avatar"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="about-founder-profile-name">Maryam Fatima</p>
            <p className="about-founder-profile-role">Founder &amp; CEO, Allied Axis</p>
            
            <div className="about-founder-linkedin-wrap" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <a 
                href="https://pk.linkedin.com/in/the-maryam-fatima" 
                target="_blank" 
                rel="noopener noreferrer"
                className="interactive-card-hover"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  padding: '12px 28px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                  borderRadius: '50px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#0a66c2';
                  e.currentTarget.style.borderColor = '#0a66c2';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(10, 102, 194, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <FaLinkedin size={20} />
                Connect on LinkedIn
              </a>
            </div>
          </aside>

          <div className="about-founder-body">
            <blockquote className="about-founder-quote">
              &ldquo;Disconnected execution creates unpredictable growth. Integrated systems create
              scalable businesses.&rdquo;
            </blockquote>

            <p>
              Maryam Fatima founded Allied Axis to bridge the gap between marketing activity and
              predictable revenue. While most agencies sell isolated services, Allied Axis builds
              connected ecosystems where positioning, lead generation, outreach, conversion,
              analytics, and retention work together under one accountable strategy.
            </p>
            <p>
              Strategic oversight remains founder-led from audit to execution — across UAE, United
              Kingdom, and Pakistan.
            </p>

            <div className="about-founder-wins">
              <ul>
                {founderAchievements.map((item) => (
                  <li key={item}>
                    <FaCheck className="about-founder-win-icon" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-founder-certs">
              <p className="about-founder-certs-label">{founderCertsLabel}</p>
              <div className="about-founder-certs-grid">
                {founderCertifications.map((cert) => (
                  <CertTile key={cert.src} cert={cert} />
                ))}
              </div>
              <p className="about-founder-certs-foot">{founderCertsFoot}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

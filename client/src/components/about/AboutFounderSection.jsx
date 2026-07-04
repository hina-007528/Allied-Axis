import { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
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
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
            
            <div className="about-founder-linkedin-badge" style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', width: '100%', overflow: 'hidden', paddingLeft: '24px' }}>
              <div style={{ transform: 'scale(0.65)', transformOrigin: 'top center', height: '145px', width: '320px', display: 'flex', justifyContent: 'center' }}>
                <div 
                  className="badge-base LI-profile-badge" 
                  data-locale="en_US" 
                  data-size="medium" 
                  data-theme="dark" 
                  data-type="HORIZONTAL" 
                  data-vanity="the-maryam-fatima" 
                  data-version="v1"
                >
                  <a className="badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/the-maryam-fatima?trk=profile-badge">
                    Maryam Fatima
                  </a>
                </div>
              </div>
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

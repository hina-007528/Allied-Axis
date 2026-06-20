import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useInView from '../../hooks/useInView';

export default function EduCtaSection() {
  const [ref, visible] = useInView(0.1);

  return (
    <section className="edu-cta-section">
      {/* Animated background */}
      <div className="edu-cta-bg" aria-hidden="true">
        <div className="edu-cta-orb edu-cta-orb--1" />
        <div className="edu-cta-orb edu-cta-orb--2" />
        <div className="edu-cta-grid" />
      </div>

      <div className="container">
        <div
          ref={ref}
          className={`edu-cta-inner fade-in ${visible ? 'visible' : ''}`}
        >
          {/* Pilot badge */}
          <div className="edu-cta-pilot-badge">
            🎯 &nbsp; Pilot Offer — 50% Off Normal Price
          </div>

          <h2 className="edu-cta-h2">
            Ready to Stop Losing Families<br />
            to Preventable Delays?
          </h2>
          <p className="edu-cta-sub">
            Get your school's complete admissions system live in 14 days.
            Zero new software. Full team training included.
          </p>

          {/* Pricing card */}
          <div className="edu-cta-price-card">
            <div className="edu-cta-price-row">
              <div className="edu-cta-price-item">
                <span className="edu-cta-price-label">Pilot Investment</span>
                <span className="edu-cta-price-val">Rs. 25,000</span>
                <span className="edu-cta-price-cross">Normal: Rs. 50,000</span>
              </div>
              <div className="edu-cta-price-divider" />
              <div className="edu-cta-price-item">
                <span className="edu-cta-price-label">Payment Terms</span>
                <span className="edu-cta-price-val" style={{ fontSize: '18px' }}>
                  Rs. 12,500 Advance
                </span>
                <span className="edu-cta-price-cross" style={{ textDecoration: 'none', color: 'var(--text-on-dark-muted)' }}>
                  + Rs. 12,500 On Go-Live
                </span>
              </div>
              <div className="edu-cta-price-divider" />
              <div className="edu-cta-price-item">
                <span className="edu-cta-price-label">Optional Add-on</span>
                <span className="edu-cta-price-val" style={{ fontSize: '18px' }}>10 Canva Templates</span>
                <span className="edu-cta-price-cross" style={{ textDecoration: 'none', color: 'var(--text-on-dark-muted)' }}>
                  Rs. 15,000
                </span>
              </div>
            </div>
          </div>

          <div className="edu-cta-btns">
            <a
              href="https://wa.me/923251518471"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary edu-cta-btn-primary"
              id="edu-whatsapp-cta"
            >
              <FaWhatsapp aria-hidden />
              WhatsApp Us — +92 325 1518471
            </a>
            <a
              href="mailto:info@alliedaxis.digital?subject=Education%20Admissions%20System%20Inquiry"
              className="btn btn-glass"
              id="edu-email-cta"
            >
              ✉️ &nbsp; info@alliedaxis.digital
            </a>
          </div>

          <p className="edu-cta-note">
            Founded by Maryam Fatima · B-17 resident · Allied Axis, Islamabad
          </p>

          {/* Sequential navigation link to Team Page */}
          <div style={{ marginTop: '80px', paddingBottom: '20px' }}>
            <Link
              to="/team"
              className="btn btn-hero-primary"
            >
              Meet Our Team <FaArrowRight className="btn-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

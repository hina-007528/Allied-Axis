import { FaWhatsapp } from 'react-icons/fa';
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
          <h2 className="edu-cta-h2">
            Prepare Your Admissions System<br />
            Before Your Next Enrollment Cycle
          </h2>
          <p className="edu-cta-sub">
            Every enrollment cycle, the difference between institutions with a working inquiry
            system and those without becomes obvious. Not in reputation or fees. In the number of
            families who reached out and were never followed up with.
          </p>
          <p className="edu-cta-sub" style={{ fontWeight: 600 }}>
            That gap is fixable. The time to fix it is now — before the next rush hits.
          </p>

          <div className="edu-cta-btns">
            <a
              href="https://wa.me/923251518471?text=I%20would%20like%20to%20book%20a%20free%2010-minute%20admissions%20assessment."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary edu-cta-btn-primary"
              id="edu-assessment-cta"
            >
              <FaWhatsapp aria-hidden />
              Book Your Free Assessment →
            </a>
            <Link
              to="/portfolio"
              className="btn btn-glass"
              id="edu-work-cta"
            >
              See Our Work
            </Link>
          </div>
          
          <div style={{ marginTop: '80px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px' }}>
            <p className="edu-cta-note">
              Allied Axis · info@alliedaxis.digital · +971585882972 +92 325 1518471 © 2026 Allied Axis.
            </p>
            <p className="edu-cta-note">
              Admission Inquiry Management Systems · Pakistan — Islamabad · Rawalpindi · Lahore · Karachi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

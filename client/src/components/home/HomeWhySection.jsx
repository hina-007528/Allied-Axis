import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import useInView from '../../hooks/useInView';
import HomeWhyCard from './HomeWhyCard';
import { withResolvedIcons } from '../../utils/resolveIcon';

function FadeSection({ children, className = '' }) {
  const [ref, visible] = useInView(0.08);
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}

export default function HomeWhySection({
  intro,
  whyItems = [],
  trustBrands = [],
  featurePillars = [],
}) {
  const pillars = withResolvedIcons(featurePillars);

  return (
    <section className="section section-dark home-why">
      <div className="container home-why-container">
        <div className="home-why-layout">
          <FadeSection className="home-why-copy">
            <span className="sec-label">Why Allied Axis</span>
            <h2 className="home-why-title">
              <span className="home-why-title-line">We don&apos;t just market.</span>
              <span className="home-why-title-line accent">We build systems.</span>
            </h2>
            <p className="home-why-intro">{intro}</p>
            <div className="home-why-actions">
              <Link to="/portfolio" className="btn btn-hero-primary">
                See Our Results →
              </Link>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-hero-ghost home-why-btn-secondary"
              >
                <FaWhatsapp aria-hidden />
                WhatsApp Us
              </a>
            </div>
            {trustBrands.length > 0 && (
              <div className="home-why-trust">
                <span className="home-why-trust-label">Trusted by businesses</span>
                <div className="home-why-trust-logos" aria-label="Trusted brands">
                  {trustBrands.map((name) => (
                    <span key={name} className="home-why-trust-logo">{name}</span>
                  ))}
                </div>
              </div>
            )}
          </FadeSection>

          <div className="home-why-grid">
            {whyItems.map((item) => (
              <FadeSection key={item.title}>
                <HomeWhyCard item={item} />
              </FadeSection>
            ))}
          </div>
        </div>

        {pillars.length > 0 && (
          <FadeSection>
            <div className="home-why-pillars">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="home-why-pillar">
                    <div
                      className="home-why-pillar-icon"
                      style={{ background: pillar.bg, color: pillar.color }}
                    >
                      {Icon ? <Icon aria-hidden /> : null}
                    </div>
                    <div className="home-why-pillar-text">
                      <span className="home-why-pillar-title">{pillar.title}</span>
                      {pillar.sub && (
                        <span className="home-why-pillar-sub">{pillar.sub}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeSection>
        )}
      </div>
    </section>
  );
}

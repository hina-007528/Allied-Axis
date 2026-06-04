import { FaBolt, FaMicrochip, FaLayerGroup, FaGlobe } from 'react-icons/fa';
import ContactCta from '../common/ContactCta';
import useInView from '../../hooks/useInView';
import { b2bWhyCards } from '../../data/b2bPage';
import { b2bWhyIntro } from '../../data/b2bPageContent';

const iconMap = {
  bolt: FaBolt,
  microchip: FaMicrochip,
  layers: FaLayerGroup,
  globe: FaGlobe,
};

function FadeSection({ children }) {
  const [ref, visible] = useInView(0.08);
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

export default function B2BWhySection() {
  const { label, heading, headingAccent, lead } = b2bWhyIntro;

  return (
    <section className="section section-gray b2b-why-section">
      <div className="container b2b-why-inner">
        <FadeSection>
          <div className="b2b-why-copy">
            <span className="b2b-why-label">{label}</span>
            <h2 className="b2b-why-heading">
              {heading} <span className="b2b-why-heading-accent">{headingAccent}</span>
            </h2>
            <p className="b2b-why-lead">{lead}</p>
            <ContactCta className="btn btn-hero-primary b2b-why-cta" arrow>
              Book Strategy Call
            </ContactCta>
          </div>
        </FadeSection>

        <div className="b2b-why-grid">
          {b2bWhyCards.map((card) => {
            const Icon = iconMap[card.icon] || FaBolt;
            return (
              <FadeSection key={card.title}>
                <article className="b2b-why-card interactive-card">
                  <span
                    className="b2b-why-card-icon"
                    style={{ background: `${card.color}18`, color: card.color }}
                  >
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className="b2b-why-card-title">{card.title}</h3>
                  <p className="b2b-why-card-desc">{card.desc}</p>
                </article>
              </FadeSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

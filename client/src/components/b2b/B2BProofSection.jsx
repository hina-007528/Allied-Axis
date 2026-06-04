import useInView from '../../hooks/useInView';
import { b2bProofCards, b2bProofIntro } from '../../data/b2bPageContent';
import B2BProofCard from './B2BProofCard';

function FadeSection({ children }) {
  const [ref, visible] = useInView(0.08);
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

export default function B2BProofSection() {
  const { label, heading, headingAccent } = b2bProofIntro;

  return (
    <section className="section section-dark b2b-proof-section">
      <div className="container">
        <FadeSection>
          <header className="b2b-proof-header">
            <span className="b2b-proof-label">{label}</span>
            <h2 className="b2b-proof-heading">
              {heading} <span className="b2b-proof-heading-accent">{headingAccent}</span>
            </h2>
          </header>
        </FadeSection>
        <div className="home-proof-grid b2b-proof-grid">
          {b2bProofCards.map((card) => (
            <FadeSection key={card.slug}>
              <B2BProofCard card={card} />
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}

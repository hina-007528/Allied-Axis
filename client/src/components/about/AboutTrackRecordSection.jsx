import { useEffect } from 'react';
import { aboutProofCards } from '../../data/aboutProofCards';
import useInView from '../../hooks/useInView';
import { initCardBorderGlow } from '../../utils/cardBorderGlow';

export default function AboutTrackRecordSection() {
  const [sectionRef, inView] = useInView(0.05);

  useEffect(() => {
    if (!inView) return undefined;
    const id = window.requestAnimationFrame(() => initCardBorderGlow());
    return () => window.cancelAnimationFrame(id);
  }, [inView]);

  return (
    <section ref={sectionRef} className="section about-track-record-section">
      <div className="container">
        <header className="about-track-record-header">
          <span className="about-track-record-label">TRACK RECORD</span>
          <h2 className="about-track-record-heading">
            Results Before <span className="about-track-record-heading-accent">Contracts</span>
          </h2>
          <p className="about-track-record-sub">
            We validate performance before expansion. These systems are still running, still
            compounding.
          </p>
        </header>

        <div className="about-track-record-grid">
          {aboutProofCards.map((card) => (
            <article key={card.title} className="about-proof-card interactive-card">
              <h3 className="about-proof-card-title">{card.title}</h3>
              <p className="about-proof-subtitle">{card.subtitle}</p>
              <div className="about-proof-divider" aria-hidden="true" />
              <p className="about-proof-result">{card.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

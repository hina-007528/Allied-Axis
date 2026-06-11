import { useEffect } from 'react';
import ContactCta from '../common/ContactCta';
import { aboutEngagementStats } from '../../data/aboutEngagement';
import useInView from '../../hooks/useInView';
import { initCardBorderGlow } from '../../utils/cardBorderGlow';

export default function AboutEngagementSection() {
  const [sectionRef, inView] = useInView(0.05);

  useEffect(() => {
    if (!inView) return undefined;
    const id = window.requestAnimationFrame(() => initCardBorderGlow());
    return () => window.cancelAnimationFrame(id);
  }, [inView]);

  return (
    <section ref={sectionRef} className="section about-engagement-section">
      <div className="container">
        <div className="about-engagement-panel">
          <div className="about-engagement-layout">
            <div className="about-engagement-main">
              <span className="about-engagement-label">ENGAGEMENT MODEL</span>
              <h2 className="about-engagement-heading">
                No Fixed-Term Contracts. We Earn Renewal.
              </h2>
              <p className="about-engagement-copy">
                Every engagement begins with a free 30-minute diagnostic — no pitch, no pressure.
                A direct assessment of your current growth structure, identifying gaps and scalable
                opportunities. Reviewed personally by Maryam Fatima.
              </p>
              <ContactCta className="btn btn-hero-primary about-engagement-cta" arrow>
                Book Free Diagnostic
              </ContactCta>
            </div>

            <div className="about-engagement-stats">
              {aboutEngagementStats.map((item) => (
                <article
                  key={item.title}
                  className="about-engagement-stat interactive-card"
                >
                  <strong className="about-engagement-stat-metric">{item.metric}</strong>
                  <span className="about-engagement-stat-title">{item.title}</span>
                  <span className="about-engagement-stat-desc">{item.desc}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

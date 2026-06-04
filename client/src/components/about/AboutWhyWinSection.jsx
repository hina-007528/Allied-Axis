import { useEffect, useMemo } from 'react';
import { usePageContent } from '../../context/SiteDataContext';
import useInView from '../../hooks/useInView';
import { initCardBorderGlow } from '../../utils/cardBorderGlow';
import { withResolvedIcons } from '../../utils/resolveIcon';

export default function AboutWhyWinSection() {
  const { content } = usePageContent('about-why-win');
  const aboutWhyWinItems = useMemo(
    () => withResolvedIcons(content?.aboutWhyWinItems ?? []),
    [content]
  );
  const [sectionRef, inView] = useInView(0.05);

  useEffect(() => {
    if (!inView) return undefined;
    const id = window.requestAnimationFrame(() => initCardBorderGlow());
    return () => window.cancelAnimationFrame(id);
  }, [inView]);

  return (
    <section ref={sectionRef} className="section about-why-win-section">
      <div className="container">
        <header className="about-why-win-header">
          <span className="about-why-win-label">WHY WE WIN</span>
          <h2 className="about-why-win-heading">
            4 Reasons Clients <span className="about-why-win-heading-accent">Stay &amp; Scale</span>
          </h2>
        </header>

        <div className="about-why-win-grid">
          {aboutWhyWinItems.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="about-why-win-card interactive-card"
                style={{ '--why-accent': item.color }}
              >
                <div className="about-why-win-icon" style={{ background: item.bg, color: item.color }}>
                  {Icon ? <Icon aria-hidden="true" /> : null}
                </div>
                <h3 className="about-why-win-card-title">{item.title}</h3>
                <p className="about-why-win-card-desc">{item.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useMemo } from 'react';
import { usePageContent } from '../../context/SiteDataContext';
import useInView from '../../hooks/useInView';
import { initCardBorderGlow } from '../../utils/cardBorderGlow';
import { withResolvedIcons } from '../../utils/resolveIcon';

export default function AboutIndustriesSection() {
  const { content } = usePageContent('about-industries');
  const aboutIndustries = useMemo(
    () => withResolvedIcons(content?.aboutIndustries ?? []),
    [content]
  );
  const [sectionRef, inView] = useInView(0.05);

  useEffect(() => {
    if (!inView) return undefined;
    const id = window.requestAnimationFrame(() => initCardBorderGlow());
    return () => window.cancelAnimationFrame(id);
  }, [inView]);

  return (
    <section ref={sectionRef} className="section about-industries-section">
      <div className="container">
        <header className="about-industries-header">
          <span className="about-industries-label">SECTORS WE SERVE</span>
          <h2 className="about-industries-heading">
            9 Industries We <span className="about-industries-heading-accent">Understand</span>
          </h2>
        </header>

        <div className="about-industries-grid">
          {aboutIndustries.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="about-industry-card interactive-card"
                style={{ '--industry-accent': item.color }}
              >
                <div
                  className="about-industry-icon"
                  style={{ background: item.bg, color: item.color }}
                >
                  {Icon ? <Icon aria-hidden="true" /> : null}
                </div>
                <div className="about-industry-body">
                  <h3 className="about-industry-title">{item.title}</h3>
                  <p className="about-industry-desc">{item.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

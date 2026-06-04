import { useMemo } from 'react';
import { usePageContent } from '../../context/SiteDataContext';
import useInView from '../../hooks/useInView';
import { withResolvedIcons } from '../../utils/resolveIcon';

export default function AboutGrowthFrameworkSection() {
  const { content } = usePageContent('about-growth-framework');
  const aboutGrowthPhases = useMemo(
    () => withResolvedIcons(content?.aboutGrowthPhases ?? []),
    [content]
  );
  const [timelineRef, timelineActive] = useInView(0.12, { once: false });

  return (
    <section className="section about-growth-framework">
      <div className="container">
        <header className="about-growth-framework-header">
          <span className="about-growth-framework-label">HOW WE WORK</span>
          <h2 className="about-growth-framework-heading">
            4-Phase <span className="about-growth-framework-heading-accent">Growth Framework</span>
          </h2>
        </header>

        <div
          ref={timelineRef}
          className={`about-growth-framework-timeline${timelineActive ? ' is-active' : ''}`}
        >
          <div className="about-growth-framework-line" aria-hidden="true">
            <span className="about-growth-framework-line-track" />
            <span className="about-growth-framework-line-fill" />
          </div>

          {aboutGrowthPhases.map((phase) => {
            const Icon = phase.icon;
            return (
              <article key={phase.num} className="about-growth-framework-step">
                <div
                  className="about-growth-framework-marker"
                  style={{ background: phase.gradient }}
                >
                  <span>{phase.num}</span>
                </div>
                <div className="about-growth-framework-body">
                  <h3>{phase.title}</h3>
                  <p>{phase.desc}</p>
                  <span
                    className="about-growth-framework-tag"
                    style={{ '--phase-color': phase.color }}
                  >
                    {Icon ? (
                      <Icon className="about-growth-framework-tag-icon" aria-hidden="true" />
                    ) : null}
                    {phase.tag}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

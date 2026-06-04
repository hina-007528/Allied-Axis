import { useEffect } from 'react';
import { usePageContent } from '../../context/SiteDataContext';
import useInView from '../../hooks/useInView';
import { publicImageSrc } from '../../utils/publicImageSrc';
import { initCardBorderGlow } from '../../utils/cardBorderGlow';

export default function AboutMarketsSection() {
  const { content } = usePageContent('about-markets');
  const aboutMarkets = content?.aboutMarkets || [];
  const [sectionRef, inView] = useInView(0.05);

  useEffect(() => {
    if (!inView) return undefined;
    const id = window.requestAnimationFrame(() => initCardBorderGlow());
    return () => window.cancelAnimationFrame(id);
  }, [inView]);

  return (
    <section ref={sectionRef} className="section about-markets-section">
      <div className="container">
        <header className="about-markets-header">
          <span className="about-markets-label">WHERE WE OPERATE</span>
          <h2 className="about-markets-heading">
            Three Markets, <span className="about-markets-heading-accent">One Standard</span>
          </h2>
        </header>

        <div className="about-markets-grid">
          {aboutMarkets.map((market) => (
            <article
              key={market.title}
              className="about-market-card interactive-card"
            >
              <img
                className="about-markets-flag"
                src={publicImageSrc(market.flag)}
                alt=""
                width={72}
                height={48}
                loading="lazy"
              />
              <span className={`about-markets-tag about-markets-tag--${market.tagVariant}`}>
                {market.label}
              </span>
              <h3 className="about-markets-card-title">{market.title}</h3>
              <p className="about-markets-card-desc">{market.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

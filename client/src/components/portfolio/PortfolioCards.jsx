const THEMES = [
  { accent: '#8b5cf6', num: '01' },
  { accent: '#f05a28', num: '02' },
  { accent: '#eab308', num: '03' },
  { accent: '#14b8a6', num: '04' },
  { accent: '#3b82f6', num: '05' },
  { accent: '#ec4899', num: '06' },
  { accent: '#f97316', num: '07' },
  { accent: '#06b6d4', num: '08' },
];

function marketTag(cs) {
  const industry = (cs.industry || 'Client').split('/')[0].trim().toUpperCase();
  const market = cs.market || '';
  const region = market.includes('UAE') ? 'UAE' : market.includes('UK') ? 'UK' : 'GLOBAL';
  return `${industry} · ${region}`;
}

function formatResultsParagraph(results) {
  return results
    .map((r) => {
      const text = r.value.trim();
      const metric = String(r.metric).trim();
      if (text.toLowerCase().startsWith(metric.toLowerCase())) return text;
      return `${metric} ${text}`;
    })
    .join('. ')
    .concat(results.length ? '.' : '');
}

function spotlightMetricLabel(r) {
  const short = r.value.trim().split(/\s+/).slice(0, 3).join(' ');
  return short.length <= 20 ? short.toUpperCase() : short.split(/\s+/).slice(0, 2).join(' ').toUpperCase();
}

function PortfolioBlocks({ cs, solutionAccent }) {
  const solutionStyle = solutionAccent ? { '--block-solution-accent': solutionAccent } : undefined;

  return (
    <>
      <div className="portfolio-block">
        <span className="portfolio-block-label portfolio-block-label--challenge">Challenge</span>
        <p>{cs.problem}</p>
      </div>
      <div className="portfolio-block portfolio-block--solution" style={solutionStyle}>
        <span className="portfolio-block-label portfolio-block-label--solution">Solution</span>
        <p>{cs.solution}</p>
      </div>
      <div className="portfolio-block">
        <span className="portfolio-block-label portfolio-block-label--results">Results</span>
        <p>{formatResultsParagraph(cs.results)}</p>
      </div>
    </>
  );
}

function PortfolioCaseStudyCard({ cs, theme, className = '' }) {
  const metrics = cs.results.slice(0, 3);

  return (
    <article
      className={`portfolio-spotlight portfolio-case-card interactive-card ${className}`.trim()}
      style={{ '--case-accent': theme.accent }}
    >
      <div className="portfolio-spotlight-main">
        <header className="portfolio-spotlight-top">
          <div className="portfolio-spotlight-meta">
            <span className="portfolio-spotlight-num" style={{ color: theme.accent }}>
              CASE STUDY {theme.num}
            </span>
            <span className="portfolio-spotlight-tag portfolio-case-tag">{marketTag(cs)}</span>
          </div>
          <h3 className="portfolio-spotlight-title">{cs.title}</h3>
        </header>
        <PortfolioBlocks cs={cs} solutionAccent={theme.accent} />
      </div>
      <aside className="portfolio-spotlight-side portfolio-case-side" aria-label="Key outcomes">
        {metrics.map((r) => (
          <div key={r.metric} className="portfolio-spotlight-metric">
            <span className="portfolio-spotlight-metric-val">{r.metric}</span>
            <span className="portfolio-spotlight-metric-lbl">{spotlightMetricLabel(r)}</span>
          </div>
        ))}
      </aside>
    </article>
  );
}

export function PortfolioSpotlight({ cs }) {
  return (
    <PortfolioCaseStudyCard
      cs={cs}
      theme={THEMES[0]}
      className="portfolio-spotlight--featured"
    />
  );
}

export function PortfolioCaseCard({ cs, index = 0 }) {
  const theme = THEMES[Math.abs(index) % THEMES.length] ?? THEMES[0];
  return <PortfolioCaseStudyCard cs={cs} theme={theme} />;
}

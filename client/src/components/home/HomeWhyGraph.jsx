/** Premium analytics widgets for Why Allied Axis cards */

function ChartShell({ label, value, badge, badgeTone = 'up', accent, children }) {
  return (
    <div className="why-card-graph-panel">
      <div className="why-card-graph-kpi">
        <div className="why-card-graph-kpi-main">
          <span className="why-card-graph-dot" style={{ background: accent }} aria-hidden="true" />
          <span className="why-card-graph-label">{label}</span>
          {value && <span className="why-card-graph-value">{value}</span>}
        </div>
        <span className={`why-card-graph-badge why-card-graph-badge--${badgeTone}`}>{badge}</span>
      </div>
      <div className="why-card-graph-stage">
        <div className="why-card-graph-ambient" style={{ background: accent }} aria-hidden="true" />
        <div className="why-card-graph-chart">{children}</div>
      </div>
    </div>
  );
}

function ChartDefs({ id, accent }) {
  return (
    <defs>
      <linearGradient id={`${id}-area`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={accent} stopOpacity="0.5" />
        <stop offset="55%" stopColor={accent} stopOpacity="0.12" />
        <stop offset="100%" stopColor={accent} stopOpacity="0" />
      </linearGradient>
      <linearGradient id={`${id}-line`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
        <stop offset="45%" stopColor={accent} stopOpacity="0.85" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0.95" />
      </linearGradient>
      <linearGradient id={`${id}-bar`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
        <stop offset="18%" stopColor={accent} stopOpacity="1" />
        <stop offset="100%" stopColor={accent} stopOpacity="0.45" />
      </linearGradient>
      <filter id={`${id}-glow`} x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

function GridLines({ height = 88 }) {
  const lines = [22, 38, 54, 70];
  return (
    <g className="why-graph-grid">
      {lines.map((y) => (
        <line
          key={y}
          x1="12"
          y1={y}
          x2="228"
          y2={y}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      ))}
      <line x1="12" y1={height - 14} x2="228" y2={height - 14} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    </g>
  );
}

function EcosystemChart({ accent }) {
  const id = 'why-eco';
  return (
    <ChartShell
      label="Ecosystem ROI"
      value="2.4×"
      badge="+38% QoQ"
      badgeTone="up"
      accent={accent}
    >
      <svg viewBox="0 0 240 88" fill="none" aria-hidden="true">
        <ChartDefs id={id} accent={accent} />
        <GridLines />
        <path
          className="why-graph-area"
          d="M12 62 C40 62 52 50 76 44 C100 38 118 30 142 24 C166 18 190 14 228 8 L228 74 L12 74 Z"
          fill={`url(#${id}-area)`}
        />
        <path
          className="why-graph-line"
          d="M12 62 C40 62 52 50 76 44 C100 38 118 30 142 24 C166 18 190 14 228 8"
          stroke={`url(#${id}-line)`}
          strokeWidth="2.5"
          strokeLinecap="round"
          filter={`url(#${id}-glow)`}
          pathLength="1"
        />
        {[
          { x: 76, y: 44 },
          { x: 118, y: 30 },
          { x: 142, y: 24 },
        ].map((p) => (
          <circle key={`${p.x}-${p.y}`} cx={p.x} cy={p.y} r="2.5" fill={accent} opacity="0.45" />
        ))}
        <line
          className="why-graph-crosshair"
          x1="190"
          y1="14"
          x2="190"
          y2="74"
          stroke={accent}
          strokeOpacity="0.28"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <circle className="why-graph-node why-graph-node--pulse" cx="190" cy="14" r="4" fill={accent} />
        <circle cx="190" cy="14" r="9" stroke={accent} strokeOpacity="0.25" strokeWidth="1" fill="none" />
        <text x="198" y="12" fill="rgba(255,255,255,0.55)" fontSize="7" fontWeight="600">Peak</text>
      </svg>
    </ChartShell>
  );
}

function CompoundChart({ accent }) {
  const id = 'why-ai';
  const bars = [
    { x: 28, h: 26, ghost: 44 },
    { x: 72, h: 34, ghost: 44 },
    { x: 124, h: 42, ghost: 44 },
    { x: 180, h: 50, ghost: 44 },
  ];
  return (
    <ChartShell label="AI throughput" value="80%" badge="Automated" badgeTone="up" accent={accent}>
      <svg viewBox="0 0 240 88" fill="none" aria-hidden="true">
        <ChartDefs id={id} accent={accent} />
        <GridLines />
        {bars.map((b, i) => (
          <g key={b.x}>
            <rect
              x={b.x}
              y={88 - b.ghost - 14}
              width="32"
              height={b.ghost}
              rx="8"
              fill="rgba(255,255,255,0.05)"
            />
            <rect
              className="why-graph-bar"
              x={b.x}
              y={88 - b.h - 14}
              width="32"
              height={b.h}
              rx="8"
              fill={`url(#${id}-bar)`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            />
          </g>
        ))}
        <path
          className="why-graph-line"
          d="M44 58 C68 48 96 38 124 30 C152 22 180 16 204 12"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          filter={`url(#${id}-glow)`}
          pathLength="1"
        />
        <circle className="why-graph-node" cx="204" cy="12" r="3.5" fill="#fff" stroke={accent} strokeWidth="2" />
      </svg>
    </ChartShell>
  );
}

function StackedChart({ accent }) {
  const id = 'why-stack';
  const layers = [
    { label: 'Brand', pct: 88 },
    { label: 'Web', pct: 92 },
    { label: 'Funnel', pct: 95 },
    { label: 'Automation', pct: 100 },
  ];
  return (
    <ChartShell label="Stack coverage" value="100%" badge="4 layers" badgeTone="neutral" accent={accent}>
      <svg viewBox="0 0 240 88" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-bar`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <GridLines height={88} />
        {layers.map((layer, i) => {
          const y = 18 + i * 16;
          const trackW = 118;
          const fillW = (layer.pct / 100) * trackW;
          return (
            <g key={layer.label}>
              <text x="12" y={y + 8} fill="rgba(255,255,255,0.52)" fontSize="8" fontWeight="600">
                {layer.label}
              </text>
              <rect x="78" y={y} width={trackW} height="8" rx="4" fill="rgba(255,255,255,0.07)" />
              <rect
                className="why-graph-bar-h"
                x="78"
                y={y}
                width={fillW}
                height="8"
                rx="4"
                fill={`url(#${id}-bar)`}
                fillOpacity={0.45 + i * 0.14}
                style={{ transitionDelay: `${i * 0.08}s` }}
              />
              <text x="228" y={y + 8} fill="rgba(255,255,255,0.78)" fontSize="8" fontWeight="700" textAnchor="end">
                {layer.pct}%
              </text>
            </g>
          );
        })}
      </svg>
    </ChartShell>
  );
}

function MarketsChart({ accent }) {
  const id = 'why-mkt';
  const regions = [
    { label: 'UAE', value: 92, flag: '🇦🇪' },
    { label: 'UK', value: 98, flag: '🇬🇧' },
    { label: 'PK', value: 78, flag: '🇵🇰' },
  ];
  return (
    <ChartShell label="Active markets" value="3" badge="Global" badgeTone="neutral" accent={accent}>
      <svg viewBox="0 0 240 88" fill="none" aria-hidden="true">
        <ChartDefs id={id} accent={accent} />
        <GridLines />
        {regions.map((r, i) => {
          const x = 16 + i * 76;
          const barH = (r.value / 100) * 36;
          return (
            <g key={r.label}>
              <rect
                x={x}
                y="16"
                width="64"
                height="56"
                rx="10"
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="1"
              />
              <text x={x + 32} y="30" fill="rgba(255,255,255,0.9)" fontSize="11" textAnchor="middle">
                {r.flag}
              </text>
              <rect
                x={x + 38}
                y="20"
                width="30"
                height="14"
                rx="7"
                fill={accent}
                fillOpacity="0.18"
                stroke={accent}
                strokeOpacity="0.35"
                strokeWidth="0.75"
              />
              <text
                x={x + 53}
                y="30"
                fill={accent}
                fontSize="7.5"
                fontWeight="800"
                textAnchor="middle"
              >
                {r.value}%
              </text>
              <text x={x + 32} y="46" fill="rgba(255,255,255,0.55)" fontSize="8" fontWeight="700" textAnchor="middle">
                {r.label}
              </text>
              <rect
                x={x + 14}
                y="52"
                width="36"
                height="36"
                rx="6"
                fill="rgba(255,255,255,0.06)"
              />
              <rect
                className="why-graph-bar"
                x={x + 14}
                y={88 - barH - 14}
                width="36"
                height={barH}
                rx="6"
                fill={`url(#${id}-bar)`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              />
            </g>
          );
        })}
      </svg>
    </ChartShell>
  );
}

const CHARTS = {
  ecosystem: EcosystemChart,
  compound: CompoundChart,
  stacked: StackedChart,
  markets: MarketsChart,
};

export default function HomeWhyGraph({ type = 'ecosystem', accent = '#7c3aed' }) {
  const Chart = CHARTS[type] || CHARTS.ecosystem;

  return (
    <div className="why-card-graph" style={{ '--graph-accent': accent, color: accent }}>
      <Chart accent={accent} />
    </div>
  );
}

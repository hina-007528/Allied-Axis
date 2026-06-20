/** Animated analytics mini-graphs for Education problem cards — mirrors HomeWhyGraph style */

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

function GridLines() {
  return (
    <g>
      {[22, 38, 54, 70].map((y) => (
        <line key={y} x1="12" y1={y} x2="228" y2={y}
          stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      ))}
      <line x1="12" y1="74" x2="228" y2="74"
        stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    </g>
  );
}

function Shell({ label, value, badge, badgeTone = 'down', accent, children }) {
  const badgeStyle = badgeTone === 'down'
    ? { color: '#fca5a5', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)' }
    : badgeTone === 'up'
      ? { color: '#6ee7b7', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }
      : { color: accent, background: `${accent}22`, border: `1px solid ${accent}44` };

  return (
    <div className="edu-prob-graph-panel">
      <div className="edu-prob-graph-kpi">
        <div className="edu-prob-graph-kpi-main">
          <span className="edu-prob-graph-dot" style={{ background: accent }} aria-hidden="true" />
          <span className="edu-prob-graph-label">{label}</span>
          {value && <span className="edu-prob-graph-value">{value}</span>}
        </div>
        <span className="edu-prob-graph-badge" style={badgeStyle}>{badge}</span>
      </div>
      <div className="edu-prob-graph-stage">
        <div className="edu-prob-graph-ambient" style={{ background: accent }} aria-hidden="true" />
        <div className="edu-prob-graph-chart">{children}</div>
      </div>
    </div>
  );
}

/* 1 — No Central Tracking: scattered / chaotic line chart */
function ScatteredChart({ accent }) {
  const id = 'edu-scattered';
  return (
    <Shell label="Lead Visibility" value="0%" badge="Untracked" badgeTone="down" accent={accent}>
      <svg viewBox="0 0 240 88" fill="none" aria-hidden="true">
        <ChartDefs id={id} accent={accent} />
        <GridLines />
        {/* erratic zigzag line = no system */}
        <path className="edu-prob-graph-line"
          d="M12 40 L40 58 L68 20 L96 62 L124 30 L152 66 L180 18 L208 52 L228 35"
          stroke={`url(#${id}-line)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          filter={`url(#${id}-glow)`} pathLength="1" />
        {/* scattered dots = lost leads */}
        {[[40,58],[68,20],[96,62],[124,30],[152,66],[180,18]].map(([x,y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill={accent} opacity="0.4" />
        ))}
        <text x="14" y="82" fill="rgba(255,255,255,0.3)" fontSize="7" fontWeight="600">Inquiry 1</text>
        <text x="88" y="82" fill="rgba(255,255,255,0.3)" fontSize="7" fontWeight="600">Inquiry 2</text>
        <text x="170" y="82" fill="rgba(255,255,255,0.3)" fontSize="7" fontWeight="600">Inquiry 3</text>
      </svg>
    </Shell>
  );
}

/* 2 — Inconsistent Response: declining bars (speed drops) */
function ResponseChart({ accent }) {
  const id = 'edu-response';
  const bars = [
    { x: 18, h: 50, label: 'Mon' },
    { x: 62, h: 38, label: 'Tue' },
    { x: 106, h: 28, label: 'Wed' },
    { x: 150, h: 18, label: 'Thu' },
    { x: 194, h: 8,  label: 'Fri' },
  ];
  return (
    <Shell label="Response Speed" value="48h+" badge="Too Slow" badgeTone="down" accent={accent}>
      <svg viewBox="0 0 240 88" fill="none" aria-hidden="true">
        <ChartDefs id={id} accent={accent} />
        <GridLines />
        {bars.map((b, i) => (
          <g key={b.x}>
            <rect x={b.x} y="18" width="26" height="56" rx="6" fill="rgba(255,255,255,0.04)" />
            <rect className="edu-prob-graph-bar"
              x={b.x} y={74 - b.h} width="26" height={b.h} rx="6"
              fill={`url(#${id}-bar)`}
              style={{ transitionDelay: `${i * 0.07}s` }} />
            <text x={b.x + 13} y="83" fill="rgba(255,255,255,0.3)"
              fontSize="7" fontWeight="600" textAnchor="middle">{b.label}</text>
          </g>
        ))}
        {/* trend line going down */}
        <path className="edu-prob-graph-line"
          d="M31 34 C75 42 119 52 163 60 C187 64 207 68 220 70"
          stroke={accent} strokeWidth="1.5" strokeDasharray="4 3" strokeOpacity="0.5"
          strokeLinecap="round" />
      </svg>
    </Shell>
  );
}

/* 3 — No Follow-ups: flat line after initial spike */
function DropoffChart({ accent }) {
  const id = 'edu-dropoff';
  return (
    <Shell label="Follow-up Rate" value="0%" badge="Forgotten" badgeTone="down" accent={accent}>
      <svg viewBox="0 0 240 88" fill="none" aria-hidden="true">
        <ChartDefs id={id} accent={accent} />
        <GridLines />
        {/* spike then flatline */}
        <path className="edu-prob-graph-area"
          d="M12 68 L40 24 L60 68 L228 68 L228 74 L12 74 Z"
          fill={`url(#${id}-area)`} />
        <path className="edu-prob-graph-line"
          d="M12 68 L40 24 L60 68 L228 68"
          stroke={`url(#${id}-line)`} strokeWidth="2.5" strokeLinecap="round"
          filter={`url(#${id}-glow)`} pathLength="1" />
        <circle className="edu-prob-graph-node edu-prob-graph-node--pulse"
          cx="40" cy="24" r="4" fill={accent} />
        <circle cx="40" cy="24" r="9" stroke={accent} strokeOpacity="0.25" strokeWidth="1" fill="none" />
        <text x="46" y="22" fill="rgba(255,255,255,0.55)" fontSize="7" fontWeight="600">Day 1</text>
        <line x1="60" y1="68" x2="228" y2="68"
          stroke="rgba(239,68,68,0.6)" strokeWidth="1.5" strokeDasharray="5 4" />
        <text x="130" y="64" fill="rgba(239,68,68,0.7)" fontSize="7" fontWeight="700" textAnchor="middle">No follow-up</text>
      </svg>
    </Shell>
  );
}

/* 4 — Single-person dependency: donut / concentration risk */
function DependencyChart({ accent }) {
  const id = 'edu-dep';
  const cx = 60; const cy = 44; const r = 28;
  const circ = 2 * Math.PI * r;
  return (
    <Shell label="Staff Risk" value="1 person" badge="Single Point" badgeTone="down" accent={accent}>
      <svg viewBox="0 0 240 88" fill="none" aria-hidden="true">
        <ChartDefs id={id} accent={accent} />
        {/* donut — 90% dependency */}
        <circle cx={cx} cy={cy} r={r} stroke="rgba(255,255,255,0.07)" strokeWidth="10" />
        <circle className="edu-prob-graph-donut"
          cx={cx} cy={cy} r={r}
          stroke={accent} strokeWidth="10" strokeLinecap="round"
          strokeDasharray={`${circ * 0.9} ${circ}`}
          strokeDashoffset={circ * 0.25}
          transform={`rotate(-90 ${cx} ${cy})`} />
        <text x={cx} y={cy + 4} fill="#fff" fontSize="11" fontWeight="800" textAnchor="middle">90%</text>
        <text x={cx} y={cy + 14} fill="rgba(255,255,255,0.4)" fontSize="6.5" fontWeight="600" textAnchor="middle">1 person</text>
        {/* legend */}
        <rect x="110" y="20" width="10" height="10" rx="3" fill={accent} fillOpacity="0.85" />
        <text x="124" y="29" fill="rgba(255,255,255,0.7)" fontSize="8" fontWeight="600">1 staff member handles</text>
        <rect x="110" y="36" width="10" height="10" rx="3" fill="rgba(255,255,255,0.08)" />
        <text x="124" y="45" fill="rgba(255,255,255,0.35)" fontSize="8" fontWeight="600">No backup system</text>
        <text x="110" y="62" fill="rgba(239,68,68,0.8)" fontSize="8" fontWeight="700">⚠ Collapse risk if absent</text>
        <rect x="110" y="68" width="120" height="5" rx="2.5" fill="rgba(239,68,68,0.12)" />
        <rect className="edu-prob-graph-bar-h"
          x="110" y="68" width="108" height="5" rx="2.5" fill={accent} fillOpacity="0.7" />
      </svg>
    </Shell>
  );
}

/* 5 — Blind Leadership: empty / no data chart */
function BlindChart({ accent }) {
  const id = 'edu-blind';
  return (
    <Shell label="Data Visibility" value="N/A" badge="No Insight" badgeTone="down" accent={accent}>
      <svg viewBox="0 0 240 88" fill="none" aria-hidden="true">
        <ChartDefs id={id} accent={accent} />
        <GridLines />
        {/* ghost placeholder bars = no real data */}
        {[18, 62, 106, 150, 194].map((x, i) => (
          <g key={x}>
            <rect x={x} y="18" width="26" height="56" rx="6" fill="rgba(255,255,255,0.04)" />
            {/* tiny real bars = barely any data */}
            <rect className="edu-prob-graph-bar"
              x={x} y={70} width="26" height={4} rx="3"
              fill={accent} fillOpacity="0.3"
              style={{ transitionDelay: `${i * 0.07}s` }} />
          </g>
        ))}
        <text x="120" y="48" fill="rgba(255,255,255,0.18)" fontSize="28"
          fontWeight="900" textAnchor="middle">?</text>
        <text x="120" y="62" fill="rgba(255,255,255,0.25)" fontSize="8"
          fontWeight="600" textAnchor="middle">No conversion data</text>
      </svg>
    </Shell>
  );
}

/* 6 — Unresolved Public Outreach: social engagement dropping */
function SocialChart({ accent }) {
  const id = 'edu-social';
  return (
    <Shell label="Unanswered Comments" value="40+" badge="Losing Trust" badgeTone="down" accent={accent}>
      <svg viewBox="0 0 240 88" fill="none" aria-hidden="true">
        <ChartDefs id={id} accent={accent} />
        <GridLines />
        {/* rising unanswered count */}
        <path className="edu-prob-graph-area"
          d="M12 66 C50 62 80 56 110 48 C140 40 170 28 228 16 L228 74 L12 74 Z"
          fill={`url(#${id}-area)`} />
        <path className="edu-prob-graph-line"
          d="M12 66 C50 62 80 56 110 48 C140 40 170 28 228 16"
          stroke={`url(#${id}-line)`} strokeWidth="2.5" strokeLinecap="round"
          filter={`url(#${id}-glow)`} pathLength="1" />
        <circle className="edu-prob-graph-node edu-prob-graph-node--pulse"
          cx="228" cy="16" r="4" fill={accent} />
        <circle cx="228" cy="16" r="9" stroke={accent} strokeOpacity="0.25" strokeWidth="1" fill="none" />
        {/* comment bubbles icons */}
        {[[50,58],[110,46],[170,28]].map(([x,y],i) => (
          <g key={i}>
            <rect x={x-10} y={y-8} width="20" height="13" rx="4"
              fill="rgba(255,255,255,0.06)" stroke={accent} strokeOpacity="0.2" strokeWidth="0.75" />
            <text x={x} y={y} fill={accent} fontSize="7" fontWeight="700" textAnchor="middle">?</text>
          </g>
        ))}
        <text x="14" y="84" fill="rgba(255,255,255,0.3)" fontSize="6.5" fontWeight="600">Week 1</text>
        <text x="205" y="84" fill="rgba(255,255,255,0.3)" fontSize="6.5" fontWeight="600">Week 6</text>
      </svg>
    </Shell>
  );
}

const GRAPHS = [
  ScatteredChart,
  ResponseChart,
  DropoffChart,
  DependencyChart,
  BlindChart,
  SocialChart,
];

export default function EduProblemGraph({ index = 0, accent = '#e05c26' }) {
  const Chart = GRAPHS[index % GRAPHS.length];
  return (
    <div className="edu-prob-graph" style={{ '--edu-graph-accent': accent }}>
      <Chart accent={accent} />
    </div>
  );
}

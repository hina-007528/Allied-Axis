/* Pixel-accurate layer illustrations — from reference HTML/CSS */

export function Layer01Svg() {
  return (
    <svg viewBox="0 0 340 190" aria-hidden="true">
      <defs>
        <linearGradient id="ly01OrangeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="20" y="16" width="160" height="115" rx="8" fill="#141825" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <rect x="20" y="16" width="160" height="22" rx="8" fill="#1a2035" />
      <rect x="20" y="30" width="160" height="8" fill="#1a2035" />
      <circle cx="32" cy="27" r="4" fill="#f97316" opacity="0.7" />
      <circle cx="44" cy="27" r="4" fill="rgba(255,255,255,0.15)" />
      <circle cx="56" cy="27" r="4" fill="rgba(255,255,255,0.15)" />
      <rect x="30" y="48" width="28" height="28" rx="5" fill="#f97316" opacity="0.15" />
      <circle cx="44" cy="62" r="9" stroke="#f97316" strokeWidth="1.5" fill="none" />
      <ellipse cx="44" cy="62" rx="5" ry="9" stroke="#f97316" strokeWidth="1" fill="none" />
      <line x1="35" y1="62" x2="53" y2="62" stroke="#f97316" strokeWidth="1" />
      <rect x="66" y="50" width="60" height="5" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="66" y="60" width="45" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="66" y="69" width="52" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="30" y="82" width="140" height="3" rx="1" fill="#f97316" opacity="0.4" />
      <rect x="30" y="92" width="130" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="30" y="101" width="110" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
      <rect x="30" y="110" width="120" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
      <rect x="195" y="28" width="130" height="90" rx="8" fill="#141825" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <line x1="205" y1="48" x2="315" y2="48" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <line x1="205" y1="62" x2="315" y2="62" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <line x1="205" y1="76" x2="315" y2="76" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <line x1="205" y1="90" x2="315" y2="90" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <polygon
        className="why-graph-area"
        points="205,92 230,80 250,72 268,60 285,50 315,34 315,100 205,100"
        fill="url(#ly01OrangeGrad)"
        opacity="0.35"
      />
      <polyline
        className="why-graph-line"
        points="205,92 230,80 250,72 268,60 285,50 315,34"
        fill="none"
        stroke="#f97316"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
      />
      <rect x="205" y="105" width="18" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="230" y="105" width="18" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="255" y="105" width="18" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="280" y="105" width="18" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="305" y="105" width="12" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
      <circle className="why-graph-node why-graph-node--pulse" cx="315" cy="34" r="5" fill="#f97316" opacity="0.25" />
      <circle className="why-graph-node" cx="315" cy="34" r="3" fill="#f97316" />
      <rect x="30" y="138" width="30" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="70" y="138" width="50" height="6" rx="3" fill="#f97316" opacity="0.5" />
      <rect x="130" y="138" width="40" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="195" y="138" width="30" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="235" y="138" width="50" height="6" rx="3" fill="#f97316" opacity="0.5" />
      <rect x="295" y="138" width="35" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
    </svg>
  );
}

export function Layer02Svg() {
  return (
    <svg viewBox="0 0 340 190" aria-hidden="true">
      <defs>
        <radialGradient id="ly02RadarGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ly02CenterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6d28d9" stopOpacity="1" />
        </radialGradient>
      </defs>
      <circle cx="155" cy="95" r="75" fill="none" stroke="rgba(139,92,246,0.15)" strokeWidth="1" />
      <circle cx="155" cy="95" r="56" fill="none" stroke="rgba(139,92,246,0.18)" strokeWidth="1" />
      <circle cx="155" cy="95" r="37" fill="none" stroke="rgba(139,92,246,0.22)" strokeWidth="1" />
      <circle cx="155" cy="95" r="18" fill="none" stroke="rgba(139,92,246,0.28)" strokeWidth="1" />
      <circle className="about-solution-anim-float" cx="155" cy="95" r="75" fill="url(#ly02RadarGlow)" />
      <line x1="155" y1="20" x2="155" y2="170" stroke="rgba(139,92,246,0.12)" strokeWidth="1" />
      <line x1="80" y1="95" x2="230" y2="95" stroke="rgba(139,92,246,0.12)" strokeWidth="1" />
      <line x1="102" y1="42" x2="208" y2="148" stroke="rgba(139,92,246,0.1)" strokeWidth="1" />
      <line x1="208" y1="42" x2="102" y2="148" stroke="rgba(139,92,246,0.1)" strokeWidth="1" />
      <circle className="about-solution-anim-pulse" cx="155" cy="95" r="10" fill="url(#ly02CenterGlow)" />
      <circle className="about-solution-anim-pulse" cx="155" cy="95" r="4" fill="white" />
      <line x1="165" y1="85" x2="224" y2="60" stroke="rgba(139,92,246,0.5)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="165" y1="105" x2="224" y2="130" stroke="rgba(139,92,246,0.5)" strokeWidth="1" strokeDasharray="4 3" />
      <rect x="224" y="46" width="100" height="32" rx="8" fill="#1a1130" stroke="rgba(139,92,246,0.4)" strokeWidth="1" />
      <circle cx="240" cy="62" r="8" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
      <line x1="236" y1="58" x2="244" y2="58" stroke="#8b5cf6" strokeWidth="1" />
      <line x1="240" y1="56" x2="240" y2="68" stroke="#8b5cf6" strokeWidth="1" />
      <text x="254" y="66" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="700" fill="white" letterSpacing="0.05em">
        CLARITY
      </text>
      <rect x="224" y="116" width="100" height="32" rx="8" fill="#1a1130" stroke="rgba(139,92,246,0.4)" strokeWidth="1" />
      <circle cx="240" cy="132" r="8" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
      <circle cx="240" cy="132" r="3" fill="#8b5cf6" />
      <text x="254" y="136" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="700" fill="white" letterSpacing="0.05em">
        POSITION
      </text>
    </svg>
  );
}

export function Layer03Svg() {
  return (
    <svg viewBox="0 0 340 190" aria-hidden="true">
      <defs>
        <linearGradient id="ly03FunnelGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <polygon className="about-solution-anim-float" points="145,20 275,20 255,80 165,80" fill="url(#ly03FunnelGrad)" opacity="0.8" />
      <polygon className="about-solution-anim-float" points="165,80 255,80 235,140 185,140" fill="url(#ly03FunnelGrad)" opacity="0.6" />
      <rect x="200" y="140" width="20" height="30" rx="3" fill="#3b82f6" opacity="0.6" />
      <polyline
        points="145,20 275,20 255,80 235,140 215,140 215,170 205,170 205,140 185,140 165,80 145,20"
        fill="none"
        stroke="rgba(59,130,246,0.5)"
        strokeWidth="1.5"
      />
      <circle cx="195" cy="46" r="5" fill="#3b82f6" />
      <circle cx="210" cy="46" r="5" fill="#3b82f6" opacity="0.7" />
      <circle cx="225" cy="46" r="5" fill="#3b82f6" opacity="0.5" />
      <circle cx="205" cy="108" r="5" fill="#3b82f6" />
      <circle cx="220" cy="108" r="5" fill="#3b82f6" opacity="0.6" />
      <rect x="30" y="62" width="76" height="46" rx="8" fill="#0f172a" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
      <circle cx="54" cy="82" r="12" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
      <path d="M48 78 Q54 72 60 78 Q66 84 60 90 Q54 96 48 90 Q42 84 48 78Z" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.6" />
      <text x="34" y="122" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="white" letterSpacing="0.06em">
        AI
      </text>
      <line x1="106" y1="85" x2="140" y2="50" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5" strokeDasharray="5 3" />
      <polygon points="140,50 132,52 136,44" fill="#3b82f6" opacity="0.7" />
      <rect x="234" y="62" width="76" height="46" rx="8" fill="#0f172a" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
      <circle cx="278" cy="76" r="7" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
      <path d="M265 100 Q272 92 278 92 Q284 92 291 100" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="245" y="122" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="white" letterSpacing="0.06em">
        CRM
      </text>
      <line x1="230" y1="50" x2="255" y2="70" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5" strokeDasharray="5 3" />
      <polygon points="255,70 249,65 258,64" fill="#3b82f6" opacity="0.7" />
    </svg>
  );
}

export function Layer06Svg() {
  return (
    <svg viewBox="0 0 340 190" aria-hidden="true">
      <circle className="about-solution-anim-float" cx="180" cy="95" r="52" fill="rgba(6,182,212,0.05)" stroke="rgba(6,182,212,0.2)" strokeWidth="1.5" />
      <path className="about-solution-anim-line" style={{ '--line-len': 200 }} d="M135,70 A52,52 0 1 1 130,120" fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
      <polygon points="128,113 130,122 121,118" fill="#06b6d4" />
      <circle cx="172" cy="82" r="10" fill="#1e2a3a" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" />
      <circle cx="172" cy="78" r="4.5" fill="rgba(6,182,212,0.5)" />
      <path d="M164,92 Q172,86 180,92" fill="none" stroke="rgba(6,182,212,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="188" cy="82" r="10" fill="#1e2a3a" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" />
      <circle cx="188" cy="78" r="4.5" fill="rgba(6,182,212,0.5)" />
      <path d="M180,92 Q188,86 196,92" fill="none" stroke="rgba(6,182,212,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="180" cy="107" r="8" fill="#1e2a3a" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
      <circle cx="180" cy="104" r="3.5" fill="rgba(6,182,212,0.4)" />
      <rect x="20" y="60" width="80" height="28" rx="7" fill="#071a20" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" />
      <text x="36" y="79" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="white" letterSpacing="0.08em">
        REPEAT
      </text>
      <line x1="100" y1="74" x2="130" y2="80" stroke="rgba(6,182,212,0.4)" strokeWidth="1" strokeDasharray="4 3" />
      <rect x="20" y="102" width="80" height="28" rx="7" fill="#071a20" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" />
      <text x="39" y="121" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="white" letterSpacing="0.08em">
        REFER
      </text>
      <line x1="100" y1="116" x2="130" y2="110" stroke="rgba(6,182,212,0.4)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="232" y1="74" x2="255" y2="64" stroke="rgba(6,182,212,0.3)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="232" y1="87" x2="262" y2="90" stroke="rgba(6,182,212,0.3)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="232" y1="100" x2="255" y2="115" stroke="rgba(6,182,212,0.3)" strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="265" cy="58" r="8" fill="#1e2a3a" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
      <rect x="258" y="68" width="16" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
      <circle cx="272" cy="90" r="8" fill="#1e2a3a" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
      <rect x="265" y="100" width="16" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
      <circle cx="265" cy="121" r="8" fill="#1e2a3a" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
      <rect x="258" y="131" width="16" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="20" y="162" width="300" height="2" rx="1" fill="rgba(6,182,212,0.15)" />
    </svg>
  );
}

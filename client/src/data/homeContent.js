import {
  FaBolt,
  FaMicrochip,
  FaLayerGroup,
  FaCompass,
  FaLinkedin,
  FaBullhorn,
  FaGlobe,
  FaEnvelope,
  FaSearch,
  FaMap,
  FaRocket,
  FaChartBar,
} from 'react-icons/fa';

/** Why Allied Axis — reference video copy */
export const whyIntro =
  'We help businesses grow fast with real results in weeks, not months. Everything is managed through one team and one dashboard, making the process simple and hassle-free. By combining AI insights with human strategy and relationship-building, we focus on what truly matters: more leads, better conversions and measurable ROI.';

export const whyItems = [
  {
    icon: FaBolt,
    title: 'Systems Over Services',
    desc: 'We don\'t sell isolated deliverables. We build integrated growth ecosystems — scalable assets that improve over time.',
    bg: 'rgba(124,58,237,0.15)',
    color: '#7c3aed',
  },
  {
    icon: FaMicrochip,
    title: 'AI-Powered Systems',
    desc: 'Not just traditional marketing — we build AI-driven workflows that compound results over time.',
    bg: 'rgba(240,90,40,0.15)',
    color: '#f05a28',
  },
  {
    icon: FaLayerGroup,
    title: 'End-to-End Solution',
    desc: 'By choosing us you replace an entire team. We provide a complete digital ecosystem under one roof.',
    bg: 'rgba(16,185,129,0.15)',
    color: '#10b981',
  },
  {
    icon: FaCompass,
    title: 'International Experience',
    desc: 'Operating across UAE, UK & Pakistan — proven results in diverse and competitive global markets.',
    bg: 'rgba(245,158,11,0.15)',
    color: '#f59e0b',
  },
];

/** How We Work — 5-step timeline (reference) */
export const processSteps = [
  {
    icon: FaSearch,
    num: '01',
    title: 'Discovery & Audit',
    desc: 'Market analysis, competitor mapping, and identifying your biggest growth lever.',
    iconBg: 'rgba(124,58,237,0.15)',
    iconColor: '#7c3aed',
  },
  {
    icon: FaMap,
    num: '02',
    title: 'Strategy Blueprint',
    desc: 'A custom growth plan — which channels, what infrastructure, and in what order.',
    iconBg: 'rgba(139,92,246,0.15)',
    iconColor: '#8b5cf6',
  },
  {
    icon: FaLayerGroup,
    num: '03',
    title: 'System Build',
    desc: 'We build your complete growth stack: brand, website, funnels, outreach & automation.',
    iconBg: 'rgba(240,90,40,0.15)',
    iconColor: '#f05a28',
  },
  {
    icon: FaRocket,
    num: '04',
    title: 'Launch & Execute',
    desc: 'Systems go live. Campaigns activate. Qualified leads start flowing within days.',
    iconBg: 'rgba(16,185,129,0.15)',
    iconColor: '#10b981',
  },
  {
    icon: FaChartBar,
    num: '05',
    title: 'Optimise & Scale',
    desc: 'We monitor, iterate, and compound — turning early results into long-term growth.',
    iconBg: 'rgba(234,179,8,0.15)',
    iconColor: '#eab308',
  },
];

/** What We Build — 5 infrastructure cards (reference) */
export const growthBuildCards = [
  {
    title: 'AI Outreach',
    icon: FaLinkedin,
    color: '#a78bfa',
    iconBg: '#7c3aed',
    glow: 'rgba(124, 58, 237, 0.55)',
    items: ['LinkedIn Sequences', 'Verified Lead Lists', 'CRM Integration'],
  },
  {
    title: 'Paid Social',
    icon: FaBullhorn,
    color: '#fb923c',
    iconBg: '#ea580c',
    glow: 'rgba(234, 88, 12, 0.55)',
    items: ['Meta & TikTok Ads', 'Precision Audiences', 'Retargeting Flows'],
  },
  {
    title: 'Web & Funnels',
    icon: FaGlobe,
    color: '#60a5fa',
    iconBg: '#2563eb',
    glow: 'rgba(37, 99, 235, 0.55)',
    items: ['Landing Pages', 'Lead Magnets', 'Conversion Tracking'],
  },
  {
    title: 'Email & CRM',
    icon: FaEnvelope,
    color: '#34d399',
    iconBg: '#059669',
    glow: 'rgba(5, 150, 105, 0.55)',
    items: ['Nurture Sequences', 'Pipeline Automation', 'Deal Tracking'],
  },
  {
    title: 'AI Automation',
    icon: FaMicrochip,
    color: '#facc15',
    iconBg: '#ca8a04',
    glow: 'rgba(202, 138, 4, 0.55)',
    items: ['Workflow Automation', 'AI Content Engine', 'Reporting Dashboards'],
  },
];

export const homeProofCards = [
  {
    slug: 'uae-tourism-startup',
    num: '01',
    watermark: '14',
    tag: 'TOURISM · UAE',
    tagColor: '#a78bfa',
    title: 'Zero to Six-Figure Revenue in 14 Days',
    desc: 'Built a complete digital ecosystem from zero — brand identity, 5-page SEO website, lead generation system, and social media launch. All connected. 50+ qualified leads and six-figure revenue in month one.',
    pills: ['Brand Identity', 'Lead Generation', 'Social Launch'],
    metrics: [
      { value: '50+', label: 'LEADS/MO' },
      { value: '6-Fig', label: 'REVENUE M1' },
      { value: '40%', label: 'REPEAT RATE' },
    ],
  },
  {
    slug: 'global-b2b-commodities',
    num: '02',
    watermark: '500+',
    tag: 'B2B COMMODITIES · GLOBAL',
    tagColor: '#f05a28',
    title: '500+ Qualified Leads in Week One Across 6 Markets',
    desc: 'Built an AI-powered outreach infrastructure with market-specific email sequences, LinkedIn intent targeting, and automated CRM workflows — no manual prospecting required. System still running 18+ months without rebuilds.',
    pills: ['AI Outreach', 'LinkedIn Targeting', 'CRM Automation'],
    metrics: [
      { value: '500+', label: 'LEADS WK 1' },
      { value: '6', label: 'MARKETS' },
      { value: '80%', label: 'LESS MANUAL WORK' },
    ],
  },
  {
    slug: 'uk-digital-agency',
    num: '03',
    watermark: '20%',
    tag: 'DIGITAL AGENCY · UK',
    tagColor: '#4ade80',
    title: '20% Efficiency Gain & 25% Time Reclaimed — Same Quarter',
    desc: 'Audited operations and built a standardised delivery framework: ICP definitions, A/B testing protocols, and automated client dashboards — turning manual reporting into strategic commentary.',
    pills: ['Operations', 'Campaign Framework', 'Reporting Automation'],
    metrics: [
      { value: '20%', label: 'EFFICIENCY GAIN' },
      { value: '35%', label: 'DELIVERY CONSISTENCY' },
      { value: '25%', label: 'TIME RECLAIMED' },
    ],
  },
];

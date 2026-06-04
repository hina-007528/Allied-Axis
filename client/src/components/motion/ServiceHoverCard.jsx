/** Static card shell — reference UI (no background video). Orange border beam via cardBorderGlow. */
const VARIANTS = {
  service: { card: 'srv-card', body: 'srv-card-body' },
  why: { card: 'why-card', body: 'why-card-body' },
  case: { card: 'case-card', body: 'case-card-body' },
};

export default function ServiceHoverCard({ variant = 'service', children, className = '', style }) {
  const { card: cardClass, body: bodyClass } = VARIANTS[variant] || VARIANTS.service;
  return (
    <div className={`${cardClass}${className ? ` ${className}` : ''}`} style={style}>
      <div className={bodyClass}>{children}</div>
    </div>
  );
}

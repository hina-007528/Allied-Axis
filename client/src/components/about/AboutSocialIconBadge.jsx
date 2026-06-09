/** Real brand icons for layer graphics (react-icons) */

export default function AboutSocialIconBadge({
  icon,
  label,
  className = '',
  delay = 0,
}) {
  return (
    <div
      className={`about-social-chip ${className}`}
      style={{ '--social-delay': `${delay}ms` }}
      title={label}
    >
      <span className="about-social-chip-icon" aria-hidden="true">{icon}</span>
    </div>
  );
}

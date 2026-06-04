/** Animated hero backdrop — orbs + glow (no video). */
export default function HeroBackground() {
  return (
    <div className="hero-bg-motion" aria-hidden="true">
      <div className="hero-orb hero-orb--purple" />
      <div className="hero-orb hero-orb--blue" />
      <div className="hero-orb hero-orb--orange" />
      <div className="hero-orb hero-orb--violet-sm" />
    </div>
  );
}

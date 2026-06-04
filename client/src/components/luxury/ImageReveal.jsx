/** Wrap existing images — same placement, GSAP mask reveal via data-image-reveal. */
export default function ImageReveal({ children, className = '' }) {
  return (
    <div className={`image-reveal ${className}`.trim()} data-image-reveal>
      <div className="image-reveal-inner">{children}</div>
    </div>
  );
}

/** Static blog cover with numbered overlay — reference blog (second_0090). */
const DEFAULT_OVERLAY = 'rgba(240, 90, 40, 0.45)';

export default function BlogCardMedia({
  src,
  alt = '',
  featured = false,
  fit = 'cover',
  objectPosition,
  index,
  overlay,
}) {
  const contain = fit === 'contain';
  const displayIndex = index != null ? String(index).padStart(2, '0') : null;

  return (
    <div
      className={`blog-card-media${featured ? ' blog-card-media--featured' : ''}${contain ? ' blog-card-media--contain' : ''}`}
    >
      {displayIndex && <span className="blog-card-index" aria-hidden="true">{displayIndex}</span>}
      <img
        src={src}
        alt={alt}
        className="blog-card-media__img"
        loading="lazy"
        decoding="async"
        style={objectPosition ? { objectPosition } : undefined}
      />
      {!contain && (
        <div
          className="blog-card-overlay"
          style={{ background: overlay || DEFAULT_OVERLAY }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

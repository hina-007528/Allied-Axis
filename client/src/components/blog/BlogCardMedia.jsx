/** Blog cover image with category overlay and index watermark (reference layout). */

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
      <img
        src={src}
        alt={alt}
        className="blog-card-media__img"
        loading={featured ? 'eager' : 'lazy'}
        decoding="async"
        style={objectPosition ? { objectPosition } : undefined}
      />
      {!contain && overlay && (
        <div
          className="blog-card-overlay"
          style={{ background: overlay }}
          aria-hidden="true"
        />
      )}
      {displayIndex && !contain && (
        <span className="blog-card-index" aria-hidden="true">
          {displayIndex}
        </span>
      )}
    </div>
  );
}

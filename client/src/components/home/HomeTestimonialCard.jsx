/** Home testimonials — reference layout (left-aligned, photo avatars) */
const AVATAR_IMAGES = [
  'https://i.pravatar.cc/96?img=32',
  'https://i.pravatar.cc/96?img=47',
  'https://i.pravatar.cc/96?img=12',
];

export default function HomeTestimonialCard({ testimonial, featured = false, index = 0 }) {
  const { quote, author, company, location, countryCode } = testimonial;
  const place = [location, countryCode].filter(Boolean).join(' ');
  const locationLine = [company, place].filter(Boolean).join(' · ');
  const avatarSrc = AVATAR_IMAGES[index % AVATAR_IMAGES.length];

  return (
    <article
      className={`home-testi-card${featured ? ' home-testi-card--featured' : ''}`}
    >
      <div className="home-testi-stars" aria-label="5 out of 5 stars">
        <span className="home-testi-star" aria-hidden="true">★</span>
        <span className="home-testi-star" aria-hidden="true">★</span>
        <span className="home-testi-star" aria-hidden="true">★</span>
        <span className="home-testi-star" aria-hidden="true">★</span>
        <span className="home-testi-star" aria-hidden="true">★</span>
      </div>
      <p className="home-testi-quote">&ldquo;{quote}&rdquo;</p>
      <div className="home-testi-author">
        <img
          className="home-testi-avatar"
          src={avatarSrc}
          alt=""
          width={44}
          height={44}
          loading="lazy"
          decoding="async"
        />
        <div className="home-testi-meta">
          <span className="home-testi-name">{author}</span>
          <span className="home-testi-role">{locationLine}</span>
        </div>
      </div>
    </article>
  );
}

import useInView from '../../hooks/useInView';
import {
  getTestimonialAvatar,
  getTestimonialDisplayName,
  getTestimonialImage,
  TESTIMONIAL_THEME_COLORS,
} from '../../data/testimonials';
import TestimonialAnimatedMetric from './TestimonialAnimatedMetric';

const FLAGS = { AE: '🇦🇪', GB: '🇬🇧', PK: '🇵🇰' };

export default function TestimonialCard({ testimonial, variant = 'grid' }) {
  const [ref, inView] = useInView(0.12);
  const {
    quote,
    company,
    location,
    countryCode,
    metric,
    theme = 'orange',
  } = testimonial;

  const accent = TESTIMONIAL_THEME_COLORS[theme] || TESTIMONIAL_THEME_COLORS.orange;
  const place = [location, countryCode].filter(Boolean).join(' ');
  const roleLine = [company, place, FLAGS[countryCode]].filter(Boolean).join(' · ');
  const avatarSrc = getTestimonialAvatar(testimonial);
  const contextImage = getTestimonialImage(testimonial);
  const displayName = getTestimonialDisplayName(testimonial);

  return (
    <article
      ref={ref}
      className={`testi-ref-card testi-ref-card--horizontal interactive-card testi-ref-card--${variant} testi-ref-card--${theme}`}
      style={{ '--testi-accent': accent, '--card-beam-accent': accent }}
    >
      <span className="testi-ref-topline" aria-hidden="true" />
      <div className="testi-ref-main">
        {contextImage && (
          <div className="testi-ref-visual">
            <img
              className="testi-ref-visual-img"
              src={contextImage}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div className="testi-ref-visual-overlay" aria-hidden="true" />
            {company && <span className="testi-ref-visual-badge">{company}</span>}
          </div>
        )}
        <span className="testi-ref-quote-mark" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote className="testi-ref-quote">&ldquo;{quote}&rdquo;</blockquote>
        <footer className="testi-ref-footer">
          <img
            className="testi-ref-avatar"
            src={avatarSrc}
            alt={displayName}
            width={44}
            height={44}
            loading="lazy"
            decoding="async"
          />
          <div className="testi-ref-meta">
            <span className="testi-ref-name">{displayName}</span>
            <span className="testi-ref-role">{roleLine}</span>
          </div>
          <div className="testi-ref-stars" aria-label="5 out of 5 stars">
            {'★★★★★'}
          </div>
        </footer>
      </div>
      {metric && (
        <aside className="testi-ref-side" aria-label="Key result">
          <TestimonialAnimatedMetric
            value={metric.value}
            label={metric.label}
            active={inView}
            variant="sidebar"
            accent={accent}
          />
        </aside>
      )}
    </article>
  );
}

import useInView from '../../hooks/useInView';
import {
  TESTIMONIAL_AVATARS,
  TESTIMONIAL_THEME_COLORS,
} from '../../data/testimonials';
import TestimonialAnimatedMetric from './TestimonialAnimatedMetric';

const FLAGS = { AE: '🇦🇪', GB: '🇬🇧', PK: '🇵🇰' };

export default function TestimonialCard({ testimonial, variant = 'grid' }) {
  const [ref, inView] = useInView(0.12);
  const {
    quote,
    author,
    company,
    location,
    countryCode,
    metric,
    theme = 'orange',
    avatarIndex = 0,
  } = testimonial;

  const accent = TESTIMONIAL_THEME_COLORS[theme] || TESTIMONIAL_THEME_COLORS.orange;
  const place = [location, countryCode].filter(Boolean).join(' ');
  const roleLine = [company, place, FLAGS[countryCode]].filter(Boolean).join(' · ');
  const avatarSrc = TESTIMONIAL_AVATARS[avatarIndex % TESTIMONIAL_AVATARS.length];

  return (
    <article
      ref={ref}
      className={`testi-ref-card interactive-card testi-ref-card--${variant} testi-ref-card--${theme}`}
      style={{ '--testi-accent': accent, '--card-beam-accent': accent }}
    >
      {metric && (
        <TestimonialAnimatedMetric
          value={metric.value}
          label={metric.label}
          active={inView}
          variant={variant === 'featured' ? 'badge' : 'headline'}
          accent={accent}
        />
      )}
      <span className="testi-ref-quote-mark" aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className="testi-ref-quote">&ldquo;{quote}&rdquo;</blockquote>
      <footer className="testi-ref-footer">
        <img
          className="testi-ref-avatar"
          src={avatarSrc}
          alt=""
          width={44}
          height={44}
          loading="lazy"
          decoding="async"
        />
        <div className="testi-ref-meta">
          <span className="testi-ref-name">{author}</span>
          <span className="testi-ref-role">{roleLine}</span>
        </div>
        <div className="testi-ref-stars" aria-label="5 out of 5 stars">
          {'★★★★★'}
        </div>
      </footer>
    </article>
  );
}

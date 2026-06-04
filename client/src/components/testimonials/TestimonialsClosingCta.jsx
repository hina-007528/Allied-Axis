import ContactCta from '../common/ContactCta';
import { testimonialsClosingCta } from '../../data/testimonialsPageContent';

export default function TestimonialsClosingCta() {
  const { heading, headingAccent, sub, ctaLabel } = testimonialsClosingCta;

  return (
    <section className="section testimonials-closing-cta">
      <div className="testimonials-closing-cta-glow" aria-hidden="true" />
      <div className="container testimonials-closing-cta-inner">
        <h2 className="testimonials-closing-cta-heading">
          {heading}{' '}
          <span className="testimonials-closing-cta-heading-accent">{headingAccent}</span>
        </h2>
        <p className="testimonials-closing-cta-sub">{sub}</p>
        <ContactCta className="btn btn-hero-primary testimonials-closing-cta-btn" arrow>
          {ctaLabel}
        </ContactCta>
      </div>
    </section>
  );
}

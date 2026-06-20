import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { testimonialsClosingCta } from '../../data/testimonialsPageContent';

export default function TestimonialsClosingCta() {
  const { heading, headingAccent, sub } = testimonialsClosingCta;

  return (
    <section className="section testimonials-closing-cta">
      <div className="testimonials-closing-cta-glow" aria-hidden="true" />
      <div className="container testimonials-closing-cta-inner">
        <h2 className="testimonials-closing-cta-heading">
          {heading}{' '}
          <span className="testimonials-closing-cta-heading-accent">{headingAccent}</span>
        </h2>
        <p className="testimonials-closing-cta-sub">{sub}</p>
        <Link to="/contact" className="btn btn-hero-primary testimonials-closing-cta-btn">
          Get in Touch <FaArrowRight className="btn-arrow" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

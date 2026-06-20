import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { servicesClosingCta } from '../../data/servicesClosingCta';

export default function ServicesClosingCta() {
  const { heading, headingAccent, sub } = servicesClosingCta;

  return (
    <section className="section services-closing-cta">
      <div className="services-closing-cta-glow" aria-hidden="true" />
      <div className="container services-closing-cta-inner">
        <h2 className="services-closing-cta-heading">
          {heading} <span className="services-closing-cta-heading-accent">{headingAccent}</span>
        </h2>
        <p className="services-closing-cta-sub">{sub}</p>
        <Link to="/portfolio" className="btn btn-hero-primary services-closing-cta-btn">
          View Our Portfolio <FaArrowRight className="btn-arrow" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

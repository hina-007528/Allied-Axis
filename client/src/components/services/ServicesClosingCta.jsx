import { FaWhatsapp } from 'react-icons/fa';
import { servicesClosingCta } from '../../data/servicesClosingCta';

export default function ServicesClosingCta() {
  const { heading, headingAccent, sub, whatsappHref, whatsappLabel } = servicesClosingCta;

  return (
    <section className="section services-closing-cta">
      <div className="services-closing-cta-glow" aria-hidden="true" />
      <div className="container services-closing-cta-inner">
        <h2 className="services-closing-cta-heading">
          {heading} <span className="services-closing-cta-heading-accent">{headingAccent}</span>
        </h2>
        <p className="services-closing-cta-sub">{sub}</p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-hero-primary services-closing-cta-btn"
        >
          <FaWhatsapp aria-hidden="true" />
          {whatsappLabel}
        </a>
      </div>
    </section>
  );
}

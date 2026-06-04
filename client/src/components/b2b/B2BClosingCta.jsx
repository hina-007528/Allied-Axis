import ContactCta from '../common/ContactCta';
import { b2bClosingCta } from '../../data/b2bPageContent';

export default function B2BClosingCta() {
  const { heading, headingAccent, sub, ctaLabel } = b2bClosingCta;

  return (
    <section className="section b2b-closing-cta">
      <div className="container b2b-closing-cta-inner">
        <h2 className="b2b-closing-cta-heading">
          {heading} <span className="b2b-closing-cta-heading-accent">{headingAccent}</span>
        </h2>
        <p className="b2b-closing-cta-sub">{sub}</p>
        <ContactCta className="btn btn-hero-primary b2b-closing-cta-btn" arrow>
          {ctaLabel}
        </ContactCta>
      </div>
    </section>
  );
}

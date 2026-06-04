import ContactCta from '../common/ContactCta';

export default function AboutClosingCta() {
  return (
    <section className="section about-closing-cta">
      <div className="about-closing-cta-glow" aria-hidden="true" />
      <div className="container about-closing-cta-inner">
        <span className="about-closing-cta-label">READY TO GROW?</span>
        <h2 className="about-closing-cta-heading">
          Growth Is <span className="about-closing-cta-heading-accent">Engineered</span>
        </h2>
        <p className="about-closing-cta-lead">
          Tell us about your business and we&apos;ll build a custom growth plan — free.
        </p>
        <p className="about-closing-cta-note">
          No retainer required. No pressure. Just a real strategy session.
        </p>
        <ContactCta className="btn btn-hero-primary about-closing-cta-btn" arrow>
          Book Strategy Call
        </ContactCta>
      </div>
    </section>
  );
}

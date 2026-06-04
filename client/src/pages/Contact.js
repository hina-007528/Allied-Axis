import { useEffect } from 'react';
import SEO from '../components/common/SEO';
import ContactPageHero from '../components/contact/ContactPageHero';
import ContactInfoPanel from '../components/contact/ContactInfoPanel';
import ContactFormPanel from '../components/contact/ContactFormPanel';
import { initCardBorderGlow } from '../utils/cardBorderGlow';

export default function Contact() {
  useEffect(() => {
    const id = window.requestAnimationFrame(() => initCardBorderGlow());
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <div className="contact-page">
      <SEO
        title="Contact Allied Axis | Book a Free Strategy Call"
        description="Get in touch with Allied Axis. Book a free 30-minute strategy consultation. UAE: +971 58 588 2972. Email: info@alliedaxis.digital"
        canonical="/contact"
      />

      <ContactPageHero />

      <section className="section section-gray contact-section">
        <div className="container">
          <div className="contact-layout">
            <ContactInfoPanel />
            <ContactFormPanel />
          </div>
        </div>
      </section>
    </div>
  );
}

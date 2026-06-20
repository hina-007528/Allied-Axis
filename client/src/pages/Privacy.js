import SEO from '../components/common/SEO';

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" canonical="/privacy" />
      <section className="page-header"><div className="container"><h1 className="sec-heading">Privacy Policy</h1><p className="sec-sub">Last updated: January 2026</p></div></section>
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="blog-post-content">
            <h2>Information We Collect</h2>
            <p>We collect information you provide directly: name, email, phone number, and company details when you submit a contact form or subscribe to our newsletter. We also collect usage data through cookies and analytics to improve our services.</p>
            <h2>How We Use Your Information</h2>
            <p>We use your information to respond to inquiries, provide our services, send relevant communications (with your consent), and improve our website experience. We never sell your personal data to third parties.</p>
            <h2>Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information. All data transmission is encrypted using SSL/TLS protocols.</p>
            <h2>Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at <a href="mailto:info@alliedaxis.digital">info@alliedaxis.digital</a>.</p>
            <h2>Contact</h2>
            <p>For privacy-related inquiries: <a href="mailto:info@alliedaxis.digital">info@alliedaxis.digital</a> | +971 58 588 2972</p>
          </div>
        </div>
      </section>
    </>
  );
}

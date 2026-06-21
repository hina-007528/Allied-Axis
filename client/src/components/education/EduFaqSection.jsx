import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import useInView from '../../hooks/useInView';

const faqs = [
  {
    q: 'We already use WhatsApp to manage inquiries. Why do we need a system?',
    a: 'Using WhatsApp to receive messages is not a system. Without centralised tracking, a documented follow-up schedule, and performance reporting, inquiries get lost during busy periods. A system makes the process independent of who\'s available and when.',
  },
  {
    q: 'Our admissions coordinator handles everything. Isn\'t that sufficient?',
    a: 'No. When the entire process depends on one person, it stops when they\'re absent, overwhelmed, or leave. You also lose the ability to see pipeline data. Leadership is flying blind.',
  },
  {
    q: 'How long does implementation take, and will it disrupt our current operations?',
    a: '7 to 14 days. Zero disruption. The system is built alongside your current process. Your team is trained before any switchover happens. It runs on tools you already use.',
  },
  {
    q: 'Does this work for colleges and universities too?',
    a: 'Yes. We configure the system to match each institution\'s specific inquiry journey and admission cycle. A college managing FSc admissions has different touchpoints than a school managing primary intake. We adapt accordingly. For universities and larger institutes, let\'s discuss fit first.',
  },
  {
    q: 'What tools or software do we need to buy?',
    a: 'None. No new software. No subscriptions. The system runs on WhatsApp Business and Google Sheets. Your staff operates it independently without technical expertise beyond the two training sessions.',
  },
  {
    q: 'How do we measure ROI on this?',
    a: 'Calculate your current monthly inquiry volume during peak season. Estimate your conversion rate. Multiply by your average annual fee per student. That number — what each additional conversion is worth — is what this system is measured against. We calculate that for every institution before any commitment.',
  },
];

const assessmentBullets = [
  'How do admission inquiries arrive?',
  'Who is responsible for follow-up, and when?',
  'How are inquiries tracked between first contact and decision?',
  'What happens when a family doesn\'t respond after the first reply?',
];

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`edu-faq-item ${open ? 'edu-faq-item--open' : ''}`}>
      <button
        className="edu-faq-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        id={`edu-faq-btn-${index}`}
        aria-controls={`edu-faq-panel-${index}`}
      >
        <span className="edu-faq-q">{item.q}</span>
        <span className="edu-faq-chevron" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <div
        id={`edu-faq-panel-${index}`}
        className="edu-faq-panel"
        role="region"
        aria-labelledby={`edu-faq-btn-${index}`}
        style={{ maxHeight: open ? '300px' : '0' }}
      >
        <p className="edu-faq-answer">{item.a}</p>
      </div>
    </div>
  );
}

export default function EduFaqSection() {
  const [ref, visible] = useInView(0.1);

  return (
    <section className="section section-dark edu-faq-section">
      <div className="container">
        <div
          ref={ref}
          className={`edu-section-header fade-in ${visible ? 'visible' : ''}`}
        >
          <span className="sec-label">Common Questions</span>
          <h2 className="sec-heading" style={{ color: '#fff' }}>
            What School Leadership{' '}
            <span className="accent">Usually Asks</span>
          </h2>
          <p className="sec-sub center" style={{ color: 'var(--text-on-dark-muted)' }}>
            Everything school principals, vice-principals, and registrars ask before getting started.
          </p>
        </div>

        <div className="edu-faq-list">
          {faqs.map((item, i) => (
            <FaqItem key={i} item={item} index={i} />
          ))}
        </div>

        {/* CTA box from PDF */}
        <div className="edu-faq-cta-box">
          <h3 className="edu-faq-cta-title">Free 10-Minute Admissions Assessment</h3>
          <p className="edu-faq-cta-text">
            We will ask four questions about how your institution currently handles inquiries:
          </p>
          <ul className="edu-faq-cta-list">
            {assessmentBullets.map((b, i) => (
              <li key={i}>• {b}</li>
            ))}
          </ul>
          <p className="edu-faq-cta-text">
            We will then show you where the biggest operational gaps typically appear at
            institutions your size. No pitch. No proposal. Just direct diagnosis.
          </p>
          <a
            href="https://wa.me/923251518471"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary edu-cta-btn-primary"
          >
            <FaWhatsapp aria-hidden />
            Book Your Free 10-Minute Assessment →
          </a>
        </div>
      </div>
    </section>
  );
}

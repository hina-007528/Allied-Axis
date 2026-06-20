import { useState } from 'react';
import useInView from '../../hooks/useInView';

const faqs = [
  {
    q: 'Why a system if we already use WhatsApp?',
    a: 'Receiving messages is not a system. Without central tracking, leads get lost during peak rushes — especially when multiple staff members handle inquiries inconsistently.',
  },
  {
    q: 'What software do we need to buy?',
    a: 'None. The setup runs entirely on WhatsApp Business and Google Sheets — zero subscription fees, zero new software licenses. Your team likely already has both.',
  },
  {
    q: 'How do we measure ROI?',
    a: 'Simple: multiply your recovered admissions by your average student annual fee. If you recover 9 students at Rs. 50,000/year, that\'s Rs. 450,000+ per month in additional revenue.',
  },
  {
    q: 'What is the investment?',
    a: 'Pilot Growth Package: Rs. 25,000 (normal price Rs. 50,000). Payment: Rs. 12,500 advance + Rs. 12,500 on go-live. Optional branded social media pack (10 Canva templates): Rs. 15,000.',
  },
  {
    q: 'How long before we see results?',
    a: 'The system goes live in 14 days. Improved response rates are immediate. Measurable conversion improvements typically appear within the first 2–4 weeks of operation.',
  },
  {
    q: 'Do you work with all types of educational institutions?',
    a: 'Yes — private schools (Cambridge, Matric, O/A-Level), colleges (FSc, FA, ICS, ICom), and universities/institutes (BBA, BS, MBA). The system scales to your inquiry volume.',
  },
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
          <span className="sec-label">FAQs</span>
          <h2 className="sec-heading" style={{ color: '#fff' }}>
            Common{' '}
            <span className="accent">Questions</span>
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
      </div>
    </section>
  );
}

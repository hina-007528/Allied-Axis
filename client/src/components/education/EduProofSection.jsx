import useInView from '../../hooks/useInView';

const results = [
  'Response delays dropped — automated acknowledgements + documented process',
  'Inquiry form completion rate improved — parents felt the responsiveness',
  'Structured follow-up launched — families got consistent touchpoints',
  'Leadership now sees weekly pipeline data — instead of season-end estimates',
];

export default function EduProofSection() {
  const [ref, visible] = useInView(0.1);

  return (
    <section className="section edu-proof-section">
      <div className="container">
        <div
          ref={ref}
          className={`edu-section-header fade-in ${visible ? 'visible' : ''}`}
        >
          <span className="sec-label">Real School. Real System.</span>
          <h2 className="sec-heading">
            From Reactive Chaos to{' '}
            <span className="accent">Predictable Pipeline</span>
          </h2>
          <p className="sec-sub center">
            One case study from Islamabad. Not a projection. What actually happened.
          </p>
        </div>

        <div className={`edu-proof-card fade-in ${visible ? 'visible' : ''}`}>
          <div className="edu-proof-badge">Private School · Islamabad B-17 Sector</div>
          
          <div className="edu-proof-story">
            <p>
              A private school in B-17, Islamabad. Strong academic reputation.
              8,300+ Facebook followers. Families were reaching out consistently.
            </p>
            <p className="edu-proof-highlight">
              The issue: no infrastructure to handle it.
            </p>
            <p>
              Inquiries arrived via four different channels with no central tracking.
              Families experienced significant response delays. Most received zero
              follow-up after the initial contact. One staff member managed everything.
              During busy periods, the entire process broke down.
            </p>
            <p>
              We audited the inquiry journey end-to-end. The gaps were visible immediately.
              The solution was systematic.
            </p>
            <p>
              We built and deployed a complete inquiry management system in 14 days.
              WhatsApp Business configured. Google Sheets tracker set up. Follow-up workflow
              documented. Staff trained. Handed over.
            </p>
          </div>

          <div className="edu-proof-results">
            <h3 className="edu-proof-results-title">What Happened:</h3>
            <ul className="edu-proof-results-list">
              {results.map((r, i) => (
                <li key={i} className="edu-proof-result-item">
                  <span className="edu-proof-check" aria-hidden="true">✓</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="edu-proof-timeline-badge">
            <span className="edu-proof-timeline-icon" aria-hidden="true">⏱️</span>
            <span><strong>Timeline:</strong> 14 days from audit to fully operational system</span>
          </div>

          <p className="edu-proof-note">
            Case study details available after initial conversation.
          </p>
        </div>
      </div>
    </section>
  );
}

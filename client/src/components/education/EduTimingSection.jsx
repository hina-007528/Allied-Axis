import useInView from '../../hooks/useInView';

const bulletPoints = [
  'Private schools across Islamabad, Rawalpindi, Lahore, and Karachi all compete for the same families',
  'Parents compare. They contact 3–4 schools simultaneously',
  'WhatsApp is now the primary admission channel — and the most forgotten one',
  'Your current parents are your underutilized asset — structured communication keeps them engaged',
  'Leadership cannot fix what it cannot measure. You need weekly pipeline data, not season-end guesses',
];

export default function EduTimingSection() {
  const [ref, visible] = useInView(0.1);

  return (
    <section className="section section-dark edu-timing-section">
      <div className="container">
        <div
          ref={ref}
          className={`edu-section-header fade-in ${visible ? 'visible' : ''}`}
        >
          <span className="sec-label">The Timing</span>
          <h2 className="sec-heading" style={{ color: '#fff' }}>
            Admission Cycles Are Your Busiest Window.{' '}
            <span className="accent">Most Schools Collapse Into Chaos.</span>
          </h2>
        </div>

        <div className={`edu-timing-layout fade-in ${visible ? 'visible' : ''}`}>
          <div className="edu-timing-left">
            <p className="edu-timing-text">
              The schools that win admission season are not the ones with the best reputation or
              lowest fees. They're the ones with an operational system that doesn't rely on one
              person's memory.
            </p>
            <p className="edu-timing-text">
              Every cycle, families contact multiple schools. The institution that responds fastest and
              follows up consistently gets the enrollment.
            </p>
          </div>
          <div className="edu-timing-right">
            <ul className="edu-timing-list">
              {bulletPoints.map((bp, i) => (
                <li key={i} className="edu-timing-bullet">
                  <span className="edu-timing-bullet-icon" aria-hidden="true">→</span>
                  <span>{bp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

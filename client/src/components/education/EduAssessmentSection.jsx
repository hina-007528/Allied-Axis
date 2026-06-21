import { FaWhatsapp } from 'react-icons/fa';
import useInView from '../../hooks/useInView';

const questions = [
  'How do admission inquiries currently arrive — WhatsApp, phone, walk-in, Facebook, other?',
  'Who is responsible for following up, and what is the actual follow-up timeline?',
  'How are active inquiries tracked between first contact and enrolment decision?',
  'What happens to a family that doesn\'t respond after the first reply?',
];

export default function EduAssessmentSection() {
  const [ref, visible] = useInView(0.1);

  return (
    <section className="section edu-assessment-section">
      <div className="container">
        <div
          ref={ref}
          className={`edu-section-header fade-in ${visible ? 'visible' : ''}`}
        >
          <span className="sec-label">Free Assessment</span>
          <h2 className="sec-heading">
            Not Sure Where Your Admissions Process{' '}
            <span className="accent">Is Breaking?</span>
          </h2>
          <p className="sec-sub center">
            Four questions reveal the gap in almost every school we speak with.
          </p>
        </div>

        <div className={`edu-assessment-card fade-in ${visible ? 'visible' : ''}`}>
          <h3 className="edu-assessment-subtitle">Four questions we ask:</h3>
          <ol className="edu-assessment-questions">
            {questions.map((q, i) => (
              <li key={i} className="edu-assessment-q">
                <span className="edu-assessment-num">{i + 1}</span>
                <span>{q}</span>
              </li>
            ))}
          </ol>
          <p className="edu-assessment-note">
            These four questions expose where most schools are broken. Sometimes
            it's one area. Sometimes it's all four. Either way, understanding where
            the system fails is the first step to fixing it.
          </p>

          <div className="edu-assessment-cta">
            <a
              href="https://wa.me/923251518471"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary edu-cta-btn-primary edu-btn-assessment"
            >
              <FaWhatsapp aria-hidden />
              Book Your Free 10-Minute Assessment →
            </a>
            <p className="edu-assessment-fine">
              No proposal. No obligation. Direct assessment only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

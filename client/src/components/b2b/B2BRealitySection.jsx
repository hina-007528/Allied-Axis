import { b2bProblems, b2bSolutions } from '../../data/b2bPage';
import {
  b2bRealityIntro,
  b2bProblemCard,
  b2bSolutionCard,
} from '../../data/b2bPageContent';

export default function B2BRealitySection() {
  const { label, heading, headingAccent } = b2bRealityIntro;

  return (
    <section className="section section-gray b2b-reality-section">
      <div className="container">
        <header className="b2b-reality-header">
          <span className="b2b-reality-label">{label}</span>
          <h2 className="b2b-reality-heading">
            {heading} <span className="b2b-reality-heading-accent">{headingAccent}</span>
          </h2>
        </header>

        <div className="b2b-reality-grid">
          <article className="b2b-problem-card interactive-card">
            <h3 className="b2b-compare-title">
              <span className="b2b-compare-dot b2b-compare-dot--problem" aria-hidden="true" />
              {b2bProblemCard.title}
            </h3>
            <ul className="b2b-compare-list b2b-compare-list--problem">
              {b2bProblems.map((item) => (
                <li key={item}>
                  <span className="b2b-compare-icon b2b-compare-icon--x" aria-hidden="true">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="b2b-solution-card interactive-card">
            <h3 className="b2b-compare-title">
              <span className="b2b-compare-dot b2b-compare-dot--solution" aria-hidden="true" />
              {b2bSolutionCard.title}
            </h3>
            <ul className="b2b-compare-list b2b-compare-list--solution">
              {b2bSolutions.map((item) => (
                <li key={item}>
                  <span className="b2b-compare-icon b2b-compare-icon--check" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { b2bClosingCta } from '../../data/b2bPageContent';

export default function B2BClosingCta() {
  const { heading, headingAccent, sub } = b2bClosingCta;

  return (
    <section className="section b2b-closing-cta">
      <div className="container b2b-closing-cta-inner">
        <h2 className="b2b-closing-cta-heading">
          {heading} <span className="b2b-closing-cta-heading-accent">{headingAccent}</span>
        </h2>
        <p className="b2b-closing-cta-sub">{sub}</p>
        <Link to="/education" className="btn btn-hero-primary b2b-closing-cta-btn">
          See Education Systems <FaArrowRight className="btn-arrow" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

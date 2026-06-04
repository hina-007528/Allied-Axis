import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { useCaseStudies } from '../context/SiteDataContext';
import DataLoading from '../components/common/DataLoading';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const { caseStudies, loading } = useCaseStudies();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (loading && !cs) {
    return <DataLoading />;
  }

  if (!cs) {
    return (
      <section
        className="section"
        style={{
          textAlign: 'center',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <h2>Case study not found</h2>
          <Link to="/portfolio" className="btn btn-primary" style={{ marginTop: 20 }}>
            Back to Portfolio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO title={cs.title} description={cs.problem.substring(0, 155)} canonical={`/portfolio/${cs.slug}`} />
      <section className="page-header">
        <div className="container" style={{ maxWidth: 800 }}>
          <Link
            to="/portfolio"
            style={{
              fontSize: 14,
              color: 'var(--orange)',
              fontWeight: 600,
              marginBottom: 16,
              display: 'inline-block',
            }}
          >
            ← Back to Portfolio
          </Link>
          <span className="case-tag" style={{ display: 'inline-block', marginBottom: 12 }}>
            {cs.industry}
          </span>
          <h1 className="sec-heading">{cs.title}</h1>
          <p style={{ fontSize: 14, color: 'var(--muted)' }}>Market: {cs.market}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ fontSize: 24, marginBottom: 16 }}>The Problem</h2>
          <p style={{ fontSize: 16, color: 'var(--text-light)', lineHeight: 1.75, marginBottom: 40 }}>
            {cs.problem}
          </p>

          <h2 style={{ fontSize: 24, marginBottom: 16 }}>The Solution</h2>
          <p style={{ fontSize: 16, color: 'var(--text-light)', lineHeight: 1.75, marginBottom: 16 }}>
            {cs.solution}
          </p>
          <ul style={{ marginBottom: 40 }}>
            {(cs.solutionPoints || []).map((p, i) => (
              <li
                key={i}
                style={{
                  fontSize: 15,
                  color: 'var(--text-light)',
                  lineHeight: 1.7,
                  marginBottom: 8,
                  paddingLeft: 24,
                  position: 'relative',
                }}
              >
                <span style={{ position: 'absolute', left: 0, color: 'var(--orange)', fontWeight: 700 }}>
                  ●
                </span>
                {p}
              </li>
            ))}
          </ul>

          <h2 style={{ fontSize: 24, marginBottom: 16 }}>Results</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 40 }}>
            {(cs.results || []).map((r, i) => (
              <div key={i} className="result-pill" style={{ padding: 20, background: 'var(--gray-50)', borderRadius: 12 }}>
                <strong style={{ fontSize: 28, color: 'var(--orange)', display: 'block' }}>{r.metric}</strong>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>{r.value}</span>
              </div>
            ))}
          </div>

          {cs.testimonial?.quote && (
            <blockquote style={{ borderLeft: '4px solid var(--orange)', paddingLeft: 24, fontStyle: 'italic', color: 'var(--text-light)' }}>
              &ldquo;{cs.testimonial.quote}&rdquo;
              <footer style={{ marginTop: 12, fontStyle: 'normal', fontWeight: 600 }}>
                — {cs.testimonial.author}, {cs.testimonial.role}
              </footer>
            </blockquote>
          )}
        </div>
      </section>
    </>
  );
}

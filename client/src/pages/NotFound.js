import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" />
      <section className="not-found-section">
        <div>
          <div className="not-found-code">404</div>
          <h1 className="not-found-title">Page Not Found</h1>
          <p style={{ color: 'var(--muted)', marginBottom: 32 }}>The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="btn btn-primary">Back to Home →</Link>
        </div>
      </section>
    </>
  );
}

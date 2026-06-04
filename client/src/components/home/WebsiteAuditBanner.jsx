import { useState } from 'react';
import { contactService } from '../../services/api';

function AuditIllustration() {
  return (
    <div className="home-audit-illus" aria-hidden="true">
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="36" width="12" height="28" rx="3" fill="#7c3aed" opacity="0.9" />
        <rect x="24" y="24" width="12" height="40" rx="3" fill="#3b82f6" opacity="0.9" />
        <rect x="40" y="30" width="12" height="34" rx="3" fill="#f05a28" opacity="0.9" />
        <rect x="56" y="18" width="12" height="46" rx="3" fill="#10b981" opacity="0.9" />
        <path
          d="M44 12 L52 20 L36 20 Z"
          fill="#eab308"
          opacity="0.95"
        />
        <circle cx="58" cy="14" r="10" fill="#a78bfa" opacity="0.35" />
      </svg>
    </div>
  );
}

export default function WebsiteAuditBanner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus({ type: 'error', msg: 'Please enter a valid email address.' });
      return;
    }

    setLoading(true);
    setStatus(null);
    try {
      await contactService.submit({
        name: 'Website Audit Request',
        email: trimmed,
        message: 'Requested free website audit from homepage banner.',
        service: 'Free Website Audit',
        source: 'home-audit-banner',
      });
      setStatus({
        type: 'success',
        msg: 'Thanks! We will send your free audit report soon.',
      });
      setEmail('');
    } catch (err) {
      setStatus({
        type: 'error',
        msg: err.message || 'Unable to submit. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-audit-banner">
      <div className="home-audit-banner-inner">
        <AuditIllustration />
        <div className="home-audit-copy">
          <span className="sec-label">Free Resource</span>
          <h3 className="home-audit-title">Get Your Free Website Audit</h3>
          <p className="home-audit-desc">
            A custom report to uncover growth opportunities, SEO, and lead generation gaps.
          </p>
        </div>
        <form className="home-audit-form" onSubmit={handleSubmit} noValidate>
          <label className="visually-hidden" htmlFor="home-audit-email">
            Email address
          </label>
          <input
            id="home-audit-email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            autoComplete="email"
            required
          />
          <button type="submit" className="btn btn-hero-primary home-audit-submit" disabled={loading}>
            {loading ? 'Sending…' : 'Send Me the Audit'}
            {!loading && <span className="btn-arrow" aria-hidden="true">→</span>}
          </button>
          {status && (
            <p className={`home-audit-status home-audit-status--${status.type}`} role="status">
              {status.msg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

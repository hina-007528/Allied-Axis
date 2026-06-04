import { useState } from 'react';
import { MdOutlineChatBubbleOutline, MdOutlineSchedule } from 'react-icons/md';
import {
  contactFormContent,
  contactServiceOptions,
  contactBudgetOptions,
} from '../../data/contactPageContent';
import { contactService } from '../../services/api';
import { getApiBase } from '../../utils/apiBase';

export default function ContactFormPanel() {
  const [tab, setTab] = useState('message');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      if (!/^https?:\/\//i.test(getApiBase())) {
        setStatus({
          type: 'error',
          msg: 'Site configuration error: API URL is missing. Please email info@alliedaxis.digital',
        });
        setLoading(false);
        return;
      }

      const data = await contactService.submit({ ...form, intent: tab });
      if (data.success) {
        setStatus({
          type: 'success',
          msg: 'Thank you! We will reach out within 2 hours to schedule your consultation.',
        });
        setForm({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: '',
        });
      } else {
        setStatus({ type: 'error', msg: data.error || 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({
        type: 'error',
        msg: 'Unable to submit. Please email us at info@alliedaxis.digital',
      });
    }
    setLoading(false);
  };

  const heading =
    tab === 'call' ? contactFormContent.headings.call : contactFormContent.headings.message;

  return (
    <div
      className="contact-panel contact-form-card interactive-card"
      style={{ '--card-beam-accent': 'neutral' }}
    >
      <div className="contact-tabs" role="tablist" aria-label="Contact options">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'message'}
          className={`contact-tab${tab === 'message' ? ' active' : ''}`}
          onClick={() => setTab('message')}
        >
          <MdOutlineChatBubbleOutline size={18} aria-hidden="true" />
          {contactFormContent.messageTab}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'call'}
          className={`contact-tab${tab === 'call' ? ' active' : ''}`}
          onClick={() => setTab('call')}
        >
          <MdOutlineSchedule size={18} aria-hidden="true" />
          {contactFormContent.callTab}
        </button>
      </div>

      <h2 className="contact-form-heading">{heading}</h2>
      <p className="contact-form-note">{contactFormContent.note}</p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        {status && (
          <div className={status.type === 'success' ? 'form-success' : 'form-error'} role="alert">
            {status.msg}
          </div>
        )}

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-name">
              Full Name <span className="contact-required">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={form.name}
              onChange={onChange}
              required
              placeholder="Your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">
              Email Address <span className="contact-required">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-company">
              Business Name <span className="contact-required">*</span>
            </label>
            <input
              type="text"
              id="contact-company"
              name="company"
              value={form.company}
              onChange={onChange}
              required
              placeholder="Your company"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-phone">
              Phone / WhatsApp <span className="contact-required">*</span>
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              value={form.phone}
              onChange={onChange}
              required
              placeholder="+971 58 588 2972"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-service">
              Service Interested In <span className="contact-required">*</span>
            </label>
            <select
              id="contact-service"
              name="service"
              value={form.service}
              onChange={onChange}
              required
            >
              {contactServiceOptions.map((opt) => (
                <option key={opt.value || 'empty'} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="contact-budget">
              Monthly Marketing Budget <span className="contact-required">*</span>
            </label>
            <select id="contact-budget" name="budget" value={form.budget} onChange={onChange} required>
              {contactBudgetOptions.map((opt) => (
                <option key={opt.value || 'empty-budget'} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="contact-message">
            Tell us about your business, goals, and biggest challenges…{' '}
            <span className="contact-required">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={form.message}
            onChange={onChange}
            required
            rows={5}
            placeholder="Share where you are today and what success looks like in 90 days…"
          />
        </div>

        <button
          type="submit"
          className="btn btn-hero-primary contact-form-submit"
          disabled={loading}
        >
          {loading ? 'Sending…' : contactFormContent.submitLabel}
          {!loading && <span className="btn-arrow" aria-hidden="true"> →</span>}
        </button>

        <p className="contact-trust">
          <span className="contact-trust-icon" aria-hidden="true">
            ◎
          </span>
          {contactFormContent.trust}
        </p>
      </form>
    </div>
  );
}

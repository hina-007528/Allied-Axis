import { useRef, useState } from 'react';
import { MdOutlineChatBubbleOutline, MdOutlineSchedule } from 'react-icons/md';
import {
  contactFormContent,
  contactServiceOptions,
  contactBudgetOptions,
} from '../../data/contactPageContent';
import { contactService } from '../../services/api';
import { getApiBase } from '../../utils/apiBase';
import {
  FIELD_LIMITS,
  formSecurityFields,
  honeypotInputProps,
  validateContactForm,
} from '../../utils/formValidation';

function FormHoneypot({ value, onChange }) {
  return (
    <div
      className="form-honeypot"
      aria-hidden="true"
      style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
    >
      <label htmlFor="contact-website-url">Website URL</label>
      <input
        {...honeypotInputProps}
        type="text"
        id="contact-website-url"
        name="websiteUrl"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default function ContactFormPanel() {
  const formStartedAt = useRef(Date.now());
  const [tab, setTab] = useState('message');
  const [honeypot, setHoneypot] = useState('');
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

    const validation = validateContactForm(form);
    if (!validation.ok) {
      setStatus({ type: 'error', msg: validation.message });
      setLoading(false);
      return;
    }

    const payload = {
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      company: form.company.trim(),
      service: form.service,
      budget: form.budget,
      message: form.message.trim(),
      intent: tab,
      ...formSecurityFields(formStartedAt.current, honeypot),
    };

    try {
      if (!/^https?:\/\//i.test(getApiBase())) {
        setStatus({
          type: 'error',
          msg: 'Site configuration error: API URL is missing. Please email info@alliedaxis.digital',
        });
        setLoading(false);
        return;
      }

      const data = await contactService.submit(payload);
      if (data.success) {
        const emailNote =
          data.emailSent === false
            ? ' (Saved, but email alert failed — we will still follow up.)'
            : '';
        setStatus({
          type: 'success',
          msg: `Thank you! We will reach out within 2 hours to schedule your consultation.${emailNote}`,
        });
        if (data.emailSent === false && data.emailError) {
          console.warn('Contact email not sent:', data.emailError);
        }
        formStartedAt.current = Date.now();
        setForm({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: '',
        });
        setHoneypot('');
      } else {
        setStatus({ type: 'error', msg: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        msg: err?.message || 'Unable to submit. Please email us at info@alliedaxis.digital',
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
        <FormHoneypot value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />

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
              minLength={2}
              maxLength={FIELD_LIMITS.name}
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
              maxLength={FIELD_LIMITS.email}
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
              minLength={2}
              maxLength={FIELD_LIMITS.company}
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
              maxLength={FIELD_LIMITS.phone}
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
                <option key={opt.value || 'empty'} value={opt.value} disabled={!opt.value}>
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
                <option key={opt.value || 'empty-budget'} value={opt.value} disabled={!opt.value}>
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
            minLength={10}
            maxLength={FIELD_LIMITS.message}
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

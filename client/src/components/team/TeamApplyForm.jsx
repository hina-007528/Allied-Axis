import { useRef, useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { getApiBase } from '../../utils/apiBase';
import {
  FIELD_LIMITS,
  formSecurityFields,
  honeypotInputProps,
  validateApplyForm,
} from '../../utils/formValidation';

export default function TeamApplyForm() {
  const formStartedAt = useRef(Date.now());
  const fileRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', role: '' });
  const [honeypot, setHoneypot] = useState('');
  const [cvFile, setCvFile] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileError, setFileError] = useState(null);

  const onFileChange = (file) => {
    setFileError(null);
    if (!file) return;

    const validation = validateApplyForm(form, file);
    if (!validation.ok) {
      setFileError(validation.message);
      setCvFile(null);
      if (fileRef.current) fileRef.current.value = '';
      return;
    }
    setCvFile(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const validation = validateApplyForm(form, cvFile);
    if (!validation.ok) {
      if (validation.message.includes('CV')) {
        setFileError(validation.message);
      } else {
        setStatus({ type: 'error', msg: validation.message });
      }
      return;
    }

    setLoading(true);
    setStatus(null);
    setFileError(null);

    const security = formSecurityFields(formStartedAt.current, honeypot);
    const body = new FormData();
    body.append('name', form.name.trim());
    body.append('email', form.email.trim().toLowerCase());
    body.append('role', form.role.trim());
    body.append('cv', cvFile);
    body.append('formStartedAt', String(security.formStartedAt));
    body.append('websiteUrl', security.websiteUrl);

    try {
      if (!/^https?:\/\//i.test(getApiBase())) {
        setStatus({
          type: 'error',
          msg: 'Site configuration error. Please email info@alliedaxis.digital',
        });
        setLoading(false);
        return;
      }

      const res = await fetch(`${getApiBase()}/team/apply`, {
        method: 'POST',
        body,
      });

      let data = {};
      try {
        data = await res.json();
      } catch {
        data = {};
      }

      if (!res.ok) {
        setStatus({
          type: 'error',
          msg: data.error || `Unable to submit (${res.status}). Please try again.`,
        });
        setLoading(false);
        return;
      }

      if (data.success) {
        setStatus({
          type: 'success',
          msg:
            data.message ||
            'Thank you! Your application was received. We will review it and get back to you soon.',
        });
        setForm({ name: '', email: '', role: '' });
        setCvFile(null);
        setHoneypot('');
        formStartedAt.current = Date.now();
        if (fileRef.current) fileRef.current.value = '';
      } else {
        setStatus({
          type: 'error',
          msg: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        msg: err?.message || 'Unable to submit. Please try again or email info@alliedaxis.digital',
      });
    }

    setLoading(false);
  };

  return (
    <form className="team-apply-form" onSubmit={onSubmit} noValidate>
      <div
        className="form-honeypot"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
      >
        <label htmlFor="apply-website-url">Website URL</label>
        <input
          {...honeypotInputProps}
          type="text"
          id="apply-website-url"
          name="websiteUrl"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="team-apply-grid">
        <label className="team-apply-field">
          <span className="team-apply-label">
            Full Name <span className="team-apply-required">*</span>
          </span>
          <input
            type="text"
            name="name"
            required
            minLength={2}
            maxLength={FIELD_LIMITS.name}
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>
        <label className="team-apply-field">
          <span className="team-apply-label">
            Email Address <span className="team-apply-required">*</span>
          </span>
          <input
            type="email"
            name="email"
            required
            maxLength={FIELD_LIMITS.email}
            placeholder="your@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </label>
        <label className="team-apply-field team-apply-field--full">
          <span className="team-apply-label">
            Role You&apos;re Applying For{' '}
            <span className="team-apply-optional">(optional)</span>
          </span>
          <input
            type="text"
            name="role"
            maxLength={FIELD_LIMITS.role}
            placeholder="e.g. Graphic Designer, Social Media Manager..."
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          />
        </label>
        <div className="team-apply-field team-apply-field--full">
          <span className="team-apply-label">
            Upload Your CV <span className="team-apply-required">*</span>
          </span>
          <input
            ref={fileRef}
            type="file"
            className="team-apply-file-input"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(e) => onFileChange(e.target.files?.[0])}
          />
          <button
            type="button"
            className="team-apply-dropzone"
            onClick={() => fileRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              onFileChange(e.dataTransfer.files?.[0]);
            }}
          >
            <FaUpload className="team-apply-dropzone-icon" aria-hidden="true" />
            <span className="team-apply-dropzone-title">Drag &amp; drop or click to upload</span>
            <span className="team-apply-dropzone-hint">PDF, DOC, DOCX · Max 5 MB</span>
            {cvFile && <span className="team-apply-dropzone-file">{cvFile.name}</span>}
          </button>
          {fileError && (
            <p className="team-apply-file-error" role="alert">
              {fileError}
            </p>
          )}
        </div>
      </div>

      {status && (
        <div
          className={status.type === 'success' ? 'form-success' : 'form-error'}
          role="alert"
        >
          {status.msg}
        </div>
      )}

      <button
        type="submit"
        className="btn btn-hero-primary team-apply-submit"
        disabled={!cvFile || loading}
      >
        {loading ? 'Submitting…' : 'Submit Application →'}
      </button>
    </form>
  );
}

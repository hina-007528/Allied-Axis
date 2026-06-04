import { Link } from 'react-router-dom';

/** Primary site CTA — matches reference orange button text "Contact" */
export default function ContactCta({ className = 'nav-cta', children = 'Contact', arrow = false, style }) {
  return (
    <Link to="/contact" className={className} style={style}>
      {children}
      {arrow ? <span className="btn-arrow" aria-hidden="true"> →</span> : null}
    </Link>
  );
}

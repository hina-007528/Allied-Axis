import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContactCta from '../common/ContactCta';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setScrolled(false);
  }, [pathname]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/b2b-growth', label: 'B2B Growth' },
    { to: '/education', label: 'Education' },
    { to: '/team', label: 'Team' },
    { to: '/blog', label: 'Blog' },
    { to: '/testimonials', label: 'Testimonials' },
    // { to: '/contact', label: 'Contact' },
  ];

  const isActive = (to) => pathname === to || (to !== '/' && pathname.startsWith(to));

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <img src="/images/logo.png" alt="Allied Axis" />
          </Link>
          <div className="nav-links">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={isActive(l.to) ? 'active' : ''}
              >
                {l.label}
              </Link>
            ))}
            <ContactCta>Contact</ContactCta>
          </div>
          <button
            className={`hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      <div className={`mobile-menu${open ? ' open' : ''}`} role="navigation">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className={isActive(l.to) ? 'active' : ''}>
            {l.label}
          </Link>
        ))}
        <ContactCta className="mob-cta">Book Strategy Call</ContactCta>
      </div>
    </nav>
  );
}

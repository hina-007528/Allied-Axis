import { Link } from 'react-router-dom';
import ContactCta from '../common/ContactCta';
import { FaLinkedinIn, FaInstagram, FaTiktok, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/logo.png" alt="Allied Axis" className="footer-logo" />
            <p>Allied Axis builds AI-powered revenue systems for growth-focused B2B businesses. Strategy-first execution — from brand identity to lead generation.</p>
            <p style={{ marginBottom: 20, fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>Operating across UAE · UK · Pakistan</p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/alliedaxisdigital/" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/alliedaxis.digital" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.tiktok.com/@alliedaxis.digital" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="TikTok"><FaTiktok /></a>
              <a href="https://www.facebook.com/share/1BNmoRzsfN/" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://whatsapp.com/channel/0029VbChter1XquTFIOVZr38" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Essential Launch</Link></li>
              <li><Link to="/services">Growth Launch</Link></li>
              <li><Link to="/services">Complete Launch</Link></li>
              <li><Link to="/services">SEO & Organic</Link></li>
              <li><Link to="/services">Social Media Mgmt</Link></li>
              <li><Link to="/services">Lead Generation</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/b2b-growth">B2B Growth</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col footer-col--contact">
            <h4>Contact</h4>
            <div className="footer-contact">
              <a href="mailto:info@alliedaxis.digital" className="footer-contact-item">
                <FaEnvelope aria-hidden />
                <span>info@alliedaxis.digital</span>
              </a>
              <a href="https://wa.me/971585882972" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <FaPhone aria-hidden />
                <span>+971 58 588 2972</span>
              </a>
              <a href="https://wa.me/923251518471" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <FaPhone aria-hidden />
                <span>+92 325 1518471</span>
              </a>
              <p className="footer-contact-item footer-contact-item--static">
                <FaGlobe aria-hidden />
                <span>UAE · UK · Pakistan</span>
              </p>
            </div>
            <ContactCta className="footer-contact-cta" arrow>
              Book Strategy Call
            </ContactCta>
          </div>
        </div>
        <div className="footer-bar">
          <p>© {new Date().getFullYear()} Allied Axis. All rights reserved. Where strategy meets scalable growth.</p>
          <div className="footer-bar-links">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

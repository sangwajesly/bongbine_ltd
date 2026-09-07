import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO, BUSINESS_DIVISIONS } from '../data/companyData';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Company Overview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Logo light={true} />
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
              {COMPANY_INFO.aboutParagraph1}
            </p>
            <div style={{ marginTop: '0.5rem' }}>
              <span style={{ color: 'var(--orange)', fontWeight: '600', fontSize: '0.9rem', fontStyle: 'italic', fontFamily: 'var(--font-heading)' }}>
                "{COMPANY_INFO.tagline}"
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About Bongbine
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/our-business" className="footer-link">
                  Our Business
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Divisions */}
          <div>
            <h3 className="footer-heading">Business Divisions</h3>
            <ul className="footer-links">
              {BUSINESS_DIVISIONS.map((division) => (
                <li key={division.id}>
                  <Link to={`/services#${division.id}`} className="footer-link">
                    {division.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-links">
              <li style={{ display: 'flex', items: 'flex-start', gap: '0.75rem' }}>
                <MapPin style={{ color: 'var(--orange)', shrink: 0, marginTop: '0.2rem' }} size={18} />
                <span style={{ color: '#CBD5E1', fontSize: '0.88rem' }}>{COMPANY_INFO.contact.address}</span>
              </li>
              <li style={{ display: 'flex', items: 'center', gap: '0.75rem' }}>
                <Phone style={{ color: 'var(--orange)', shrink: 0 }} size={18} />
                <a href={`tel:${COMPANY_INFO.contact.phone1.replace(/\s+/g, '')}`} className="footer-link">
                  {COMPANY_INFO.contact.phone1}
                </a>
              </li>
              <li style={{ display: 'flex', items: 'center', gap: '0.75rem' }}>
                <MessageSquare style={{ color: 'var(--orange)', shrink: 0 }} size={18} />
                <a href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  WhatsApp Direct
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li style={{ display: 'flex', items: 'center', gap: '0.75rem' }}>
                <Mail style={{ color: 'var(--orange)', shrink: 0 }} size={18} />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="footer-link">
                  {COMPANY_INFO.contact.email}
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1.25rem' }}>
              <a href={COMPANY_INFO.contact.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#1E293B', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: '#CBD5E1' }} aria-label="LinkedIn">
                <svg style={{ width: '16px', height: '16px', fill: 'currentColor', margin: 'auto' }} viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/></svg>
              </a>
              <a href={COMPANY_INFO.contact.socials.twitter} target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#1E293B', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: '#CBD5E1' }} aria-label="Twitter">
                <svg style={{ width: '16px', height: '16px', fill: 'currentColor', margin: 'auto' }} viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
              </a>
              <a href={COMPANY_INFO.contact.socials.facebook} target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#1E293B', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: '#CBD5E1' }} aria-label="Facebook">
                <svg style={{ width: '16px', height: '16px', fill: 'currentColor', margin: 'auto' }} viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>
              </a>
              <a href={COMPANY_INFO.contact.socials.instagram} target="_blank" rel="noopener noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#1E293B', display: 'flex', alignItems: 'center', justifyCenter: 'center', color: '#CBD5E1' }} aria-label="Instagram">
                <svg style={{ width: '16px', height: '16px', fill: 'currentColor', margin: 'auto' }} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Bongbine Ltd. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span>Bongbine Ltd</span>
              <span>•</span>
              <span style={{ color: 'var(--orange)' }}>Where Business Meets Family</span>
            </div>
            <span style={{ color: '#334155' }}>|</span>
            <a 
              href="https://wa.me/237682833601?text=Hello%20Sangwa%2C%20I%20saw%20your%20work%20on%20the%20Bongbine%20Ltd%20website%20and%20would%20like%20to%20connect." 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s ease', fontSize: '0.85rem' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--white)'}
              onMouseLeave={(e) => e.target.style.color = '#94A3B8'}
            >
              Built by <span style={{ color: 'var(--white)', fontWeight: '600' }}>Sangwa Jesly</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

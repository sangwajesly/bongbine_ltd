import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Properties', path: '/properties' },
  { name: 'House Plans', path: '/plans' },
  { name: 'Past Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo */}
        <Logo light={false} />

        {/* Desktop Nav */}
        <ul className="nav-menu">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="desktop-cta">
          <Link to="/contact" className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
            Contact Us
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li style={{ paddingTop: '0.75rem' }}>
            <Link to="/contact" className="btn-primary" style={{ width: '100%' }}>
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

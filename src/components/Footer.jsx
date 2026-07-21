import { ArrowRight, Globe, Mail, MapPin, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks, services } from "../data/content";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">Bongbine Ltd</p>
          <h3>Building growth with disciplined execution.</h3>
          <p>
            A modern corporate group focused on real estate, construction,
            materials, trade and logistics.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            {services.slice(0, 4).map((service) => (
              <li key={service.title}>
                <Link to="/services">{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="contact-list">
            <li>
              <MapPin size={16} /> Bonapriso Business Tower, Douala, Cameroon
            </li>
            <li>
              <Phone size={16} />{" "}
              <a href="tel:+237650000000">+237 650 000 000</a>
            </li>
            <li>
              <Phone size={16} />{" "}
              <a href="tel:+237699000000">+237 699 000 000</a>
            </li>
            <li>
              <Mail size={16} />{" "}
              <a href="mailto:info@bongbine.cm">info@bongbine.cm</a>
            </li>
          </ul>
          <div className="social-links">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Globe size={18} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Globe size={18} />
            </a>
            <a
              href="https://wa.me/237650000000"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <Send size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Bongbine Ltd. All rights reserved.</p>
        <Link to="/contact">
          Request a consultation <ArrowRight size={16} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

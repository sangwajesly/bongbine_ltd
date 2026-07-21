import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import { COMPANY_INFO } from '../data/companyData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Real Estate',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      {/* Page Hero */}
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with Bongbine Ltd. We welcome inquiries, business partnerships, and client engagements."
        badge="Get In Touch"
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3rem' }}>
            
            {/* Contact Details & Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <span className="section-eyebrow">Reach Out Directly</span>
                <h2 className="section-title-text" style={{ fontSize: '2.25rem' }}>
                  Let's Connect
                </h2>
                <p style={{ color: 'var(--muted-text)', fontSize: '1rem' }}>
                  Our team is ready to assist you across all real estate, building supplies, transport, and trade divisions.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Office Address */}
                <div className="contact-info-card">
                  <div className="contact-icon-bubble">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="contact-info-title">Corporate Headquarters</h4>
                    <p style={{ color: '#475569', fontSize: '0.9rem' }}>
                      {COMPANY_INFO.contact.address}
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="contact-info-card">
                  <div className="contact-icon-bubble">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="contact-info-title">Phone Lines</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', fontSize: '0.9rem' }}>
                      <a href={`tel:${COMPANY_INFO.contact.phone1.replace(/\s+/g, '')}`} style={{ color: 'var(--navy)', fontWeight: '600' }}>
                        {COMPANY_INFO.contact.phone1}
                      </a>
                      <a href={`tel:${COMPANY_INFO.contact.phone2.replace(/\s+/g, '')}`} style={{ color: 'var(--navy)', fontWeight: '600' }}>
                        {COMPANY_INFO.contact.phone2}
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="contact-info-card">
                  <div className="contact-icon-bubble orange-bg">
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <h4 className="contact-info-title">WhatsApp Instant Chat</h4>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--orange)', fontWeight: '700', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                    >
                      Chat on WhatsApp Directly
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>

                {/* Email Addresses */}
                <div className="contact-info-card">
                  <div className="contact-icon-bubble">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="contact-info-title">Email Inquiries</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', fontSize: '0.9rem' }}>
                      <a href={`mailto:${COMPANY_INFO.contact.email}`} style={{ color: 'var(--navy)', fontWeight: '600' }}>
                        {COMPANY_INFO.contact.email}
                      </a>
                      <a href={`mailto:${COMPANY_INFO.contact.contactEmail}`} style={{ color: 'var(--navy)', fontWeight: '600' }}>
                        {COMPANY_INFO.contact.contactEmail}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="contact-info-card">
                  <div className="contact-icon-bubble">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="contact-info-title">Business Hours</h4>
                    <p style={{ color: '#475569', fontSize: '0.88rem' }}>
                      {COMPANY_INFO.contact.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <div>
              <div className="form-card">
                <span className="section-eyebrow">Send A Message</span>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '1.5rem' }}>
                  Inquire With Our Corporate Team
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ backgroundColor: 'var(--white)', padding: '2.5rem', borderRadius: '1.25rem', textAlign: 'center', border: '1px solid #A7F3D0' }}
                  >
                    <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', backgroundColor: '#D1FAE5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                      <CheckCircle2 size={36} />
                    </div>
                    <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '0.5rem' }}>
                      Message Received!
                    </h4>
                    <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                      Thank you for contacting Bongbine Ltd. A representative will review your inquiry and respond shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Jean Paul"
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. jean@example.com"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+237..."
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Division of Interest</label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="form-select"
                        >
                          <option value="Real Estate">Real Estate</option>
                          <option value="Construction">Construction</option>
                          <option value="Building Materials">Building Materials</option>
                          <option value="Transport & Logistics">Transport & Logistics</option>
                          <option value="Import & Export">Import & Export</option>
                          <option value="General Partnership">General Partnership</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can Bongbine Ltd assist you?"
                        className="form-textarea"
                      />
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                      Send Message
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import PageHero from '../components/PageHero';
import { RevealText } from '../components/EditorialReveal';

const Contact = () => {
  return (
    <div>
      <PageHero
        title="Contact Bongbine"
        subtitle="Connect with our specialists for integrated real estate, construction, logistics, and trade solutions."
        badge="Get In Touch"
      />

      <section className="py-loose" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="grid-asymmetric">
            {/* Left: Contact Info (Structural List) */}
            <div style={{ paddingRight: '2rem' }}>
              <RevealText>
                <span className="orange-slash">/</span>
                <span className="text-label">Direct Lines</span>
                <h2 className="text-heading-lg" style={{ marginTop: '1.5rem', marginBottom: '3rem' }}>
                  Operational<br/>Headquarters.
                </h2>
              </RevealText>
              
              <div className="editorial-list">
                <RevealText delay={0.1} className="editorial-list-item" style={{ gridTemplateColumns: '1fr' }}>
                  <h4 className="text-label" style={{ color: 'var(--orange)' }}>Address</h4>
                  <p className="text-body-lg" style={{ color: 'var(--navy)', fontWeight: '600' }}>
                    {COMPANY_INFO.contact.address}
                  </p>
                </RevealText>
                
                <RevealText delay={0.2} className="editorial-list-item" style={{ gridTemplateColumns: '1fr' }}>
                  <h4 className="text-label" style={{ color: 'var(--orange)' }}>Phone & WhatsApp</h4>
                  <p className="text-body-lg" style={{ color: 'var(--navy)', fontWeight: '600' }}>
                    {COMPANY_INFO.contact.phone1}
                  </p>
                </RevealText>

                <RevealText delay={0.3} className="editorial-list-item" style={{ gridTemplateColumns: '1fr' }}>
                  <h4 className="text-label" style={{ color: 'var(--orange)' }}>Email</h4>
                  <p className="text-body-lg" style={{ color: 'var(--navy)', fontWeight: '600' }}>
                    {COMPANY_INFO.contact.email}
                  </p>
                </RevealText>

                <RevealText delay={0.4} className="editorial-list-item" style={{ gridTemplateColumns: '1fr' }}>
                  <h4 className="text-label" style={{ color: 'var(--orange)' }}>Operating Hours</h4>
                  <p className="text-body-sm" style={{ color: 'var(--navy)' }}>
                    Monday - Friday: 8:00 AM - 5:00 PM<br/>
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </RevealText>
              </div>
            </div>

            {/* Right: Brutalist Form */}
            <RevealText delay={0.2}>
              <div style={{ backgroundColor: 'var(--light-bg)', padding: '4rem', border: '1px solid var(--border-color)' }}>
                <h3 className="text-heading-md" style={{ marginBottom: '2.5rem' }}>
                  Submit an Inquiry
                </h3>
                
                <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div>
                      <label className="text-label" style={{ display: 'block', marginBottom: '0.75rem' }}>First Name</label>
                      <input type="text" className="contact-form-input" placeholder="John" required />
                    </div>
                    <div>
                      <label className="text-label" style={{ display: 'block', marginBottom: '0.75rem' }}>Last Name</label>
                      <input type="text" className="contact-form-input" placeholder="Doe" required />
                    </div>
                  </div>

                  <div>
                    <label className="text-label" style={{ display: 'block', marginBottom: '0.75rem' }}>Email Address</label>
                    <input type="email" className="contact-form-input" placeholder="john@company.com" required />
                  </div>

                  <div>
                    <label className="text-label" style={{ display: 'block', marginBottom: '0.75rem' }}>Division of Interest</label>
                    <select className="contact-form-input" required>
                      <option value="">Select a division...</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="construction">Construction</option>
                      <option value="materials">Building Materials</option>
                      <option value="logistics">Transport & Logistics</option>
                      <option value="trade">Import & Export</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-label" style={{ display: 'block', marginBottom: '0.75rem' }}>Message</label>
                    <textarea className="contact-form-input" rows="5" placeholder="How can we help you?" required></textarea>
                  </div>

                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem', borderRadius: '0', padding: '1.25rem 3rem' }}>
                    Send Message
                  </button>
                </form>
              </div>
            </RevealText>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

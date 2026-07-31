import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Building2, HardHat, Boxes, Truck, Globe } from 'lucide-react';
import PageHero from '../components/PageHero';
import { BUSINESS_DIVISIONS } from '../data/companyData';

const iconMap = { Building2, HardHat, Boxes, Truck, Globe };

const Services = () => {
  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive infrastructure, supply chain, real estate, and global trade capabilities built on dependable execution."
        badge="Bongbine Ltd"
        bgImage="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Navigation Pills */}
      <section style={{ backgroundColor: 'var(--navy)', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '1.25rem 0', position: 'sticky', top: '74px', zIndex: 30 }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem', scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="hide-scrollbar">
            {BUSINESS_DIVISIONS.map((div) => (
              <a
                key={div.id}
                href={`#${div.id}`}
                style={{
                  padding: '0.5rem 1.15rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#E2E8F0',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '600',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => { e.target.style.backgroundColor = 'var(--orange)'; e.target.style.color = '#fff'; e.target.style.borderColor = 'var(--orange)'; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.target.style.color = '#E2E8F0'; e.target.style.borderColor = 'rgba(255,255,255,0.15)'; }}
              >
                {div.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {BUSINESS_DIVISIONS.map((division, idx) => {
        const IconComp = iconMap[division.iconName] || Building2;
        const isEven = idx % 2 === 0;

        return (
          <section
            id={division.id}
            key={division.id}
            className="section-padding"
            style={{ backgroundColor: isEven ? 'var(--white)' : 'var(--light-bg)', scrollMarginTop: '140px' }}
          >
            <div className="container">
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '3rem',
                alignItems: 'center'
              }}>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ order: isEven ? 0 : 1 }}
                >
                  <div style={{ position: 'relative', borderRadius: '1.25rem', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                    <img
                      src={division.image}
                      alt={`Bongbine ${division.title}`}
                      style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(31,42,68,0.7), transparent)' }} />
                    <div style={{
                      position: 'absolute', top: '1rem', left: '1rem',
                      width: '48px', height: '48px', borderRadius: '0.75rem',
                      backgroundColor: 'var(--orange)', color: 'var(--white)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <IconComp size={24} />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 25 : -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', order: isEven ? 1 : 0 }}
                >
                  <div>
                    <span className="section-eyebrow">Business Division</span>
                    <h2 className="section-title-text" style={{ marginBottom: '0.75rem' }}>
                      {division.title}
                    </h2>
                    <p style={{ color: 'var(--muted-text)', fontSize: '1.05rem', lineHeight: '1.75' }}>
                      {division.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 style={{
                      fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: '700',
                      color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.08em',
                      marginBottom: '1rem'
                    }}>
                      Key Capabilities
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                      {division.capabilities.map((cap) => (
                        <div key={cap} style={{
                          display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
                          fontSize: '0.92rem', color: 'var(--muted-text)'
                        }}>
                          <CheckCircle2 size={18} style={{ color: 'var(--orange)', flexShrink: 0, marginTop: '2px' }} />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ paddingTop: '0.75rem' }}>
                    <Link to="/contact" className="btn-primary">
                      Contact Division Specialist
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <span className="section-eyebrow">Integrated Approach</span>
            <h2 className="cta-heading">Need a Customized Enterprise Solution?</h2>
            <p className="cta-subtext">
              Bongbine combines real estate, supply logistics, building materials, and trade services under one unified point of contact.
            </p>
            <Link to="/contact" className="btn-primary">
              Request Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

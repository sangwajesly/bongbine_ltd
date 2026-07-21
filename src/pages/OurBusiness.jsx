import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Building2, Globe, Boxes, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import { BUSINESS_DIVISIONS, COMPANY_INFO } from '../data/companyData';

const businessHighlights = [
  {
    title: "Multisectoral Integration",
    description: "Unifying real estate development, supply chain logistics, building material distribution, and international trade under a single corporate umbrella.",
    icon: Layers
  },
  {
    title: "Supply Chain Dependability",
    description: "Direct control over material procurement, transport fleets, and distribution networks ensures uninterrupted project delivery for our partners.",
    icon: Truck
  },
  {
    title: "Regional & Global Trade Networks",
    description: "Robust import-export channels and cross-border partnerships connecting regional infrastructure needs with global suppliers.",
    icon: Globe
  },
  {
    title: "Quality & Assurance Standards",
    description: "Strict quality control protocols applied across all materials, structural projects, and logistics operations.",
    icon: ShieldCheck
  }
];

const OurBusiness = () => {
  return (
    <div>
      <PageHero
        title="Our Operations & Structure"
        subtitle="Exploring the operational structure, multi-sector capabilities, and commercial strength of Bongbine Ltd."
        badge="Bongbine Ltd"
        bgImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80"
      />

      {/* 1. OVERVIEW & CAPABILITY FRAMEWORK */}
      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Operational Framework</span>
            <h2 className="section-title-text">A Diversified Commercial Group</h2>
            <p className="section-description">
              Bongbine operates with an integrated multi-divisional model that allows us to manage complex infrastructure and commercial lifecycles seamlessly.
            </p>
          </div>

          <div className="grid-4">
            {businessHighlights.map((hl, idx) => {
              const IconComp = hl.icon;
              return (
                <motion.div
                  key={hl.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  style={{
                    backgroundColor: 'var(--light-bg)',
                    borderRadius: '1.25rem',
                    padding: '2rem',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{
                    width: '3rem', height: '3rem', borderRadius: '0.75rem',
                    backgroundColor: 'var(--navy)', color: 'var(--orange)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <IconComp size={24} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '0.6rem' }}>
                    {hl.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--muted-text)', lineHeight: '1.65' }}>
                    {hl.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. DIVISIONAL CAPABILITY SHOWCASE */}
      <section className="section-padding section-bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Enterprise Sectors</span>
            <h2 className="section-title-text">Divisional Capabilities</h2>
            <p className="section-description">
              Detailed focus on key capabilities driving each of our business divisions.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {BUSINESS_DIVISIONS.map((division, idx) => (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                style={{
                  backgroundColor: 'var(--white)',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  border: '1px solid var(--border-color)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                  gap: '2rem',
                  alignItems: 'center'
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', minHeight: '250px' }}>
                  <img
                    src={division.image}
                    alt={division.title}
                    style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(31,42,68,0.65), transparent)' }} />
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', color: 'var(--white)' }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.72rem', fontWeight: '700', color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Core Sector
                    </span>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '700', color: 'var(--white)', marginTop: '0.15rem' }}>
                      Bongbine {division.title}
                    </h4>
                  </div>
                </div>

                {/* Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '700', color: 'var(--navy)' }}>
                    {division.title} Division
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--muted-text)', lineHeight: '1.7' }}>
                    {division.fullDescription}
                  </p>

                  <div>
                    <h5 style={{
                      fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: '700',
                      color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.08em',
                      marginBottom: '0.75rem'
                    }}>
                      Key Service Pillars:
                    </h5>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
                      {division.capabilities.map((cap) => (
                        <div key={cap} style={{
                          display: 'flex', alignItems: 'center', gap: '0.5rem',
                          fontSize: '0.85rem', color: 'var(--muted-text)',
                          backgroundColor: 'var(--light-bg)', padding: '0.6rem 0.75rem',
                          borderRadius: '0.6rem', border: '1px solid var(--border-color)'
                        }}>
                          <CheckCircle2 size={16} style={{ color: 'var(--orange)', flexShrink: 0 }} />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ paddingTop: '0.5rem' }}>
                    <Link
                      to={`/services#${division.id}`}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                        fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: '700',
                        color: 'var(--orange)', textDecoration: 'none'
                      }}
                    >
                      Learn More About {division.title}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BRAND PROMISE CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <span className="section-eyebrow">Corporate Promise</span>
            <h2 className="cta-heading">Partner With Bongbine Ltd</h2>
            <p className="cta-subtext" style={{ fontStyle: 'italic' }}>
              "{COMPANY_INFO.brandPromise}"
            </p>
            <Link to="/contact" className="btn-primary">
              Get In Touch With Our Team
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBusiness;

import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { BUSINESS_DIVISIONS } from '../data/companyData';

const Services = () => {
  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive infrastructure, supply chain, real estate, and global trade capabilities built on dependable execution."
        badge="Bongbine Ltd"
        bgImage="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&crop=edges&w=1920&q=80"
      />

      {/* Navigation Sticky Bar */}
      <section style={{ backgroundColor: 'var(--navy)', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '1.25rem 0', position: 'sticky', top: '74px', zIndex: 30 }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }} className="hide-scrollbar">
            {BUSINESS_DIVISIONS.map((div) => (
              <a
                key={div.id}
                href={`#${div.id}`}
                className="text-label"
                style={{ color: 'var(--white)', transition: 'color 0.2s ease', whiteSpace: 'nowrap' }}
              >
                {div.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Magazine Layout (Static) */}
      <section className="py-standard" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          {BUSINESS_DIVISIONS.map((division, idx) => (
            <div
              id={division.id}
              key={division.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '4rem',
                borderTop: idx === 0 ? 'none' : '1px solid var(--border-color)',
                paddingTop: idx === 0 ? '0' : '5rem',
                paddingBottom: '5rem',
                scrollMarginTop: '140px'
              }}
              className="editorial-service-row"
            >
              {/* Sticky Left Column */}
              <div style={{ position: 'sticky', top: '160px', alignSelf: 'start' }}>
                <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', fontWeight: '800', color: 'var(--orange)', marginBottom: '1rem' }}>
                  0{idx + 1}.
                </div>
                <h2 className="text-heading-md" style={{ marginBottom: '1rem' }}>
                  {division.title}
                </h2>
                <Link to="/contact" className="text-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                  Engage Division
                </Link>
              </div>

              {/* Scrolling Right Column */}
              <div>
                <img
                  src={division.image}
                  alt={division.title}
                  style={{ width: '100%', height: '400px', objectFit: 'cover', marginBottom: '3rem' }}
                />
                
                <p className="text-body-lg" style={{ color: 'var(--navy)', fontWeight: '600', marginBottom: '2rem' }}>
                  {division.fullDescription}
                </p>

                <div className="structural-line" style={{ margin: '2.5rem 0' }} />

                <h4 className="text-label" style={{ color: 'var(--orange)', marginBottom: '1.5rem' }}>
                  Key Capabilities
                </h4>
                <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  {division.capabilities.map((cap) => (
                    <li key={cap} className="text-body-sm" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{ color: 'var(--orange)', fontWeight: '800', marginTop: '-2px' }}>/</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-loose" style={{ backgroundColor: 'var(--navy)', textAlign: 'center', color: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="orange-slash">/</span>
          <span className="text-label" style={{ color: 'var(--white)', opacity: 0.8 }}>
            Integrated Approach
          </span>
          <h2 className="text-heading-lg" style={{ color: 'var(--white)', marginTop: '2rem', marginBottom: '2rem' }}>
            Need a Customized Enterprise Solution?
          </h2>
          <p className="text-body-lg" style={{ marginBottom: '3rem', marginX: 'auto', color: 'rgba(255,255,255,0.8)' }}>
            Bongbine combines real estate, supply logistics, building materials, and trade services under one unified point of contact.
          </p>
          <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'var(--white)', color: 'var(--navy)', borderColor: 'var(--white)', borderRadius: '0' }}>
            Request Consultation
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .editorial-service-row {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .editorial-service-row > div:first-child {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;

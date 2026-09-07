import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { BUSINESS_DIVISIONS, COMPANY_INFO } from '../data/companyData';

const businessHighlights = [
  {
    title: "Multisectoral Integration",
    description: "Unifying real estate development, supply chain logistics, building material distribution, and international trade under a single corporate umbrella."
  },
  {
    title: "Supply Chain Dependability",
    description: "Direct control over material procurement, transport fleets, and distribution networks ensures uninterrupted project delivery for our partners."
  },
  {
    title: "Regional & Global Trade Networks",
    description: "Robust import-export channels and cross-border partnerships connecting regional infrastructure needs with global suppliers."
  },
  {
    title: "Quality & Assurance Standards",
    description: "Strict quality control protocols applied across all materials, structural projects, and logistics operations."
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
      <section className="py-loose" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="grid-asymmetric">
            <div>
              <span className="orange-slash">/</span>
              <span className="text-label">
                Operational Framework
              </span>
              <h2 className="text-heading-lg" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                A Diversified Commercial Group.
              </h2>
              <p className="text-body-lg" style={{ color: 'var(--navy)' }}>
                Bongbine operates with an integrated multi-divisional model that allows us to manage complex infrastructure and commercial lifecycles seamlessly.
              </p>
            </div>

            <div className="editorial-list">
              {businessHighlights.map((hl, idx) => (
                <div key={hl.title} className="editorial-list-item" style={{ gridTemplateColumns: '40px 1fr', gap: '1.5rem', padding: '2rem 0' }}>
                  <div className="editorial-number" style={{ fontSize: '1rem' }}>
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: '800', color: 'var(--navy)', marginBottom: '0.75rem' }}>
                      {hl.title}
                    </h3>
                    <p className="text-body-sm">
                      {hl.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIVISIONAL CAPABILITY SHOWCASE */}
      <section className="py-standard" style={{ backgroundColor: 'var(--light-bg)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <span className="orange-slash">/</span>
            <span className="text-label">
              Enterprise Sectors
            </span>
            <h2 className="text-heading-md" style={{ marginTop: '1.5rem' }}>
              Divisional Capabilities
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {BUSINESS_DIVISIONS.map((division, idx) => (
              <div key={division.id} className={idx % 2 === 0 ? "grid-asymmetric" : "grid-asymmetric-rev"}>
                <div style={{ order: idx % 2 === 0 ? 0 : 1 }}>
                  <img
                    src={division.image}
                    alt={division.title}
                    style={{ width: '100%', height: '450px', objectFit: 'cover' }}
                  />
                </div>
                
                <div style={{ order: idx % 2 === 0 ? 1 : 0, padding: '0 2rem' }}>
                  <h3 className="text-heading-md" style={{ marginBottom: '1.5rem' }}>
                    {division.title}
                  </h3>
                  <p className="text-body-lg" style={{ marginBottom: '2.5rem' }}>
                    {division.fullDescription}
                  </p>
                  
                  <div className="structural-line" style={{ margin: '2rem 0' }} />

                  <h5 className="text-label" style={{ color: 'var(--orange)', marginBottom: '1rem' }}>
                    Key Service Pillars
                  </h5>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                    {division.capabilities.map((cap) => (
                      <li key={cap} className="text-body-sm" style={{ display: 'flex', gap: '0.75rem' }}>
                        <span style={{ color: 'var(--navy)', fontWeight: '800' }}>+</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={`/services#${division.id}`} className="text-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                    Explore Division
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BRAND PROMISE CTA */}
      <section className="py-loose" style={{ backgroundColor: 'var(--navy)', textAlign: 'center', color: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="orange-slash">/</span>
          <span className="text-label" style={{ color: 'var(--white)', opacity: 0.8 }}>
            Corporate Promise
          </span>
          <h2 className="text-heading-lg" style={{ color: 'var(--white)', marginTop: '2rem', marginBottom: '2.5rem' }}>
            Partner With Bongbine Ltd
          </h2>
          <p className="text-body-lg" style={{ fontStyle: 'italic', marginBottom: '3rem', marginX: 'auto', color: 'rgba(255,255,255,0.8)' }}>
            "{COMPANY_INFO.brandPromise}"
          </p>
          <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'var(--white)', color: 'var(--navy)', borderColor: 'var(--white)', borderRadius: '0' }}>
            Get In Touch With Our Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurBusiness;

import React from 'react';
import PageHero from '../components/PageHero';
import { COMPANY_INFO, CORE_VALUES } from '../data/companyData';
import { RevealText, RevealImage, RevealLine } from '../components/EditorialReveal';

const About = () => {
  return (
    <div>
      <PageHero
        title="About Bongbine Ltd"
        subtitle="A corporate enterprise built on trust, professional expertise, and long-term partnership."
        badge="Bongbine Ltd"
        bgImage="/images/aerial-view-rural-landscape-crops-field.jpg"
      />

      {/* 1. ABOUT BONGBINE (EDITORIAL OFFSET) */}
      <section className="py-standard" style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid-asymmetric">
            <div>
              <RevealText>
                <span className="orange-slash">/</span>
                <span className="text-label">
                  Who We Are
                </span>
                <h2 className="text-heading-lg" style={{ marginTop: '2rem', marginBottom: '2.5rem' }}>
                  Built on a foundation of trust.
                </h2>
              </RevealText>
            </div>
            <div>
              <RevealText delay={0.1}>
                <p className="text-body-lg" style={{ color: 'var(--navy)', fontWeight: '600', marginBottom: '1.5rem' }}>
                  {COMPANY_INFO.aboutParagraph1}
                </p>
              </RevealText>
              
              <RevealLine className="structural-line" delay={0.2} />
              
              <RevealText delay={0.3}>
                <p className="text-body-sm">
                  {COMPANY_INFO.aboutParagraph2}
                </p>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CEO SPOTLIGHT (TYPOGRAPHIC TIGHTENING) */}
      <section className="py-standard" style={{ backgroundColor: 'var(--light-bg)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="ceo-grid">
            <div className="ceo-image-wrapper">
              <RevealImage>
                <img src="/ceo.png" alt={COMPANY_INFO.ceo.name} className="ceo-image" />
              </RevealImage>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <RevealText>
                <span className="orange-slash">/</span>
                <span className="text-label" style={{ marginBottom: '1rem' }}>
                  Executive Leadership
                </span>
                <h3 className="text-heading-md" style={{ marginBottom: '0.25rem' }}>{COMPANY_INFO.ceo.name}</h3>
                <p className="text-label" style={{ color: 'var(--orange)', marginBottom: '2.5rem' }}>
                  {COMPANY_INFO.ceo.title}
                </p>
              </RevealText>
              
              <RevealText delay={0.2}>
                <p className="text-body-lg" style={{ fontStyle: 'italic', color: 'var(--navy)', paddingLeft: '1.5rem', borderLeft: '4px solid var(--orange)', marginBottom: '2rem' }}>
                  "{COMPANY_INFO.ceo.quote}"
                </p>
              </RevealText>
              
              <div className="structural-border-top" style={{ paddingTop: '1.5rem' }}>
                <RevealText delay={0.3}>
                  <p style={{ fontSize: '0.95rem', color: 'var(--navy)', fontWeight: '700', letterSpacing: '0.02em', marginBottom: '0.25rem' }}>
                    Active Field Oversight & Operational Excellence
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted-text)', fontWeight: '500' }}>
                    Bongbine Ltd Management Committee
                  </p>
                </RevealText>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES (HORIZONTAL EDITORIAL LIST) */}
      <section className="py-standard" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ marginBottom: '4rem' }}>
            <RevealText>
              <span className="orange-slash">/</span>
              <span className="text-label">
                Cultural Blueprint
              </span>
              <h2 className="text-heading-md" style={{ marginTop: '1rem' }}>
                Core Values
              </h2>
            </RevealText>
          </div>
          
          <div className="editorial-list">
            {CORE_VALUES.map((val, idx) => (
              <RevealText key={val.id} delay={idx * 0.1} className="editorial-list-item" style={{ gridTemplateColumns: '100px 300px 1fr', alignItems: 'start' }}>
                <div className="editorial-number">
                  0{idx + 1}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '800', color: 'var(--navy)' }}>
                  {val.title}
                </h3>
                <p className="text-body-lg" style={{ marginTop: 0 }}>
                  {val.description}
                </p>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OPERATIONAL SCALE (REPLACED JARGON WITH CONCRETE STATS) */}
      <section className="py-loose" style={{ backgroundColor: 'var(--navy)', color: 'var(--white)' }}>
        <div className="container">
          <div className="grid-asymmetric">
            <div>
              <RevealText>
                <span className="orange-slash">/</span>
                <span className="text-label" style={{ color: 'var(--white)', opacity: 0.8 }}>
                  Operational Scale
                </span>
                <h2 className="text-heading-lg" style={{ color: 'var(--white)', marginTop: '2rem', marginBottom: '3rem' }}>
                  Built for<br/>Heavy Industry.
                </h2>
              </RevealText>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <RevealText delay={0.1}>
                <h4 className="text-label" style={{ color: 'var(--orange)', marginBottom: '0.5rem' }}>
                  Regional Reach
                </h4>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: '400', lineHeight: '1.4', color: 'var(--white)' }}>
                  Headquartered in Bamenda, Cameroon, with distribution networks reaching across central regional hubs.
                </p>
              </RevealText>
              
              <RevealLine className="structural-line-dark" delay={0.2} />
              
              <RevealText delay={0.3}>
                <h4 className="text-label" style={{ color: 'var(--orange)', marginBottom: '0.5rem' }}>
                  Infrastructure Integration
                </h4>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: '400', lineHeight: '1.4', color: 'var(--white)' }}>
                  Seamlessly bridging heavy haulage, bulk material supply, and site development without third-party bottlenecks.
                </p>
              </RevealText>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

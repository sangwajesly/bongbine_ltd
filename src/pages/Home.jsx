import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { COMPANY_INFO, BUSINESS_DIVISIONS, CORE_VALUES } from '../data/companyData';

const Home = () => {
  return (
    <div>
      {/* 1. ASYMMETRIC HERO SECTION */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'stretch', backgroundColor: 'var(--white)', borderBottom: '1px solid var(--border-color)', paddingTop: '74px' }}>
        <div style={{ flex: '1.2', padding: '6rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--orange)' }} />
            <span className="text-label">
              Infrastructure & Commerce
            </span>
          </div>

          {/* Staggered typographic reveal */}
          <motion.h1
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="text-display"
            style={{ marginBottom: '2.5rem' }}
          >
            Building Growth.<br/>
            <span style={{ color: 'var(--orange)' }}>Creating Value.</span>
          </motion.h1>

          <p className="text-body-lg" style={{ maxWidth: '600px', marginBottom: '4rem' }}>
            {COMPANY_INFO.heroSubtext}
          </p>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link to="/contact" className="btn-primary" style={{ borderRadius: '0' }}>
              Partner With Us
            </Link>
            <Link to="/services" style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', color: 'var(--navy)', textDecoration: 'underline', textUnderlineOffset: '6px' }}>
              View Capabilities
            </Link>
          </div>
        </div>
        
        <div style={{ flex: '1', position: 'relative', overflow: 'hidden', borderLeft: '1px solid var(--border-color)' }}>
          {/* Subtle scale out, NO fade */}
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&h=1600&q=80" 
              alt="Bongbine Infrastructure" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT BONGBINE (STATIC, NO MOTION) */}
      <section className="py-loose" style={{ backgroundColor: 'var(--light-bg)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid-asymmetric-rev">
            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&h=1200&q=80" 
                alt="Corporate Building" 
                style={{ width: '100%', height: '600px', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', top: '10%', right: '-2rem', width: '4rem', height: '1px', backgroundColor: 'var(--orange)' }} />
            </div>

            <div style={{ paddingRight: '2rem' }}>
              <span className="orange-slash">/</span>
              <span className="text-label">
                About Our Firm
              </span>
              
              <h2 className="text-heading-lg" style={{ marginTop: '2rem', marginBottom: '2.5rem' }}>
                Dependable infrastructure, lasting commercial trust.
              </h2>
              
              <p className="text-body-lg" style={{ marginBottom: '1.5rem', color: 'var(--navy)' }}>
                {COMPANY_INFO.aboutParagraph1}
              </p>
              <p className="text-body-sm" style={{ marginBottom: '3rem' }}>
                {COMPANY_INFO.aboutParagraph2}
              </p>
              
              <Link to="/about" className="btn-secondary" style={{ borderRadius: '0' }}>
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE DIVISIONS (STRUCTURAL LIST) */}
      <section className="py-standard" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
            
            <div style={{ position: 'sticky', top: '120px' }}>
              <span className="orange-slash">/</span>
              <span className="text-label">
                Capabilities
              </span>
              <h2 className="text-heading-md" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                Unified Business Divisions
              </h2>
              <p className="text-body-sm">
                Combining specialized operations under one robust corporate entity. From foundation to global distribution.
              </p>
            </div>

            <div className="editorial-list">
              {BUSINESS_DIVISIONS.map((division, idx) => (
                <div key={division.id} className="editorial-list-item">
                  <div className="editorial-number">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: '800', color: 'var(--navy)', marginBottom: '1rem' }}>
                      {division.title}
                    </h3>
                    <p className="text-body-sm" style={{ marginBottom: '1.5rem', maxWidth: '600px' }}>
                      {division.shortDescription}
                    </p>
                    <Link to={`/services#${division.id}`} style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--orange)', textDecoration: 'underline' }}>
                      Explore Division
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION (RAW TYPOGRAPHY) */}
      <section className="py-loose" style={{ backgroundColor: 'var(--navy)', color: 'var(--white)' }}>
        <div className="container">
          <div className="grid-asymmetric">
            <div>
              <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--orange)', marginBottom: '3rem' }} />
              <h2 className="text-heading-lg" style={{ color: 'var(--white)' }}>
                Strategic<br/>Direction.
              </h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
              <div>
                <h3 className="text-label" style={{ color: 'var(--orange)', marginBottom: '1.5rem' }}>
                  Mission
                </h3>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: '400', lineHeight: '1.4', color: 'var(--white)' }}>
                  {COMPANY_INFO.mission}
                </p>
              </div>
              
              <div className="structural-line-dark" style={{ margin: '0' }} />

              <div>
                <h3 className="text-label" style={{ color: 'var(--orange)', marginBottom: '1.5rem' }}>
                  Vision
                </h3>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: '400', lineHeight: '1.4', color: 'var(--white)' }}>
                  {COMPANY_INFO.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES (NUMBERED GRID) */}
      <section className="py-standard" style={{ backgroundColor: 'var(--light-bg)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ marginBottom: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
            <div>
              <span className="orange-slash">/</span>
              <span className="text-label">
                Guiding Pillars
              </span>
              <h2 className="text-heading-md" style={{ marginTop: '1.5rem' }}>
                Our Core Values
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {CORE_VALUES.map((value, idx) => (
              <div key={value.id} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: '800', color: 'var(--orange)' }}>
                  0{idx + 1}.
                </div>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', fontWeight: '800', color: 'var(--navy)' }}>
                  {value.title}
                </h3>
                <p className="text-body-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-loose" style={{ backgroundColor: 'var(--white)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-heading-lg" style={{ marginBottom: '2rem' }}>
            Let's build the future together.
          </h2>
          <p className="text-body-lg" style={{ marginBottom: '3rem', marginX: 'auto' }}>
            Connect with our team to explore dependable solutions in real estate, construction, building supplies, transport, and trade.
          </p>
          <Link to="/contact" className="btn-primary" style={{ borderRadius: '0' }}>
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore';
import { db } from '../firebase/config';
import { COMPANY_INFO, BUSINESS_DIVISIONS, CORE_VALUES } from '../data/companyData';
import { RevealText, RevealImage, RevealLine } from '../components/EditorialReveal';

const Home = () => {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loadingItems, setLoadingItems] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const q = query(collection(db, "properties"), orderBy("createdAt", "desc"), limit(6));
        const querySnapshot = await getDocs(q);
        const allItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // Filter out paused items and take top 3
        const activeItems = allItems.filter(p => p.status !== 'paused').slice(0, 3);
        setFeaturedItems(activeItems);
      } catch (error) {
        console.error("Error fetching featured items: ", error);
      } finally {
        setLoadingItems(false);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <div>
      {/* 1. ASYMMETRIC HERO SECTION */}
      <section className="home-hero-section">
        <div className="home-hero-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <motion.div 
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: '40px', height: '2px', backgroundColor: 'var(--orange)' }} 
            />
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-label"
            >
              Infrastructure & Commerce
            </motion.span>
          </div>

          {/* Staggered typographic reveal */}
          <motion.h1
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-display"
            style={{ marginBottom: '2.5rem' }}
          >
            Building Cameroon's<br/>
            <span style={{ color: 'var(--orange)' }}>Future Together.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-lg" 
            style={{ maxWidth: '600px', marginBottom: '4rem' }}
          >
            {COMPANY_INFO.heroSubtext}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
          >
            <Link to="/contact" className="btn-primary" style={{ borderRadius: '0' }}>
              Partner With Us
            </Link>
            <Link to="/services" style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', color: 'var(--navy)', textDecoration: 'underline', textUnderlineOffset: '6px' }}>
              View Capabilities
            </Link>
          </motion.div>
        </div>
        
        <div className="home-hero-image">
          {/* Subtle scale out, NO fade */}
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <img 
              src="/images/construction.jpg"
              alt="Bongbine Infrastructure" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </div>
      </section>

      {/* FEATURED SHOWCASE */}
      <section className="py-standard" style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <RevealText>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
              <div>
                <span className="orange-slash">/</span>
                <span className="text-label">Latest Listings</span>
                <h2 className="text-heading-md" style={{ marginTop: '1rem' }}>Featured Showcase</h2>
              </div>
              <Link to="/properties" className="text-label" style={{ color: 'var(--navy)', textDecoration: 'none', borderBottom: '2px solid var(--orange)', paddingBottom: '4px' }}>
                View All &rarr;
              </Link>
            </div>
          </RevealText>

          {loadingItems ? (
            <div className="grid-asymmetric">
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ backgroundColor: 'var(--light-bg)', borderRadius: '8px', overflow: 'hidden', height: '350px', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
              ))}
            </div>
          ) : featuredItems.length === 0 ? (
            <div style={{ padding: '2rem 0', color: 'var(--muted-text)' }}>No featured items at the moment.</div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
              {featuredItems.map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  style={{ backgroundColor: 'var(--light-bg)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={item.images[0] || 'https://via.placeholder.com/400x300'} 
                      alt={item.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'var(--white)', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--navy)' }}>
                      {item.masterCategory === 'plan' ? 'House Plan' : item.masterCategory === 'contract' ? 'Project' : 'For Sale'}
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                      {item.title}
                    </h3>
                    <div style={{ color: 'var(--muted-text)', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      {item.location}
                    </div>
                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                      <span style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--orange)' }}>
                        {item.price || 'Contact Us'}
                      </span>
                      <Link to={`/properties/${item.id}`} className="text-label" style={{ color: 'var(--navy)', textDecoration: 'none' }}>
                        Details &rarr;
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* 2. ABOUT BONGBINE */}
      <section className="py-loose" style={{ backgroundColor: 'var(--light-bg)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid-asymmetric-rev">
            <div style={{ position: 'relative' }}>
              <RevealImage>
                <img 
                  src="/images/entrepreneur-drafting-architectural-blueprints-planning-office-relocation.jpg" 
                  alt="Corporate Building" 
                  style={{ width: '100%', height: '600px', objectFit: 'cover' }}
                />
              </RevealImage>
              <motion.div 
                initial={{ scaleX: 0, transformOrigin: 'left' }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'absolute', top: '10%', right: '-2rem', width: '4rem', height: '1px', backgroundColor: 'var(--orange)' }} 
              />
            </div>

            <div style={{ paddingRight: '2rem' }}>
              <RevealText>
                <span className="orange-slash">/</span>
                <span className="text-label">
                  About Our Firm
                </span>
              </RevealText>
              
              <RevealText delay={0.1}>
                <h2 className="text-heading-lg" style={{ marginTop: '2rem', marginBottom: '2.5rem' }}>
                  Dependable infrastructure, lasting commercial trust.
                </h2>
              </RevealText>
              
              <RevealText delay={0.2}>
                <p className="text-body-lg" style={{ marginBottom: '1.5rem', color: 'var(--navy)' }}>
                  {COMPANY_INFO.aboutParagraph1}
                </p>
                <p className="text-body-sm" style={{ marginBottom: '3rem' }}>
                  {COMPANY_INFO.aboutParagraph2}
                </p>
              </RevealText>
              
              <RevealText delay={0.3}>
                <Link to="/about" className="btn-secondary" style={{ borderRadius: '0' }}>
                  Read Our Story
                </Link>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE DIVISIONS (STRUCTURAL LIST) */}
      <section className="py-standard" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
            
            <div className="sticky-desktop">
              <RevealText>
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
              </RevealText>
            </div>

            <div className="editorial-list">
              {BUSINESS_DIVISIONS.map((division, idx) => (
                <RevealText key={division.id} delay={idx * 0.1} className="editorial-list-item">
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
                </RevealText>
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
              <RevealLine className="" />
              <motion.div 
                initial={{ scaleX: 0, transformOrigin: 'left' }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: '60px', height: '4px', backgroundColor: 'var(--orange)', marginBottom: '3rem' }} 
              />
              <RevealText delay={0.1}>
                <h2 className="text-heading-lg" style={{ color: 'var(--white)' }}>
                  Strategic<br/>Direction.
                </h2>
              </RevealText>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
              <RevealText delay={0.2}>
                <h3 className="text-label" style={{ color: 'var(--orange)', marginBottom: '1.5rem' }}>
                  Mission
                </h3>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: '400', lineHeight: '1.4', color: 'var(--white)' }}>
                  {COMPANY_INFO.mission}
                </p>
              </RevealText>
              
              <RevealLine className="structural-line-dark" delay={0.3} />

              <RevealText delay={0.4}>
                <h3 className="text-label" style={{ color: 'var(--orange)', marginBottom: '1.5rem' }}>
                  Vision
                </h3>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: '400', lineHeight: '1.4', color: 'var(--white)' }}>
                  {COMPANY_INFO.vision}
                </p>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES (NUMBERED GRID) */}
      <section className="py-standard" style={{ backgroundColor: 'var(--light-bg)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ marginBottom: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
            <RevealText>
              <span className="orange-slash">/</span>
              <span className="text-label">
                Guiding Pillars
              </span>
              <h2 className="text-heading-md" style={{ marginTop: '1.5rem' }}>
                Our Core Values
              </h2>
            </RevealText>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {CORE_VALUES.map((value, idx) => (
              <RevealText key={value.id} delay={idx * 0.1} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: '800', color: 'var(--orange)' }}>
                  0{idx + 1}.
                </div>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', fontWeight: '800', color: 'var(--navy)' }}>
                  {value.title}
                </h3>
                <p className="text-body-sm">
                  {value.description}
                </p>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-loose" style={{ backgroundColor: 'var(--white)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <RevealText>
            <h2 className="text-heading-lg" style={{ marginBottom: '2rem' }}>
              Let's build the future together.
            </h2>
            <p className="text-body-lg" style={{ marginBottom: '3rem', marginX: 'auto' }}>
              Connect with our team to explore dependable solutions in real estate, construction, building supplies, transport, and trade.
            </p>
            <Link to="/contact" className="btn-primary" style={{ borderRadius: '0' }}>
              Contact Our Team
            </Link>
          </RevealText>
        </div>
      </section>
    </div>
  );
};

export default Home;

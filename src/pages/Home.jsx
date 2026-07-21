import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, HeartHandshake } from 'lucide-react';
import DivisionCard from '../components/DivisionCard';
import ValueCard from '../components/ValueCard';
import { COMPANY_INFO, BUSINESS_DIVISIONS, CORE_VALUES } from '../data/companyData';

const Home = () => {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div 
          className="hero-bg"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="hero-overlay" />

        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-badge"
            >
              <span className="hero-badge-dot" />
              Infrastructure & Commerce Group
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="hero-title"
            >
              {COMPANY_INFO.heroHeadline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hero-subtext"
            >
              {COMPANY_INFO.heroSubtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hero-actions"
            >
              <Link to="/contact" className="btn-primary">
                Contact Us
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT BONGBINE SECTION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ position: 'relative' }}
            >
              <div style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '4px solid var(--white)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80" 
                  alt="Bongbine Modern Infrastructure" 
                  style={{ width: '100%', height: '440px', objectFit: 'cover' }}
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              <span className="section-eyebrow">About Bongbine</span>

              <h2 className="section-title-text">
                Building dependable infrastructure and lasting commercial trust.
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.05rem', lineHeight: '1.75' }}>
                <p style={{ borderLeft: '4px solid var(--navy)', paddingLeft: '1rem', color: 'var(--dark-text)', fontWeight: '500' }}>
                  {COMPANY_INFO.aboutParagraph1}
                </p>
                <p style={{ borderLeft: '4px solid var(--orange)', paddingLeft: '1rem', color: 'var(--muted-text)' }}>
                  {COMPANY_INFO.aboutParagraph2}
                </p>
              </div>

              <div style={{ paddingTop: '1rem' }}>
                <Link to="/about" className="btn-primary">
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS DIVISIONS */}
      <section className="section-padding section-bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Core Operations</span>
            <h2 className="section-title-text">Business Divisions</h2>
            <p className="section-description">
              Combining specialized capabilities under one unified, dependable corporate brand.
            </p>
          </div>

          <div className="grid-3">
            {BUSINESS_DIVISIONS.map((division, idx) => (
              <DivisionCard key={division.id} division={division} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Strategic Direction</span>
            <h2 className="section-title-text">Mission & Vision</h2>
          </div>

          <div className="grid-2">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-mission-vision"
            >
              <div className="card-icon-wrapper" style={{ backgroundColor: 'var(--navy)', color: 'var(--white)' }}>
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--navy)' }}>
                Our Mission
              </h3>
              <blockquote className="quote-box border-orange">
                "{COMPANY_INFO.mission}"
              </blockquote>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="card-mission-vision"
            >
              <div className="card-icon-wrapper" style={{ backgroundColor: 'var(--orange)', color: 'var(--white)' }}>
                <Eye size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--navy)' }}>
                Our Vision
              </h3>
              <blockquote className="quote-box border-navy">
                "{COMPANY_INFO.vision}"
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES */}
      <section className="section-padding section-bg-navy">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Guiding Pillars</span>
            <h2 className="section-title-text section-title-light">Core Values</h2>
            <p className="section-description section-description-light">
              The foundational principles driving our relationships, decision-making, and growth.
            </p>
          </div>

          <div className="grid-4">
            {CORE_VALUES.map((value, idx) => (
              <ValueCard key={value.id} value={value} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. BRAND PROMISE */}
      <section className="section-padding section-bg-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="promise-banner"
          >
            <div className="promise-icon-bubble">
              <HeartHandshake size={34} />
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '1.25rem' }}>
              Brand Promise
            </h3>

            <p className="promise-quote">
              "{COMPANY_INFO.brandPromise}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="cta-section">
        <div 
          className="cta-bg"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-heading">
              Let's Build the Future Together
            </h2>
            <p className="cta-subtext">
              Connect with our team to explore dependable solutions in real estate, construction, building supplies, transport, and trade.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Our Team
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

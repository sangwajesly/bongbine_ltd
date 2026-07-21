import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Tag, Briefcase, Zap, HeartHandshake, Sparkles, UserCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import ValueCard from '../components/ValueCard';
import { COMPANY_INFO, CORE_VALUES, BRAND_PERSONALITY } from '../data/companyData';

const iconMap = {
  CheckCircle2: UserCheck,
  Briefcase: Briefcase,
  Zap: Zap,
  HeartHandshake: HeartHandshake,
  Sparkles: Sparkles
};

const About = () => {
  return (
    <div>
      <PageHero
        title="About Bongbine Ltd"
        subtitle="A corporate enterprise built on trust, professional expertise, and long-term partnership."
        badge="Bongbine Ltd"
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
      />

      {/* 1. ABOUT BONGBINE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <span className="section-eyebrow">Company Overview</span>
            <h2 className="section-title-text" style={{ marginBottom: '2rem' }}>
              Who We Are
            </h2>

            <div style={{
              backgroundColor: 'var(--light-bg)', borderRadius: '1.25rem',
              padding: '2.5rem', borderLeft: '6px solid var(--navy)',
              display: 'flex', flexDirection: 'column', gap: '1.5rem'
            }}>
              <p style={{ color: 'var(--navy)', fontSize: '1.1rem', fontWeight: '600', lineHeight: '1.7' }}>
                {COMPANY_INFO.aboutParagraph1}
              </p>
              <p style={{ color: 'var(--muted-text)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                {COMPANY_INFO.aboutParagraph2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CEO SPOTLIGHT */}
      <section className="section-padding section-bg-navy">
        <div className="container">
          <div className="ceo-card">
            <div className="ceo-grid">
              <div className="ceo-avatar-wrapper">
                <svg className="ceo-avatar-svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div>
                <span className="section-eyebrow">Executive Leadership</span>
                <h3 className="ceo-name">{COMPANY_INFO.ceo.name}</h3>
                <p className="ceo-title">{COMPANY_INFO.ceo.title}</p>
                <blockquote className="ceo-quote">
                  "{COMPANY_INFO.ceo.quote}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="grid-2" style={{ maxWidth: '1050px', margin: '0 auto' }}>
            <div className="card-mission-vision">
              <div className="card-icon-wrapper" style={{ backgroundColor: 'var(--navy)', color: 'var(--white)', borderColor: 'var(--navy)' }}>
                <Target size={26} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '0.75rem' }}>
                Mission
              </h3>
              <p className="quote-box border-orange">
                "{COMPANY_INFO.mission}"
              </p>
            </div>
            <div className="card-mission-vision">
              <div className="card-icon-wrapper" style={{ backgroundColor: 'var(--orange)', color: 'var(--white)', borderColor: 'var(--orange)' }}>
                <Eye size={26} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '0.75rem' }}>
                Vision
              </h3>
              <p className="quote-box border-navy">
                "{COMPANY_INFO.vision}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="section-padding section-bg-navy">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Cultural Blueprint</span>
            <h2 className="section-title-text section-title-light">Core Values</h2>
          </div>
          <div className="grid-4" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {CORE_VALUES.map((val, idx) => (
              <ValueCard key={val.id} value={val} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. BRAND PERSONALITY */}
      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Character Traits</span>
            <h2 className="section-title-text">Brand Personality</h2>
          </div>
          <div className="grid-5">
            {BRAND_PERSONALITY.map((item, idx) => {
              const IconComp = iconMap[item.iconName] || Briefcase;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  style={{
                    backgroundColor: 'var(--light-bg)', borderRadius: '1rem',
                    padding: '1.5rem', border: '1px solid var(--border-color)',
                    textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'
                  }}
                >
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    backgroundColor: 'var(--navy)', color: 'var(--orange)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem'
                  }}>
                    <IconComp size={22} />
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '0.35rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted-text)', lineHeight: '1.5' }}>
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. BRAND POSITIONING */}
      <section className="section-padding section-bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Market Positioning</span>
            <h2 className="section-title-text">Brand Positioning</h2>
          </div>
          <div className="grid-3">
            {[
              { label: 'Commitment', title: 'Brand Promise', text: COMPANY_INFO.brandPromise },
              { label: 'Objective', title: 'Brand Purpose', text: COMPANY_INFO.brandPurpose },
              { label: 'Differentiator', title: 'Unique Value Proposition', text: COMPANY_INFO.uniqueValueProposition },
            ].map((item) => (
              <div key={item.title} className="card-mission-vision">
                <span className="section-eyebrow" style={{ fontSize: '0.72rem' }}>{item.label}</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '700', color: 'var(--navy)', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontStyle: 'italic', color: 'var(--muted-text)', fontSize: '0.95rem', lineHeight: '1.65' }}>
                  "{item.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BRAND ESSENCE & KEYWORDS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '1050px' }}>
          <div style={{
            backgroundColor: 'var(--navy)', borderRadius: '1.5rem',
            padding: '3rem', border: '1px solid rgba(255,255,255,0.12)',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem', alignItems: 'center'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <span className="section-eyebrow">Core Essence</span>
              <div>
                <h4 style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Purpose</h4>
                <p style={{ fontSize: '1.2rem', color: 'var(--white)', fontWeight: '300' }}>{COMPANY_INFO.essencePurpose}</p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Promise</h4>
                <p style={{ fontSize: '1.2rem', color: 'var(--white)', fontWeight: '300' }}>{COMPANY_INFO.essencePromise}</p>
              </div>
              <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <h4 style={{ fontSize: '0.72rem', color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700', marginBottom: '0.25rem' }}>Tagline</h4>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: '700', color: 'var(--white)' }}>
                  "{COMPANY_INFO.tagline}"
                </p>
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--navy-dark)', padding: '2rem', borderRadius: '1.25rem',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                color: 'var(--orange)', fontFamily: 'var(--font-heading)', fontSize: '0.82rem',
                fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem'
              }}>
                <Tag size={16} />
                Brand Keywords
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {COMPANY_INFO.brandKeywords.map((kw) => (
                  <span key={kw} style={{
                    padding: '0.4rem 0.9rem', borderRadius: '9999px',
                    backgroundColor: '#1E293B', color: '#E2E8F0',
                    border: '1px solid #334155', fontSize: '0.82rem', fontWeight: '600'
                  }}>
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

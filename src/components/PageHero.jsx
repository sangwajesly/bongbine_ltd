import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ title, subtitle, bgImage, badge = "Bongbine Ltd" }) => {
  const defaultBg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&crop=edges&w=1920&q=80";

  return (
    <div style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--border-color)', paddingTop: '74px' }}>
      <div className="container">
        <div style={{ padding: '6rem 0', maxWidth: '900px' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <span className="orange-slash">/</span>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--navy)' }}>
                {badge}
              </span>
            </div>
            <h1 className="text-display" style={{ marginBottom: '1.5rem', fontSize: 'clamp(3rem, 5vw, 5rem)' }}>
              {title}
            </h1>
            {subtitle && (
              <p className="text-body-lg" style={{ color: 'var(--navy)', fontWeight: '500', maxWidth: '750px' }}>
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </div>
      {bgImage && (
        <div style={{ height: '400px', width: '100%', overflow: 'hidden', borderTop: '1px solid var(--border-color)' }}>
          <img 
            src={bgImage || defaultBg} 
            alt={title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}
    </div>
  );
};

export default PageHero;

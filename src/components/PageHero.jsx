import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ title, subtitle, bgImage, badge = "Bongbine Ltd" }) => {
  const defaultBg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80";

  return (
    <div className="page-hero">
      <div 
        className="page-hero-bg"
        style={{ backgroundImage: `url(${bgImage || defaultBg})` }}
      />
      <div className="page-hero-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="page-hero-content"
        >
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            {badge}
          </div>
          <h1 className="page-hero-title">
            {title}
          </h1>
          {subtitle && (
            <p className="page-hero-subtitle">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageHero;

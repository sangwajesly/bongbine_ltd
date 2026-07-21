import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = '', light = false, variant = '' }) => {
  let logoSrc = '/Bongbine logo dark.svg';

  if (variant === 'orange') {
    logoSrc = '/Bongbine logo orange.svg';
  } else if (light) {
    logoSrc = '/Bongbine logo white.svg';
  }

  return (
    <Link 
      to="/" 
      style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
      className={className} 
      aria-label="Bongbine Ltd Home"
    >
      <img
        src={logoSrc}
        alt="Bongbine Ltd Logo"
        style={{
          height: '42px',
          width: 'auto',
          display: 'block',
          objectFit: 'contain'
        }}
      />
    </Link>
  );
};

export default Logo;

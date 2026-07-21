import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--navy)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '6rem',
      paddingBottom: '4rem',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      color: 'var(--white)'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '500px' }}>
        <span style={{
          color: 'var(--orange)',
          fontWeight: '800',
          fontSize: '5rem',
          fontFamily: 'var(--font-heading)',
          display: 'block',
          marginBottom: '0.5rem',
          lineHeight: '1'
        }}>
          404
        </span>
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: '700',
          color: 'var(--white)',
          marginBottom: '1rem'
        }}>
          Page Not Found
        </h1>
        <p style={{
          color: '#CBD5E1',
          fontSize: '1rem',
          marginBottom: '2rem',
          fontWeight: '300',
          lineHeight: '1.65'
        }}>
          The page you are looking for does not exist or has been relocated.
        </p>
        <Link to="/" className="btn-primary">
          <Home size={18} />
          Back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RevealText, RevealImage } from '../components/EditorialReveal';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const docRef = doc(db, "properties", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setProperty({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching property: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px' }}>Loading...</div>;
  }

  if (!property) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '80px' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy)', marginBottom: '1rem' }}>Property Not Found</h2>
        <Link to="/properties" className="btn-primary">Back to Listings</Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '52px' }}>
      {/* HEADER SECTION */}
      <section className="py-standard" style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <Link to="/properties" style={{ display: 'inline-block', marginBottom: '2rem', fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--muted-text)', textDecoration: 'none' }}>
            &larr; BACK TO LISTINGS
          </Link>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            <RevealText>
              <span className="text-label" style={{ color: 'var(--orange)' }}>{property.type}</span>
              <h1 className="text-display" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'var(--navy)', marginTop: '0.5rem', marginBottom: '1rem' }}>
                {property.title}
              </h1>
              <p className="text-body-lg" style={{ color: 'var(--muted-text)' }}>{property.location}</p>
            </RevealText>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section>
        <RevealImage>
          <img 
            src={property.images[0]} 
            alt={property.title} 
            style={{ width: '100%', height: '70vh', objectFit: 'cover' }} 
          />
        </RevealImage>
      </section>

      {/* DETAILS SECTION */}
      <section className="py-standard" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="container">
          <div className="grid-asymmetric">
            <div>
              <RevealText>
                <div style={{ backgroundColor: 'var(--navy)', color: 'var(--white)', padding: '2.5rem', borderRadius: '8px', position: 'sticky', top: '100px' }}>
                  <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.7, marginBottom: '0.5rem' }}>Listing Price</h3>
                  <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', marginBottom: '2rem', color: 'var(--orange)' }}>
                    {property.price}
                  </div>
                  
                  <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7, marginBottom: '1rem' }}>Contact Us</h4>
                  <p style={{ marginBottom: '1.5rem', lineHeight: 1.5 }}>Interested in this property? Contact our real estate division today.</p>
                  
                  <a href="https://wa.me/237682833601" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'block', textAlign: 'center', backgroundColor: 'var(--orange)', color: 'var(--white)', border: 'none' }}>
                    Inquire via WhatsApp
                  </a>
                </div>
              </RevealText>
            </div>
            
            <div style={{ paddingLeft: '2rem' }}>
              <RevealText delay={0.1}>
                <h3 className="text-heading" style={{ marginBottom: '1.5rem' }}>Property Overview</h3>
                <p className="text-body" style={{ whiteSpace: 'pre-line', marginBottom: '3rem' }}>
                  {property.description}
                </p>
                
                {property.features && property.features.length > 0 && (
                  <>
                    <h3 className="text-heading" style={{ marginBottom: '1.5rem' }}>Key Features</h3>
                    <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', listStyle: 'none', padding: 0 }}>
                      {property.features.map((feature, idx) => (
                        <li key={idx} style={{ padding: '1rem', backgroundColor: 'var(--white)', borderRadius: '4px', border: '1px solid var(--border-color)', fontWeight: 'bold', color: 'var(--navy)' }}>
                          <span style={{ color: 'var(--orange)', marginRight: '0.5rem' }}>✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </RevealText>

              {/* Additional Images Gallery */}
              {property.images.length > 1 && (
                <div style={{ marginTop: '4rem' }}>
                  <h3 className="text-heading" style={{ marginBottom: '1.5rem' }}>Gallery</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {property.images.slice(1).map((img, idx) => (
                      <RevealImage key={idx} delay={idx * 0.1}>
                        <img src={img} alt={`${property.title} - view ${idx + 2}`} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px' }} />
                      </RevealImage>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetails;

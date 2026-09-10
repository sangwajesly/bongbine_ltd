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

  const [selectedImage, setSelectedImage] = useState(null);

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
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out' }}
        >
          <img src={selectedImage} style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain' }} alt="Enlarged view" />
          <button style={{ position: 'absolute', top: '20px', right: '30px', background: 'none', border: 'none', color: 'white', fontSize: '2rem', cursor: 'pointer' }}>&times;</button>
        </div>
      )}

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
              <p style={{ fontSize: '1.2rem', color: 'var(--muted-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--orange)' }}>📍</span> {property.location}
              </p>
            </RevealText>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-standard" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="container">
          <div className="grid-asymmetric">
            <div>
              <RevealText>
                <div style={{ backgroundColor: 'var(--white)', color: 'var(--navy)', padding: '2.5rem', borderRadius: '8px', border: '1px solid var(--border-color)', position: 'sticky', top: '100px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--muted-text)', marginBottom: '0.5rem', fontWeight: 'bold' }}>Listing Price</h3>
                  <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', marginBottom: '2rem', color: 'var(--orange)' }}>
                    {property.price}
                  </div>
                  
                  <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--muted-text)', marginBottom: '1rem', fontWeight: 'bold' }}>Contact Us</h4>
                  <p style={{ marginBottom: '1.5rem', lineHeight: 1.5, color: 'var(--navy)' }}>Interested in this property? Contact our real estate division today.</p>
                  
                  <a href="https://wa.me/237676299358" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%' }}>
                    Inquire via WhatsApp
                  </a>
                </div>
              </RevealText>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <RevealImage>
                <div style={{ position: 'relative', height: '500px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                  <img src={property.images[0]} alt={property.title} onClick={() => setSelectedImage(property.images[0])} style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'zoom-in' }} />
                </div>
              </RevealImage>
              
              <RevealText>
                <h3 className="text-heading" style={{ marginBottom: '1.5rem' }}>Description</h3>
                <div style={{ lineHeight: 1.8, color: 'var(--muted-text)', whiteSpace: 'pre-line' }}>
                  {property.description}
                </div>
                
                {property.features && property.features.length > 0 && (
                  <>
                    <hr style={{ margin: '3rem 0', borderColor: 'var(--border-color)', opacity: 0.5 }} />
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
                        <img src={img} alt={`${property.title} - view ${idx + 2}`} onClick={() => setSelectedImage(img)} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px', cursor: 'zoom-in' }} />
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

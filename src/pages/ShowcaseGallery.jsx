import React, { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/config';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { formatPrice } from '../utils/formatPrice';

const ShowcaseGallery = ({ masterCategory }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  // Dynamic titles based on masterCategory prop
  const config = {
    property: {
      title: "Real Estate Properties",
      subtitle: "Explore our exclusive portfolio of residential, commercial, and land properties.",
      badge: "Bongbine Real Estate"
    },
    plan: {
      title: "House Plans & Designs",
      subtitle: "Browse our premium architectural blueprints and modern house designs.",
      badge: "Bongbine Architecture"
    },
    contract: {
      title: "Finished Contracts",
      subtitle: "A showcase of our completed construction projects and past work.",
      badge: "Bongbine Construction"
    }
  };

  const currentConfig = config[masterCategory] || config.property;

  // Reset type filter when changing master categories
  useEffect(() => {
    setFilter('all');
  }, [masterCategory]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const q = query(collection(db, "properties"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const propsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProperties(propsData);
      } catch (error) {
        console.error("Error fetching items: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Filter out paused items, and filter by the specific master category prop
  const activeProps = properties.filter(p => p.status !== 'paused' && (p.masterCategory || 'property') === masterCategory);

  const filteredProps = filter === 'all' 
    ? activeProps 
    : activeProps.filter(p => p.type === filter);

  return (
    <div>
      <PageHero
        title={currentConfig.title}
        subtitle={currentConfig.subtitle}
        badge={currentConfig.badge}
        bgImage={false}
      />

      <section style={{ backgroundColor: 'var(--light-bg)', padding: '2rem 0 6rem 0' }}>
        <div className="container">
          
          {/* Sub-Filters (House, Land, Commercial) */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', overflowX: 'auto', whiteSpace: 'nowrap' }} className="hide-scrollbar">
            <button onClick={() => setFilter('all')} className={filter === 'all' ? 'text-label' : 'text-body-sm'} style={{ background: 'none', border: 'none', color: filter === 'all' ? 'var(--orange)' : 'var(--muted-text)', cursor: 'pointer', fontWeight: 'bold', whiteSpace: 'nowrap' }}>All</button>
            <button onClick={() => setFilter('house')} className={filter === 'house' ? 'text-label' : 'text-body-sm'} style={{ background: 'none', border: 'none', color: filter === 'house' ? 'var(--orange)' : 'var(--muted-text)', cursor: 'pointer', fontWeight: 'bold', whiteSpace: 'nowrap' }}>Houses & Buildings</button>
            <button onClick={() => setFilter('land')} className={filter === 'land' ? 'text-label' : 'text-body-sm'} style={{ background: 'none', border: 'none', color: filter === 'land' ? 'var(--orange)' : 'var(--muted-text)', cursor: 'pointer', fontWeight: 'bold', whiteSpace: 'nowrap' }}>Lands & Plots</button>
            <button onClick={() => setFilter('commercial')} className={filter === 'commercial' ? 'text-label' : 'text-body-sm'} style={{ background: 'none', border: 'none', color: filter === 'commercial' ? 'var(--orange)' : 'var(--muted-text)', cursor: 'pointer', fontWeight: 'bold', whiteSpace: 'nowrap' }}>Commercial</button>
          </div>

          {loading ? (
            <div className="grid-asymmetric">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} style={{ backgroundColor: 'var(--white)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', height: '400px' }}>
                  <div style={{ backgroundColor: '#e2e8f0', width: '100%', height: '250px', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ backgroundColor: '#e2e8f0', width: '30%', height: '14px', borderRadius: '4px', marginBottom: '1rem', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
                    <div style={{ backgroundColor: '#e2e8f0', width: '80%', height: '24px', borderRadius: '4px', marginBottom: '0.5rem', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
                    <div style={{ backgroundColor: '#e2e8f0', width: '50%', height: '16px', borderRadius: '4px', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProps.length === 0 ? (
            <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--muted-text)' }}>No items currently available in this category.</div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
              {filteredProps.map((property, idx) => (
                <motion.div 
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  style={{ backgroundColor: 'var(--white)', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={property.images[0] || 'https://via.placeholder.com/400x300?text=No+Image'} 
                      alt={property.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'var(--white)', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--navy)' }}>
                      {property.type}
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                      {property.title}
                    </h3>
                    <div style={{ color: 'var(--muted-text)', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      {property.location}
                    </div>
                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                      <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--orange)' }}>
                        {property.price ? formatPrice(property.price) : 'Contact Us'}
                      </span>
                      <Link to={`/properties/${property.id}`} className="text-label" style={{ color: 'var(--navy)', textDecoration: 'none' }}>
                        View Details &rarr;
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ShowcaseGallery;

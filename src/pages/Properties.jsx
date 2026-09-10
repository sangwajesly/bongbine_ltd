import React, { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/config';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

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
        console.error("Error fetching properties: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const activeProps = properties.filter(p => p.status !== 'paused');

  const filteredProps = filter === 'all' 
    ? activeProps 
    : activeProps.filter(p => p.type === filter);

  return (
    <div>
      <PageHero
        title="Real Estate Listings"
        subtitle="Explore our exclusive portfolio of residential, commercial, and land properties available for acquisition."
        badge="Bongbine Real Estate"
        bgImage={false}
      />

      <section className="py-standard" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="container">
          
          {/* Filters */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
            <button onClick={() => setFilter('all')} className={filter === 'all' ? 'text-label' : 'text-body-sm'} style={{ background: 'none', border: 'none', color: filter === 'all' ? 'var(--orange)' : 'var(--muted-text)', cursor: 'pointer', fontWeight: 'bold' }}>All Properties</button>
            <button onClick={() => setFilter('house')} className={filter === 'house' ? 'text-label' : 'text-body-sm'} style={{ background: 'none', border: 'none', color: filter === 'house' ? 'var(--orange)' : 'var(--muted-text)', cursor: 'pointer', fontWeight: 'bold' }}>Houses & Buildings</button>
            <button onClick={() => setFilter('land')} className={filter === 'land' ? 'text-label' : 'text-body-sm'} style={{ background: 'none', border: 'none', color: filter === 'land' ? 'var(--orange)' : 'var(--muted-text)', cursor: 'pointer', fontWeight: 'bold' }}>Lands & Plots</button>
            <button onClick={() => setFilter('commercial')} className={filter === 'commercial' ? 'text-label' : 'text-body-sm'} style={{ background: 'none', border: 'none', color: filter === 'commercial' ? 'var(--orange)' : 'var(--muted-text)', cursor: 'pointer', fontWeight: 'bold' }}>Commercial</button>
          </div>

          {loading ? (
            <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--muted-text)' }}>Loading exclusive listings...</div>
          ) : filteredProps.length === 0 ? (
            <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--muted-text)' }}>No properties currently available in this category.</div>
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
                    <p style={{ color: 'var(--muted-text)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                      {property.location}
                    </p>
                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--orange)' }}>
                        {property.price}
                      </div>
                      <Link to={`/properties/${property.id}`} style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--navy)', textDecoration: 'underline' }}>
                        View Details
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

export default Properties;

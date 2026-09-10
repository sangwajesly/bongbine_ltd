import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { logout } = useAuth();

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "properties"));
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

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      try {
        await deleteDoc(doc(db, "properties", id));
        setProperties(properties.filter(p => p.id !== id));
      } catch (error) {
        console.error("Error deleting property: ", error);
      }
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--light-bg)', padding: '2rem', paddingTop: '78px' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontSize: '2.5rem' }}>Dashboard</h1>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/admin/create" className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>+ New Listing</Link>
            <button onClick={logout} className="btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>Sign Out</button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ backgroundColor: 'var(--white)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}
        >
          {loading ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--muted-text)' }}>Loading properties...</div>
          ) : properties.length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--muted-text)' }}>
              No properties listed yet. Click "+ New Listing" to add one.
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f1f5f9', borderBottom: '1px solid var(--border-color)', textAlign: 'left' }}>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: 'bold', color: 'var(--navy)' }}>Property</th>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: 'bold', color: 'var(--navy)' }}>Type</th>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: 'bold', color: 'var(--navy)' }}>Price</th>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: 'bold', color: 'var(--navy)' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {properties.map(property => (
                  <tr key={property.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <div style={{ fontWeight: 'bold', color: 'var(--navy)', marginBottom: '0.25rem' }}>{property.title}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--muted-text)' }}>{property.location}</div>
                    </td>
                    <td style={{ padding: '1rem 1.5rem', textTransform: 'capitalize' }}>{property.type}</td>
                    <td style={{ padding: '1rem 1.5rem' }}>{property.price}</td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <button 
                        onClick={() => handleDelete(property.id)}
                        style={{ color: '#dc2626', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;

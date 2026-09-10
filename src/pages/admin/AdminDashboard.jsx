import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore';
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
      // Sort newest first manually since we don't have an index yet
      propsData.sort((a, b) => b.createdAt?.toMillis() - a.createdAt?.toMillis());
      setProperties(propsData);
    } catch (error) {
      console.error("Error fetching properties: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this property forever?")) {
      try {
        await deleteDoc(doc(db, "properties", id));
        setProperties(properties.filter(p => p.id !== id));
      } catch (error) {
        console.error("Error deleting property: ", error);
      }
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'paused' ? 'active' : 'paused';
    try {
      await updateDoc(doc(db, "properties", id), {
        status: newStatus
      });
      setProperties(properties.map(p => p.id === id ? { ...p, status: newStatus } : p));
    } catch (error) {
      console.error("Error updating status: ", error);
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
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f1f5f9', borderBottom: '1px solid var(--border-color)', textAlign: 'left' }}>
                    <th style={{ padding: '1rem 1.5rem', fontWeight: 'bold', color: 'var(--navy)' }}>Property</th>
                    <th style={{ padding: '1rem 1.5rem', fontWeight: 'bold', color: 'var(--navy)' }}>Type</th>
                    <th style={{ padding: '1rem 1.5rem', fontWeight: 'bold', color: 'var(--navy)' }}>Status</th>
                    <th style={{ padding: '1rem 1.5rem', fontWeight: 'bold', color: 'var(--navy)' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map(property => (
                    <tr key={property.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '1rem 1.5rem' }}>
                        <div style={{ fontWeight: 'bold', color: property.status === 'paused' ? 'var(--muted-text)' : 'var(--navy)', marginBottom: '0.25rem' }}>
                          {property.title}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--muted-text)' }}>{property.price} &bull; {property.location}</div>
                      </td>
                      <td style={{ padding: '1rem 1.5rem', textTransform: 'capitalize' }}>{property.type}</td>
                      <td style={{ padding: '1rem 1.5rem' }}>
                        <span style={{ 
                          padding: '0.25rem 0.5rem', 
                          borderRadius: '4px', 
                          fontSize: '0.8rem', 
                          fontWeight: 'bold',
                          backgroundColor: property.status === 'paused' ? '#fef08a' : '#bbf7d0',
                          color: property.status === 'paused' ? '#854d0e' : '#166534'
                        }}>
                          {property.status === 'paused' ? 'Paused' : 'Active'}
                        </span>
                      </td>
                      <td style={{ padding: '1rem 1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                          <Link 
                            to={`/admin/edit/${property.id}`}
                            style={{ color: 'var(--navy)', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}
                          >
                            Edit
                          </Link>
                          <button 
                            onClick={() => toggleStatus(property.id, property.status)}
                            style={{ color: 'var(--orange)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.9rem' }}
                          >
                            {property.status === 'paused' ? 'Publish' : 'Pause'}
                          </button>
                          <button 
                            onClick={() => handleDelete(property.id)}
                            style={{ color: '#dc2626', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.9rem' }}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';
import { formatPrice } from '../../utils/formatPrice';

const AdminDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [divisionFilter, setDivisionFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
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
      await updateDoc(doc(db, "properties", id), { status: newStatus });
      setProperties(properties.map(p => p.id === id ? { ...p, status: newStatus } : p));
    } catch (error) {
      console.error("Error updating status: ", error);
    }
  };

  // Derived stats
  const totalItems = properties.length;
  const activeItems = properties.filter(p => p.status !== 'paused').length;
  const pausedItems = properties.filter(p => p.status === 'paused').length;
  const divisionCounts = {
    property: properties.filter(p => (p.masterCategory || 'property') === 'property').length,
    plan: properties.filter(p => p.masterCategory === 'plan').length,
    contract: properties.filter(p => p.masterCategory === 'contract').length,
  };

  // Filtered list
  const filteredProperties = properties.filter(p => {
    const matchesSearch = searchQuery === '' || 
      p.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDivision = divisionFilter === 'all' || (p.masterCategory || 'property') === divisionFilter;
    const matchesStatus = statusFilter === 'all' || 
      (statusFilter === 'active' && p.status !== 'paused') ||
      (statusFilter === 'paused' && p.status === 'paused');
    return matchesSearch && matchesDivision && matchesStatus;
  });

  const getDivisionLabel = (cat) => {
    if (cat === 'plan') return 'House Plan';
    if (cat === 'contract') return 'Finished Contract';
    return 'Real Estate';
  };

  const statCardStyle = { 
    backgroundColor: 'var(--white)', 
    borderRadius: '8px', 
    padding: '1.5rem', 
    border: '1px solid var(--border-color)',
    textAlign: 'center'
  };
  const statNumberStyle = { fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--navy)', fontWeight: '800' };
  const statLabelStyle = { fontSize: '0.8rem', color: 'var(--muted-text)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.25rem' };

  const filterBtnStyle = (isActive) => ({
    background: isActive ? 'var(--navy)' : 'var(--white)',
    color: isActive ? 'var(--white)' : 'var(--muted-text)',
    border: '1px solid var(--border-color)',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.8rem',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap'
  });

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--light-bg)', padding: '2rem', paddingTop: '78px' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>

        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontSize: '2.5rem' }}>Dashboard</h1>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/admin/create" className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>+ New Listing</Link>
            <button onClick={logout} className="btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>Sign Out</button>
          </div>
        </div>

        {/* STAT CARDS */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '2rem' }}
        >
          <div style={statCardStyle}>
            <div style={statNumberStyle}>{totalItems}</div>
            <div style={statLabelStyle}>Total</div>
          </div>
          <div style={statCardStyle}>
            <div style={{ ...statNumberStyle, color: '#166534' }}>{activeItems}</div>
            <div style={statLabelStyle}>Active</div>
          </div>
          <div style={statCardStyle}>
            <div style={{ ...statNumberStyle, color: '#854d0e' }}>{pausedItems}</div>
            <div style={statLabelStyle}>Paused</div>
          </div>
          <div style={statCardStyle}>
            <div style={{ ...statNumberStyle, color: 'var(--orange)' }}>{divisionCounts.property}</div>
            <div style={statLabelStyle}>Real Estate</div>
          </div>
          <div style={statCardStyle}>
            <div style={{ ...statNumberStyle, color: 'var(--orange)' }}>{divisionCounts.plan}</div>
            <div style={statLabelStyle}>House Plans</div>
          </div>
          <div style={statCardStyle}>
            <div style={{ ...statNumberStyle, color: 'var(--orange)' }}>{divisionCounts.contract}</div>
            <div style={statLabelStyle}>Contracts</div>
          </div>
        </motion.div>

        {/* SEARCH + FILTERS */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ backgroundColor: 'var(--white)', borderRadius: '8px', padding: '1.5rem', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}
        >
          {/* Search Bar */}
          <input 
            type="text" 
            placeholder="🔍  Search by title or location..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ 
              width: '100%', padding: '0.85rem 1.25rem', border: '1px solid var(--border-color)', 
              borderRadius: '6px', outline: 'none', fontFamily: 'inherit', fontSize: '0.95rem',
              marginBottom: '1rem', backgroundColor: 'var(--light-bg)'
            }}
          />

          {/* Filter Row */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--muted-text)', marginRight: '0.5rem' }}>DIVISION:</span>
            <button onClick={() => setDivisionFilter('all')} style={filterBtnStyle(divisionFilter === 'all')}>All</button>
            <button onClick={() => setDivisionFilter('property')} style={filterBtnStyle(divisionFilter === 'property')}>Real Estate</button>
            <button onClick={() => setDivisionFilter('plan')} style={filterBtnStyle(divisionFilter === 'plan')}>House Plans</button>
            <button onClick={() => setDivisionFilter('contract')} style={filterBtnStyle(divisionFilter === 'contract')}>Contracts</button>
            
            <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--muted-text)', marginLeft: '1.5rem', marginRight: '0.5rem' }}>STATUS:</span>
            <button onClick={() => setStatusFilter('all')} style={filterBtnStyle(statusFilter === 'all')}>All</button>
            <button onClick={() => setStatusFilter('active')} style={filterBtnStyle(statusFilter === 'active')}>Active</button>
            <button onClick={() => setStatusFilter('paused')} style={filterBtnStyle(statusFilter === 'paused')}>Paused</button>
          </div>
        </motion.div>

        {/* RESULTS COUNT */}
        <div style={{ fontSize: '0.85rem', color: 'var(--muted-text)', marginBottom: '0.75rem', fontWeight: 'bold' }}>
          Showing {filteredProperties.length} of {totalItems} items
          {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
        </div>

        {/* TABLE */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ backgroundColor: 'var(--white)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}
        >
          {loading ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--muted-text)' }}>Loading...</div>
          ) : filteredProperties.length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--muted-text)' }}>
              {properties.length === 0 
                ? 'No listings yet. Click "+ New Listing" to add one.' 
                : 'No items match your search or filters.'}
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f1f5f9', borderBottom: '1px solid var(--border-color)', textAlign: 'left' }}>
                    <th style={{ padding: '1rem 1.5rem', fontWeight: 'bold', color: 'var(--navy)' }}>Item</th>
                    <th style={{ padding: '1rem 1.5rem', fontWeight: 'bold', color: 'var(--navy)' }}>Division</th>
                    <th style={{ padding: '1rem 1.5rem', fontWeight: 'bold', color: 'var(--navy)' }}>Type</th>
                    <th style={{ padding: '1rem 1.5rem', fontWeight: 'bold', color: 'var(--navy)' }}>Status</th>
                    <th style={{ padding: '1rem 1.5rem', fontWeight: 'bold', color: 'var(--navy)' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProperties.map(property => (
                    <tr key={property.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '1rem 1.5rem' }}>
                        <div style={{ fontWeight: 'bold', color: property.status === 'paused' ? 'var(--muted-text)' : 'var(--navy)', marginBottom: '0.25rem' }}>
                          {property.title}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--muted-text)' }}>{property.price && formatPrice(property.price) + ' • '}{property.location}</div>
                      </td>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--muted-text)' }}>
                        {getDivisionLabel(property.masterCategory)}
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

import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import imageCompression from 'browser-image-compression';

const IMGBB_API_KEY = 'fb4f87cbdcccb259e36e62d200adea30';

const CreateListing = () => {
  const [formData, setFormData] = useState({
    title: '',
    masterCategory: 'property',
    type: 'house',
    price: '',
    location: '',
    description: '',
    features: ''
  });
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const uploadImages = async () => {
    const uploadPromises = images.map(async (image) => {
      const options = { maxSizeMB: 0.8, maxWidthOrHeight: 1200, useWebWorker: true };
      let fileToUpload = image;
      try { fileToUpload = await imageCompression(image, options); } 
      catch (error) { console.warn("Compression failed", error); }

      const data = new FormData();
      data.append('image', fileToUpload);
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) return json.data.url;
      else throw new Error('Image upload failed');
    });
    return Promise.all(uploadPromises);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (images.length === 0) {
      setError("Please select at least one image.");
      return;
    }

    setLoading(true);
    setError('');

    try {
      const imageUrls = await uploadImages();
      
      const propertyData = {
        ...formData,
        features: formData.features.split(',').map(f => f.trim()),
        images: imageUrls,
        status: 'active',
        createdAt: serverTimestamp()
      };

      await addDoc(collection(db, "properties"), propertyData);
      navigate('/admin');
    } catch (err) {
      console.error(err);
      setError("Error creating listing. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--light-bg)', padding: '2rem', paddingTop: '78px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <Link to="/admin" style={{ color: 'var(--muted-text)', textDecoration: 'none' }}>&larr; Back to Dashboard</Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ backgroundColor: 'var(--white)', borderRadius: '8px', padding: '3rem', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}
        >
          <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontSize: '2rem', marginBottom: '2rem' }}>Add New Item</h1>
          
          {error && <div style={{ backgroundColor: '#fee2e2', color: '#dc2626', padding: '1rem', borderRadius: '4px', marginBottom: '1.5rem' }}>{error}</div>}

          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <label style={labelStyle}>Division (Category)</label>
                <select name="masterCategory" value={formData.masterCategory} onChange={handleInputChange} style={inputStyle}>
                  <option value="property">Real Estate for Sale</option>
                  <option value="plan">House Plan / Blueprint</option>
                  <option value="contract">Finished Construction Contract</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Title</label>
                <input type="text" name="title" required value={formData.title} onChange={handleInputChange} style={inputStyle} placeholder="e.g. Modern 4-Bedroom Villa" />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <label style={labelStyle}>Property Type</label>
                <select name="type" value={formData.type} onChange={handleInputChange} style={inputStyle}>
                  <option value="house">House / Building</option>
                  <option value="land">Land / Plot</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Price {formData.masterCategory === 'contract' ? '(Optional)' : ''}</label>
                <input type="text" name="price" required={formData.masterCategory !== 'contract'} value={formData.price} onChange={handleInputChange} style={inputStyle} placeholder="e.g. 15,000,000 FCFA" />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Location</label>
              <input type="text" name="location" required value={formData.location} onChange={handleInputChange} style={inputStyle} placeholder="e.g. Mile 4 Nkwen, Bamenda" />
            </div>

            <div>
              <label style={labelStyle}>Features (comma separated)</label>
              <input type="text" name="features" value={formData.features} onChange={handleInputChange} style={inputStyle} placeholder="e.g. 4 Bedrooms, 2 Baths, Fenced, Borehole" />
            </div>

            <div>
              <label style={labelStyle}>Description</label>
              <textarea name="description" required rows="5" value={formData.description} onChange={handleInputChange} style={{...inputStyle, resize: 'vertical'}} placeholder="Describe the item..." />
            </div>

            <div>
              <label style={labelStyle}>Upload Images</label>
              <input type="file" multiple accept="image/*" onChange={handleImageChange} style={{ marginTop: '0.5rem' }} />
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)', marginTop: '0.5rem' }}>Select multiple images by holding Ctrl/Cmd.</p>
            </div>

            <button type="submit" disabled={loading} className="btn-primary" style={{ marginTop: '1rem', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Publishing...' : 'Publish Item'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

const labelStyle = { display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--navy)' };
const inputStyle = { width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', outline: 'none', fontFamily: 'inherit' };

export default CreateListing;

import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import imageCompression from 'browser-image-compression';

const IMGBB_API_KEY = 'fb4f87cbdcccb259e36e62d200adea30';

const EditListing = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    type: 'house',
    price: '',
    location: '',
    description: '',
    features: ''
  });
  const [existingImages, setExistingImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const docSnap = await getDoc(doc(db, "properties", id));
        if (docSnap.exists()) {
          const data = docSnap.data();
          setFormData({
            title: data.title || '',
            type: data.type || 'house',
            price: data.price || '',
            location: data.location || '',
            description: data.description || '',
            features: data.features ? data.features.join(', ') : ''
          });
          setExistingImages(data.images || []);
        } else {
          setError("Listing not found.");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch property details.");
      } finally {
        setFetching(false);
      }
    };
    fetchProperty();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      setNewImages(Array.from(e.target.files));
    }
  };

  const removeExistingImage = (idx) => {
    setExistingImages(prev => prev.filter((_, i) => i !== idx));
  };

  const uploadNewImages = async () => {
    if (newImages.length === 0) return [];

    const uploadPromises = newImages.map(async (image) => {
      const options = { maxSizeMB: 0.8, maxWidthOrHeight: 1200, useWebWorker: true };
      let fileToUpload = image;
      try { fileToUpload = await imageCompression(image, options); } 
      catch (e) { console.warn("Compression failed"); }

      const data = new FormData();
      data.append('image', fileToUpload);
      
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
        method: 'POST',
        body: data
      });
      
      const json = await res.json();
      if (json.success) return json.data.url;
      throw new Error('Image upload failed');
    });
    return Promise.all(uploadPromises);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (existingImages.length === 0 && newImages.length === 0) {
      setError("Please have at least one image.");
      return;
    }

    setLoading(true);
    setError('');

    try {
      const newlyUploadedUrls = await uploadNewImages();
      const finalImages = [...existingImages, ...newlyUploadedUrls];
      
      const propertyData = {
        ...formData,
        features: formData.features.split(',').map(f => f.trim()).filter(f => f),
        images: finalImages
      };

      await updateDoc(doc(db, "properties", id), propertyData);
      navigate('/admin');
    } catch (err) {
      console.error(err);
      setError("Error updating listing. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <div style={{ paddingTop: '100px', textAlign: 'center' }}>Loading...</div>;

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
          <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontSize: '2rem', marginBottom: '2rem' }}>Edit Listing</h1>
          
          {error && <div style={{ backgroundColor: '#fee2e2', color: '#dc2626', padding: '1rem', borderRadius: '4px', marginBottom: '1.5rem' }}>{error}</div>}

          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
            <div>
              <label style={labelStyle}>Title</label>
              <input type="text" name="title" required value={formData.title} onChange={handleInputChange} style={inputStyle} />
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
                <label style={labelStyle}>Price</label>
                <input type="text" name="price" required value={formData.price} onChange={handleInputChange} style={inputStyle} />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Location</label>
              <input type="text" name="location" required value={formData.location} onChange={handleInputChange} style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Features (comma separated)</label>
              <input type="text" name="features" value={formData.features} onChange={handleInputChange} style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Description</label>
              <textarea name="description" required rows="5" value={formData.description} onChange={handleInputChange} style={{...inputStyle, resize: 'vertical'}} />
            </div>

            <div>
              <label style={labelStyle}>Current Images</label>
              <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
                {existingImages.map((img, idx) => (
                  <div key={idx} style={{ position: 'relative', width: '100px', height: '100px', flexShrink: 0 }}>
                    <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} alt="Listing" />
                    <button type="button" onClick={() => removeExistingImage(idx)} style={{ position: 'absolute', top: 5, right: 5, background: 'red', color: 'white', border: 'none', borderRadius: '50%', width: '20px', height: '20px', cursor: 'pointer' }}>&times;</button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label style={labelStyle}>Add New Images</label>
              <input type="file" multiple accept="image/*" onChange={handleImageChange} style={{ marginTop: '0.5rem' }} />
            </div>

            <button type="submit" disabled={loading} className="btn-primary" style={{ marginTop: '1rem', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Saving Changes...' : 'Save Changes'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

const labelStyle = { display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--navy)' };
const inputStyle = { width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', outline: 'none', fontFamily: 'inherit' };

export default EditListing;

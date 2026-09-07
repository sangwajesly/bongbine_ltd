const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public/images');

async function compressImages() {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg'));
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    const sizeMB = stats.size / (1024 * 1024);
    
    // Only compress if larger than 1MB
    if (sizeMB > 1) {
      console.log(`Compressing ${file} (${sizeMB.toFixed(2)} MB)...`);
      const tempPath = path.join(dir, 'temp_' + file);
      
      try {
        await sharp(filePath)
          .resize(1920, 1920, { fit: 'inside', withoutEnlargement: true }) // Max 1920px dimensions
          .jpeg({ quality: 80, progressive: true })
          .toFile(tempPath);
          
        // Overwrite original
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        
        const newStats = fs.statSync(filePath);
        console.log(`Done: ${file} is now ${(newStats.size / 1024).toFixed(2)} KB`);
      } catch (err) {
        console.error(`Error compressing ${file}:`, err);
      }
    } else {
      console.log(`Skipping ${file} (${sizeMB.toFixed(2)} MB) - already small enough.`);
    }
  }
}

compressImages().then(() => console.log('Compression complete.')).catch(console.error);

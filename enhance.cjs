const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, 'public', 'ceo.png');
const outputPath = path.join(__dirname, 'public', 'ceo_enhanced.png');

async function enhanceImage() {
  try {
    await sharp(inputPath)
      // Modest contrast increase and brightness
      .modulate({
        brightness: 1.05,
        saturation: 1.1,
      })
      // Enhance clarity and edges
      .sharpen({
        sigma: 1.2,
        m1: 1.5,
        m2: 0.8,
        x1: 2,
        y2: 10,
        y3: 20
      })
      // Normalise (auto-contrast) might be too aggressive, so skip unless needed
      // .normalize()
      .toFile(outputPath);

    console.log('CEO image enhanced successfully.');
    
    // Replace original
    fs.unlinkSync(inputPath);
    fs.renameSync(outputPath, inputPath);
  } catch (err) {
    console.error('Error enhancing image:', err);
  }
}

enhanceImage();

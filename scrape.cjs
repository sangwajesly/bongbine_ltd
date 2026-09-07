const https = require('https');

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function scrape() {
  try {
    const html = await fetchHTML('https://html.duckduckgo.com/html/?q=site:unsplash.com/photos/+african+construction');
    const regex = /https:\/\/unsplash\.com\/photos\/[a-zA-Z0-9\-]+/g;
    const matches = html.match(regex);
    if (matches) {
      const ids = [...new Set(matches.map(m => m.split('/').pop()))];
      console.log('Unsplash IDs:', ids);
    } else {
      console.log('No matches found on DDG.', html.substring(0, 500));
    }
  } catch (err) {
    console.error(err);
  }
}

scrape();

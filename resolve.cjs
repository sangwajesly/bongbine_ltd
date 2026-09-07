const https = require('https');

const slugs = [
  'UK1CQ6GT',
  'pdKdz5xFv',
  'QdDxuPNxL3c',
  'sNVkn3507Oo',
  'lQrpf2pHRVA'
];

async function resolveId(slug) {
  return new Promise((resolve, reject) => {
    https.get(`https://unsplash.com/photos/${slug}/download`, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    }, (res) => {
      resolve(res.headers.location);
    }).on('error', reject);
  });
}

async function run() {
  for (const slug of slugs) {
    const url = await resolveId(slug);
    console.log(`Slug: ${slug} -> ${url}`);
  }
}

run();

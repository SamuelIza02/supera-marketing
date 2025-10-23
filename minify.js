const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const minified = html
  .replace(/\s+/g, ' ')
  .replace(/>\s+</g, '><')
  .replace(/<!--[\s\S]*?-->/g, '')
  .trim();
fs.writeFileSync('index.html', minified);
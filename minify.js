const fs = require('fs');

// Minificar index.html
const html = fs.readFileSync('index.html', 'utf8');
const minified = html
  .replace(/\s+/g, ' ')
  .replace(/>\s+</g, '><')
  .replace(/<!--[\s\S]*?-->/g, '')
  .trim();
fs.writeFileSync('index.html', minified);

// Minificar portafolio.html
const portfolioHtml = fs.readFileSync('portafolio.html', 'utf8');
const portfolioMinified = portfolioHtml
  .replace(/\s+/g, ' ')
  .replace(/>\s+</g, '><')
  .replace(/<!--[\s\S]*?-->/g, '')
  .trim();
fs.writeFileSync('portafolio.html', portfolioMinified);
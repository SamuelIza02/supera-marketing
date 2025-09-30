// Schema adicional para SEO 10/10
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Atienden marketing digital en Monterrey?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, brindamos servicios de marketing digital en Monterrey, Guadalupe, Apodaca, San Nicolás y toda el área metropolitana de Nuevo León."
      }
    },
    {
      "@type": "Question", 
      "name": "¿Cuánto cuesta marketing digital en Juárez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestros paquetes de marketing digital en Juárez inician desde $3,500 MXN mensuales, incluyendo redes sociales, anuncios y diseño gráfico."
      }
    }
  ]
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Supera Marketing Digital",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "12"
  }
};

// Insertar schemas
const faqScript = document.createElement('script');
faqScript.type = 'application/ld+json';
faqScript.textContent = JSON.stringify(faqSchema);
document.head.appendChild(faqScript);

const reviewScript = document.createElement('script');
reviewScript.type = 'application/ld+json';
reviewScript.textContent = JSON.stringify(reviewSchema);
document.head.appendChild(reviewScript);
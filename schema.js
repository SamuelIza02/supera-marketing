const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://superamkt.com/#organization",
  "name": "Supera Marketing Digital",
  "alternateName": "Supera",
  "description": "Agencia de marketing digital en Juárez, Monterrey y área metropolitana especializada en emprendedores y pequeños negocios. Gestionamos redes sociales, anuncios y páginas web que convierten visitas en clientes.",
  "url": "https://superamkt.com",
  "logo": "https://superamkt.com/assets/logo%20supera%20letras-azul.svg",
  "image": "https://superamkt.com/assets/equipo.png",
  "telephone": "+52-811-981-5965",
  "priceRange": "$$",
  "currenciesAccepted": "MXN",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Juárez",
    "addressRegion": "Nuevo León",
    "addressCountry": "MX"
  },
  "areaServed": [
    {"@type": "City", "name": "Juárez, Nuevo León"},
    {"@type": "City", "name": "Monterrey, Nuevo León"},
    {"@type": "City", "name": "Guadalupe, Nuevo León"},
    {"@type": "City", "name": "Apodaca, Nuevo León"},
    {"@type": "City", "name": "Cadereyta, Nuevo León"}
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "25.6866",
      "longitude": "-100.3161"
    },
    "geoRadius": "50000"
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61570868399782",
    "https://www.instagram.com/supera.md/",
    "https://wa.me/528119815965"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Marketing Digital",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gestión de Redes Sociales",
          "description": "Creamos y publicamos contenido atractivo cada mes para que tu negocio se mantenga activo, visible y en contacto con tus clientes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Campañas Publicitarias",
          "description": "Diseñamos y administramos anuncios en Facebook e Instagram que garantizan alcance real y clientes potenciales."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Diseño Gráfico & Creatividad", 
          "description": "Tu marca siempre se verá profesional: diseños originales, claros y alineados a la identidad de tu negocio."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "3500",
          "priceCurrency": "MXN",
          "unitText": "MONTH"
        }
      }
    ]
  },
  "slogan": "Más clientes para tu negocio, con menos esfuerzo",
  "foundingDate": "2024",
  "keywords": "marketing digital Juárez, marketing digital Monterrey, marketing digital Guadalupe, marketing digital Apodaca, redes sociales, anuncios Facebook, diseño gráfico, agencia marketing, emprendedores, pequeños negocios, San Nicolás, Escobedo, Santa Catarina"
};

// Insertar el schema en el head
const script = document.createElement('script');
script.type = 'application/ld+json';
script.textContent = JSON.stringify(schemaData);
document.head.appendChild(script);

// Breadcrumbs según la página
const currentPath = window.location.pathname;

if (currentPath.includes('portafolio')) {
  // Breadcrumbs para portafolio
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://superamkt.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Portafolio"
      }
    ]
  };
  
  const breadcrumbScript = document.createElement('script');
  breadcrumbScript.type = 'application/ld+json';
  breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(breadcrumbScript);
} else {
  // Breadcrumbs para index (página principal)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio"
      }
    ]
  };
  
  const breadcrumbScript = document.createElement('script');
  breadcrumbScript.type = 'application/ld+json';
  breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(breadcrumbScript);
}
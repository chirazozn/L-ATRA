// src/SEO.js
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph for Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Add restaurant-specific structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "L'ATRA Pizzeria",
          "image": "https://l-atra.vercel.app/logo.jpg",
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Birkhadem",
            "addressLocality": "Alger",
            "addressRegion": "Alger",
            "postalCode": "16000",
            "addressCountry": "DZ"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 36.72497,
            "longitude": 3.036381
          },
          "url": "https://l-atra.vercel.app/",
          "telephone": "+213554180172",
          "openingHours": [
            "Sa-Th 11:00-00:00",
            "Fr 14:00-00:00"
          ],
          "servesCuisine": ["Pizza", "Italian", "Sandwich"],
          "priceRange": "$$"
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
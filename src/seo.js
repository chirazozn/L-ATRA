// SEO.js - Add this component to your Home page
import React from 'react';
import { Helmet } from 'react-helmet-async'; // Install: npm install react-helmet-async

const SEO = () => {
  return (
    <Helmet>
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.latra-pizza.dz" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="L'ATRA Pizzeria" />
      
      {/* Location-specific */}
      <meta name="city" content="Birkhadem" />
      <meta name="country" content="Algeria" />
      
      {/* Restaurant-specific */}
      <meta name="restaurant:menu" content="https://www.latra-pizza.dz/menu" />
      <meta name="restaurant:contact_info:phone_number" content="+213554180172" />
      
      {/* Structured Data for Menu */}
      <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Menu",
          "name": "Menu L'ATRA Pizzeria",
          "description": "Menu des pizzas au feu de bois et sandwichs Pannuzo",
          "hasMenuSection": {
            "@type": "MenuSection",
            "name": "Pizzas au Feu de Bois",
            "description": "Pizzas traditionnelles cuites au feu de bois"
          },
          "url": "https://www.latra-pizza.dz/menu"
        }
      `}
      </script>
    </Helmet>
  );
};

export default SEO;
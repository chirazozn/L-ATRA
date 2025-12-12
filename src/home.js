import React from 'react';
import './home.css';
import { Link } from 'react-router-dom'; // import Link
import { useState } from 'react';
import { 
  FaPhone, 
  FaClock, 
  FaEnvelope, 
  FaFacebookF, 
  FaInstagram, 
  FaTiktok, 
  FaWhatsapp,
  FaCalendarCheck
} from 'react-icons/fa';import logo from './images/atralogo.jpg';

const Home = () => {
const [menuOpen, setMenuOpen] = useState(false);

  return (
    









    <div>
        
      {/* Header */}
<header className="header">
  <div className="logo">
    <img src={logo} alt="Logo" />
  </div>

  <nav className={`nav ${menuOpen ? 'open' : ''}`}>
    <a href="#about">About Us</a>
    <a href="#menu">Menu</a>
    <a href="#contact">Contact</a>
    <a href="#localisation">Localisation</a>
  </nav>

  <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
    <span></span>
    <span></span>
    <span></span>
  </button>
</header>


      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenue chez L'ATRA</h1>
            <Link to="/menu" className="btn-explore">Explorez notre menu </Link>

        </div>
      </section>

      
     {/* About Section */}
<section id="about" className="section about-section">
  <h2>About Us</h2>
  <p>
  Bienvenue chez L’ATRA <br></br>
Nous croyons que la cuisine — quelle qu’elle soit — doit raconter une histoire : celle du goût, de la passion, et des émotions.
C’est pourquoi L’ATRA rassemble plusieurs univers culinaires, pour permettre à chacun de suivre sa propre envie…<br></br>

« L’ATRA — Là où ton appétit te portera. »
  </p>
</section>

{/* Menu Section */}
<section id="menu" className="section menu-section">
  <h2>Notre Menu</h2>
  <Link to="/menu" className="btn-explore">Explore</Link>
</section>

{/* Contact Section */}
{/* Contact Section */}
<section id="contact" className="section contact-section">
  <div className="contact-overlay"></div>
  
  <div className="contact-container">
    <h2 className="contact-title">  Nous contacter</h2>
    
    <div className="contact-content">
      
      {/* Informations de contact */}
      <div className="contact-info">
        <div className="contact-item">
          <div className="contact-icon">
            <FaPhone className="icon" />
          </div>
          <div className="contact-details">
            <h3>Réservations / commande /Livraison</h3>
            <a href="tel:+213554180172" className="contact-link">
              +213 (0) 554 18 01 72
            </a>
            <p className="contact-note">Appelez-nous pour réserver votre table</p>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">
            <FaClock className="icon" />
          </div>
          <div className="contact-details">
            <h3>Horaires d'ouverture</h3>
            <p><strong>Sam - Jeu vendredi</strong><br />11h00 à 00h00 </p>
                        <p><strong>vendredi </strong><br /> 14h00 à 00h00 </p>

            <p className="contact-note">Service continu tous les jours</p>
          </div>
        </div>
        
     
      </div>
      
      {/* Réseaux sociaux sur une seule ligne */}
      <div className="social-section">
        <h3 className="social-title">Suivez-nous</h3>
        
        <div className="social-icons-row">
          <a 
            href="https://www.facebook.com/share/16kLKsWT1C/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon facebook"
            aria-label="Facebook"
            title="Facebook"
          >
            <FaFacebookF className="social-icon-svg" />
          </a>
          
          <a 
            href="https://www.instagram.com/latra_pizza?igsh=bTQ1Nmx6bW00NzVy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon instagram"
            aria-label="Instagram"
            title="Instagram"
          >
            <FaInstagram className="social-icon-svg" />
          </a>
          
          <a 
            href="https://www.tiktok.com/@latra.pizza?_r=1&_t=ZS-92AT2CLR68I" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon tiktok"
            aria-label="TikTok"
            title="TikTok"
          >
            <FaTiktok className="social-icon-svg" />
          </a>
          
          <a 
            href="https://wa.me/213554180172" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon whatsapp"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <FaWhatsapp className="social-icon-svg" />
          </a>
        </div>
      </div>
      
    </div>
    
    {/* Boutons d'action */}
    <div className="contact-actions">
      <a href="tel:+213554180172" className="action-btn phone-btn">
        <FaPhone className="btn-icon" />
        Appeler maintenant
      </a>
      {/*
      <a href="#reservation" className="action-btn reservation-btn">
        <FaCalendarCheck className="btn-icon" />
        Réserver en ligne
      </a>
      */}
    </div>
  </div>
</section>




{/* Localisation Section */}
<section id="localisation" className="section localisation-section">
  <h2>Localisation</h2>
  
  <div className="map-container">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.8996929608966!2d3.0363811!3d36.7249702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad001cad60fd%3A0xc29b59e3dba2b581!2sL&#39;ATRA%20pizza!5e0!3m2!1sen!2sdz!4v1765238202591!5m2!1sen!2sdz"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps - L'ATRA Pizza"
    ></iframe>
  </div>
    <a 
    href="https://maps.app.goo.gl/pEnwDxRDcKBusqhH8" 
    target="_blank" 
    rel="noopener noreferrer"
    className="btn-map"
  >
    <i className="fas fa-map-marker-alt"></i>
    Ouvrir dans Google Maps
  </a>
</section>


<footer className="footer">
  <div className="footer-overlay"></div>
  
  <div className="footer-content">
    <p className="footer-text">Suivez-nous sur :</p>
    
    <div className="social-links">
      <a 
        href="https://www.facebook.com/share/16kLKsWT1C/?mibextid=wwXIfr" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Facebook"
        title="Facebook"
      >
        <FaFacebookF />
      </a>
      
      <a 
        href="https://www.instagram.com/latra_pizza?igsh=bTQ1Nmx6bW00NzVy" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Instagram"
        title="Instagram"
      >
        <FaInstagram />
      </a>
      
      <a 
        href="https://www.tiktok.com/@latra.pizza?_r=1&_t=ZS-92AT2CLR68I" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="TikTok"
        title="TikTok"
      >
        <FaTiktok />
      </a>
    </div>
    
    <p className="copyright">© 2025 L'ATRA. Tous droits réservés.</p>
    
    {/* Optionnel : Ajoutez le téléphone et WhatsApp si besoin */}
    <div className="footer-contact">
      <a href="tel:+213554180172" className="contact-link">
        <FaPhone /> +213 (0) 554 18 01 72
      </a>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Home;

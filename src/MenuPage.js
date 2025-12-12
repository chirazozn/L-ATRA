import React from 'react';
import './MenuPage.css';
import menuPhoto from './images/menu-photo.jpg';
import { 
  FaPhone, 
  FaClock, 
  FaEnvelope, 
  FaFacebookF, 
  FaInstagram, 
  FaTiktok, 
  FaWhatsapp,
  FaCalendarCheck
} from 'react-icons/fa';


const MenuPage = () => {
  const info = {
    horaires: "Sam - Jeu 11h00 à 00h00 • Vendredi 14h00 à 00h00",
    telephone: "0554 180 172",
    adresse: "Birkhadem, Alger",
    specialite: "Pizza & Sandwich au feu de bois"
  };

  return (
    <div className="menu-page">
      {/* HERO NORMAL (NON FIXE) */}
      <header className="menu-hero-normal">
        <div className="hero-content">
          <h1 className="menu-title">Notre Menu</h1>
        </div>
      </header>

     
      {/* PHOTO DU MENU - 100% WIDTH */}
      <main className="menu-photo-container">
        <img 
          src={menuPhoto} 
          alt="Menu L'ATRA Pizza" 
          className="menu-photo-fullwidth" /* ou menu-photo-contain */
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/1200x1600/0a0a0a/ffffff?text=Menu+L'ATRA+Pizza";
          }}
        />
        
        {/* BOUTONS D'ACTION */}
        <div className="menu-actions">
        
          
          <button 
            className="action-btn"
            onClick={() => {
              const url = `https://wa.me/?text=${encodeURIComponent("Découvrez le menu de L'ATRA Pizza ! " + window.location.href)}`;
              window.open(url, '_blank');
            }}
          >
            <span className="btn-icon"></span>
            Partager
          </button>
        </div>
      </main>

      {/* FOOTER NORMAL (NON FIXE) */}
      
      
      <footer className="footer">
        <div className="footer-overlay"></div>
        
        <div className="footer-content">
          <p className="footer-text">Suivez-nous sur :</p>
          
          <div className="social-links">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook"
              title="Facebook"
            >
              <FaFacebookF />
            </a>
            
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            
            <a 
              href="https://tiktok.com" 
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

export default MenuPage;
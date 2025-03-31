import React from 'react';
import './App.css';
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter, FaRedditSquare, FaYoutube } from 'react-icons/fa';

function App() {
  return (
    <div className="container">
      {/* Welcome Section */}
      <section className="welcome">
        <div className="welcome-background"></div>
        <div className="welcome-overlay"></div>
        <div className="welcome-content">
          <h1>GabySI</h1>
          <p>Premium cannabis genetics with high terpene profiles.</p>
        </div>
      </section>
      
      {/* Video Section */}
      <section className="video-section">
        <h2>Latest Podcast Episode</h2>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WPb7iFqGdWc?si=PUldaG3GrTwIfCo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
      
      {/* Genetics List Section */}
      <section className="genetics">
        <h2>My Genetics</h2>
        <div className="strain-list">
          <div className="strain-card">
            <h3>Galactic Kush</h3>
            <p>28% THC | Citrus & Pine Terpenes</p>
          </div>
          <div className="strain-card">
            <h3>Stellar Diesel</h3>
            <p>24% THC | Diesel & Earthy Aromas</p>
          </div>
          <div className="strain-card">
            <h3>Nebula Haze</h3>
            <p>22% THC | Berry & Skunky Undertones</p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Phone: (420) 555-0420</p>
        <p>Email: support@cosmicgenetics.com</p>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="social-links">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://reddit.com" target="_blank" rel="noopener noreferrer"><FaRedditSquare /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
        <p>Copyright &copy; {new Date().getFullYear()} GabySI Genetics</p>
        <p>All products that appear on this site have 0.03% THC or less and are considered hemp by federal law. Seeds are sold as collectible adult souvenirs only and are not intended for any use that does not comply with local laws. We do not respond to any messages regarding germinating seeds or growing cannabis. Please collect responsibly.</p>
      </footer>
    </div>
  );
}

export default App;
// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Import your CSS file for Footer

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://github.com/Bwainuna" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/blake-boiteux-38453025b/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
      <div>
        <a href="https://twitter.com/BoiteuxBla77442" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i> Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;

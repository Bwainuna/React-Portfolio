// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Import your CSS file for Footer

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
      <div>
        <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
      <div>
        <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i> Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;

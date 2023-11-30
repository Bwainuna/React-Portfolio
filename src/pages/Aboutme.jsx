// src/pages/AboutMe.jsx
import React from 'react';
import './AboutMe.css'; // Import your CSS file for AboutMe (create one if not existing)

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-content">
        <div className="text-content">
          <h2>About Me</h2>
          <p>
            Hey there! I'm Blake Boiteux, a 25-year-old web development student in Salt Lake City.
            Currently attending Utah Valley University and diving into a full-stack dev bootcamp.
            Beyond coding, I'm into product photography and graphic design. Dreaming of becoming a
            UX/UI designer because I love bringing product stories to life through killer visuals.
            Let's create something awesome! 🚀✨
          </p>
        </div>
        <div className="cover-container">
          {/* Replace the URL with your own image */}
          <img src="src\assets\Portfoliopic.png" alt="Cover Photo" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

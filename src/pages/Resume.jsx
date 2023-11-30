// src/pages/Resume.jsx
import React from 'react';
import './Resume.css'; // Import your CSS file for Resume (create one if not existing)

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>Resume</h2>

      {/* Downloadable Resume Link */}
      <div className="resume-link">
        {/* Replace the URL with the link to your downloadable resume */}
        <a href="src\assets\RESUME.pdf" download>
          Download Resume
        </a>
      </div>

      {/* List of Proficiencies */}
      <div className="proficiencies">
        <h3>Technical Proficiencies</h3>
        <ul>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          {/* Add more proficiencies as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Resume;

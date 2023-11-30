// src/pages/Portfolio.jsx
import React from 'react';
import './Portfolio.css'; // Import your CSS file for Portfolio (create one if not existing)

const Portfolio = () => {
  const projects = [
    {
      title: "HTML/CSS Portfolio",
      imageSrc: "src/assets/Screenshot1.png",
      deployLink: "https://bwainuna.github.io/Blake-Boiteux-Professional-Portfolio/",
      githubLink: "https://github.com/Bwainuna/Blake-Boiteux-Professional-Portfolio"
    },
    {
        title: "Skywatch",
        imageSrc: "src/assets/Skywatch.png",
        deployLink: "https://jensenjamessaoit.github.io/Skywatch/",
        githubLink: "https://github.com/jensenjamessaoit/Skywatch"
      },
      {
        title: "Professional README",
        imageSrc: "src/assets/Screenshot 2023-11-30 123117.png",
        deployLink: "https://www.youtube.com/watch?v=XoBGYckdOBw",
        githubLink: "https://github.com/Bwainuna/Blake-Boiteux-Professional-Portfolio/settings/pages"
      },
      {
        title: "Coding Quiz",
        imageSrc: "src/assets/265851974-15c8827d-957d-4bf5-96d1-9ed13d0b3d07.png",
        deployLink: "https://bwainuna.github.io/Blake-Boiteux-Quiz/",
        githubLink: "https://github.com/Bwainuna/Blake-Boiteux-Quiz"
      },
      {
        title: "Password Generator",
        imageSrc: "src/assets/03-Deployed.png",
        deployLink: "https://bwainuna.github.io/Blake-Boiteux-Password-Generator/",
        githubLink: "https://github.com/Bwainuna/Blake-Boiteux-Password-Generator"
      },
      {
        title: "Note Taker",
        imageSrc: "src/assets/Screenshot 2023-10-27 235057.png",
        deployLink: "https://11-note-taker-production-ed8b.up.railway.app/notes",
        githubLink: "https://github.com/Bwainuna/Note-Taker"
      },
  ];

  return (
    <div className="portfolio-container">
      <h2>My Portfolio</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-container">
            <img src={project.imageSrc} alt={project.title} />
            <div className="project-details">
              <h3>{project.title}</h3>
              <div className="project-links">
                <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                  Deployed App
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

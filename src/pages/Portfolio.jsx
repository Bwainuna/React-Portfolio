// src/pages/Portfolio.jsx
import React from 'react';
import './Portfolio.css'; // Import your CSS file for Portfolio (create one if not existing)

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      imageSrc: "src\assets\Portfoliopic.png",
      deployLink: "https://example.com/project1",
      githubLink: "https://github.com/example/project1"
    },
    {
        title: "Project 2",
        imageSrc: "https://via.placeholder.com/600x400",
        deployLink: "https://example.com/project1",
        githubLink: "https://github.com/example/project1"
      },
      {
        title: "Project 3",
        imageSrc: "https://via.placeholder.com/600x400",
        deployLink: "https://example.com/project1",
        githubLink: "https://github.com/example/project1"
      },
      {
        title: "Project 4",
        imageSrc: "https://via.placeholder.com/600x400",
        deployLink: "https://example.com/project1",
        githubLink: "https://github.com/example/project1"
      },
      {
        title: "Project 5",
        imageSrc: "https://via.placeholder.com/600x400",
        deployLink: "https://example.com/project1",
        githubLink: "https://github.com/example/project1"
      },
      {
        title: "Project 6",
        imageSrc: "https://via.placeholder.com/600x400",
        deployLink: "https://example.com/project1",
        githubLink: "https://github.com/example/project1"
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

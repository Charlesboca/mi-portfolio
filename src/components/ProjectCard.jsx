import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard({ title, description, image, link, tech }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
          {tech.map((t, index) => <span key={index} className="tech-tag">{t}</span>)}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn-view">
          Ver pagina
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
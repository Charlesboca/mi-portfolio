import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { getProyectos } from '../services/projectService';
import ProjectCardSkeleton from '../components/ProjectCardSkeleton';
import '../styles/Home.css';
import '../styles/Hero.css';

function Home() {
  const [proyectos, setProyectos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const data = await getProyectos(); 
      setProyectos(data);
      setIsLoading(false);
    }, 200); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      {/* Sección Hero */}
      <section className="hero-container">
        <h1 className="hero-title">Desarrollador FullStack</h1>
        <p className="cta-button">
          Transformando ideas complejas en experiencias web modernas, escalables y con alto impacto visual.
        </p>
      </section>

      {/* Sección Sobre Mí */}
      <section className="about-section">
        <h2 className="about-title">Sobre mí</h2>
        <p className="about-description">
          Desarrollador FullStack enfocado en crear experiencias web modernas, escalables y con alto impacto visual. 
          Me apasiona transformar ideas complejas en soluciones funcionales, cuidando tanto la interfaz de usuario como la lógica por detrás. 
          Me mantengo en constante capacitación dentro del ecosistema tecnológico actual.
        </p>

        {/* Insignias de tecnologías (Skills) */}
        <div className="about-skills">
          {['React', 'Node.js', 'JavaScript', 'CSS', 'Firebase', 'Git', 'Vercel'].map((tech, index) => (
            <span key={index} className="skill-badge">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Sección de Trabajos */}
      <section className="projects-section">
        <h2 className="projects-section-title">Mis trabajos realizados</h2>       
        <div className="projects-grid">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))
          ) : (
            proyectos.map((proyecto) => (
              <ProjectCard key={proyecto.id} {...proyecto} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
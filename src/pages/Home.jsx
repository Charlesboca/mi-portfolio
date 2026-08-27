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

        {/* Tecnologías y herramientas */}
        <div className="tech-stack">

          <div className="tech-category">
            <h3>Frontend</h3>
            <div className="tech-list">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Vite</span>
            </div>
          </div>

          <div className="tech-category">
            <h3>Backend</h3>
            <div className="tech-list">
              <span>Node.js</span>
  
              <span>APIs REST</span>
            </div>
          </div>

          <div className="tech-category">
            <h3>Bases de datos</h3>
            <div className="tech-list">
              <span>Firebase / Firestore</span>
              <span>Oracle</span>
              <span>SQL Server</span>
            </div>
          </div>

          <div className="tech-category">
            <h3>Herramientas</h3>
            <div className="tech-list">
              <span>GitHub</span>
              <span>Vercel</span>
            </div>
          </div>

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
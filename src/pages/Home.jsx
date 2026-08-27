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

      {/* NUEVA SECCIÓN: Sobre Mí */}
      <section className="about-section" style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '600' }}>Sobre mí</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '1.5rem' }}>
          Desarrollador FullStack enfocado en crear experiencias web modernas, escalables y con alto impacto visual. 
          Me apasiona transformar ideas complejas en soluciones funcionales, cuidando tanto la interfaz de usuario como la lógica por detrás. 
          Me mantengo en constante capacitación dentro del ecosistema tecnológico actual.
        </p>
      </section>

      {/* Sección de Trabajos */}
      <section className="projects-section">
        <p style={{ 
          textAlign: 'center', 
          fontSize: '1.5rem',  
          fontWeight: '600',
          color: '#fff'
        }}>
          Mis trabajos realizados  
        </p>       
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
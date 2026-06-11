import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { getProyectos } from '../services/projectService';
import ProjectCardSkeleton from '../components/ProjectCardSkeleton';
import '../styles/Home.css';
import '../styles/Hero.css';

function Home() {


const [proyectos, setProyectos] = useState([]);
const [isLoading, setIsLoading] = useState(true); // 1. Estado inicial en true

useEffect(() => {
  // Simulamos un retraso de 1.0 segundos para apreciar el efecto
  const timer = setTimeout(async () => {
    const data = await getProyectos(); 
    setProyectos(data);
    setIsLoading(false);
  }, 200); 

  return () => clearTimeout(timer);
}, []);


return (
  <div className="home-container">
    <section className="hero-container">
      <h1 className="hero-title">Desarrollador FullStack</h1>
      <p className="cta-button">
        Transformando ideas complejas en experiencias web modernas, escalables y con alto impacto visual.
      </p>

    </section>

      <section className="projects-section">

        <p style={{ 
          textAlign: 'center', 
          fontSize: '1.5rem',   /* Ajusta este valor (ej: 1.2rem, 2rem, 24px) */
          fontWeight: '600'      /* Opcional: para que se vea un poco más marcado (negrita) */
        }}>
          Mis trabajos realizados  
        </p>      
      <div className="projects-grid">
        {isLoading ? (
          // Renderizamos 3 skeletons mientras esperamos
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
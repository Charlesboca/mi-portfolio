import '../styles/Contacto.css';

const Contacto = () => {
  return (
    <section className="contacto-container">
      <h2>Contacto</h2>
      <p>¡Hablemos! Puedes enviarme un mensaje a través de mi red profesional o por correo.</p>
      
      <div className="contacto-info">
        <p>
          <strong>Email: </strong> 
          <a href="mailto:carlos1ariel@hotmail.com">carlos1ariel@hotmail.com</a>
        </p>
        <p>
          <strong>LinkedIn: </strong> 
          <a href="https://www.linkedin.com/in/carlos-a-avalos/" target="_blank" rel="noopener noreferrer">
            Visita mi perfil
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contacto;
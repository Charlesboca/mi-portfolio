import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css'; // Asegúrate de que esta ruta sea correcta

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Parece que la pista terminó antes de tiempo.</p>
      <Link to="/" className="not-found-button">VOLVER AL INICIO</Link>
    </div>
  );
}

export default NotFound;
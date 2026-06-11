import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">DevPortfolio</div>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  );
}

export default Navbar;
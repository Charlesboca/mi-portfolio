import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Contacto from './pages/Contacto.jsx';
import NotFound from './pages/NotFound.jsx'; // 1. Importa el componente
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="portfolio-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            {/* 2. El asterisco atrapa todo lo que no sea / o /contacto */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
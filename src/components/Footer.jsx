
import '../styles/Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} <strong>Carlos Avalos</strong>. Todos los derechos reservados.</p>
        <ul className="footer-links">
{/*           <li><a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer">GitHub</a></li>
 */}          <li><a href="https://www.linkedin.com/in/carlos-a-avalos/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Contablix</h3>
            <p>Estudio contable del emprendedor digital</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Servicios</h4>
              <a href="#monotributo">Monotributo</a>
              <a href="#responsable-inscripto">Responsable Inscripto</a>
              <a href="#ecommerce">Consultoría e-commerce</a>
              <a href="#crypto">Consultoría cripto</a>
            </div>
            <div className="footer-column">
              <h4>Contacto</h4>
              <a href="mailto:hola@contablix.com">hola@contablix.com</a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Contablix. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

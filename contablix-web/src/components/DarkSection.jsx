import './DarkSection.css';

function DarkSection() {
  return (
    <section className="dark-section">
      <div className="container">
        <div className="dark-section-content">
          <h2>Contabilidad moderna para emprendedores digitales</h2>
          <p className="dark-section-description">
            Gestionamos tu contabilidad mientras vos te enfocás en hacer crecer tu negocio.
            Sin sorpresas, sin complicaciones, 100% online.
          </p>
          <div className="dark-section-features">
            <div className="feature-item">
              <h3>Declaraciones a tiempo</h3>
              <p>Nos ocupamos de todos tus vencimientos impositivos</p>
            </div>
            <div className="feature-item">
              <h3>Asesoría estratégica</h3>
              <p>Te ayudamos a optimizar tu carga fiscal legalmente</p>
            </div>
            <div className="feature-item">
              <h3>Tecnología simple</h3>
              <p>Toda tu información contable en un solo lugar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DarkSection;

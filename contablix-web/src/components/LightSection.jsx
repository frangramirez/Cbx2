import React from 'react';
import './LightSection.css';

function LightSection() {
  return (
    <section className="light-section">
      <div className="container">
        <div className="light-section-content">
          <h2>Precios transparentes, sin sorpresas</h2>
          <p className="light-section-description">
            Planes diseñados para cada etapa de tu emprendimiento.
            Elegí el que mejor se adapte a tus necesidades.
          </p>
          <div className="light-section-cta">
            <button className="btn btn-primary">Ver planes</button>
            <button className="btn btn-secondary">Hablar con un asesor</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LightSection;

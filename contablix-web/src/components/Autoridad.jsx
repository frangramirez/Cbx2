import React from 'react';
import './Autoridad.css';

function Autoridad() {
  const stats = [
    { number: "+400", label: "clientes satisfechos" },
    { number: "+5", label: "años, pioneros en servicio online" }
  ];

  const logos = ["Mercado Libre", "DEEL", "Tienda Nube", "Shopify", "Bitcoin", "n8n"];

  return (
    <section className="autoridad">
      <div className="container">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="logos-container">
          <p className="logos-title">Integraciones y plataformas con las que trabajamos</p>
          <div className="logos-grid">
            {logos.map((logo, index) => (
              <div key={index} className="logo-card">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Autoridad;

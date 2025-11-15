import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Somos el estudio contable del emprendedor digital.</h1>
          <p className="hero-subtitle">
            Estrategia impositiva y claridad contable para escalar 100% online.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary">Cotizá en 1 minuto</button>
            <button className="btn btn-secondary">Agendá una reunión</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

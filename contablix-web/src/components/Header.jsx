import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h3>Contablix</h3>
          </div>
          <nav className="nav">
            <a href="#servicios" className="nav-link">Servicios</a>
            <a href="#nosotros" className="nav-link">Nosotros</a>
            <a href="#planes" className="nav-link">Planes</a>
            <button className="btn btn-primary">Cotizá tu plan</button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

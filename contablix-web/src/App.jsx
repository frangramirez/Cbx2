import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DarkSection from './components/DarkSection';
import LightSection from './components/LightSection';
import Dolores from './components/Dolores';
import Justificacion from './components/Justificacion';
import Autoridad from './components/Autoridad';
import Planes from './components/Planes';
import Proceso from './components/Proceso';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <DarkSection />
        <LightSection />
        <Dolores />
        <Justificacion />
        <Autoridad />
        <Planes />
        <Proceso />
      </main>
      <Footer />
    </div>
  );
}

export default App;

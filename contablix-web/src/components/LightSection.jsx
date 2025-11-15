import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './LightSection.css';

gsap.registerPlugin(ScrollTrigger);

function LightSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Animar el background de negro a blanco - MÁS RÁPIDO
    gsap.fromTo(section,
      {
        background: 'linear-gradient(to bottom, #000000 0%, #000000 100%)'
      },
      {
        background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 100%)',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.5,
        }
      }
    );

    // Animar el contenido con fade in
    gsap.from('.light-section-content', {
      opacity: 0,
      y: 80,
      scrollTrigger: {
        trigger: '.light-section-content',
        start: 'top 70%',
        end: 'top 40%',
        scrub: 0.5,
      }
    });

  }, []);

  return (
    <section ref={sectionRef} className="light-section">
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

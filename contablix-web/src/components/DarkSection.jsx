import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './DarkSection.css';

gsap.registerPlugin(ScrollTrigger);

function DarkSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Animar el background de blanco a negro con snap effect
    gsap.fromTo(section,
      {
        background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 100%)'
      },
      {
        background: 'linear-gradient(to bottom, #000000 0%, #000000 100%)',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          snap: {
            snapTo: 1,
            duration: 0.3,
            ease: 'power1.inOut'
          }
        }
      }
    );

    // Animar el contenido con fade in
    gsap.from('.dark-section-content', {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: '.dark-section-content',
        start: 'top 80%',
        end: 'top 50%',
        scrub: 0.5,
      }
    });

  }, []);

  return (
    <section ref={sectionRef} className="dark-section">
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

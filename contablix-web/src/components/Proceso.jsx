import React from 'react';
import './Proceso.css';

function Proceso() {
  const steps = [
    {
      number: "1",
      title: "Diagnóstico",
      items: [
        "Reunión gratuita inicial para evaluar si somos el estudio que necesitás.",
        "Consulta inicial para diagnosticar tu situación y planificar los puntos de optimización y el plan de acción."
      ],
      cta: "Agendá tu reunión gratuita ahora"
    },
    {
      number: "2",
      title: "Acompañamiento mensual",
      items: [
        "Capacitación inicial: para prevenir errores y asegurarnos que sabés perfectamente qué tenés que hacer y cuándo tenés que hacerlo.",
        "Calendario mensual: Ordena el flujo de información entre el estudio y el emprendedor, evitando sorpresas y facilitando la planificación.",
        "Cada mes liquidamos tus impuestos, enviamos reportes claros y proyecciones actualizadas."
      ]
    },
    {
      number: "3",
      title: "Consultoría permanente",
      items: [
        "Contás con un asesor dedicado que conoce tu situación tanto como vos, quien te asesorará de forma ilimitada por meet, mail o whatsapp.",
        "Nuestros packs incluyen consultoría estratégica y revisiones periódicas con los profesionales más experimentados del estudio.",
        "Podés escribirnos o agendar un meet por cualquier duda puntual."
      ]
    }
  ];

  return (
    <section className="proceso">
      <div className="container">
        <div className="proceso-header">
          <h2>Un proceso simple que asegura tu tranquilidad</h2>
          <p className="proceso-subtitle">
            Todo online. Sin papeles, sin idas y vueltas. Del caos al orden en tres simples pasos
          </p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <ul className="step-items">
                {step.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {step.cta && (
                <button className="btn btn-secondary step-cta">{step.cta}</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proceso;

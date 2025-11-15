import './Justificacion.css';

function Justificacion() {
  const benefits = [
    {
      title: "Especialistas en negocios digitales",
      description: "Sabemos cómo se mueve tu mundo. Trabajamos a diario con ecom sellers, freelancers, creadores y agencias. Sabemos cómo optimizar tus impuestos, integrar tus cobros y ordenar tu operación.",
      emoji: "📈",
      tag: "Más eficiencia, menos carga impositiva, decisiones informadas."
    },
    {
      title: "Te respondemos cuando vos necesitás",
      description: "Olvidate de mensajes que nadie contesta o tickets eternos. Atención humana, pero oportuna: tenés respuesta por whatsapp, mail o meet en menos de 24hs.",
      emoji: "⚡️",
      tag: "Respuestas ágiles, asesor dedicado, confianza real."
    },
    {
      title: "Anticipate. Planificá. Enfocate en tu crecimiento.",
      description: "Te ayudamos a ordenar tus números para que siempre sepas qué esperar. Nuestro procedimiento estandarizado te permite saber de antemano qué tenés que hacer y cuánto tendrás que pagar. Reportes mensuales y documentación siempre disponible en la nube.",
      emoji: "🧭",
      tag: "Claridad y control. No más sorpresas."
    }
  ];

  return (
    <section className="justificacion">
      <div className="container">
        <div className="justificacion-header">
          <h2>El equilibrio justo entre máquina y humanos</h2>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-emoji">{benefit.emoji}</div>
              <h3>{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
              <p className="benefit-tag">{benefit.tag}</p>
            </div>
          ))}
        </div>
        <div className="justificacion-footer">
          <p className="twist-text">
            Ofrecemos el punto justo entre sistemas (que no te conocen) y humanos (sobrepasados).<br />
            <strong>Tecnología para ordenar. Profesionales para acompañar.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Justificacion;

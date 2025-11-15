import './Planes.css';

function Planes() {
  const planes = [
    {
      title: "Freelancer",
      subtitle: "Ideal para contractors, creadores y profesionales que venden su talento online",
      features: [
        "Declaraciones de monotributo o régimen general",
        "Estrategia impositiva completa y gestión de flujos de pago",
        "Proyección impositiva mensual y reportes periódicos",
        "Asesoramiento ilimitado por meet, mail o whatsapp"
      ]
    },
    {
      title: "e-commerce seller",
      subtitle: "Pensado para vendedores de Mercado Libre y tiendas online",
      features: [
        "Declaraciones de monotributo o IVA, y convenio multilateral",
        "Análisis de tributación efectiva, y proyección impositiva mensual",
        "Gestión de certificados provinciales de no-retención",
        "Retenciones por facturas META Business y asesoramiento ilimitado"
      ]
    },
    {
      title: "Importador",
      subtitle: "Diseñado para importadores de productos que venden por internet",
      features: [
        "Declaraciones de IVA y Convenio Multilateral",
        "Contabilidad y cómputo de despachos de importación",
        "Control de costos y punto de equilibrio del producto",
        "Asesoramiento en estructuras fiscales mixtas (local + exterior)"
      ]
    },
    {
      title: "SAS",
      subtitle: "Creado para empresas que buscan ir más allá",
      features: [
        "Constitución de Sociedad por Acciones Simplificada",
        "Liquidaciones mensuales de IVA, Ingresos Brutos y Ganancias",
        "Administración de sueldos, cargas y retenciones",
        "Asesoramiento en dividendos, honorarios y planificación impositiva"
      ]
    },
    {
      title: "Growth",
      subtitle: "Ideal para emprendedores: Tu contabilidad centralizada, tus proyectos ordenados y una mirada estratégica para seguir creciendo.",
      features: [
        "Reportes financieros personalizados",
        "Asesoramiento impositivo estratégico",
        "Declaraciones impositivas mensuales y anuales",
        "Reuniones periódicas de análisis y optimización"
      ]
    }
  ];

  return (
    <section id="planes" className="planes">
      <div className="container">
        <div className="planes-header">
          <h2>Planes a tu medida</h2>
          <p>Sea cual sea tu tipo de negocio digital, tenemos un plan que se adapta a tu forma de trabajar.</p>
        </div>
        <div className="planes-grid">
          {planes.map((plan, index) => (
            <div key={index} className="plan-card">
              <h3>{plan.title}</h3>
              <p className="plan-subtitle">{plan.subtitle}</p>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="planes-cta">
          <button className="btn btn-primary">Agendá una reunión gratuita y te ayudamos a elegir el plan ideal</button>
          <a href="#" className="anti-cta">Prefiero un servicio tradicional →</a>
        </div>
      </div>
    </section>
  );
}

export default Planes;

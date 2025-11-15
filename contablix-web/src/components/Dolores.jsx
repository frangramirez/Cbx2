import './Dolores.css';

function Dolores() {
  const painPoints = [
    "no sé cuánto estoy pagando ni por qué",
    "mi contador no me da pelota",
    "no entiendo por qué me cobran esto",
    "me da miedo crecer, siento que se va a ir todo en impuestos"
  ];

  return (
    <section className="dolores">
      <div className="container">
        <div className="dolores-header">
          <h2>Liberate de esa carga que está frenando tu crecimiento</h2>
          <p className="dolores-subtitle">
            Transformamos tu caos fiscal en un sistema simple, predecible y rentable.<br />
            Impuestos bajo control, márgenes claros y tiempo para enfocarte en crecer.
          </p>
        </div>
        <div className="dolores-grid">
          {painPoints.map((point, index) => (
            <div key={index} className="dolor-card">
              <p>"{point}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dolores;

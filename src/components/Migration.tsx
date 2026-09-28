const steps = [
  { title: "Primero, entender tu negocio.", text: "Conversamos sobre tu tienda, qué te lleva a cambiar y qué necesitas mejorar. Evaluamos si Jumpseller encaja con tu operación.", outcome: "Un objetivo compartido" },
  { title: "Un plan antes de mover nada.", text: "Revisamos datos, diseño e integraciones. Definimos qué trasladar, qué adaptar y qué reconstruir, con alcance y plazos acordados.", outcome: "Una propuesta clara" },
  { title: "Preparar, probar y lanzar.", text: "Implementamos lo acordado y revisamos catálogo, compras, pagos, envíos y redirecciones antes de coordinar el cambio de dominio.", outcome: "Un lanzamiento preparado" },
  { title: "Acompañarte en la nueva etapa.", text: "Te ayudo a familiarizarte con la tienda y resolvemos los ajustes dentro del período de acompañamiento acordado. Luego podemos seguir con mejoras e integraciones.", outcome: "Un punto de contacto" },
];

export function Migration() {
  return (
    <>
      <section id="migracion" className="section wrap">
        <div className="section-heading">
          <p className="eyebrow">01 / La migración</p>
          <h2>Tu tienda tiene historia.<br /><span>Planifiquemos su siguiente paso.</span></h2>
          <p>Tu catálogo es una parte. También están tus clientes, las herramientas que usas y la forma en que trabaja tu equipo.</p>
        </div>
        <div className="scope-grid">
          <article><span className="scope-icon" aria-hidden="true">↗</span><h3>Datos y catálogo</h3><p>Revisamos productos, variantes, imágenes, clientes e historial de pedidos para acordar qué se puede trasladar y cómo validarlo.</p></article>
          <article><span className="scope-icon" aria-hidden="true">⇄</span><h3>Tu operación conectada</h3><p>Evaluamos pagos, envíos, inventario y sistemas externos. Identificamos las conexiones que tu nueva tienda necesita.</p></article>
          <article><span className="scope-icon" aria-hidden="true">◎</span><h3>Una transición preparada</h3><p>Planificamos el diseño, las URLs, las redirecciones y el cambio de dominio. Acordamos las pruebas y el momento del lanzamiento.</p></article>
        </div>
      </section>
      <section id="proceso" className="process-section">
        <div className="wrap process-layout">
          <div className="section-heading"><p className="eyebrow">02 / Cómo trabajaremos</p><h2>Claridad en<br />cada paso.</h2><p>Sabrás qué estamos haciendo, qué necesito de ti y cuál es el siguiente paso.</p><a className="text-link" href="#contact">Hablemos de tu proyecto ↗</a></div>
          <ol className="process-list">{steps.map((step, index) => (
            <li key={step.title}><span className="step-number">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p><span className="step-outcome">{step.outcome}</span></div></li>
          ))}</ol>
        </div>
      </section>
    </>
  );
}

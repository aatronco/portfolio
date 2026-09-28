const projects = [
  { category: "INVENTARIO Y PEDIDOS", title: "Jumpseller × Walmart", description: "Integración para sincronizar inventario e importar pedidos entre Jumpseller y Walmart Chile, con un panel de administración.", url: "https://github.com/aatronco/walmart-marketplace", number: "01" },
  { category: "FIDELIZACIÓN", title: "LoyaltyOS Connector", description: "Conexión entre Jumpseller y LoyaltyOS para incorporar puntos, consultar saldos y canjear cupones.", url: "https://github.com/aatronco/jumpseller-loyaltyos-connector", number: "02" },
  { category: "EXPERIENCIA DE COMPRA", title: "Checkout Kit", description: "Personalizaciones del checkout de Jumpseller: ajustes de campos, autocompletado y alertas mediante Google Tag Manager.", url: "https://github.com/aatronco/jumpseller-checkout-kit", number: "03" },
];

export function Projects() {
  return (
    <section id="projects" className="section wrap">
      <div className="section-heading"><p className="eyebrow">03 / Experiencia aplicada</p><h2>Conocer la plataforma.<br /><span>Conectar lo que necesitas.</span></h2><p>Estos proyectos de desarrollo e integración muestran mi trabajo con Jumpseller. Puedes explorar su código y alcance.</p></div>
      <div className="project-grid">{projects.map((project) => (
        <article className="project-card" key={project.title}>
          <div className="project-top"><span>{project.category}</span><span>{project.number}</span></div>
          <h3>{project.title}</h3><p>{project.description}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${project.title} en GitHub`}>Explorar proyecto <span aria-hidden="true">↗</span></a>
        </article>
      ))}</div>
    </section>
  );
}

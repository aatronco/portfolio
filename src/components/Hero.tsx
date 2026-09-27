export function Hero() {
  return (
    <section id="inicio" className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Desarrollo e integraciones para e-commerce</p>
        <h1 id="hero-title">Tu próxima etapa,<br />en <span>Jumpseller.</span></h1>
        <p className="hero-intro">Te acompaño a llevar tu tienda a Jumpseller.</p>
        <p className="hero-description">Revisamos si es el paso adecuado para tu negocio, planificamos la migración y trabajamos juntos hasta dejar tu nueva tienda funcionando.</p>
        <div className="hero-actions">
          <a className="button" href="#contact">Conversemos sobre tu tienda <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="#proceso">Así trabajaremos <span aria-hidden="true">↓</span></a>
        </div>
        <p className="hero-signature">Con Alejandro Troncoso. De la primera conversación al lanzamiento.</p>
        <a className="nutrition-shortcut" href="#nutricion">¿Trabajas en nutrición? Conoce NutriCal <span aria-hidden="true">↗</span></a>
      </div>
      <div className="migration-map" role="img" aria-label="Migraciones desde Shopify, WooCommerce, Wix y VTEX hacia Jumpseller, con evaluación, planificación y acompañamiento.">
        <div className="map-top"><span>UN CAMBIO CON DIRECCIÓN</span><span aria-hidden="true">↗</span></div>
        <div className="map-flow" aria-hidden="true">
          <div className="source-platforms">
            <div><span className="platform-symbol">S</span>Shopify</div>
            <div><span className="platform-symbol">W</span>WooCommerce</div>
            <div><span className="platform-symbol">w.</span>Wix</div>
            <div><span className="platform-symbol">V</span>VTEX</div>
          </div>
          <div className="flow-connector"><span>→</span></div>
          <div className="destination"><span className="destination-icon">↗</span><strong>Jumpseller</strong><small>Tu próxima etapa</small></div>
        </div>
        <div className="map-bottom" aria-hidden="true"><span>01 Evaluar</span><span>02 Planificar</span><span>03 Acompañar</span></div>
      </div>
      <div className="hero-footnote"><span>SHOPIFY / WOOCOMMERCE / WIX / VTEX</span><span>UNA MIGRACIÓN A LA MEDIDA DE TU OPERACIÓN</span></div>
    </section>
  );
}

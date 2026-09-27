export function Nav() {
  return (
    <header className="site-header">
      <nav className="wrap nav" aria-label="Navegación principal">
        <a href="#inicio" className="wordmark" aria-label="ACDE, inicio">acde<span>.cl</span></a>
        <div className="nav-links">
          <a href="#migracion">Migraciones</a>
          <a href="#nutricion">Nutrición</a>
          <a href="#projects" className="nav-experience">Experiencia</a>
          <a className="nav-contact" href="#contact">Conversemos <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  );
}

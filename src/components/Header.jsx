export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="/">
          <svg
            className="brand-logo"
            viewBox="0 0 32 32"
            role="img"
            aria-label="Logo ARCAN"
          >
            <path
              d="M16 3c5.2 6.6 9 11.6 9 16.2C25 24.9 21 29 16 29S7 24.9 7 19.2C7 14.6 10.8 9.6 16 3Z"
              fill="currentColor"
            />
            <path
              d="M12 19.5c0 2.5 1.8 4.5 4 4.5"
              fill="none"
              stroke="var(--surface-1)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <span className="brand-text">
            <strong>ARCAN</strong>
            <span className="brand-sub">Catastro de Desaladoras</span>
          </span>
        </a>
        <nav className="header-nav" aria-label="Navegación principal">
          <span className="nav-item nav-item--active">Proyectos</span>
          <span className="nav-item nav-item--disabled" title="Próximamente">
            Mapa
          </span>
          <span className="nav-item nav-item--disabled" title="Próximamente">
            Reportes
          </span>
        </nav>
      </div>
    </header>
  )
}

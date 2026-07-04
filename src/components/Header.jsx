import { NavLink } from 'react-router-dom'

function navClass({ isActive }) {
  return `nav-item ${isActive ? 'nav-item--active' : ''}`
}

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink className="brand" to="/">
          <svg
            className="brand-logo"
            viewBox="0 0 32 32"
            role="img"
            aria-label="Logo AQUALIA"
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
            <strong>AQUALIA</strong>
            <span className="brand-sub">Prospección Comercial</span>
          </span>
        </NavLink>
        <nav className="header-nav" aria-label="Navegación principal">
          <NavLink className={navClass} to="/" end>
            Proyectos
          </NavLink>
          <NavLink className={navClass} to="/contactos">
            Contactos Clave
          </NavLink>
          <NavLink className={navClass} to="/exportar">
            Exportar
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

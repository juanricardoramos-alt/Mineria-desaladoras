import { useMemo, useState } from 'react'
import { PROJECTS } from '../data/projects.js'
import { normalizeText } from '../utils/normalizeText.js'
import { SectorBadge, PhaseBadge } from '../components/badges.jsx'
import EmptyState from '../components/EmptyState.jsx'

export default function ContactsPage() {
  const [search, setSearch] = useState('')

  const filteredProjects = useMemo(() => {
    const query = normalizeText(search)
    if (!query) return PROJECTS
    return PROJECTS.filter((project) => {
      const haystack = [
        project.nombre,
        project.empresa,
        ...(project.contactos?.map((c) => c.cargo) ?? []),
      ]
        .map(normalizeText)
        .join(' ')
      return haystack.includes(query)
    })
  }, [search])

  const totalContactos = filteredProjects.reduce(
    (sum, p) => sum + (p.contactos?.length || 0),
    0,
  )

  return (
    <>
      <section className="intro">
        <h1>Contactos Clave</h1>
        <p>
          Cargos idóneos para iniciar una conversación comercial en cada
          proyecto, con la razón para contactarlos y la solución de AQUALIA
          que mejor responde a su necesidad.
        </p>
      </section>

      <section className="filters-bar" aria-label="Buscar contactos">
        <div className="filters-row">
          <div className="search-field">
            <svg className="search-icon" viewBox="0 0 20 20" aria-hidden="true">
              <circle
                cx="9"
                cy="9"
                r="6.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <line
                x1="14"
                y1="14"
                x2="18.5"
                y2="18.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="search"
              className="search-input"
              placeholder="Buscar por proyecto, empresa o cargo…"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Buscar por proyecto, empresa o cargo"
            />
            {search && (
              <button
                type="button"
                className="search-clear"
                onClick={() => setSearch('')}
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
        </div>
        <p className="filters-summary" role="status">
          Mostrando <strong>{totalContactos}</strong> contactos en{' '}
          <strong>{filteredProjects.length}</strong> proyectos
        </p>
      </section>

      {filteredProjects.length === 0 ? (
        <section className="projects" aria-label="Listado de contactos">
          <EmptyState onClear={() => setSearch('')} />
        </section>
      ) : (
        <ul className="contact-project-list">
          {filteredProjects.map((project) => (
            <li className="contact-project-card" key={project.id}>
              <div className="contact-project-header">
                <div>
                  <h2 className="contact-project-name">{project.nombre}</h2>
                  <p className="contact-project-company">{project.empresa}</p>
                </div>
                <div className="contact-project-badges">
                  <SectorBadge sector={project.sector} />
                  <PhaseBadge fase={project.fase} />
                </div>
              </div>

              <ul className="contact-rows">
                {project.contactos.map((contacto) => (
                  <li className="contact-row" key={contacto.cargo}>
                    <div className="contact-row-cargo">{contacto.cargo}</div>
                    <p className="contact-row-razon">{contacto.razon}</p>
                    <p className="contact-row-solucion">
                      <span className="contact-row-solucion-label">
                        Solución AQUALIA a ofrecer
                      </span>
                      {contacto.solucionAqualia}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

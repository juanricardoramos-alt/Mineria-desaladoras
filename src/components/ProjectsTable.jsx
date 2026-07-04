import { SectorBadge, PhaseBadge } from './badges.jsx'
import EmptyState from './EmptyState.jsx'

const formatBudget = new Intl.NumberFormat('es-CL')

function formatPresupuesto(presupuesto) {
  if (presupuesto === null || presupuesto === undefined) return '—'
  return `US$ ${formatBudget.format(presupuesto)} M`
}

export default function ProjectsTable({ projects, onSelect, onClearFilters }) {
  if (projects.length === 0) {
    return (
      <section className="projects" aria-label="Listado de proyectos">
        <div className="projects-header">
          <h2>Proyectos</h2>
          <span className="projects-count">0 registros</span>
        </div>
        <EmptyState onClear={onClearFilters} />
      </section>
    )
  }

  return (
    <section className="projects" aria-label="Listado de proyectos">
      <div className="projects-header">
        <h2>Proyectos</h2>
        <span className="projects-count">{projects.length} registros</span>
      </div>

      {/* Vista de tabla (pantallas medianas y grandes) */}
      <div className="table-wrapper">
        <table className="projects-table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Empresa</th>
              <th scope="col">Fase</th>
              <th scope="col">Ubicación</th>
              <th scope="col">Sector</th>
              <th scope="col" className="cell-budget">
                Presupuesto (millones USD)
              </th>
              <th scope="col">
                <span className="visually-hidden">Acciones</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="project-name">{project.nombre}</td>
                <td className="project-company">{project.empresa}</td>
                <td>
                  <PhaseBadge fase={project.fase} />
                </td>
                <td className="project-location">{project.ubicacion}</td>
                <td>
                  <SectorBadge sector={project.sector} />
                </td>
                <td className="cell-budget project-budget">
                  {formatPresupuesto(project.presupuesto)}
                </td>
                <td className="cell-action">
                  <button
                    type="button"
                    className="btn-details"
                    onClick={() => onSelect(project)}
                  >
                    Ver detalles
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Vista de tarjetas (pantallas pequeñas) */}
      <ul className="project-cards">
        {projects.map((project) => (
          <li className="project-card" key={project.id}>
            <div className="project-card-top">
              <div>
                <div className="project-name">{project.nombre}</div>
                <div className="project-company">{project.empresa}</div>
              </div>
              <SectorBadge sector={project.sector} />
            </div>
            <div className="project-location">{project.ubicacion}</div>
            <div className="project-card-budget">
              {formatPresupuesto(project.presupuesto)}
            </div>
            <div className="project-card-bottom">
              <PhaseBadge fase={project.fase} />
              <button
                type="button"
                className="btn-details"
                onClick={() => onSelect(project)}
              >
                Ver detalles
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

import { StatusBadge, PhaseBadge } from './badges.jsx'

export default function ProjectsTable({ projects, onSelect }) {
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
              <th scope="col">Proyecto</th>
              <th scope="col">Ubicación</th>
              <th scope="col">Fase</th>
              <th scope="col">Estado</th>
              <th scope="col">
                <span className="visually-hidden">Acciones</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>
                  <div className="project-name">{project.nombre}</div>
                  <div className="project-company">{project.empresa}</div>
                </td>
                <td className="project-location">{project.ubicacion}</td>
                <td>
                  <PhaseBadge fase={project.fase} />
                </td>
                <td>
                  <StatusBadge estado={project.estado} />
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
              <StatusBadge estado={project.estado} />
            </div>
            <div className="project-location">{project.ubicacion}</div>
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

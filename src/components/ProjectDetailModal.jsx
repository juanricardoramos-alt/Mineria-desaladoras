import { useEffect, useRef } from 'react'
import { StatusBadge, PhaseBadge } from './badges.jsx'

const formatNumber = new Intl.NumberFormat('es-CL')
const formatDate = new Intl.DateTimeFormat('es-CL', { dateStyle: 'long' })

function formatPresupuesto(presupuesto) {
  if (presupuesto === null || presupuesto === undefined) return 'No definido'
  return `US$ ${formatNumber.format(presupuesto)} millones`
}

function formatFecha(fechaCreacion) {
  if (!fechaCreacion) return '—'
  return formatDate.format(new Date(fechaCreacion))
}

export default function ProjectDetailModal({ project, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    closeButtonRef.current?.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <span className="modal-id">Proyecto N.º {project.id}</span>
            <h3 id="modal-title">{project.nombre}</h3>
            <p className="modal-company">{project.empresa}</p>
          </div>
          <button
            type="button"
            ref={closeButtonRef}
            className="btn-close"
            onClick={onClose}
            aria-label="Cerrar detalle del proyecto"
          >
            ✕
          </button>
        </div>

        <div className="modal-badges">
          <PhaseBadge fase={project.fase} />
          <StatusBadge estado={project.estado} />
        </div>

        <dl className="modal-facts">
          <div className="fact">
            <dt>Ubicación</dt>
            <dd>{project.ubicacion}</dd>
          </div>
          <div className="fact">
            <dt>Presupuesto</dt>
            <dd>{formatPresupuesto(project.presupuesto)}</dd>
          </div>
          <div className="fact">
            <dt>Registrado el</dt>
            <dd>{formatFecha(project.fecha_creacion)}</dd>
          </div>
        </dl>

        {project.descripcion && (
          <div className="modal-description">
            <h4>Descripción</h4>
            <p>{project.descripcion}</p>
          </div>
        )}
      </div>
    </div>
  )
}

import { useEffect, useRef } from 'react'
import { StatusBadge, PhaseBadge } from './badges.jsx'

const formatNumber = new Intl.NumberFormat('es-CL')

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
            <span className="modal-id">{project.id}</span>
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
            <dt>Capacidad de diseño</dt>
            <dd>{formatNumber.format(project.capacidadLs)} l/s</dd>
          </div>
          <div className="fact">
            <dt>Inversión estimada</dt>
            <dd>US$ {formatNumber.format(project.inversionMusd)} millones</dd>
          </div>
          <div className="fact">
            <dt>Puesta en marcha</dt>
            <dd>{project.puestaEnMarcha}</dd>
          </div>
        </dl>

        <div className="modal-description">
          <h4>Descripción</h4>
          <p>{project.descripcion}</p>
        </div>
      </div>
    </div>
  )
}

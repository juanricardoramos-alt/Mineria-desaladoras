import { FASES } from '../data/projects.js'

// El estado siempre se comunica con ícono + texto, nunca solo con color.
const ESTADO_CONFIG = {
  'En progreso': { className: 'status--progress', icon: '●' },
  Pausado: { className: 'status--paused', icon: '⏸' },
  Completado: { className: 'status--done', icon: '✓' },
}

export function StatusBadge({ estado }) {
  const config = ESTADO_CONFIG[estado] ?? { className: '', icon: '○' }
  return (
    <span className={`status-badge ${config.className}`}>
      <span className="status-icon" aria-hidden="true">
        {config.icon}
      </span>
      {estado}
    </span>
  )
}

export function PhaseBadge({ fase }) {
  const step = FASES.indexOf(fase) + 1
  return (
    <span className="phase-badge" title={`Fase ${step} de ${FASES.length}`}>
      <span className="phase-dots" aria-hidden="true">
        {FASES.map((f, i) => (
          <span
            key={f}
            className={`phase-dot ${i < step ? 'phase-dot--filled' : ''}`}
          />
        ))}
      </span>
      {fase}
    </span>
  )
}

import { FASES } from '../data/projects.js'

const SECTOR_CLASSNAME = {
  Minería: 'sector--mineria',
  Industria: 'sector--industria',
  Energía: 'sector--energia',
  Agua: 'sector--agua',
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

export function SectorBadge({ sector }) {
  const className = SECTOR_CLASSNAME[sector] ?? ''
  return (
    <span className={`sector-badge ${className}`}>
      <span className="sector-dot" aria-hidden="true" />
      {sector}
    </span>
  )
}

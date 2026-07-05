import { useState } from 'react'
import { ESTADOS } from '../../data/projects.js'
import ChartCard from './ChartCard.jsx'

const SIZE = 240
const CENTER = SIZE / 2
const RADIUS = 80
const STROKE = 32
const CIRCUMFERENCE = 2 * Math.PI * RADIUS
const GAP = 5

const ESTADO_META = {
  'En progreso': { icon: '●', className: 'estado-fill-progreso' },
  Pausado: { icon: '⏸', className: 'estado-fill-pausado' },
  Completado: { icon: '✓', className: 'estado-fill-completado' },
}

export default function DonutChart({ projects }) {
  const [hovered, setHovered] = useState(null)
  const total = projects.length
  const counts = ESTADOS.map(
    (estado) => projects.filter((p) => p.estado === estado).length,
  )

  let cumulative = 0
  const segments = ESTADOS.map((estado, i) => {
    const count = counts[i]
    const fraction = total > 0 ? count / total : 0
    const length = fraction * CIRCUMFERENCE
    const visibleLength = Math.max(length - GAP, 0)
    const dashArray = `${visibleLength} ${CIRCUMFERENCE - visibleLength}`
    const dashOffset = -cumulative
    cumulative += length
    const pct = total > 0 ? Math.round(fraction * 100) : 0
    return { estado, count, pct, dashArray, dashOffset, ...ESTADO_META[estado] }
  })

  const table = (
    <table className="chart-table">
      <caption className="visually-hidden">Proyectos por estado</caption>
      <thead>
        <tr>
          <th scope="col">Estado</th>
          <th scope="col">Proyectos</th>
          <th scope="col">Porcentaje</th>
        </tr>
      </thead>
      <tbody>
        {segments.map((s) => (
          <tr key={s.estado}>
            <td>{s.estado}</td>
            <td>{s.count}</td>
            <td>{s.pct}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  )

  return (
    <ChartCard
      title="Proyectos por estado"
      caption="Participación de cada estado en el catastro filtrado"
      table={table}
    >
      <div className="donut-layout">
        <svg
          className="donut-chart"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          role="img"
          aria-label={`Proyectos por estado: ${segments
            .map((s) => `${s.estado}, ${s.count} (${s.pct}%)`)
            .join('; ')}`}
        >
          <circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            className="donut-track"
            strokeWidth={STROKE}
          />
          <g transform={`rotate(-90 ${CENTER} ${CENTER})`}>
            {segments
              .filter((s) => s.count > 0)
              .map((s) => (
                <g key={s.estado}>
                  <circle
                    cx={CENTER}
                    cy={CENTER}
                    r={RADIUS}
                    fill="none"
                    strokeWidth={STROKE + 16}
                    strokeDasharray={s.dashArray}
                    strokeDashoffset={s.dashOffset}
                    className="donut-hit"
                    onPointerEnter={() => setHovered(s.estado)}
                    onPointerLeave={() => setHovered(null)}
                    onFocus={() => setHovered(s.estado)}
                    onBlur={() => setHovered(null)}
                    tabIndex={0}
                  />
                  <circle
                    cx={CENTER}
                    cy={CENTER}
                    r={RADIUS}
                    fill="none"
                    strokeWidth={STROKE}
                    strokeLinecap="butt"
                    strokeDasharray={s.dashArray}
                    strokeDashoffset={s.dashOffset}
                    className={`donut-segment ${s.className}`}
                    opacity={hovered && hovered !== s.estado ? 0.45 : 1}
                  />
                </g>
              ))}
          </g>
          <text x={CENTER} y={CENTER - 4} textAnchor="middle" className="donut-total">
            {total}
          </text>
          <text x={CENTER} y={CENTER + 16} textAnchor="middle" className="donut-total-label">
            {total === 1 ? 'proyecto' : 'proyectos'}
          </text>
        </svg>

        <ul className="donut-legend">
          {segments.map((s) => (
            <li
              key={s.estado}
              className={`legend-row ${hovered === s.estado ? 'legend-row--active' : ''}`}
              onPointerEnter={() => setHovered(s.estado)}
              onPointerLeave={() => setHovered(null)}
            >
              <span className={`legend-dot ${s.className}`} aria-hidden="true">
                {s.icon}
              </span>
              <span className="legend-label">{s.estado}</span>
              <span className="legend-value">
                {s.count} · {s.pct}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </ChartCard>
  )
}

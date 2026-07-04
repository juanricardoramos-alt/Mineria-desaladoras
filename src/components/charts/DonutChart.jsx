import { useState } from 'react'
import { SECTORES } from '../../data/projects.js'
import ChartCard from './ChartCard.jsx'

const SIZE = 240
const CENTER = SIZE / 2
const RADIUS = 80
const STROKE = 32
const CIRCUMFERENCE = 2 * Math.PI * RADIUS
const GAP = 5

const SECTOR_META = {
  Minería: { className: 'donut-fill-mineria' },
  Industria: { className: 'donut-fill-industria' },
  Energía: { className: 'donut-fill-energia' },
  Agua: { className: 'donut-fill-agua' },
}

export default function DonutChart({ projects }) {
  const [hovered, setHovered] = useState(null)
  const total = projects.length
  const counts = SECTORES.map(
    (sector) => projects.filter((p) => p.sector === sector).length,
  )

  let cumulative = 0
  const segments = SECTORES.map((sector, i) => {
    const count = counts[i]
    const fraction = total > 0 ? count / total : 0
    const length = fraction * CIRCUMFERENCE
    const visibleLength = Math.max(length - GAP, 0)
    const dashArray = `${visibleLength} ${CIRCUMFERENCE - visibleLength}`
    const dashOffset = -cumulative
    cumulative += length
    const pct = total > 0 ? Math.round(fraction * 100) : 0
    return { sector, count, pct, dashArray, dashOffset, ...SECTOR_META[sector] }
  })

  const table = (
    <table className="chart-table">
      <caption className="visually-hidden">Proyectos por sector</caption>
      <thead>
        <tr>
          <th scope="col">Sector</th>
          <th scope="col">Proyectos</th>
          <th scope="col">Porcentaje</th>
        </tr>
      </thead>
      <tbody>
        {segments.map((s) => (
          <tr key={s.sector}>
            <td>{s.sector}</td>
            <td>{s.count}</td>
            <td>{s.pct}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  )

  return (
    <ChartCard
      title="Proyectos por sector"
      caption="Participación de cada sector en el catastro filtrado"
      table={table}
    >
      <div className="donut-layout">
        <svg
          className="donut-chart"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          role="img"
          aria-label={`Proyectos por sector: ${segments
            .map((s) => `${s.sector}, ${s.count} (${s.pct}%)`)
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
                <g key={s.sector}>
                  <circle
                    cx={CENTER}
                    cy={CENTER}
                    r={RADIUS}
                    fill="none"
                    strokeWidth={STROKE + 16}
                    strokeDasharray={s.dashArray}
                    strokeDashoffset={s.dashOffset}
                    className="donut-hit"
                    onPointerEnter={() => setHovered(s.sector)}
                    onPointerLeave={() => setHovered(null)}
                    onFocus={() => setHovered(s.sector)}
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
                    opacity={hovered && hovered !== s.sector ? 0.45 : 1}
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
              key={s.sector}
              className={`legend-row ${hovered === s.sector ? 'legend-row--active' : ''}`}
              onPointerEnter={() => setHovered(s.sector)}
              onPointerLeave={() => setHovered(null)}
            >
              <span className={`legend-dot ${s.className}`} aria-hidden="true" />
              <span className="legend-label">{s.sector}</span>
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

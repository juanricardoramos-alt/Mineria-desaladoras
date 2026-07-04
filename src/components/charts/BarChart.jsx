import { useState } from 'react'
import { FASES } from '../../data/projects.js'
import ChartCard from './ChartCard.jsx'

const WIDTH = 480
const HEIGHT = 260
const MARGIN = { top: 24, right: 16, bottom: 40, left: 28 }
const PLOT_W = WIDTH - MARGIN.left - MARGIN.right
const PLOT_H = HEIGHT - MARGIN.top - MARGIN.bottom

function niceMax(value) {
  if (value <= 5) return Math.max(value, 1)
  const magnitude = 10 ** Math.floor(Math.log10(value))
  const residual = value / magnitude
  let niceResidual
  if (residual <= 2) niceResidual = 2
  else if (residual <= 5) niceResidual = 5
  else niceResidual = 10
  return niceResidual * magnitude
}

function buildTicks(max) {
  const step = max <= 5 ? 1 : max / 5
  const ticks = []
  for (let t = 0; t <= max + 0.001; t += step) ticks.push(Math.round(t))
  return ticks
}

export default function BarChart({ projects }) {
  const [hovered, setHovered] = useState(null)
  const total = projects.length
  const counts = FASES.map(
    (fase) => projects.filter((p) => p.fase === fase).length,
  )
  const max = niceMax(Math.max(...counts, 1))
  const ticks = buildTicks(max)
  const slot = PLOT_W / FASES.length
  const barWidth = Math.min(40, slot - 28)

  const table = (
    <table className="chart-table">
      <caption className="visually-hidden">Proyectos por fase</caption>
      <thead>
        <tr>
          <th scope="col">Fase</th>
          <th scope="col">Proyectos</th>
        </tr>
      </thead>
      <tbody>
        {FASES.map((fase, i) => (
          <tr key={fase}>
            <td>{fase}</td>
            <td>{counts[i]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )

  return (
    <ChartCard
      title="Proyectos por fase"
      caption="Distribución del catastro filtrado según su etapa de avance"
      table={table}
    >
      <svg
        className="bar-chart"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label={`Proyectos por fase: ${FASES.map((f, i) => `${f}, ${counts[i]}`).join('; ')}`}
      >
        <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
          {ticks.map((tick) => {
            const y = PLOT_H - (tick / max) * PLOT_H
            return (
              <g key={tick}>
                <line
                  x1={0}
                  x2={PLOT_W}
                  y1={y}
                  y2={y}
                  className="chart-gridline"
                />
                <text
                  x={-8}
                  y={y}
                  className="chart-axis-label"
                  textAnchor="end"
                  dominantBaseline="middle"
                >
                  {tick}
                </text>
              </g>
            )
          })}
          <line
            x1={0}
            x2={PLOT_W}
            y1={PLOT_H}
            y2={PLOT_H}
            className="chart-baseline"
          />

          {total === 0 && (
            <text
              x={PLOT_W / 2}
              y={PLOT_H / 2}
              textAnchor="middle"
              className="chart-empty-label"
            >
              Sin resultados para los filtros aplicados
            </text>
          )}

          {FASES.map((fase, i) => {
            const cx = slot * i + slot / 2
            const barH = (counts[i] / max) * PLOT_H
            const x = cx - barWidth / 2
            const y = PLOT_H - barH
            const isHovered = hovered === fase
            const pct = total > 0 ? Math.round((counts[i] / total) * 100) : 0
            return (
              <g key={fase}>
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={Math.max(barH, 0)}
                  rx={4}
                  className={`bar-fill phase-fill-${i + 1}`}
                  opacity={isHovered ? 0.8 : 1}
                  tabIndex={0}
                  onPointerEnter={() => setHovered(fase)}
                  onPointerLeave={() => setHovered(null)}
                  onFocus={() => setHovered(fase)}
                  onBlur={() => setHovered(null)}
                />
                <text x={cx} y={y - 8} textAnchor="middle" className="bar-value">
                  {counts[i]}
                </text>
                <text
                  x={cx}
                  y={PLOT_H + 20}
                  textAnchor="middle"
                  className="chart-axis-label"
                >
                  {fase}
                </text>
                {isHovered && (
                  <g transform={`translate(${cx},${Math.min(y - 34, PLOT_H - 34)})`}>
                    <rect
                      x={-52}
                      y={-24}
                      width={104}
                      height={28}
                      rx={6}
                      className="chart-tooltip-bg"
                    />
                    <text x={0} y={-10} textAnchor="middle" className="chart-tooltip-text">
                      {fase}
                    </text>
                    <text x={0} y={2} textAnchor="middle" className="chart-tooltip-value">
                      {counts[i]} {counts[i] === 1 ? 'proyecto' : 'proyectos'} ({pct}%)
                    </text>
                  </g>
                )}
              </g>
            )
          })}
        </g>
      </svg>
    </ChartCard>
  )
}

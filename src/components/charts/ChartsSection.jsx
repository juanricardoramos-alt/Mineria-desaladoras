import BarChart from './BarChart.jsx'
import DonutChart from './DonutChart.jsx'

export default function ChartsSection({ projects }) {
  return (
    <section className="charts-section" aria-label="Gráficos del catastro">
      <BarChart projects={projects} />
      <DonutChart projects={projects} />
    </section>
  )
}

import { useState } from 'react'

export default function ChartCard({ title, caption, table, children }) {
  const [showTable, setShowTable] = useState(false)

  return (
    <figure className="chart-card">
      <div className="chart-card-header">
        <div>
          <figcaption className="chart-title">{title}</figcaption>
          {caption && <p className="chart-caption">{caption}</p>}
        </div>
        <button
          type="button"
          className="chart-view-toggle"
          onClick={() => setShowTable((value) => !value)}
          aria-pressed={showTable}
        >
          {showTable ? 'Ver gráfico' : 'Ver tabla'}
        </button>
      </div>
      {showTable ? table : children}
    </figure>
  )
}

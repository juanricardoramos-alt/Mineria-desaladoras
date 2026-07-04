const formatNumber = new Intl.NumberFormat('es-CL')

export default function StatTiles({ projects }) {
  const total = projects.length
  const enProgreso = projects.filter((p) => p.estado === 'En progreso').length
  const operativos = projects.filter((p) => p.fase === 'Operativo').length
  const capacidadOperativa = projects
    .filter((p) => p.fase === 'Operativo')
    .reduce((sum, p) => sum + p.capacidadLs, 0)

  const tiles = [
    { label: 'Proyectos catastrados', value: total },
    { label: 'En progreso', value: enProgreso },
    { label: 'Plantas operativas', value: operativos },
    {
      label: 'Capacidad operativa',
      value: formatNumber.format(capacidadOperativa),
      unit: 'l/s',
    },
  ]

  return (
    <section className="stat-tiles" aria-label="Resumen del catastro">
      {tiles.map((tile) => (
        <div className="stat-tile" key={tile.label}>
          <span className="stat-label">{tile.label}</span>
          <span className="stat-value">
            {tile.value}
            {tile.unit && <span className="stat-unit"> {tile.unit}</span>}
          </span>
        </div>
      ))}
    </section>
  )
}

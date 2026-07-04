const formatNumber = new Intl.NumberFormat('es-CL')

export default function StatTiles({ projects }) {
  const total = projects.length
  const contactos = projects.reduce((sum, p) => sum + (p.contactos?.length || 0), 0)
  const sectores = new Set(projects.map((p) => p.sector)).size
  const inversionTotal = projects.reduce(
    (sum, p) => sum + (Number(p.presupuesto) || 0),
    0,
  )

  const tiles = [
    { label: 'Proyectos identificados', value: total },
    { label: 'Contactos clave mapeados', value: contactos },
    { label: 'Sectores cubiertos', value: sectores },
    {
      label: 'Inversión total',
      value: `US$ ${formatNumber.format(inversionTotal)}`,
      unit: 'millones',
    },
  ]

  return (
    <section className="stat-tiles" aria-label="Resumen de la prospección">
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

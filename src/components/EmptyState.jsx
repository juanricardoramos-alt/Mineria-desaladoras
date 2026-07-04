export default function EmptyState({ onClear }) {
  return (
    <div className="empty-state">
      <p className="empty-state-title">No se encontraron proyectos</p>
      <p className="empty-state-text">
        Ajusta la búsqueda o los filtros aplicados para ver resultados.
      </p>
      <button type="button" className="btn-details" onClick={onClear}>
        Limpiar filtros
      </button>
    </div>
  )
}

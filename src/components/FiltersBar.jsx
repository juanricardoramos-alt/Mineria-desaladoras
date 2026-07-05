import { FASES, ESTADOS } from '../projectsData.js'

const ESTADO_ICON = {
  'En progreso': '●',
  Pausado: '⏸',
  Completado: '✓',
}

export default function FiltersBar({
  search,
  onSearchChange,
  selectedFases,
  onToggleFase,
  selectedEstados,
  onToggleEstado,
  onClear,
  resultCount,
  totalCount,
}) {
  const hasActiveFilters =
    search.trim() !== '' || selectedFases.size > 0 || selectedEstados.size > 0

  return (
    <section className="filters-bar" aria-label="Filtros de proyectos">
      <div className="filters-row">
        <div className="search-field">
          <svg
            className="search-icon"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <circle
              cx="9"
              cy="9"
              r="6.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <line
              x1="14"
              y1="14"
              x2="18.5"
              y2="18.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="search"
            className="search-input"
            placeholder="Buscar proyecto por nombre…"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            aria-label="Buscar proyecto por nombre"
          />
          {search && (
            <button
              type="button"
              className="search-clear"
              onClick={() => onSearchChange('')}
              aria-label="Limpiar búsqueda"
            >
              ✕
            </button>
          )}
        </div>

        {hasActiveFilters && (
          <button type="button" className="filters-reset" onClick={onClear}>
            Limpiar filtros
          </button>
        )}
      </div>

      <div className="filter-groups">
        <div className="filter-group">
          <span className="filter-group-label">Fase</span>
          <div
            className="chip-group"
            role="group"
            aria-label="Filtrar por fase"
          >
            {FASES.map((fase) => (
              <button
                key={fase}
                type="button"
                className={`chip ${selectedFases.has(fase) ? 'chip--active' : ''}`}
                aria-pressed={selectedFases.has(fase)}
                onClick={() => onToggleFase(fase)}
              >
                {fase}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <span className="filter-group-label">Estado</span>
          <div
            className="chip-group"
            role="group"
            aria-label="Filtrar por estado"
          >
            {ESTADOS.map((estado) => (
              <button
                key={estado}
                type="button"
                className={`chip ${selectedEstados.has(estado) ? 'chip--active' : ''}`}
                aria-pressed={selectedEstados.has(estado)}
                onClick={() => onToggleEstado(estado)}
              >
                <span className="chip-icon" aria-hidden="true">
                  {ESTADO_ICON[estado]}
                </span>
                {estado}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="filters-summary" role="status">
        Mostrando <strong>{resultCount}</strong> de {totalCount} proyectos
      </p>
    </section>
  )
}

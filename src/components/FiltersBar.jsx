import { FASES, SECTORES } from '../data/projects.js'

const SECTOR_DOT_CLASS = {
  Minería: 'sector--mineria',
  Industria: 'sector--industria',
  Energía: 'sector--energia',
  Agua: 'sector--agua',
}

export default function FiltersBar({
  search,
  onSearchChange,
  selectedFases,
  onToggleFase,
  selectedSectores,
  onToggleSector,
  onClear,
  resultCount,
  totalCount,
}) {
  const hasActiveFilters =
    search.trim() !== '' || selectedFases.size > 0 || selectedSectores.size > 0

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
          <span className="filter-group-label">Sector</span>
          <div
            className="chip-group"
            role="group"
            aria-label="Filtrar por sector"
          >
            {SECTORES.map((sector) => (
              <button
                key={sector}
                type="button"
                className={`chip ${selectedSectores.has(sector) ? 'chip--active' : ''}`}
                aria-pressed={selectedSectores.has(sector)}
                onClick={() => onToggleSector(sector)}
              >
                <span
                  className={`chip-sector-dot ${SECTOR_DOT_CLASS[sector]}`}
                  aria-hidden="true"
                />
                {sector}
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

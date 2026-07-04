import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import StatTiles from './components/StatTiles.jsx'
import FiltersBar from './components/FiltersBar.jsx'
import ChartsSection from './components/charts/ChartsSection.jsx'
import ProjectsTable from './components/ProjectsTable.jsx'
import ProjectDetailModal from './components/ProjectDetailModal.jsx'
import { API_URL, getProyectos } from './api/proyectos.js'
import { normalizeText } from './utils/normalizeText.js'

export default function App() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [search, setSearch] = useState('')
  const [selectedFases, setSelectedFases] = useState(() => new Set())
  const [selectedEstados, setSelectedEstados] = useState(() => new Set())

  const loadProjects = () => {
    setLoading(true)
    setError(null)
    getProyectos()
      .then(setProjects)
      .catch((err) => setError(err.message || 'No se pudo conectar con el servidor'))
      .finally(() => setLoading(false))
  }

  useEffect(loadProjects, [])

  const filteredProjects = useMemo(() => {
    const query = normalizeText(search)
    return projects.filter((project) => {
      const matchesSearch = !query || normalizeText(project.nombre).includes(query)
      const matchesFase = selectedFases.size === 0 || selectedFases.has(project.fase)
      const matchesEstado =
        selectedEstados.size === 0 || selectedEstados.has(project.estado)
      return matchesSearch && matchesFase && matchesEstado
    })
  }, [projects, search, selectedFases, selectedEstados])

  const toggleFase = (fase) => {
    setSelectedFases((current) => {
      const next = new Set(current)
      next.has(fase) ? next.delete(fase) : next.add(fase)
      return next
    })
  }

  const toggleEstado = (estado) => {
    setSelectedEstados((current) => {
      const next = new Set(current)
      next.has(estado) ? next.delete(estado) : next.add(estado)
      return next
    })
  }

  const clearFilters = () => {
    setSearch('')
    setSelectedFases(new Set())
    setSelectedEstados(new Set())
  }

  return (
    <div className="app">
      <Header />
      <main className="container">
        <section className="intro">
          <h1>Catastro de Proyectos de Desaladoras</h1>
          <p>
            Seguimiento centralizado de las plantas desaladoras vinculadas a la
            minería: fase de avance, estado y características principales de
            cada proyecto.
          </p>
        </section>

        {loading && (
          <div className="status-panel" role="status">
            Cargando proyectos…
          </div>
        )}

        {!loading && error && (
          <div className="status-panel status-panel--error" role="alert">
            <p className="status-panel-title">No se pudo cargar el catastro</p>
            <p className="status-panel-hint">
              {error} — verifica que el backend esté corriendo en {API_URL}.
            </p>
            <button type="button" className="btn-details" onClick={loadProjects}>
              Reintentar
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            <FiltersBar
              search={search}
              onSearchChange={setSearch}
              selectedFases={selectedFases}
              onToggleFase={toggleFase}
              selectedEstados={selectedEstados}
              onToggleEstado={toggleEstado}
              onClear={clearFilters}
              resultCount={filteredProjects.length}
              totalCount={projects.length}
            />

            <StatTiles projects={filteredProjects} />
            <ChartsSection projects={filteredProjects} />
            <ProjectsTable
              projects={filteredProjects}
              onSelect={setSelectedProject}
              onClearFilters={clearFilters}
            />
          </>
        )}
      </main>
      <footer className="footer">
        <span>ARCAN · Catastro de Desaladoras</span>
      </footer>
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

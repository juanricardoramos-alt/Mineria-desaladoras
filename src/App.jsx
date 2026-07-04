import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import StatTiles from './components/StatTiles.jsx'
import FiltersBar from './components/FiltersBar.jsx'
import ChartsSection from './components/charts/ChartsSection.jsx'
import ProjectsTable from './components/ProjectsTable.jsx'
import ProjectDetailModal from './components/ProjectDetailModal.jsx'
import { projects } from './data/projects.js'
import { normalizeText } from './utils/normalizeText.js'

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [search, setSearch] = useState('')
  const [selectedFases, setSelectedFases] = useState(() => new Set())
  const [selectedEstados, setSelectedEstados] = useState(() => new Set())

  const filteredProjects = useMemo(() => {
    const query = normalizeText(search)
    return projects.filter((project) => {
      const matchesSearch = !query || normalizeText(project.nombre).includes(query)
      const matchesFase = selectedFases.size === 0 || selectedFases.has(project.fase)
      const matchesEstado =
        selectedEstados.size === 0 || selectedEstados.has(project.estado)
      return matchesSearch && matchesFase && matchesEstado
    })
  }, [search, selectedFases, selectedEstados])

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
      </main>
      <footer className="footer">
        <span>ARCAN · Catastro de Desaladoras — datos de ejemplo</span>
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

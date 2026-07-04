import { useMemo, useState } from 'react'
import StatTiles from '../components/StatTiles.jsx'
import FiltersBar from '../components/FiltersBar.jsx'
import ChartsSection from '../components/charts/ChartsSection.jsx'
import ProjectsTable from '../components/ProjectsTable.jsx'
import ProjectDetailModal from '../components/ProjectDetailModal.jsx'
import { PROJECTS } from '../data/projects.js'
import { normalizeText } from '../utils/normalizeText.js'

export default function ProjectsPage() {
  const [projects] = useState(PROJECTS)
  const [selectedProject, setSelectedProject] = useState(null)
  const [search, setSearch] = useState('')
  const [selectedFases, setSelectedFases] = useState(() => new Set())
  const [selectedSectores, setSelectedSectores] = useState(() => new Set())

  const filteredProjects = useMemo(() => {
    const query = normalizeText(search)
    return projects.filter((project) => {
      const matchesSearch = !query || normalizeText(project.nombre).includes(query)
      const matchesFase = selectedFases.size === 0 || selectedFases.has(project.fase)
      const matchesSector =
        selectedSectores.size === 0 || selectedSectores.has(project.sector)
      return matchesSearch && matchesFase && matchesSector
    })
  }, [projects, search, selectedFases, selectedSectores])

  const toggleFase = (fase) => {
    setSelectedFases((current) => {
      const next = new Set(current)
      next.has(fase) ? next.delete(fase) : next.add(fase)
      return next
    })
  }

  const toggleSector = (sector) => {
    setSelectedSectores((current) => {
      const next = new Set(current)
      next.has(sector) ? next.delete(sector) : next.add(sector)
      return next
    })
  }

  const clearFilters = () => {
    setSearch('')
    setSelectedFases(new Set())
    setSelectedSectores(new Set())
  }

  return (
    <>
      <section className="intro">
        <h1>Proyectos en Prospección</h1>
        <p>
          Proyectos de desaladoras, plantas de tratamiento e infraestructura
          minera, industrial y energética en Chile con potencial de negocio
          para AQUALIA.
        </p>
      </section>

      <FiltersBar
        search={search}
        onSearchChange={setSearch}
        selectedFases={selectedFases}
        onToggleFase={toggleFase}
        selectedSectores={selectedSectores}
        onToggleSector={toggleSector}
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

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}

import { useState } from 'react'
import Header from './components/Header.jsx'
import StatTiles from './components/StatTiles.jsx'
import ProjectsTable from './components/ProjectsTable.jsx'
import ProjectDetailModal from './components/ProjectDetailModal.jsx'
import { projects } from './data/projects.js'

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)

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
        <StatTiles projects={projects} />
        <ProjectsTable projects={projects} onSelect={setSelectedProject} />
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

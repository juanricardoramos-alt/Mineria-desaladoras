import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ContactsPage from './pages/ContactsPage.jsx'
import ExportPage from './pages/ExportPage.jsx'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/contactos" element={<ContactsPage />} />
          <Route path="/exportar" element={<ExportPage />} />
        </Routes>
      </main>
      <footer className="footer">
        <span>AQUALIA · Prospección Comercial</span>
      </footer>
    </div>
  )
}

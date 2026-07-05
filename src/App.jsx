import Header from './components/Header.jsx'
import Projects from './components/Projects.jsx'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Projects />
      </main>
      <footer className="footer">
        <span>ARCAN · Catastro de Desaladoras</span>
      </footer>
    </div>
  )
}

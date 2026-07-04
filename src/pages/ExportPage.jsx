import { useMemo, useState } from 'react'
import * as XLSX from 'xlsx'
import { PROJECTS } from '../data/projects.js'

const COLUMNS = [
  'Proyecto',
  'Empresa',
  'Cargo idóneo',
  'Sector',
  'Razón de contacto',
  'Solución AQUALIA a ofrecer',
]

function buildRows() {
  return PROJECTS.flatMap((project) =>
    project.contactos.map((contacto) => ({
      Proyecto: project.nombre,
      Empresa: project.empresa,
      'Cargo idóneo': contacto.cargo,
      Sector: project.sector,
      'Razón de contacto': contacto.razon,
      'Solución AQUALIA a ofrecer': contacto.solucionAqualia,
    })),
  )
}

export default function ExportPage() {
  const rows = useMemo(buildRows, [])
  const [downloaded, setDownloaded] = useState(false)

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows, { header: COLUMNS })
    worksheet['!cols'] = [
      { wch: 32 },
      { wch: 30 },
      { wch: 30 },
      { wch: 12 },
      { wch: 55 },
      { wch: 55 },
    ]
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contactos')
    XLSX.writeFile(workbook, 'AQUALIA_Prospeccion_Comercial.xlsx')
    setDownloaded(true)
  }

  return (
    <>
      <section className="intro">
        <h1>Exportar Prospección</h1>
        <p>
          Descarga el listado completo de proyectos y contactos clave en un
          archivo Excel, listo para compartir con el equipo comercial o
          presentar a gerencia.
        </p>
      </section>

      <section className="export-panel">
        <div className="export-panel-info">
          <p className="export-panel-count">
            <strong>{rows.length}</strong> contactos en{' '}
            <strong>{PROJECTS.length}</strong> proyectos
          </p>
          <p className="export-panel-hint">
            El archivo incluye una fila por cada contacto clave, con las
            columnas: {COLUMNS.join(', ')}.
          </p>
        </div>
        <button type="button" className="btn-export" onClick={handleExport}>
          Descargar Excel
        </button>
      </section>

      {downloaded && (
        <p className="export-confirmation" role="status">
          Archivo <strong>AQUALIA_Prospeccion_Comercial.xlsx</strong> descargado.
        </p>
      )}

      <section className="projects" aria-label="Vista previa de la exportación">
        <div className="projects-header">
          <h2>Vista previa</h2>
          <span className="projects-count">{rows.length} filas</span>
        </div>
        <div className="table-wrapper table-wrapper--scroll">
          <table className="projects-table">
            <thead>
              <tr>
                {COLUMNS.map((column) => (
                  <th scope="col" key={column}>
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  {COLUMNS.map((column) => (
                    <td
                      key={column}
                      className={
                        column === 'Razón de contacto' ||
                        column === 'Solución AQUALIA a ofrecer'
                          ? 'export-cell export-cell--wide'
                          : 'export-cell'
                      }
                    >
                      {row[column]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

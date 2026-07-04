# AQUALIA · Prospección Comercial

Herramienta de prospección comercial para identificar oportunidades de
negocio en proyectos de desaladoras, plantas de tratamiento y proyectos
mineros/industriales/energéticos en Chile.

## Estado actual

Aplicación en React con datos de ejemplo (sin backend), organizada en tres
páginas:

- **Proyectos** — catastro de proyectos en ejecución con nombre, empresa,
  fase (Diseño, Ingeniería, Construcción, Operativo), ubicación, sector
  (Minería, Industria, Energía, Agua) y presupuesto estimado. Incluye
  búsqueda por nombre, filtros combinables por fase/sector, indicadores
  resumen, gráficos (proyectos por fase y por sector) y detalle de cada
  proyecto en una ventana modal.
- **Contactos Clave** — por cada proyecto, el cargo idóneo a contactar, la
  razón para hacerlo y la solución de AQUALIA que mejor responde a esa
  necesidad.
- **Exportar** — descarga en un clic de un Excel (.xlsx) con una fila por
  contacto: Proyecto, Empresa, Cargo idóneo, Sector, Razón de contacto y
  Solución AQUALIA a ofrecer.

Diseño responsive (tabla en escritorio, tarjetas en móvil) con modo claro
y oscuro.

> Existe además un backend de referencia (FastAPI + PostgreSQL) en
> `backend/`, heredado de una fase anterior del proyecto (catastro interno
> de desaladoras). Su modelo de datos (fase/estado) no refleja el modelo
> actual (fase/sector/contactos) y no está conectado al frontend.

## Stack

- **Frontend:** [React 18](https://react.dev/) + [React Router 7](https://reactrouter.com/) + [Vite 5](https://vitejs.dev/), CSS puro
- **Exportación a Excel:** [SheetJS (`xlsx`)](https://sheetjs.com/), generado 100% en el navegador
- **Backend (legado, no conectado):** [FastAPI](https://fastapi.tiangolo.com/) + [SQLAlchemy](https://www.sqlalchemy.org/) + PostgreSQL — ver [`backend/README.md`](backend/README.md)

## Cómo correrlo localmente

```bash
npm install
npm run dev      # http://localhost:5173
```

Abre `http://localhost:5173`: la aplicación carga los proyectos y
contactos de ejemplo definidos en `src/data/projects.js`, sin necesidad de
backend ni base de datos.

## Estructura

```
backend/                    # backend legado (FastAPI), no conectado al frontend

src/
  data/projects.js          # proyectos + contactos de ejemplo, FASES y SECTORES
  pages/
    ProjectsPage.jsx         # búsqueda, filtros, gráficos y tabla de proyectos
    ContactsPage.jsx         # contactos clave por proyecto
    ExportPage.jsx           # descarga del Excel de prospección
  components/
    Header.jsx              # barra superior con logo y navegación entre páginas
    FiltersBar.jsx           # búsqueda + filtros por fase/sector
    StatTiles.jsx           # indicadores resumen
    ProjectsTable.jsx       # tabla (escritorio) y tarjetas (móvil)
    ProjectDetailModal.jsx  # detalle de un proyecto y sus contactos clave
    badges.jsx              # insignias de fase y sector
    charts/                 # gráfico de barras (fase) y de dona (sector)
  styles/index.css          # tokens de diseño y estilos globales
```

## Próximos pasos sugeridos

- Conectar el frontend a un backend propio con el modelo fase/sector/contactos
- Formularios para agregar y editar proyectos y contactos
- Autenticación y roles por equipo comercial
- Historial de seguimiento de cada oportunidad (CRM ligero)

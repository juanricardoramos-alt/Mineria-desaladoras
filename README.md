# Catastro de Desaladoras

Plataforma web para gestionar el catastro de proyectos de plantas desaladoras
vinculadas a la minería.

## Estado actual — Fase 1

Dashboard en React con datos de ejemplo (sin backend):

- Página de inicio con logo y nombre de la empresa (ARCAN)
- Barra de búsqueda por nombre y filtros combinables por fase/estado, en
  tiempo real
- Indicadores resumen y gráficos de proyectos por fase (barras) y por
  estado (dona)
- Tabla de 7 proyectos de ejemplo (Nombre, Empresa, Ubicación, Fase,
  Estado, Presupuesto) con detalle de cada uno en una ventana modal
- Diseño responsive (tabla en escritorio, tarjetas en móvil) con modo
  claro y oscuro

Existe además un backend de referencia (FastAPI + PostgreSQL) en
`backend/` con el mismo modelo de datos y un CRUD completo, pensado para
una futura Fase 2 en la que el frontend consuma la API en vez de los
datos de ejemplo.

## Stack

- **Frontend:** [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/), CSS puro
- **Backend (referencia, no conectado):** [FastAPI](https://fastapi.tiangolo.com/) + [SQLAlchemy](https://www.sqlalchemy.org/) + PostgreSQL — ver [`backend/README.md`](backend/README.md)

## Cómo correrlo localmente

```bash
npm install
npm run dev      # http://localhost:5173
```

Abre `http://localhost:5173`: el dashboard carga los 7 proyectos de
ejemplo definidos en `src/projectsData.js`, sin necesidad de backend ni
base de datos.

## Estructura

```
backend/                    # backend de referencia (FastAPI), no conectado al frontend
  main.py                  # app FastAPI + endpoints CRUD
  models.py                # modelo SQLAlchemy de "proyectos"
  schemas.py                # esquemas Pydantic (request/response)
  database.py               # conexión a PostgreSQL
  seed_data.py               # datos iniciales de ejemplo
  requirements.txt

src/
  projectsData.js           # proyectos de ejemplo + constantes de fase/estado
  components/
    Header.jsx              # barra superior con logo y navegación
    Projects.jsx            # página de Proyectos: búsqueda, filtros, gráficos y tabla
    FiltersBar.jsx           # búsqueda + filtros por fase/estado
    StatTiles.jsx           # indicadores resumen
    ProjectsTable.jsx       # tabla (escritorio) y tarjetas (móvil)
    ProjectDetailModal.jsx  # detalle de un proyecto
    badges.jsx              # insignias de fase y estado
    charts/                 # gráfico de barras (fase) y de dona (estado)
  styles/index.css          # tokens de diseño y estilos globales
```

## Próximos pasos sugeridos

- Conectar el frontend al backend de referencia (`backend/`) vía API
- Formularios en el frontend para crear, editar y eliminar proyectos
- Autenticación y roles
- Vista de mapa con la ubicación de cada planta
- Migraciones de esquema con Alembic

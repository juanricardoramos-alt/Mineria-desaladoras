# Catastro de Desaladoras

Plataforma web para gestionar el catastro de proyectos de plantas desaladoras
vinculadas a la minería.

## Estado actual — Fase 2

Dashboard en React conectado a un backend propio (FastAPI + PostgreSQL):

- Página de inicio con logo y nombre de la empresa (ARCAN)
- Indicadores resumen, calculados sobre los datos reales del catastro
- Búsqueda por nombre y filtros combinables por fase/estado, en tiempo real
- Gráficos de proyectos por fase (barras) y por estado (dona)
- Tabla de proyectos con detalle de cada uno en una ventana modal
- Diseño responsive (tabla en escritorio, tarjetas en móvil) con modo
  claro y oscuro
- CRUD completo de proyectos vía API (`GET`/`POST`/`PUT`/`DELETE`)

## Stack

- **Frontend:** [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/), CSS puro
- **Backend:** [FastAPI](https://fastapi.tiangolo.com/) + [SQLAlchemy](https://www.sqlalchemy.org/)
- **Base de datos:** PostgreSQL (`desaladoras_db`)

## Cómo correrlo localmente

Necesitas **dos terminales** (backend y frontend) y PostgreSQL corriendo.

### Terminal 1 — Backend

```bash
cd backend
python3 -m venv venv && source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env      # ajusta las credenciales si es necesario
python -m uvicorn main:app --reload --port 5000
```

> El backend crea la tabla `proyectos` automáticamente y la siembra con 7
> proyectos de ejemplo la primera vez que corre contra una base vacía.
> Detalles de la base de datos y los endpoints en
> [`backend/README.md`](backend/README.md).

### Terminal 2 — Frontend

```bash
npm install
npm run dev      # http://localhost:5173
```

Abre `http://localhost:5173`: el dashboard carga los proyectos desde
`http://localhost:5000/proyectos` al iniciar. Si el backend no está
disponible, se muestra un aviso con un botón para reintentar.

## Estructura

```
backend/
  main.py                  # app FastAPI + endpoints CRUD
  models.py                # modelo SQLAlchemy de "proyectos"
  schemas.py                # esquemas Pydantic (request/response)
  database.py               # conexión a PostgreSQL
  seed_data.py               # datos iniciales de ejemplo
  requirements.txt

src/
  api/proyectos.js          # cliente HTTP hacia el backend
  data/projects.js          # constantes de fase/estado (FASES, ESTADOS)
  components/
    Header.jsx              # barra superior con logo y navegación
    FiltersBar.jsx           # búsqueda + filtros por fase/estado
    StatTiles.jsx           # indicadores resumen
    ProjectsTable.jsx       # tabla (escritorio) y tarjetas (móvil)
    ProjectDetailModal.jsx  # detalle de un proyecto
    badges.jsx              # insignias de fase y estado
    charts/                 # gráfico de barras (fase) y de dona (estado)
  styles/index.css          # tokens de diseño y estilos globales
```

## Próximos pasos sugeridos

- Formularios en el frontend para crear, editar y eliminar proyectos
  (el backend ya soporta las cuatro operaciones)
- Autenticación y roles
- Vista de mapa con la ubicación de cada planta
- Migraciones de esquema con Alembic

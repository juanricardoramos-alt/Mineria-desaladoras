# Backend — Catastro de Desaladoras

API REST en FastAPI + PostgreSQL para el catastro de proyectos de
desaladoras. Expone CRUD completo sobre `/proyectos` y corre en
`http://localhost:5000`.

## Requisitos

- Python 3.10+
- PostgreSQL corriendo localmente (versión 13+)

## 1. Crear la base de datos

Con PostgreSQL corriendo, desde una sesión con permisos de administrador
(usuario `postgres`):

```bash
psql -c "CREATE ROLE desaladoras_app WITH LOGIN PASSWORD 'desaladoras_dev_pw';"
psql -c "CREATE DATABASE desaladoras_db OWNER desaladoras_app;"
```

Ajusta el nombre de usuario/contraseña si prefieres otros — solo asegúrate
de reflejarlo en `.env` (paso 3).

## 2. Instalar dependencias

```bash
cd backend
python3 -m venv venv
source venv/bin/activate        # en Windows: venv\Scripts\activate
pip install -r requirements.txt
```

## 3. Configurar la conexión

```bash
cp .env.example .env
```

Por defecto `.env` apunta a
`postgresql://desaladoras_app:desaladoras_dev_pw@localhost:5432/desaladoras_db`.
Edítalo si tu usuario, contraseña, host o puerto son distintos.

## 4. Levantar el servidor

```bash
python -m uvicorn main:app --reload --port 5000
```

- La tabla `proyectos` se crea automáticamente al arrancar si no existe.
- Si la tabla está vacía, se siembra con 7 proyectos de ejemplo
  (`seed_data.py`) para que el dashboard no arranque vacío.
- Documentación interactiva (Swagger): http://localhost:5000/docs

## Endpoints

| Método | Ruta                 | Descripción                          |
|--------|----------------------|---------------------------------------|
| GET    | `/proyectos`         | Lista todos los proyectos             |
| GET    | `/proyectos/{id}`    | Obtiene un proyecto por id            |
| POST   | `/proyectos`         | Crea un proyecto                      |
| PUT    | `/proyectos/{id}`    | Actualiza (parcial) un proyecto       |
| DELETE | `/proyectos/{id}`    | Elimina un proyecto                   |

Payload de `POST`/`PUT` (campos de `PUT` son todos opcionales):

```json
{
  "nombre": "Desaladora Ejemplo",
  "empresa": "Minera Ejemplo",
  "ubicacion": "Antofagasta, Región de Antofagasta",
  "fase": "Exploración",
  "estado": "En progreso",
  "presupuesto": 150.5,
  "descripcion": "Texto libre opcional"
}
```

`fase` acepta: `Exploración`, `Desarrollo`, `Construcción`, `Operativo`.
`estado` acepta: `En progreso`, `Pausado`, `Completado`.

## Esquema de la tabla `proyectos`

| Columna         | Tipo             | Notas                              |
|-----------------|------------------|-------------------------------------|
| id              | serial (PK)      | autogenerado                        |
| nombre          | varchar(200)     | obligatorio                         |
| empresa         | varchar(200)     | obligatorio                         |
| ubicacion       | varchar(200)     | obligatorio                         |
| fase            | varchar(30)      | restringido por CHECK constraint    |
| estado          | varchar(30)      | restringido por CHECK constraint    |
| presupuesto     | numeric(12,2)    | opcional, millones de US$           |
| descripcion     | text             | opcional                            |
| fecha_creacion  | timestamptz      | autogenerado (`now()`)              |

## CORS

El backend permite peticiones desde `http://localhost:5173` y
`http://localhost:4173` (servidor de desarrollo y de preview de Vite).
Si sirves el frontend desde otro origen, agrégalo en `main.py`
(`allow_origins`).

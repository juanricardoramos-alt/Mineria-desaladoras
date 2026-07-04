# Catastro de Desaladoras

Plataforma web para gestionar el catastro de proyectos de plantas desaladoras
vinculadas a la minería.

## Estado actual

Primer paso del proyecto: dashboard inicial en React con datos de ejemplo
(sin base de datos).

- Página de inicio con logo y nombre de la empresa (ARCAN)
- Indicadores resumen del catastro
- Tabla de proyectos: nombre, ubicación, fase y estado
- Detalle de cada proyecto en una ventana modal ("Ver detalles")
- Diseño responsive (tabla en escritorio, tarjetas en móvil) con modo
  claro y oscuro

## Stack

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- CSS puro con variables de diseño (sin frameworks de UI)

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # build de producción en dist/
npm run preview  # sirve el build de producción
```

## Estructura

```
src/
  data/projects.js          # datos de ejemplo del catastro
  components/
    Header.jsx              # barra superior con logo y navegación
    StatTiles.jsx           # indicadores resumen
    ProjectsTable.jsx       # tabla (escritorio) y tarjetas (móvil)
    ProjectDetailModal.jsx  # detalle de un proyecto
    badges.jsx              # insignias de fase y estado
  styles/index.css          # tokens de diseño y estilos globales
```

## Próximos pasos sugeridos

- Persistencia real (API + base de datos)
- Formulario para crear y editar proyectos
- Filtros y búsqueda en la tabla
- Vista de mapa con la ubicación de cada planta

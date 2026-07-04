// Datos de ejemplo del catastro de proyectos de desaladoras.
// Reemplazar por la fuente de datos real (API / base de datos) en fases siguientes.

export const FASES = ['Exploración', 'Desarrollo', 'Construcción', 'Operativo']

export const ESTADOS = ['En progreso', 'Pausado', 'Completado']

export const projects = [
  {
    id: 'DES-001',
    nombre: 'Desaladora Puerto Coloso',
    empresa: 'Minera Escondida (BHP)',
    ubicacion: 'Antofagasta, Región de Antofagasta',
    fase: 'Operativo',
    estado: 'Completado',
    capacidadLs: 3800,
    inversionMusd: 3430,
    puestaEnMarcha: '2017',
    descripcion:
      'Planta de osmosis inversa que abastece de agua desalinizada a la operación de Minera Escondida mediante dos ductos de 180 km hasta la mina, a 3.100 m s. n. m. Es una de las plantas desaladoras para uso minero más grandes de Latinoamérica.',
  },
  {
    id: 'DES-002',
    nombre: 'Planta Desaladora Distrito Norte',
    empresa: 'Codelco',
    ubicacion: 'Tocopilla, Región de Antofagasta',
    fase: 'Construcción',
    estado: 'En progreso',
    capacidadLs: 840,
    inversionMusd: 1000,
    puestaEnMarcha: '2026 (estimada)',
    descripcion:
      'Proyecto de planta desaladora y sistema de impulsión de 160 km para abastecer las divisiones Chuquicamata, Radomiro Tomic y Ministro Hales, reduciendo la extracción de agua continental en el Distrito Norte de Codelco.',
  },
  {
    id: 'DES-003',
    nombre: 'Desaladora INCO Los Pelambres',
    empresa: 'Antofagasta Minerals',
    ubicacion: 'Los Vilos, Región de Coquimbo',
    fase: 'Operativo',
    estado: 'Completado',
    capacidadLs: 400,
    inversionMusd: 2200,
    puestaEnMarcha: '2023',
    descripcion:
      'Parte del proyecto de Infraestructura Complementaria (INCO) de Minera Los Pelambres. Incorpora agua de mar desalinizada al proceso para reducir la dependencia de agua fresca del valle del Choapa en un contexto de megasequía.',
  },
  {
    id: 'DES-004',
    nombre: 'Desaladora Santo Domingo',
    empresa: 'Capstone Copper',
    ubicacion: 'Caldera, Región de Atacama',
    fase: 'Desarrollo',
    estado: 'En progreso',
    capacidadLs: 450,
    inversionMusd: 600,
    puestaEnMarcha: '2028 (estimada)',
    descripcion:
      'Planta desaladora asociada al proyecto minero Santo Domingo (cobre-hierro-cobalto). En etapa de ingeniería de detalle y tramitación de permisos sectoriales para el sistema de captación y conducción.',
  },
  {
    id: 'DES-005',
    nombre: 'Desaladora Collahuasi',
    empresa: 'Compañía Minera Doña Inés de Collahuasi',
    ubicacion: 'Puerto Patache, Región de Tarapacá',
    fase: 'Construcción',
    estado: 'En progreso',
    capacidadLs: 1050,
    inversionMusd: 3100,
    puestaEnMarcha: '2026 (estimada)',
    descripcion:
      'Planta desaladora y sistema de impulsión de agua de mar hacia la faena a más de 4.400 m s. n. m., que permitirá reemplazar gradualmente la extracción de agua del acuífero del Salar de Coposa.',
  },
  {
    id: 'DES-006',
    nombre: 'Desaladora NuevaUnión',
    empresa: 'Teck / Newmont',
    ubicacion: 'Huasco, Región de Atacama',
    fase: 'Exploración',
    estado: 'Pausado',
    capacidadLs: 740,
    inversionMusd: 480,
    puestaEnMarcha: 'Por definir',
    descripcion:
      'Estudio de alternativas de suministro hídrico para el proyecto NuevaUnión (Relincho–El Morro). El desarrollo se encuentra pausado a la espera de la actualización del estudio de factibilidad del proyecto minero.',
  },
  {
    id: 'DES-007',
    nombre: 'Desaladora Marimaca',
    empresa: 'Marimaca Copper',
    ubicacion: 'Mejillones, Región de Antofagasta',
    fase: 'Exploración',
    estado: 'En progreso',
    capacidadLs: 120,
    inversionMusd: 150,
    puestaEnMarcha: '2029 (estimada)',
    descripcion:
      'Evaluación de suministro de agua de mar desalinizada para el proyecto de óxidos de cobre Marimaca. En etapa de prefactibilidad, con levantamiento de línea de base ambiental del área de captación.',
  },
]

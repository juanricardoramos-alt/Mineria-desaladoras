// Catastro de ejemplo (sin backend) para la herramienta de prospección
// comercial de AQUALIA: proyectos reales/verosímiles de desaladoras,
// plantas de tratamiento y proyectos mineros/industriales/energéticos en
// Chile, con los contactos clave sugeridos para cada uno.

export const FASES = ['Diseño', 'Ingeniería', 'Construcción', 'Operativo']

export const SECTORES = ['Minería', 'Industria', 'Energía', 'Agua']

export const PROJECTS = [
  {
    id: 1,
    nombre: 'Desaladora Puerto Coloso',
    empresa: 'Minera Escondida (BHP)',
    ubicacion: 'Antofagasta, Región de Antofagasta',
    fase: 'Operativo',
    sector: 'Minería',
    presupuesto: 3430,
    descripcion:
      'Planta de osmosis inversa que abastece de agua desalinizada a la operación de Minera Escondida mediante dos ductos de 180 km hasta la mina, a 3.100 m s. n. m. Es una de las plantas desaladoras para uso minero más grandes de Latinoamérica. Capacidad de diseño: 3.800 l/s. Puesta en marcha: 2017.',
    fecha_creacion: '2017-03-14',
    contactos: [
      {
        cargo: 'Gerente de Operaciones de Planta Desalinizadora',
        razon:
          'Responsable de la continuidad operativa de la planta en régimen; evalúa proveedores de O&M, repuestos críticos y optimización energética.',
        solucionAqualia:
          'Contrato de operación y mantenimiento (O&M) y optimización energética de plantas desalinizadoras',
      },
      {
        cargo: 'Gerente de Abastecimiento (Procurement)',
        razon:
          'Gestiona las licitaciones de servicios de mantenimiento y suministros para la planta; es el punto de entrada para nuevas propuestas de proveedores.',
        solucionAqualia:
          'Contrato marco de servicios de mantenimiento especializado en ósmosis inversa',
      },
    ],
  },
  {
    id: 2,
    nombre: 'Planta Desaladora Distrito Norte',
    empresa: 'Codelco',
    ubicacion: 'Tocopilla, Región de Antofagasta',
    fase: 'Construcción',
    sector: 'Minería',
    presupuesto: 1000,
    descripcion:
      'Proyecto de planta desaladora y sistema de impulsión de 160 km para abastecer las divisiones Chuquicamata, Radomiro Tomic y Ministro Hales, reduciendo la extracción de agua continental en el Distrito Norte de Codelco. Capacidad de diseño: 840 l/s. Puesta en marcha estimada: 2026.',
    fecha_creacion: '2022-06-01',
    contactos: [
      {
        cargo: 'Gerente de Proyecto (Construcción)',
        razon:
          'Lidera la ejecución de la obra y la puesta en marcha; decide sobre los paquetes de ingeniería de detalle y comisionamiento pendientes.',
        solucionAqualia:
          'Servicios de ingeniería de detalle y comisionamiento (commissioning) de plantas desalinizadoras de gran escala',
      },
      {
        cargo: 'Subgerente de Recursos Hídricos',
        razon:
          'Define la estrategia hídrica de largo plazo del Distrito Norte y evalúa los contratos de operación posteriores a la puesta en marcha.',
        solucionAqualia:
          'Contrato de operación y mantenimiento (O&M) de largo plazo post puesta en marcha',
      },
    ],
  },
  {
    id: 3,
    nombre: 'Desaladora Collahuasi',
    empresa: 'Compañía Minera Doña Inés de Collahuasi',
    ubicacion: 'Puerto Patache, Región de Tarapacá',
    fase: 'Construcción',
    sector: 'Minería',
    presupuesto: 3100,
    descripcion:
      'Planta desaladora y sistema de impulsión de agua de mar hacia la faena a más de 4.400 m s. n. m., que permitirá reemplazar gradualmente la extracción de agua del acuífero del Salar de Coposa. Capacidad de diseño: 1.050 l/s. Puesta en marcha estimada: 2026.',
    fecha_creacion: '2023-02-17',
    contactos: [
      {
        cargo: 'Gerente de Proyecto Impulsión de Agua de Mar',
        razon:
          'Responsable de la construcción del sistema de impulsión a más de 4.400 m s. n. m.; busca socios con experiencia en operación de plantas en altura extrema.',
        solucionAqualia:
          'Ingeniería y O&M especializados en sistemas de impulsión de agua de mar en altura',
      },
      {
        cargo: 'Gerente de Sustentabilidad',
        razon:
          'Reporta el reemplazo de la extracción del acuífero del Salar de Coposa; interesado en soluciones de monitoreo ambiental del recurso hídrico.',
        solucionAqualia:
          'Plataforma de monitoreo y telemetría de gestión hídrica y ambiental',
      },
    ],
  },
  {
    id: 4,
    nombre: 'Desaladora Santo Domingo',
    empresa: 'Capstone Copper',
    ubicacion: 'Caldera, Región de Atacama',
    fase: 'Ingeniería',
    sector: 'Minería',
    presupuesto: 600,
    descripcion:
      'Planta desaladora asociada al proyecto minero Santo Domingo (cobre-hierro-cobalto). En etapa de ingeniería de detalle y tramitación de permisos sectoriales para el sistema de captación y conducción. Capacidad de diseño: 450 l/s. Puesta en marcha estimada: 2028.',
    fecha_creacion: '2024-01-10',
    contactos: [
      {
        cargo: 'Gerente de Ingeniería de Proyecto',
        razon:
          'Define el paquete de ingeniería de detalle del sistema de captación y conducción, actualmente en desarrollo.',
        solucionAqualia:
          'Ingeniería de detalle (FEED/EPC) para plantas desalinizadoras de uso minero',
      },
      {
        cargo: 'Gerente de Permisos y Medio Ambiente',
        razon:
          'Tramita los permisos sectoriales de captación de agua de mar; requiere respaldo técnico para la evaluación de impacto ambiental.',
        solucionAqualia:
          'Asesoría técnica en estudios de impacto ambiental de proyectos de desalinización',
      },
    ],
  },
  {
    id: 5,
    nombre: 'Ampliación Planta Desalinizadora La Chimba',
    empresa: 'Econssa Chile / Aguas Antofagasta',
    ubicacion: 'Antofagasta, Región de Antofagasta',
    fase: 'Operativo',
    sector: 'Agua',
    presupuesto: 180,
    descripcion:
      'Planta desalinizadora que abastece de agua potable a la ciudad de Antofagasta y, mediante convenio, a la operación de Minera Escondida. Operada por Econssa Chile en asociación con Aguas Antofagasta. En evaluación un proyecto de ampliación de capacidad para responder a la creciente demanda urbana e industrial de la región. Capacidad actual: 1.000 l/s.',
    fecha_creacion: '2023-05-19',
    contactos: [
      {
        cargo: 'Gerente General Econssa Chile',
        razon:
          'Responsable de la operación de la planta que abastece a la ciudad y a la minería; evalúa alianzas técnicas para la ampliación de capacidad.',
        solucionAqualia:
          'Alianza técnica y de O&M para la ampliación de plantas desalinizadoras urbanas',
      },
      {
        cargo: 'Jefe de Mantenimiento',
        razon:
          'Gestiona el mantenimiento de membranas y equipos electromecánicos; busca proveedores especializados en ósmosis inversa.',
        solucionAqualia:
          'Servicio de mantenimiento predictivo y reemplazo de membranas de ósmosis inversa',
      },
    ],
  },
  {
    id: 6,
    nombre: 'Proyecto Desalinizadora Región de Coquimbo',
    empresa: 'Aguas del Valle',
    ubicacion: 'La Serena, Región de Coquimbo',
    fase: 'Diseño',
    sector: 'Agua',
    presupuesto: 220,
    descripcion:
      'Estudio y diseño de una planta desalinizadora para abastecer de agua potable a la Región de Coquimbo, impulsado por Aguas del Valle ante el prolongado déficit hídrico (megasequía) que afecta a los valles del Elqui y del Limarí. En etapa de ingeniería conceptual y evaluación del modelo de financiamiento.',
    fecha_creacion: '2025-02-03',
    contactos: [
      {
        cargo: 'Gerente de Nuevos Proyectos',
        razon:
          'Lidera el diseño del proyecto de desalinización regional impulsado por la megasequía; en búsqueda de socios EPC.',
        solucionAqualia:
          'Propuesta EPC llave en mano para plantas desalinizadoras de abastecimiento urbano',
      },
      {
        cargo: 'Gerente de Regulación y Asuntos Corporativos',
        razon:
          'Coordina con la Superintendencia de Servicios Sanitarios (SISS) y evalúa modelos de financiamiento del proyecto.',
        solucionAqualia:
          'Asesoría en estructuración de proyectos y modelos de financiamiento de agua potable',
      },
    ],
  },
  {
    id: 7,
    nombre: 'Complejo Haru Oni',
    empresa: 'HIF Global',
    ubicacion: 'Punta Arenas, Región de Magallanes',
    fase: 'Construcción',
    sector: 'Energía',
    presupuesto: 350,
    descripcion:
      'Planta de combustibles sintéticos (e-fuels) a partir de hidrógeno verde, que utiliza energía eólica y agua de mar desalinizada y desmineralizada como insumo para el proceso de electrólisis. Ubicada cerca de Punta Arenas, Región de Magallanes. En construcción su segunda etapa industrial.',
    fecha_creacion: '2024-08-27',
    contactos: [
      {
        cargo: 'Director de Proyecto Haru Oni',
        razon:
          'Responsable de la planta de e-combustibles, que requiere agua desalinizada y desmineralizada de alta pureza para el proceso de electrólisis.',
        solucionAqualia:
          'Diseño, construcción y O&M de plantas de desalinización y desmineralización para hidrógeno verde',
      },
      {
        cargo: 'Gerente de Sustentabilidad',
        razon:
          'Evalúa el balance y la huella hídrica del proyecto frente a la comunidad de Magallanes.',
        solucionAqualia:
          'Consultoría en huella hídrica y economía circular del agua industrial',
      },
    ],
  },
  {
    id: 8,
    nombre: 'Planta de Tratamiento de Efluentes Nueva Aldea',
    empresa: 'ARAUCO',
    ubicacion: 'Ránquil, Región del Biobío',
    fase: 'Ingeniería',
    sector: 'Industria',
    presupuesto: 90,
    descripcion:
      'Modernización del sistema de tratamiento de efluentes del complejo forestal e industrial Nueva Aldea, que procesa celulosa y biocombustibles. Busca reducir la carga orgánica de los efluentes antes de su descarga y cumplir con la actualización de la norma de emisión de residuos líquidos industriales.',
    fecha_creacion: '2025-04-11',
    contactos: [
      {
        cargo: 'Gerente de Medio Ambiente Nueva Aldea',
        razon:
          'Lidera la actualización del sistema de tratamiento de efluentes de la planta de celulosa para cumplir la nueva norma de emisión.',
        solucionAqualia:
          'Ingeniería y modernización de plantas de tratamiento de efluentes industriales',
      },
      {
        cargo: 'Gerente de Planta',
        razon:
          'Responsable de la continuidad operacional de la planta; evalúa contratos de operación tercerizada del tratamiento de aguas.',
        solucionAqualia:
          'Operación tercerizada (O&M) de plantas de tratamiento de efluentes industriales',
      },
    ],
  },
]

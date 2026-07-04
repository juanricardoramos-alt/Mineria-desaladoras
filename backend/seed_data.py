# Datos iniciales para poblar la tabla "proyectos" la primera vez que se
# levanta el backend contra una base de datos vacía. Mismo catastro de
# ejemplo usado en la Fase 1 del dashboard, adaptado al esquema de la BD.

SEED_PROJECTS = [
    {
        "nombre": "Desaladora Puerto Coloso",
        "empresa": "Minera Escondida (BHP)",
        "ubicacion": "Antofagasta, Región de Antofagasta",
        "fase": "Operativo",
        "estado": "Completado",
        "presupuesto": 3430,
        "descripcion": (
            "Planta de osmosis inversa que abastece de agua desalinizada a la "
            "operación de Minera Escondida mediante dos ductos de 180 km hasta "
            "la mina, a 3.100 m s. n. m. Es una de las plantas desaladoras para "
            "uso minero más grandes de Latinoamérica. Capacidad de diseño: "
            "3.800 l/s. Puesta en marcha: 2017."
        ),
    },
    {
        "nombre": "Planta Desaladora Distrito Norte",
        "empresa": "Codelco",
        "ubicacion": "Tocopilla, Región de Antofagasta",
        "fase": "Construcción",
        "estado": "En progreso",
        "presupuesto": 1000,
        "descripcion": (
            "Proyecto de planta desaladora y sistema de impulsión de 160 km "
            "para abastecer las divisiones Chuquicamata, Radomiro Tomic y "
            "Ministro Hales, reduciendo la extracción de agua continental en "
            "el Distrito Norte de Codelco. Capacidad de diseño: 840 l/s. "
            "Puesta en marcha estimada: 2026."
        ),
    },
    {
        "nombre": "Desaladora INCO Los Pelambres",
        "empresa": "Antofagasta Minerals",
        "ubicacion": "Los Vilos, Región de Coquimbo",
        "fase": "Operativo",
        "estado": "Completado",
        "presupuesto": 2200,
        "descripcion": (
            "Parte del proyecto de Infraestructura Complementaria (INCO) de "
            "Minera Los Pelambres. Incorpora agua de mar desalinizada al "
            "proceso para reducir la dependencia de agua fresca del valle del "
            "Choapa en un contexto de megasequía. Capacidad de diseño: 400 l/s. "
            "Puesta en marcha: 2023."
        ),
    },
    {
        "nombre": "Desaladora Santo Domingo",
        "empresa": "Capstone Copper",
        "ubicacion": "Caldera, Región de Atacama",
        "fase": "Desarrollo",
        "estado": "En progreso",
        "presupuesto": 600,
        "descripcion": (
            "Planta desaladora asociada al proyecto minero Santo Domingo "
            "(cobre-hierro-cobalto). En etapa de ingeniería de detalle y "
            "tramitación de permisos sectoriales para el sistema de captación "
            "y conducción. Capacidad de diseño: 450 l/s. Puesta en marcha "
            "estimada: 2028."
        ),
    },
    {
        "nombre": "Desaladora Collahuasi",
        "empresa": "Compañía Minera Doña Inés de Collahuasi",
        "ubicacion": "Puerto Patache, Región de Tarapacá",
        "fase": "Construcción",
        "estado": "En progreso",
        "presupuesto": 3100,
        "descripcion": (
            "Planta desaladora y sistema de impulsión de agua de mar hacia la "
            "faena a más de 4.400 m s. n. m., que permitirá reemplazar "
            "gradualmente la extracción de agua del acuífero del Salar de "
            "Coposa. Capacidad de diseño: 1.050 l/s. Puesta en marcha "
            "estimada: 2026."
        ),
    },
    {
        "nombre": "Desaladora NuevaUnión",
        "empresa": "Teck / Newmont",
        "ubicacion": "Huasco, Región de Atacama",
        "fase": "Exploración",
        "estado": "Pausado",
        "presupuesto": 480,
        "descripcion": (
            "Estudio de alternativas de suministro hídrico para el proyecto "
            "NuevaUnión (Relincho–El Morro). El desarrollo se encuentra "
            "pausado a la espera de la actualización del estudio de "
            "factibilidad del proyecto minero. Capacidad de diseño: 740 l/s."
        ),
    },
    {
        "nombre": "Desaladora Marimaca",
        "empresa": "Marimaca Copper",
        "ubicacion": "Mejillones, Región de Antofagasta",
        "fase": "Exploración",
        "estado": "En progreso",
        "presupuesto": 150,
        "descripcion": (
            "Evaluación de suministro de agua de mar desalinizada para el "
            "proyecto de óxidos de cobre Marimaca. En etapa de "
            "prefactibilidad, con levantamiento de línea de base ambiental "
            "del área de captación. Capacidad de diseño: 120 l/s. Puesta en "
            "marcha estimada: 2029."
        ),
    },
]

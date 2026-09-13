import { Chapter } from '../types';

export const part2Chapter: Chapter = {
  id: 'parte-2',
  slug: 'parte-2',
  part: 'Parte II',
  partNumber: '2',
  number: '2',
  title: '¿Cuál es la situación del uso de la IA en la Educación Básica en el Mundo?',
  subtitle: 'Análisis global, casos de estudio y taxonomía de sistemas tecnopedagógicos',
  author: 'Hilmer Castillo Bescanza',
  readingTimeMinutes: 20,
  subSections: [
    {
        "id": "p2-casos",
        "title": "2.1. Casos de estudio integrales agrupados por regiones",
        "level": 2
    },
    {
        "id": "p2-tablas",
        "title": "Matrices comparativas internacionales (Tablas 2.1, 2.2 y 2.3)",
        "level": 3
    },
    {
        "id": "p2-cognitivo",
        "title": "2.2. Aprendizaje Cognitivo y Fundamentos Tecnopedagógicos",
        "level": 2
    },
    {
        "id": "p2-vida",
        "title": "2.3. Aprendizaje para la Vida",
        "level": 2
    },
    {
        "id": "p2-conclusiones",
        "title": "2.4. Conclusiones",
        "level": 2
    }
],
  blocks: [
    {
      id: 'p2-b-0',
      type: 'paragraph',
      text: `Frente a la crisis estructural del sistema educativo venezolano, la reconstrucción mediante vías tradicionales requeriría varias décadas para formar a más de 250.000 nuevos educadores y reequipar miles de planteles destruidos [2.1], [2.2]. La convergencia de la Inteligencia Artificial (IA), los sistemas adaptativos y las metodologías pedagógicas centradas en el dominio cognitivo permiten dar un salto cualitativo para acelerar la recuperación del capital humano [2.1], [2.3], [2.4].`,
      footnoteIds: ["fn-2-1", "fn-2-2", "fn-2-1", "fn-2-3", "fn-2-4"],
    },
    {
      id: 'p2-b-1',
      type: 'paragraph',
      text: `El fundamento científico de esta transición radica en el «Problema de los 2 Sigma» formulado por Benjamin Bloom en 1984: un estudiante promedio instruido mediante tutoría individualizada (1-a-1 / 1-to-1) y aprendizaje para el dominio (Mastery Learning) alcanza un rendimiento dos desviaciones estándar por encima (+2 Sigma) de la media obtenida en un aula tradicional magistral, escalando del percentil 50 al percentil 98 [2.3]. La IA permite viabilizar a escala pública este principio socrático, personalizando la instrucción cognitiva fundamental, adaptando la dificultad en tiempo real, detectando lagunas y reduciendo el tiempo de adquisición conceptual para liberar la jornada escolar hacia actividades formativas aplicadas, técnicas e integrales [2.3], [2.5], [2.6], [2.4].`,
      footnoteIds: ["fn-2-3", "fn-2-3", "fn-2-5", "fn-2-6", "fn-2-4"],
    },
    {
      id: 'p2-b-2',
      type: 'paragraph',
      text: `A continuación se presenta un análisis exhaustivo de 25 casos internacionales de aplicación de la IA en educación primaria y secundaria (K-12, Kindergarten to 12th grade / Educación Infantil a 12.° grado), organizados por bloques regionales: Estados Unidos, China, Asia, Europa y Latinoamérica y Entornos Globales. Cada experiencia se examina a través de diez dimensiones analíticas: dinámica escolar diaria, rol de los profesores, entrenamiento docente, herramientas de IA empleadas, número de estudiantes por clase, niveles educativos cubiertos, materias curriculares, costo promedio por estudiante, tiempo de funcionamiento y cobertura geográfica.`,
    },
    {
      id: 'p2-h2-3',
      type: 'heading2',
      text: `2.1. Casos de estudio integrales agrupados por regiones`,
    },
    {
      id: 'p2-b-4',
      type: 'paragraph',
      text: `Se han analizado 25 casos de uso de la IA alrededor del mundo. Todos ellos se encuentran detallados en el Apéndice 1. Sin embargo, hemos tomado los 5 más relevantes para detallarlos a continuación. El objetivo es ilustrar el detalle que se encuentra en el Apéndice 1.`,
    },
    {
      id: 'p2-b-5',
      type: 'paragraph',
      text: `2.1.1. Alpha Schools`,
    },
    {
      id: 'p2-b-6',
      type: 'paragraph',
      text: `**• Dinámica escolar diaria:** En la red de campus Alpha School (Austin, Texas), la jornada escolar opera bajo el modelo 2-Hour Learning [2.5], [2.6]. Entre las 08:30 y las 11:30 horas, los estudiantes participan en bloques concentrados de trabajo académico adaptativo asistido por software, dedicando entre dos y tres horas efectivas al dominio de matemáticas, ciencias, lectura y redacción mediante la técnica Pomodoro (bloques de 25-30 minutos) y metas diarias denominadas «mínimos» [2.6], [2.7], [2.8]. La tarde (12:30 a 15:30) se encuentra completamente libre de pantallas y se destina a talleres vivenciales de oratoria, finanzas, liderazgo y preparación física [2.6], [2.8].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-5", "fn-2-6", "fn-2-6", "fn-2-7", "fn-2-8", "fn-2-6", "fn-2-8"],
    },
    {
      id: 'p2-b-7',
      type: 'paragraph',
      text: `**• Rol de los profesores:** Los docentes tradicionales son sustituidos por Guides (guías o coaches motivacionales) [2.6], [2.8]. No dictan clases magistrales frontales; su función se concentra en supervisar la autorregulación, desbloquear estados de frustración, gestionar sistemas de economía de fichas y puntos de experiencia (XP, Experience Points), y facilitar los talleres vespertinos [2.6], [2.8].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-6", "fn-2-8", "fn-2-6", "fn-2-8"],
    },
    {
      id: 'p2-b-8',
      type: 'paragraph',
      text: `**• Entrenamiento docente:** Proceso de selección altamente riguroso (tasa de aceptación cercana al 0,1%, requiriendo ubicarse en el percentil 85+ en pruebas cognitivas CCAT - Cognitive Capabilities Assessment Test) [2.6]. Se estructura en tres fases: instrucción asíncrona sobre el marco conceptual (Check Chart), un Bootcamp presencial intensivo de cinco días sobre los pilares de motivación y la Hands-On Week con práctica real en aula [2.6].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-6", "fn-2-6"],
    },
    {
      id: 'p2-b-9',
      type: 'paragraph',
      text: `**• Rol de las herramientas de IA:** El motor generativo central es Incept, integrado en la plataforma TimeBack [2.5], [2.7], [2.9]. Construye y actualiza dinámicamente dos modelos por alumno: un Knowledge Graph (grafo de conocimientos dominados y lagunas) y un Interest Graph (grafo de aficiones, deportes y preferencias), generando explicaciones y problemas hiper-contextualizados en tiempo real [2.5], [2.7], [2.8]. Incorpora el Waste Meter, un módulo de visión computarizada que monitorea niveles de atención y adivinanza a través de la cámara del dispositivo [2.7], [2.9].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-5", "fn-2-7", "fn-2-9", "fn-2-5", "fn-2-7", "fn-2-8", "fn-2-7", "fn-2-9"],
    },
    {
      id: 'p2-b-10',
      type: 'paragraph',
      text: `**• Estudiantes por clase:** Ratios reducidas de 1 guía por cada 8 a 12 estudiantes en salones abiertos tipo co-working [2.6].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-6"],
    },
    {
      id: 'p2-b-11',
      type: 'paragraph',
      text: `**• Niveles cubiertos:** Cubre toda la trayectoria K-12, desde Kindergarten hasta el grado 12 (edades de 5 a 18 años) [2.5], [2.6].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-5", "fn-2-6"],
    },
    {
      id: 'p2-b-12',
      type: 'paragraph',
      text: `**• Materias curriculares:** Matemáticas, Lectoescritura/Lenguaje, Ciencias Naturales, Estudios Sociales e Idiomas [2.5], [2.6].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-5", "fn-2-6"],
    },
    {
      id: 'p2-b-13',
      type: 'paragraph',
      text: `**• Costo promedio:** En el sector privado estadounidense la matrícula oscila entre $10.000 y $40.000 anuales; no obstante, el costo por licenciamiento de software adaptativo en modelos tipo charter se estima entre $2.000 y $5.500 por alumno/año [2.6], [2.7].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-6", "fn-2-7"],
    },
    {
      id: 'p2-b-14',
      type: 'paragraph',
      text: `**• Tiempo en funcionamiento:** Opera de forma continua desde 2014 [2.6], [2.10].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-6", "fn-2-10"],
    },
    {
      id: 'p2-b-15',
      type: 'paragraph',
      text: `**• Cobertura geográfica:** Red de campus físicos en rápida expansión en Estados Unidos (Austin, Miami, Brownsville, Fort Worth, Scottsdale, Nueva York, The Woodlands, entre otros) [2.10].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-10"],
    },
    {
      id: 'p2-b-16',
      type: 'paragraph',
      text: `2.1.2. Khanmigo / Khan Academy`,
    },
    {
      id: 'p2-b-17',
      type: 'paragraph',
      text: `**• Dinámica escolar diaria:** Khanmigo opera bajo un modelo híbrido (blended learning) donde los estudiantes alternan sesiones de 30 a 60 minutos diarios de práctica adaptativa individual en la plataforma con discusiones y actividades colaborativas en el aula regular [2.11], [2.12].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-11", "fn-2-12"],
    },
    {
      id: 'p2-b-18',
      type: 'paragraph',
      text: `**• Rol de los profesores:** El docente actúa como facilitador del aprendizaje, utilizando tableros analíticos en tiempo real (Teacher Dashboard) para monitorear brechas de dominio (mastery gaps), tiempo en tarea y asignar intervenciones diferenciadas [2.11], [2.12].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-11", "fn-2-12"],
    },
    {
      id: 'p2-b-19',
      type: 'paragraph',
      text: `**• Entrenamiento docente:** Capacitación estructurada a través del programa en línea certificado Khan for Educators: Foundations, seminarios web periódicos y guías prácticas de diseño de prompts pedagógicos [2.12].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-12"],
    },
    {
      id: 'p2-b-20',
      type: 'paragraph',
      text: `**• Rol de las herramientas de IA:** Khanmigo funciona como un tutor socrático conversacional basado en grandes modelos de lenguaje (LLM, Large Language Models) con restricciones algorítmicas estrictas que le impiden entregar respuestas terminales, guiando al estudiante mediante preguntas reflexivas, descomposición progresiva de problemas y pistas escalonadas [2.11], [2.13].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-11", "fn-2-13"],
    },
    {
      id: 'p2-b-21',
      type: 'paragraph',
      text: `**• Estudiantes por clase:** Se integra en aulas regulares públicas y privadas de 20 a 35 estudiantes por docente [2.11], [2.12].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-11", "fn-2-12"],
    },
    {
      id: 'p2-b-22',
      type: 'paragraph',
      text: `**• Niveles cubiertos:** Cubre desde 3.° de primaria hasta los primeros años de educación universitaria (K-12+) [2.11], [2.12].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-11", "fn-2-12"],
    },
    {
      id: 'p2-b-23',
      type: 'paragraph',
      text: `**• Materias curriculares:** Matemáticas (aritmética elemental a cálculo), Ciencias (Física, Química, Biología), Historia, Economía, Computación y Gramática/Lectura [2.11], [2.12].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-11", "fn-2-12"],
    },
    {
      id: 'p2-b-24',
      type: 'paragraph',
      text: `**• Costo promedio:** La plataforma base de Khan Academy es gratuita; el acceso institucional a Khanmigo para distritos escolares públicos oscila entre $4 y $20 por estudiante al año [2.11], [2.13].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-11", "fn-2-13"],
    },
    {
      id: 'p2-b-25',
      type: 'paragraph',
      text: `**• Tiempo en funcionamiento:** Khan Academy opera desde 2008 y Khanmigo inició sus pilotos y despliegue masivo en 2023 [2.11], [2.12].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-11", "fn-2-12"],
    },
    {
      id: 'p2-b-26',
      type: 'paragraph',
      text: `**• Cobertura geográfica:** Presencia global en más de 180 países con soporte multilingüe [2.12], [2.13].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-12", "fn-2-13"],
    },
    {
      id: 'p2-b-27',
      type: 'paragraph',
      text: `2.1.3. Ad Astra / Astra Nova / Synthesis`,
    },
    {
      id: 'p2-b-28',
      type: 'paragraph',
      text: `**• Dinámica escolar diaria:** La dinámica combina seminarios sincrónicos de alta intensidad (60 minutos) con trabajo autónomo, donde los estudiantes resuelven simulaciones complejas de teoría de juegos y debaten dilemas estratégicos abiertos conocidos como Conundrums [2.14], [2.15].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-14", "fn-2-15"],
    },
    {
      id: 'p2-b-29',
      type: 'paragraph',
      text: `**• Rol de los profesores:** Los profesores actúan como moderadores socráticos no directivos, encargados de cuestionar supuestos, guiar sesiones de debrief analítico y evaluar la consistencia argumentativa sin imponer soluciones preestablecidas [2.14], [2.15].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-14", "fn-2-15"],
    },
    {
      id: 'p2-b-30',
      type: 'paragraph',
      text: `**• Entrenamiento docente:** El entrenamiento se focaliza en pensamiento crítico, teoría de juegos, facilitación dialéctica y gestión de dinámicas colaborativas en entornos de incertidumbre [2.14], [2.15].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-14", "fn-2-15"],
    },
    {
      id: 'p2-b-31',
      type: 'paragraph',
      text: `**• Rol de las herramientas de IA:** Synthesis Tutor ofrece tutoría matemática adaptativa con interfaces visuales dinámicas y diálogo inteligente, mientras que Synthesis Teams gestiona entornos de simulación multijugador con reglas cambiantes e información incompleta [2.15], [2.16].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-15", "fn-2-16"],
    },
    {
      id: 'p2-b-32',
      type: 'paragraph',
      text: `**• Estudiantes por clase:** Se organiza en grupos sincrónicos reducidos de 6 a 16 estudiantes por moderador [2.14], [2.15].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-14", "fn-2-15"],
    },
    {
      id: 'p2-b-33',
      type: 'paragraph',
      text: `**• Niveles cubiertos:** Synthesis Tutor atiende a niños de 5 a 11 años, mientras que Astra Nova y Synthesis Teams abarcan estudiantes de 8 a 18 años [2.14], [2.15], [2.16].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-14", "fn-2-15", "fn-2-16"],
    },
    {
      id: 'p2-b-34',
      type: 'paragraph',
      text: `**• Materias curriculares:** Razonamiento lógico-matemático, pensamiento sistémico, toma de decisiones éticas, economía, geopolítica y negociación [2.14], [2.15].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-14", "fn-2-15"],
    },
    {
      id: 'p2-b-35',
      type: 'paragraph',
      text: `**• Costo promedio:** En modalidad de suscripción digital familiar, el costo oscila entre $100 y $180 mensuales por alumno [2.15], [2.16].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-15", "fn-2-16"],
    },
    {
      id: 'p2-b-36',
      type: 'paragraph',
      text: `**• Tiempo en funcionamiento:** Ad Astra funcionó entre 2014 y 2020 en SpaceX, mientras que Astra Nova y Synthesis operan como plataformas globales descentralizadas desde 2020 [2.14], [2.15].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-14", "fn-2-15"],
    },
    {
      id: 'p2-b-37',
      type: 'paragraph',
      text: `**• Cobertura geográfica:** Plataforma global descentralizada en línea [2.14], [2.15].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-14", "fn-2-15"],
    },
    {
      id: 'p2-b-38',
      type: 'paragraph',
      text: `2.1.4. Acton Academy`,
    },
    {
      id: 'p2-b-39',
      type: 'paragraph',
      text: `**• Dinámica escolar diaria:** La rutina se estructura bajo el marco del «Viaje del Héroe» (Hero's Journey) [2.17]. Inicia a las 08:30 con un Morning Socratic Launch de 15 minutos para debatir un dilema moral [2.17]. Las mañanas (90 a 120 min) se dedican a habilidades fundamentales (Core Skills) en plataformas adaptativas, y las tardes a misiones vivenciales (Quests) de 4 a 6 semanas [2.17].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-17", "fn-2-17", "fn-2-17"],
    },
    {
      id: 'p2-b-40',
      type: 'paragraph',
      text: `**• Rol de los profesores:** Los profesores actúan como guías socráticos bajo la regla institucional «Rescatar es robar» (Rescuing is robbery), evitando responder preguntas directamente para forzar al alumno a resolver problemas de forma autónoma o colaborativa [2.17].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-17"],
    },
    {
      id: 'p2-b-41',
      type: 'paragraph',
      text: `**• Entrenamiento docente:** Los guías reciben entrenamiento en mayéutica socrática, gobernanza escolar comunitaria y evaluación formativa mediante insignias (badges) [2.17].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-17"],
    },
    {
      id: 'p2-b-42',
      type: 'paragraph',
      text: `**• Rol de las herramientas de IA:** El ecosistema técnico utiliza un conjunto descentralizado de aplicaciones adaptativas externas (Khan Academy, Lexia, IXL) articulada mediante el portal de seguimiento Journey Tracker [2.17].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-17"],
    },
    {
      id: 'p2-b-43',
      type: 'paragraph',
      text: `**• Estudiantes por clase:** Las actividades se desarrollan en aulas multiedad de 25 a 40 aprendices con 1 o 2 guías [2.17].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-17"],
    },
    {
      id: 'p2-b-44',
      type: 'paragraph',
      text: `**• Niveles cubiertos:** Cubre desde los 4 hasta los 18 años (niveles Spark, Discovery, Middle School y Launchpad) [2.17].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-17"],
    },
    {
      id: 'p2-b-45',
      type: 'paragraph',
      text: `**• Materias curriculares:** Lectoescritura, Matemáticas, Historia, Ciencias Experimentales, Oratoria y Emprendimiento [2.17].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-17"],
    },
    {
      id: 'p2-b-46',
      type: 'paragraph',
      text: `**• Costo promedio:** El costo anual varía entre $4.000 y $12.000 por alumno en microescuelas independientes [2.17].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-17"],
    },
    {
      id: 'p2-b-47',
      type: 'paragraph',
      text: `**• Tiempo en funcionamiento:** Funciona desde 2009 [2.17].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-17"],
    },
    {
      id: 'p2-b-48',
      type: 'paragraph',
      text: `**• Cobertura geográfica:** Agrupa a más de 300 microescuelas independientes en Estados Unidos, Europa y América Latina [2.17].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-17"],
    },
    {
      id: 'p2-b-49',
      type: 'paragraph',
      text: `2.1.5. Squirrel AI (Artificial Intelligence)`,
    },
    {
      id: 'p2-b-50',
      type: 'paragraph',
      text: `**• Dinámica escolar diaria:** En los centros de Squirrel AI, la jornada diaria comprende sesiones de 30 a 90 minutos de instrucción adaptativa intensiva en terminales inteligentes, que diagnostican conocimientos, asignan rutas pedagógicas individualizadas y proporcionan retroalimentación inmediata [2.18], [2.19].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-18", "fn-2-19"],
    },
    {
      id: 'p2-b-51',
      type: 'paragraph',
      text: `**• Rol de los profesores:** Los profesores ejercen como tutores presenciales de soporte que intervienen puntualmente cuando el sistema detecta bloqueos conceptuales persistentes, supervisando además la motivación del aula [2.18], [2.19].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-18", "fn-2-19"],
    },
    {
      id: 'p2-b-52',
      type: 'paragraph',
      text: `**• Entrenamiento docente:** La capacitación docente abarca la interpretación de grafos de conocimiento, psicometría adaptativa e intervención psicopedagógica dirigida [2.18], [2.19].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-18", "fn-2-19"],
    },
    {
      id: 'p2-b-53',
      type: 'paragraph',
      text: `**• Rol de las herramientas de IA:** El sistema ejerce una conducción algorítmica total del aprendizaje, descomponiendo el currículo en decenas de miles de «nanoconceptos» interconectados en Grafos Dirigidos Acíclicos, empleando Rastreo Bayesiano del Conocimiento (BKT, Bayesian Knowledge Tracing) y Teoría de Respuesta al Ítem (IRT, Item Response Theory) para identificar la causa raíz de las fallas del alumno [2.18], [2.19].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-18", "fn-2-19"],
    },
    {
      id: 'p2-b-54',
      type: 'paragraph',
      text: `**• Estudiantes por clase:** Se implementa en laboratorios de cómputo con 15 a 30 terminales por sala, un estudiante por terminal y 1 o 2 tutores de soporte [2.18], [2.19].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-18", "fn-2-19"],
    },
    {
      id: 'p2-b-55',
      type: 'paragraph',
      text: `**• Niveles cubiertos:** Cubre educación primaria y secundaria (K-12, con especial énfasis en educación media y preparatoria) [2.18], [2.19].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-18", "fn-2-19"],
    },
    {
      id: 'p2-b-56',
      type: 'paragraph',
      text: `**• Materias curriculares:** Matemáticas, Física, Química, Biología, Chino e Inglés [2.18], [2.19].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-18", "fn-2-19"],
    },
    {
      id: 'p2-b-57',
      type: 'paragraph',
      text: `**• Costo promedio:** El costo oscila entre $500 y $1.500 anuales por materia en centros privados de tutoría en China, reduciéndose a costos marginales en acuerdos públicos escolares [2.18], [2.19].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-18", "fn-2-19"],
    },
    {
      id: 'p2-b-58',
      type: 'paragraph',
      text: `**• Tiempo en funcionamiento:** Opera de forma ininterrumpida desde 2014 [2.18], [2.19].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-18", "fn-2-19"],
    },
    {
      id: 'p2-b-59',
      type: 'paragraph',
      text: `**• Cobertura geográfica:** Suma más de 3.000 centros y escuelas asociados en más de 200 ciudades de China [2.18], [2.19].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-18", "fn-2-19"],
    },
    {
      id: 'p2-h2-60',
      type: 'heading2',
      text: `2.1.8. India - Digital Infrastructure for Knowledge Sharing (DIKSHA) 2.0 + Personalised Adaptive Learning (PAL)`,
    },
    {
      id: 'p2-b-61',
      type: 'paragraph',
      text: `**•** **Descripción de la dinámica escolar diaria:** Integrado en la Política Nacional de Educación (NEP, National Education Policy 2020), el ecosistema público DIKSHA 2.0 incorpora módulos de Personalised Adaptive Learning (PAL, Aprendizaje Adaptativo Personalizado) [2.25]. Los alumnos acceden a sesiones adaptativas donde la plataforma evalúa sus competencias mediante pruebas diagnósticas dinámicas y despliega contenidos multimedia explicativos, complementado por el tutor conversacional «Ask DIKSHA» [2.25].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-25", "fn-2-25"],
    },
    {
      id: 'p2-b-62',
      type: 'paragraph',
      text: `**•** **Rol de los profesores:** Los profesores ejercen como facilitadores apoyados por analíticas de datos centralizadas que permiten identificar estudiantes en riesgo pedagógico [2.25].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-25"],
    },
    {
      id: 'p2-b-63',
      type: 'paragraph',
      text: `**•** **Entrenamiento de los profesores:** La formación docente se despliega masivamente a través del programa nacional NISHTHA (National Initiative for School Heads' and Teachers' Holistic Advancement), capacitando a millones de docentes en el uso de herramientas PAL [2.25].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-25"],
    },
    {
      id: 'p2-b-64',
      type: 'paragraph',
      text: `**•** **Rol de las herramientas de la Inteligencia Artificial:** La plataforma emplea algoritmos PAL para diagnóstico, motores conversacionales multilingües y generadores de reactivos. A partir del ciclo 2026-2027, el currículo incorpora oficialmente la asignatura de IA y Pensamiento Computacional desde el grado 3.° [2.25].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-25"],
    },
    {
      id: 'p2-b-65',
      type: 'paragraph',
      text: `**•** **Número de estudiantes por clase:** Opera en aulas públicas regulares con ratios de 30 a 50 estudiantes [2.25].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-25"],
    },
    {
      id: 'p2-b-66',
      type: 'paragraph',
      text: `**•** **Niveles cubiertos:** Cubre primaria y secundaria completo [2.25].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-25"],
    },
    {
      id: 'p2-b-67',
      type: 'paragraph',
      text: `**•** **Materias curriculares que cubre:** Matemáticas, Ciencias Naturales, Lenguas Oficiales y Alfabetización Digital/IA [2.25].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-25"],
    },
    {
      id: 'p2-b-68',
      type: 'paragraph',
      text: `**•** **Costo promedio por estudiantes:** Se ofrece de manera 100% gratuita como un bien público digital financiado por el Ministerio de Educación y Meity (Ministry of Electronics and Information Technology) [2.25].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-25"],
    },
    {
      id: 'p2-b-69',
      type: 'paragraph',
      text: `**•** **Tiempo que ha durado el caso de estudio en funcionamiento:** DIKSHA desde 2017; DIKSHA 2.0 con PAL desplegado activamente entre 2024 y 2026 [2.25].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-25"],
    },
    {
      id: 'p2-b-70',
      type: 'paragraph',
      text: `**•** **Cobertura Geográfica:** Cobertura nacional pública [2.25].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-25"],
    },
    {
      id: 'p2-b-71',
      type: 'paragraph',
      text: `**TABLA 2.1. Comparación pedagógica de los casos de estudio**`,
    },
    {
      id: 'p2-tabla-1',
      type: 'table',
      tableData: {
        "caption": "TABLA 2.1. Comparación pedagógica de los casos de estudio",
        "headers": [
                "**Caso de Estudio**",
                "**Nivel escolar**",
                "**Materias cubiertas**",
                "**Rol del docente**",
                "**Herramienta Socrática**"
        ],
        "rows": [
                [
                        "**Alpha Schools [2.5], [2.6], [2.7], [2.10]**",
                        "Ambos",
                        "Matemáticas; Ciencias; Lenguaje/Lectoescritura; Estudios Sociales; Idiomas",
                        "Guía integral",
                        "Sí"
                ],
                [
                        "**Khanmigo / Khan Academy [2.11]-[2.13]**",
                        "Ambos",
                        "Matemáticas; Ciencias; Historia; Economía; Computación; Gramática/Lectura",
                        "Soporte al Tutor Socrático",
                        "Sí"
                ],
                [
                        "**Ad Astra / Astra Nova / Synthesis [2.14]-[2.16]**",
                        "Ambos",
                        "Razonamiento matemático; pensamiento sistémico; ética; economía; geopolítica; negociación",
                        "Guía integral",
                        "No"
                ],
                [
                        "**Acton Academy [2.17]**",
                        "Ambos",
                        "Lectoescritura; Matemáticas; Historia; Ciencias; Oratoria; Emprendimiento",
                        "Guía integral",
                        "No"
                ],
                [
                        "**Squirrel AI [2.18], [2.19]**",
                        "Ambos",
                        "Matemáticas; Física; Química; Biología; Chino; Inglés",
                        "Soporte al Tutor Socrático",
                        "Sí"
                ],
                [
                        "**Corea del Sur - AIDT [2.20]-[2.22]**",
                        "Ambos",
                        "Matemáticas; Inglés; Informática",
                        "Tradicional apoyado con AI",
                        "No"
                ],
                [
                        "**Japón - GIGA + GenAI [2.23], [2.24]**",
                        "Ambos",
                        "Matemáticas; Ciencias; Japonés; Inglés; Pensamiento Computacional",
                        "Tradicional apoyado con AI",
                        "No"
                ],
                [
                        "**India - DIKSHA 2.0 / PAL [2.25]**",
                        "Ambos",
                        "Matemáticas; Ciencias Naturales; Lenguas; Alfabetización Digital/AI",
                        "Tradicional apoyado con AI",
                        "No"
                ],
                [
                        "**Reino Unido - Aila / Oak [2.26]-[2.28]**",
                        "Ambos",
                        "Currículo nacional completo",
                        "Tradicional apoyado con AI",
                        "No"
                ],
                [
                        "**Francia - P2IA + Pix IA [2.29], [2.30]**",
                        "Ambos",
                        "Matemáticas; Francés; Lenguas Extranjeras; Competencias Digitales/AI",
                        "Tradicional apoyado con AI",
                        "No"
                ],
                [
                        "**España - #DigEdu / INTEF [2.31]-[2.34]**",
                        "Ambos",
                        "Transversal; énfasis STEAM y Pensamiento Computacional",
                        "Tradicional apoyado con AI",
                        "No"
                ],
                [
                        "**Italia - Linee Guida + asistentes [2.35], [2.36]**",
                        "Ambos",
                        "Matemáticas; Ciencias; Italiano; Inglés; Educación Cívica Digital",
                        "Tradicional apoyado con AI",
                        "No"
                ],
                [
                        "**Alemania - Telli / AIS.chat [2.37], [2.38]**",
                        "Ambos",
                        "Transversal a todas las materias",
                        "Tradicional apoyado con AI",
                        "No"
                ],
                [
                        "**Estonia - AI Leap / TI-Hüpe [2.39]-[2.41]**",
                        "Secundaria",
                        "Áreas científicas y humanísticas; Alfabetización en AI",
                        "Tradicional apoyado con AI",
                        "No"
                ],
                [
                        "**Finlandia - Eduten + Generation AI [2.42], [2.43]**",
                        "Ambos",
                        "Matemáticas; Competencia Digital; Ética de la AI",
                        "Tradicional apoyado con AI",
                        "No"
                ],
                [
                        "**Suecia - Pilotos Gymnasiet [2.44], [2.45]**",
                        "Secundaria",
                        "AI; Programación; Matemáticas; Tecnología",
                        "Tradicional",
                        "No"
                ],
                [
                        "**Dinamarca - asistentes institucionales [2.46]**",
                        "Ambos",
                        "Transversal",
                        "Tradicional apoyado con AI",
                        "No"
                ],
                [
                        "**Noruega - política de uso gradual [2.47]**",
                        "Ambos",
                        "Competencias basales (AI supervisada desde grado 8)",
                        "Tradicional",
                        "No"
                ],
                [
                        "**Ceibal Uruguay [2.48], [2.49]**",
                        "Ambos",
                        "Matemáticas; Lengua; Ciencias; Inglés; Pensamiento Computacional/Robótica",
                        "Tradicional apoyado con AI",
                        "No"
                ],
                [
                        "**Perú - Banco Mundial / uDocz [2.50]-[2.52]**",
                        "Ambos",
                        "Matemáticas; Orientación Vocacional; Transición al Trabajo",
                        "Tradicional apoyado con AI",
                        "No"
                ],
                [
                        "**México - Saberes MX [2.53], [2.54]**",
                        "Secundaria",
                        "AI; Ciberseguridad; Datos; Nube; Programación; Inglés; Matemáticas",
                        "Tradicional apoyado con AI",
                        "No"
                ],
                [
                        "**Colombia CONPES / Experience AI [2.55], [2.56]**",
                        "Secundaria",
                        "Tecnología; Matemáticas; Ciencias; Ética/Ciudadanía Digital",
                        "Tradicional apoyado con AI",
                        "No"
                ],
                [
                        "**Argentina - SAT / GEM [2.57]-[2.60]**",
                        "Secundaria",
                        "Transversal a gestión, retención e intervención pedagógica",
                        "Tradicional apoyado con AI",
                        "No"
                ],
                [
                        "**Brasil - Letrus + Khanmigo [2.61]-[2.63]**",
                        "Secundaria",
                        "Portugués; Redacción; Matemáticas; Ciencias",
                        "Tradicional apoyado con AI",
                        "Sí"
                ],
                [
                        "**School of Humanity [2.64]**",
                        "Secundaria",
                        "Sostenibilidad; AI; Emprendimiento; alfabetizaciones humanas",
                        "Guía integral",
                        "No"
                ]
        ]
},
    },
    {
      id: 'p2-b-73',
      type: 'paragraph',
      text: `**Principales conclusiones derivadas de la TABLA 2.1 (Comparación pedagógica de los casos de estudio):**`,
    },
    {
      id: 'p2-b-74',
      type: 'paragraph',
      text: `• La gran mayoría de los sistemas educativos avanzados e iniciativas internacionales optan por un modelo híbrido en el que el docente tradicional se transforma en un facilitador apoyado por IA [2.5] - [2.64], reservando la sustitución total por guías o coaches para experiencias altamente disruptivas.`,
      hangingIndent: true,
      footnoteIds: ["fn-2-5", "fn-2-64"],
    },
    {
      id: 'p2-b-75',
      type: 'paragraph',
      text: `• La integración de herramientas socráticas directas se concentra fundamentalmente en plataformas de software adaptativo autónomo (como Alpha Schools o Squirrel AI) [2.5], [2.18], mientras que las políticas públicas nacionales prefieren herramientas de apoyo analítico para el profesorado.`,
      hangingIndent: true,
      footnoteIds: ["fn-2-5", "fn-2-18"],
    },
    {
      id: 'p2-b-76',
      type: 'paragraph',
      text: `• Existe un consenso transnacional en cubrir de manera transversal la educación básica, alineando las materias críticas (Matemáticas, Ciencias y Competencias Digitales) con las nuevas exigencias de alfabetización algorítmica [2.5] - [2.64].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-5", "fn-2-64"],
    },
    {
      id: 'p2-b-77',
      type: 'paragraph',
      text: `**TABLA 2.2. Software de AI, tiempo semanal de uso y equipamiento requerido por estudiante**`,
    },
    {
      id: 'p2-tabla-2',
      type: 'table',
      tableData: {
        "caption": "TABLA 2.2. Software de AI, tiempo semanal de uso y equipamiento requerido por estudiante",
        "headers": [
                "**Caso de Estudio**",
                "**Software de AI**",
                "**Tiempo semanal de uso por los estudiantes**",
                "**Equipamiento requerido por estudiante**"
        ],
        "rows": [
                [
                        "**Alpha Schools**",
                        "TimeBack/Incept; Waste Meter",
                        "10-15 h/sem.*",
                        "Chromebook o laptop con cámara; Waste Meter [2.7]"
                ],
                [
                        "**Khanmigo / Khan Academy**",
                        "Khanmigo; Khan Academy",
                        "2,5-5 h/sem.*",
                        "Terminal web individual [2.11]"
                ],
                [
                        "**Ad Astra / Astra Nova / Synthesis**",
                        "Synthesis Tutor; Synthesis Teams",
                        "No publicado (bloques de 60 min)",
                        "PC con GPU dedicada [2.14], [2.15]"
                ],
                [
                        "**Acton Academy**",
                        "Khan Academy; Lexia; IXL; Journey Tracker",
                        "7,5-10 h/sem.*",
                        "Terminal individual con acceso web"
                ],
                [
                        "**Squirrel AI**",
                        "Squirrel AI Learning Engine; BKT/IRT",
                        "2,5-7,5 h/sem.*",
                        "Terminal dedicada [2.18]"
                ],
                [
                        "**Corea del Sur - AIDT**",
                        "AI Digital Textbooks (76 títulos / 12 editoriales)",
                        "No publicado; uso complementario",
                        "Tableta 1:1 [2.20]"
                ],
                [
                        "**Japón - GIGA + GenAI**",
                        "GIGA; asistentes GenAI en entornos cerrados",
                        "No publicado; uso variable",
                        "Dispositivo 1:1 [2.23], [2.24]"
                ],
                [
                        "**India - DIKSHA 2.0 / PAL**",
                        "DIKSHA 2.0; PAL; Ask DIKSHA",
                        "No publicado; integrado al aula",
                        "Dispositivo con acceso a DIKSHA"
                ],
                [
                        "**Reino Unido - Aila / Oak**",
                        "Aila; herramientas de tutoría DfE",
                        "No publicado",
                        "Equipamiento no publicado"
                ],
                [
                        "**Francia - P2IA + Pix IA**",
                        "Expliq; Edumalin; Mathia-C3; Origamia; Cards; yLANG; Pix IA",
                        "No publicado (Pix: 30-45 min por sesión)",
                        "Equipamiento no publicado"
                ],
                [
                        "**España - #DigEdu / INTEF**",
                        "Asistentes de planificación; entornos de AI soberana",
                        "No publicado; uso transversal",
                        "Equipamiento no publicado"
                ],
                [
                        "**Italia - asistentes virtuales**",
                        "Asistentes virtuales AI para STEM y lenguas",
                        "No publicado; uso integrado",
                        "Equipamiento no publicado"
                ],
                [
                        "**Alemania - Telli / AIS.chat**",
                        "Telli/AIS.chat; Fobizz",
                        "No publicado",
                        "Dispositivo con navegador/QR"
                ],
                [
                        "**Estonia - AI Leap / TI-Hüpe**",
                        "AI Leap/TI-Hüpe; herramientas OpenAI",
                        "No publicado; integrado al trabajo lectivo",
                        "Equipamiento no publicado"
                ],
                [
                        "**Finlandia - Eduten + Generation AI**",
                        "Eduten; Generation AI",
                        "No publicado (1 sesión/semana)",
                        "Equipamiento no publicado"
                ],
                [
                        "**Suecia - Gymnasiet**",
                        "Pilotos de asistentes; asignatura Artificiell Intelligens",
                        "No publicado; uso limitado",
                        "Equipamiento no publicado"
                ],
                [
                        "**Dinamarca / Noruega**",
                        "Asistentes generativos / Uso AI restringido por edad",
                        "No publicado para estudiantes",
                        "Equipamiento no publicado"
                ],
                [
                        "**Ceibal Uruguay**",
                        "PAM; Matific; ALEKS; RoboGarden; PowerBuddy; CREA",
                        "0,75-1,5 h/sem.",
                        "Dispositivo 1:1 [2.49]"
                ],
                [
                        "**Perú - Banco Mundial**",
                        "Tutor uDocz sobre Claude; Gallito; Microsoft Copilot",
                        "No publicado (1,5 h por sesión) [2.50], [2.51]",
                        "PC en laboratorio escolar [2.50], [2.51]"
                ],
                [
                        "**México - Saberes MX**",
                        "Saberes MX; plataformas/simuladores tecnológicos",
                        "Programa intensivo de 5 meses",
                        "Laboratorios presenciales + acceso remoto"
                ],
                [
                        "**Colombia - Experience AI**",
                        "Experience AI; Day of AI; Leah",
                        "No publicado (frecuencia semanal)",
                        "Dispositivo escolar para módulos interactivos"
                ],
                [
                        "**Argentina - SAT / GEM**",
                        "SAT/GEM; SATAE",
                        "No aplica: AI institucional de monitoreo",
                        "No requiere equipo individual del estudiante"
                ],
                [
                        "**Brasil - Letrus + Khanmigo**",
                        "Letrus; Khanmigo / Khan Academy",
                        "No publicado (uso semanal)",
                        "Dispositivo web para redacción/tutoría"
                ],
                [
                        "**School of Humanity**",
                        "Herramientas de AI generativa no especificadas",
                        "No publicado",
                        "Modelo de escuela en línea"
                ]
        ]
},
    },
    {
      id: 'p2-b-79',
      type: 'paragraph',
      text: `**Principales conclusiones derivadas de la TABLA 2.2 (Software de IA, tiempo semanal de uso y equipamiento requerido):**`,
    },
    {
      id: 'p2-b-80',
      type: 'paragraph',
      text: `• El tiempo de exposición semanal de los estudiantes a entornos de IA muestra una correlación directa con el grado de disrupción del modelo escolar, oscilando desde breves sesiones complementarias (menos de 2 horas semanales en modelos públicos tradicionales) hasta bloques intensivos superiores a 10 horas en microescuelas [2.6], [2.48].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-6", "fn-2-48"],
    },
    {
      id: 'p2-b-81',
      type: 'paragraph',
      text: `• El equipamiento estándar requerido se ha consolidado en torno a terminales individuales (dispositivos 1:1, laptops o tabletas con conectividad web) [2.7], [2.11], [2.20], evidenciando que la infraestructura de hardware es un prerrequisito ineludible para la escalabilidad pedagógica.`,
      hangingIndent: true,
      footnoteIds: ["fn-2-7", "fn-2-11", "fn-2-20"],
    },
    {
      id: 'p2-b-82',
      type: 'paragraph',
      text: `• Una proporción significativa de iniciativas internacionales basadas en políticas de Estado no desagrega públicamente el tiempo estricto de uso o el costo individualizado del software debido a esquemas de licenciamiento global o plataformas soberanas de código abierto [2.20], [2.37].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-20", "fn-2-37"],
    },
    {
      id: 'p2-b-83',
      type: 'paragraph',
      text: `**TABLA 2.3. Costo de software, costo de equipamiento y presencia global**`,
    },
    {
      id: 'p2-tabla-3',
      type: 'table',
      tableData: {
        "caption": "TABLA 2.3. Costo de software, costo de equipamiento y presencia global",
        "headers": [
                "**Caso de Estudio**",
                "**Costo software AI por estudiante (USD)**",
                "**Costo de equipamiento por estudiante (USD)**",
                "**Presencia global (número de países con experiencias andando)**"
        ],
        "rows": [
                [
                        "**Alpha Schools**",
                        "$2.000-$5.500/año [2.6]",
                        "$250-$350 [2.7]",
                        "1 (EE. UU.)"
                ],
                [
                        "**Khanmigo / Khan Academy**",
                        "$4-$20/año [2.11]",
                        "$180-$250 [2.11]",
                        ">180"
                ],
                [
                        "**Ad Astra / Astra Nova / Synthesis**",
                        "$1.200-$2.160/año** [2.15]",
                        "$300-$450 [2.14]",
                        "No publicado (plataforma global en línea)"
                ],
                [
                        "**Acton Academy**",
                        "No publicado***",
                        "No publicado",
                        "No publicado (>300 sedes en varias regiones)"
                ],
                [
                        "**Squirrel AI**",
                        "$500-$1.500/año [2.18]",
                        "$200-$300 [2.18]",
                        "1 (China)"
                ],
                [
                        "**Corea del Sur - AIDT**",
                        "No publicado; financiación estatal",
                        "No publicado; tableta 1:1",
                        "1"
                ],
                [
                        "**Japón - GIGA + GenAI**",
                        "No publicado; financiación pública",
                        "No publicado; dispositivo 1:1",
                        "1"
                ],
                [
                        "**India - DIKSHA 2.0 / PAL**",
                        "$0 [2.25]",
                        "No publicado",
                        "1"
                ],
                [
                        "**Reino Unido - Aila / Oak**",
                        "$0 [2.26]",
                        "No publicado",
                        "1"
                ],
                [
                        "**Francia - P2IA + Pix IA**",
                        "No publicado; financiación estatal",
                        "No publicado",
                        "1"
                ],
                [
                        "**España - #DigEdu / INTEF**",
                        "Inversión pública >€1.400M [2.31], [2.32]",
                        "No publicado",
                        "1"
                ],
                [
                        "**Italia - asistentes virtuales**",
                        "Inversión pública no desagregada [2.36]",
                        "No publicado",
                        "1"
                ],
                [
                        "**Alemania - Telli / AIS.chat**",
                        "$0 [2.37]",
                        "No publicado",
                        "1"
                ],
                [
                        "**Estonia - AI Leap / TI-Hüpe**",
                        "Presupuesto €6,5M/año [2.39], [2.41]",
                        "No publicado",
                        "1"
                ],
                [
                        "**Finlandia - Eduten + Generation AI**",
                        "Subvencionado / Costos marginales [2.42]",
                        "No publicado",
                        "1"
                ],
                [
                        "**Suecia - Gymnasiet**",
                        "Financiación municipal [2.45]",
                        "No publicado",
                        "1"
                ],
                [
                        "**Dinamarca**",
                        "Financiación municipal [2.46]",
                        "No publicado",
                        "1"
                ],
                [
                        "**Noruega**",
                        "No aplica (política regulatoria) [2.47]",
                        "No aplica/no publicado",
                        "1"
                ],
                [
                        "**Ceibal Uruguay**",
                        "Incluido ($100-$150/año) [2.49]",
                        "Incluido en el mismo paquete",
                        "1"
                ],
                [
                        "**Perú - Banco Mundial**",
                        "$15-$30/año [2.50]",
                        "No publicado",
                        "1"
                ],
                [
                        "**México - Saberes MX**",
                        "$0 [2.53], [2.54]",
                        "No publicado",
                        "1"
                ],
                [
                        "**Colombia - Experience AI**",
                        "$0 [2.55], [2.56]",
                        "No publicado",
                        "1"
                ],
                [
                        "**Argentina - SAT/GEM**",
                        "Financiación pública [2.57]",
                        "No aplica: uso institucional",
                        "1"
                ],
                [
                        "**Brasil - Letrus + Khanmigo**",
                        "No publicado para el caso Brasil",
                        "No publicado",
                        "1 para Brasil; Khanmigo >180"
                ],
                [
                        "**School of Humanity**",
                        "No publicado***",
                        "No publicado",
                        ">30"
                ]
        ]
},
    },
    {
      id: 'p2-b-85',
      type: 'paragraph',
      text: `**Principales conclusiones derivadas de la TABLA 2.3 (Costo de software, costo de equipamiento y presencia global):**`,
    },
    {
      id: 'p2-b-86',
      type: 'paragraph',
      text: `• Existe una brecha financiera sustancial entre los sistemas propietarios de alta gama (cuyos costos superan los $1.000 a $5.500 por alumno al año) y las plataformas de bienes públicos digitales impulsadas por gobiernos o fundaciones ($0 a $30 anuales) [2.6], [2.11], [2.25].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-6", "fn-2-11", "fn-2-25"],
    },
    {
      id: 'p2-b-87',
      type: 'paragraph',
      text: `• La adopción masiva a escala nacional (como los casos de India, Reino Unido o Uruguay) demuestra que la gratuidad y el financiamiento estatal directo son los vehículos más eficientes para garantizar la equidad de acceso en redes públicas [2.11], [2.25], [2.48].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-11", "fn-2-25", "fn-2-48"],
    },
    {
      id: 'p2-b-88',
      type: 'paragraph',
      text: `• La presencia global de plataformas escalables como Khan Academy supera los 180 países [2.11], confirmando que las soluciones basadas en la nube y optimización de código abierto representan opciones viables y de bajo costo marginal para naciones en procesos de reconstrucción educativa como Venezuela.`,
      hangingIndent: true,
      footnoteIds: ["fn-2-11"],
    },
    {
      id: 'p2-h2-89',
      type: 'heading2',
      text: `2.2. Aprendizaje Cognitivo y Fundamentos Tecnopedagógicos`,
    },
    {
      id: 'p2-b-90',
      type: 'paragraph',
      text: `Los sistemas tutores inteligentes y las plataformas adaptativas analizadas fundamentan su arquitectura operacional en principios consolidados de la psicología cognitiva y la psicometría computacional [2.3], [2.18], [2.65], [2.66]. Su efectividad no deriva de la mera automatización de contenidos, sino de la capacidad algorítmica para modelar los procesos mentales de adquisición, retención y transferencia del conocimiento [2.3], [2.4], [2.18].`,
      footnoteIds: ["fn-2-3", "fn-2-18", "fn-2-65", "fn-2-66", "fn-2-3", "fn-2-4", "fn-2-18"],
    },
    {
      id: 'p2-b-91',
      type: 'paragraph',
      text: `2.2.1. Principios Pedagógicos y Psicológicos`,
    },
    {
      id: 'p2-b-92',
      type: 'paragraph',
      text: `El diseño instruccional automatizado se sostiene sobre cinco marcos teóricos fundamentales [2.3], [2.18], [2.65], [2.66]:`,
      footnoteIds: ["fn-2-3", "fn-2-18", "fn-2-65", "fn-2-66"],
    },
    {
      id: 'p2-list-93',
      type: 'list',
      items: [
        "**Aprendizaje para el Dominio (Mastery Learning):** Formulado por Benjamin Bloom, establece que cualquier estudiante puede alcanzar un alto rendimiento si se le otorga el tiempo y las condiciones de andamiaje adecuadas [2.3]. El avance curricular queda subordinado a la verificación empírica de un dominio previo (≥ 90%) de las microcompetencias constituyentes [2.3], [2.6].",
        "**Zona de Desarrollo Próximo (ZDP) y Teoría de Respuesta al Ítem (IRT):** El estudiante aprende mejor cuando trabaja con retos ligeramente superiores a su nivel actual pero asequibles con andamiaje adecuado [2.18], [2.65]. La IRT permite calibrar la dificultad de forma dinámica para evitar el aburrimiento o la frustración [2.18], [2.65].",
        "**Rastreo Bayesiano del Conocimiento (Bayesian Knowledge Tracing - BKT):** Modelo probabilístico que actualiza continuamente el dominio estimado de una habilidad basándose en patrones históricos de aciertos y errores [2.18], [2.19].",
        "**Teoría de la Carga Cognitiva:** Planteada por John Sweller, orienta la simplificación de interfaces para optimizar la memoria de trabajo y prevenir la sobrecarga mental [2.65].",
        "**Teoría de la Autodeterminación:** Propuesta por Edward Deci y Richard Ryan, sostiene que el compromiso académico se sostiene al satisfacer autonomía, competencia y vinculación [2.66]."
],
    },
    {
      id: 'p2-b-94',
      type: 'paragraph',
      text: `2.2.2. Empresa de software que diseñó y mantiene las herramientas de IA`,
    },
    {
      id: 'p2-b-95',
      type: 'paragraph',
      text: `El mercado de IA educativa comprende tres tipos de actores de desarrollo [2.7], [2.11], [2.18], [2.67]:`,
      footnoteIds: ["fn-2-7", "fn-2-11", "fn-2-18", "fn-2-67"],
    },
    {
      id: 'p2-list-96',
      type: 'list',
      items: [
        "**Consorcios Tecnológicos Propietarios:** TimeBack/Incept (red Alpha School/Joe Liemandt) [2.7], [2.9], Squirrel AI Learning Engine (Shanghai Yixue Education) [2.18], [2.19], y Synthesis Tutor/Teams (Synthesis School Inc.) [2.15], [2.16].",
        "**Plataformas de Estado:** Telli/AIS.chat (FWU - Institut für Film und Bild in Wissenschaft und Unterricht y Länder alemanes) [2.37], [2.38], DIKSHA 2.0 (NCERT - National Council of Educational Research and Training / Meity de India) [2.25], P2IA/Pix IA (Ministère de l'Éducation Nationale de Francia) [2.29], [2.30], Saberes MX (ATDT/TecNM en México) [2.53], [2.54].",
        "**Modelos Fundacionales (creados por organizaciones con investigación y desarrollo dedicados a Modelos de IA):** adaptados de OpenAI (ChatGPT Edu; GPT = Generative Pre-trained Transformer) [2.67], Google (Gemini/NotebookLM) [2.68], Microsoft (Copilot/Graph Education) [2.70], Anthropic (Claude for Education) [2.69] y xAI (Grok) [2.71]."
],
    },
    {
      id: 'p2-b-97',
      type: 'paragraph',
      text: `2.2.3. Integración curricular y diseño instruccional`,
    },
    {
      id: 'p2-b-98',
      type: 'paragraph',
      text: `La integración del currículo en las herramientas de IA exige una arquitectura organizada en cinco capas [2.4], [2.18], [2.69], [2.72]:`,
      footnoteIds: ["fn-2-4", "fn-2-18", "fn-2-69", "fn-2-72"],
    },
    {
      id: 'p2-list-99',
      type: 'list',
      items: [
        "**Grafo de Competencias y Prerrequisitos:** Mapeo ontológico completo del programa oficial en una red dirigida de micro-objetivos interconectados [2.18], [2.19].",
        "**Generación Aumentada por Recuperación (RAG):** Acotamiento de la generación del modelo a repositorios pedagógicos oficializados para eliminar alucinaciones [2.4], [2.26].",
        "**Guardrails y Metaprompts Pedagógicos:** Instrucciones que fuerzan al bot (chatGPT, Claude, Gemini, Grok) a utilizar la mayéutica socrática y proscriben la entrega directa de respuestas [2.4], [2.11].",
        "**Separación de Agentes:** Desacoplamiento entre el agente conversacional interactivo y el motor psicométrico determinista de calificación [2.4], [2.18].",
        "**Interoperabilidad Estándar:** Transmisión segura de telemetría de aprendizaje hacia los LMS (Learning Management Systems) institucionales mediante LTI (Learning Tools Interoperability) 1.3, xAPI (Experience API; API = Application Programming Interface) y SCORM (Sharable Content Object Reference Model) [2.73]."
],
    },
    {
      id: 'p2-b-100',
      type: 'paragraph',
      text: `2.2.4. Costo de las herramientas de IA`,
    },
    {
      id: 'p2-list-101',
      type: 'list',
      items: [
        "**Recursos de Acceso Abierto y Estatales:** $0 a $10 alumno/año en esquemas públicos universales (DIKSHA 2.0 en India, Saberes MX en México, Aila en Reino Unido, Telli en Alemania) [2.25], [2.26], [2.37], [2.53].",
        "**Licencias Institucionales de Escala Distrital:** $10 a $30 anuales por estudiante en acuerdos gubernamentales (Khanmigo Districts, uDocz/Anthropic en Perú, Ceibal en Uruguay) [2.11], [2.48], [2.50].",
        "**Sistemas Propietarios Hiperadaptativos:** $500 a $2.500 por usuario/año en redes privadas de alta gama (TimeBack/Incept, Squirrel AI comercial) [2.6], [2.18]."
],
    },
    {
      id: 'p2-b-102',
      type: 'paragraph',
      text: `2.2.5. Características del equipamiento que debe tener cada estudiante`,
    },
    {
      id: 'p2-b-103',
      type: 'paragraph',
      text: `Unidades individuales (Chromebook, laptop o tableta con teclado) equipadas con:`,
    },
    {
      id: 'p2-list-104',
      type: 'list',
      items: [
        "Procesadores x86 o ARM (Advanced RISC Machines; RISC = Reduced Instruction Set Computer),",
        "Mínimo 4 GB de memoria RAM (Random Access Memory, 8 GB recomendado),",
        "Pantalla táctil o HD (High Definition) de 10 a 14 pulgadas,",
        "Cámara web frontal activa",
        "Auriculares ergonómicos con micrófono y cancelación de ruido [2.6], [2.7], [2.9].",
        "Conectividad Wi-Fi 6 de baja latencia con un ancho de banda dedicado de 1,5 a 3 Mbps (megabits por segundo) concurrentes por dispositivo activo [2.9], [2.74]."
],
    },
    {
      id: 'p2-b-105',
      type: 'paragraph',
      text: `2.2.6. Costo promedio del equipamiento de cada estudiante`,
    },
    {
      id: 'p2-b-106',
      type: 'paragraph',
      text: `La inversión inicial en hardware educativo se ubica entre $180 y $300 por terminal, sumado a $20-$30 en periféricos [2.49], [2.50]. Un ciclo de vida útil de 3 a 4 años representa un costo amortizado de $50 a $85 anuales por estudiante [2.49], [2.50].`,
      footnoteIds: ["fn-2-49", "fn-2-50", "fn-2-49", "fn-2-50"],
    },
    {
      id: 'p2-b-107',
      type: 'paragraph',
      text: `2.2.7. Número de estudiantes que simultáneamente pueden estar en un salón de aprendizaje`,
    },
    {
      id: 'p2-list-108',
      type: 'list',
      items: [
        "**Modelos de Alta Intensidad (Alpha Schools):** 1 guía por cada 8 a 12 estudiantes [2.6].",
        "**Microescuelas y Studios Socráticos (Acton Academy):** 1 o 2 guías por cada 20 a 35 aprendices [2.17].",
        "**Aulas Públicas y Laboratorios (Ceibal, Perú, Francia, México, India, Corea):** 1 docente por cada 25 a 35 estudiantes [2.20], [2.25], [2.29], [2.48], [2.50], [2.53]."
],
    },
    {
      id: 'p2-b-109',
      type: 'paragraph',
      text: `2.2.8. Requerimiento de espacio e infraestructura para 10 salones`,
    },
    {
      id: 'p2-b-110',
      type: 'paragraph',
      text: `Una unidad de 10 salones, donde trabajarán entre 250 a 350 estudiantes concurrentes, requiere [2.6], [2.9], [2.74]:`,
      footnoteIds: ["fn-2-6", "fn-2-9", "fn-2-74"],
    },
    {
      id: 'p2-list-111',
      type: 'list',
      items: [
        "Infraestructura Física: Superficie útil de 600 a 800 m² estructurada en espacios abiertos con paneles acústicos modulares y mobiliario ergonómico móvil [2.6], [2.9].",
        "**Carga Electromecánica:** Respaldo eléctrico continuo de 25 a 40 kVA (kilovoltios-amperios) [2.74].",
        "**Conectividad:** Enlace simétrico a internet (100 a 300 Mbps) con puntos de acceso Wi-Fi 6 industriales para más de 400 conexiones concurrentes [2.9], [2.74]."
],
    },
    {
      id: 'p2-h2-112',
      type: 'heading2',
      text: `2.3. Aprendizaje para la Vida`,
    },
    {
      id: 'p2-b-113',
      type: 'paragraph',
      text: `Comprimiendo la instrucción cognitiva, fundamentalmente en las mañanas, mediante el uso de software adaptativo y tutores de IA, se liberan entre 3 y 4 horas diarias de la jornada lectiva [2.6], [2.8], [2.17]. Este tiempo rescatado se destina a un currículo vespertino no asistido por pantallas, enfocado en el desarrollo socioemocional, el liderazgo, la creatividad aplicada, la resiliencia y la preparación física disciplinada [2.6], [2.8].`,
      footnoteIds: ["fn-2-6", "fn-2-8", "fn-2-17", "fn-2-6", "fn-2-8"],
    },
    {
      id: 'p2-b-114',
      type: 'paragraph',
      text: `2.3.1. Alpha Schools`,
    },
    {
      id: 'p2-b-115',
      type: 'paragraph',
      text: `**• Áreas de cubrimiento:** Liderazgo, Comunicación Estratégica, Emprendimiento Real, Socialización y Resiliencia (Grit) [2.6], [2.8].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-6", "fn-2-8"],
    },
    {
      id: 'p2-b-116',
      type: 'paragraph',
      text: `**• Objetivos:** Forjar autoeficacia, capacidad de persuasión pública, mentalidad de crecimiento (growth mindset) y tolerancia al esfuerzo prolongado [2.6], [2.8].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-6", "fn-2-8"],
    },
    {
      id: 'p2-b-117',
      type: 'paragraph',
      text: `**• Ejemplos y proyectos:** Question Club y Alpha News Live (proyectos de primaria con entrevistas y noticieros en vivo) [2.6]; Startup Founder (programa de secundaria para microempresas y ventas reales) [2.6]; Desafíos de Resiliencia Física y Mental (carreras de obstáculos, pruebas físicas estandarizadas, cubo de Rubik y pit stops energéticos) [2.6], [2.8]; Test2Pass (evaluaciones de desempeño en vivo) [2.6].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-6", "fn-2-6", "fn-2-6", "fn-2-8", "fn-2-6"],
    },
    {
      id: 'p2-b-118',
      type: 'paragraph',
      text: `2.3.2. Ad Astra / Astra Nova`,
    },
    {
      id: 'p2-b-119',
      type: 'paragraph',
      text: `**• Áreas de cubrimiento:** Pensamiento de Sistemas, Toma de Decisiones en Incertidumbre, Ética Tecnológica y Geopolítica [2.14], [2.15].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-14", "fn-2-15"],
    },
    {
      id: 'p2-b-120',
      type: 'paragraph',
      text: `**• Objetivos:** Capacitar en el análisis de compensaciones críticas (trade-offs), modelado estratégico y resolución de problemas sin solución predeterminada [2.14], [2.15].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-14", "fn-2-15"],
    },
    {
      id: 'p2-b-121',
      type: 'paragraph',
      text: `**• Ejemplos y proyectos:** Flying-Bike Conundrum (simulación directiva de presupuestos) [2.14]; Lake Conundrum (debate sobre contaminación y desarrollo comunitario) [2.14], [2.15]; Closing Conundrum (ejercicio ético de reasignación y cierre) [2.14].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-14", "fn-2-14", "fn-2-15", "fn-2-14"],
    },
    {
      id: 'p2-b-122',
      type: 'paragraph',
      text: `2.3.3. School of Humanity`,
    },
    {
      id: 'p2-b-123',
      type: 'paragraph',
      text: `**• Áreas de cubrimiento:** Retos Globales de Sostenibilidad, Alfabetizaciones Humanas (Human Flourishing), Metacognición y Bioética [2.64].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-64"],
    },
    {
      id: 'p2-b-124',
      type: 'paragraph',
      text: `**• Objetivos:** Alinear el propósito vocacional con desafíos reales de impacto social y ecológico mediante el aprendizaje interdisciplinario [2.64].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-64"],
    },
    {
      id: 'p2-b-125',
      type: 'paragraph',
      text: `**• Ejemplos y proyectos:** Hackatones Globales (diseño de prototipos para mitigación climática y seguridad alimentaria) [2.64]; Micro-pasantías Virtuales (consultorías breves para organizaciones) [2.64]; Mastery Transcript (acreditación mediante portafolios digitales) [2.64].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-64", "fn-2-64", "fn-2-64"],
    },
    {
      id: 'p2-b-126',
      type: 'paragraph',
      text: `2.3.4. Acton Academy`,
    },
    {
      id: 'p2-b-127',
      type: 'paragraph',
      text: `**• Áreas de cubrimiento:** El «Viaje del Héroe» (Hero's Journey), Emprendimiento Vivencial, Mayéutica Comunitaria y Formación del Carácter [2.17].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-17"],
    },
    {
      id: 'p2-b-128',
      type: 'paragraph',
      text: `**• Objetivos:** Desarrollar el autogobierno moral, la responsabilidad social y la capacidad de iniciar y sostener proyectos productivos propios [2.17].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-17"],
    },
    {
      id: 'p2-b-129',
      type: 'paragraph',
      text: `**• Ejemplos y proyectos:** Children's Business Fair (feria anual de marcas y comercialización) [2.17]; Quests de Ciencias y Sociedad (proyectos prácticos sobre robótica, arquitectura y periodismo) [2.17]; Lanzamientos Socráticos Matutinos (debates de dilemas morales) [2.17].`,
      hangingIndent: true,
      footnoteIds: ["fn-2-17", "fn-2-17", "fn-2-17"],
    },
    {
      id: 'p2-h2-130',
      type: 'heading2',
      text: `2.4. Conclusiones`,
    },
    {
      id: 'p2-orderedList-131',
      type: 'orderedList',
      items: [
        "1. **El Tutor Socrático está en práctica:** Las experiencias de Alpha Schools y Squirrel AI son evidencias de su viabilidad y efectividad. Aunque el camino pueda ser complejo para un país en la situación de Venezuela, su implementación debe ser una prioridad trascendente y perseverantemente construida.",
        "2. **Experiencias incrementales son opciones posibles:** La evolución de Khan Academy en la incorporación de Khanmigo permite una implementación global posible para las circunstancias de Venezuela [2.11].",
        "3. **Los fundamentos pedagógicos y psicológicos son indispensables:** Aprendizaje para el Dominio, Zona de Desarrollo Próximo, Teoría de Respuesta al Ítem, Carga Cognitiva y la Teoría de la Autodeterminación deben estar presentes en cualquier esfuerzo de la incorporación de las nuevas tecnologías [2.3], [2.18], [2.65], [2.66].",
        "4. **La disponibilidad de una plataforma tecnológica es ineludible:** A lo largo de todos los casos considerados, la adecuada plataforma tecnológica es común, dada la inversión involucrada a nivel del estudiante y de la institución.",
        "5. **Existen múltiples alternativas para avanzar en paralelo:** Conviene transitar varios caminos flexibles sin depender de una única solución ideal para formar Ciudadanos Productivos.",
        "6. **Redefinición de los tiempos y contenidos escolares:** Balancear el aprendizaje cognitivo con la destreza para la vida abre una oportunidad dorada para el país de formar ciudadanos emprendedores e insertarse tempranamente en el proceso productivo.",
        "7. **Formación docente y desarrollo de materiales para el aprendizaje es clave:** El rol tradicional del maestro evoluciona hacia el de catalizador del aprendizaje (coach), apoyado también por el potencial de la diáspora en la generación de nuevos materiales."
],
    },
  ],
  footnotes: {
    "[2.1]": {
        "id": "1",
        "code": "[2.1]",
        "title": "Informe sobre Condiciones de Vida y Colapso del Sistema Educativo Venezolano. UCAB",
        "authorOrSource": "Caleido Humano & ENCOVI UCAB",
        "year": "2024",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Caleido Humano & ENCOVI UCAB, 2024).",
        "url": "https://www.proyectoencovi.com/"
    },
    "[2.2]": {
        "id": "2",
        "code": "[2.2]",
        "title": "Déficit Docente y Crisis Estructural Escolar",
        "authorOrSource": "Monitor de Derechos Civiles y Educación",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Monitor de Derechos Civiles y Educación, 2025).",
        "url": "https://elucabista.com/"
    },
    "[2.3]": {
        "id": "3",
        "code": "[2.3]",
        "title": "The 2 Sigma Problem: The Search for Methods of Group Instruction as Effective as One-to-One Tutoring. Educational Researcher, 13(6), 4-16",
        "authorOrSource": "Bloom, B",
        "year": "1984",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Bloom, B, 1984).",
        "url": "https://doi.org/10.3102/0013189X013006004"
    },
    "[2.4]": {
        "id": "4",
        "code": "[2.4]",
        "title": "AI tutoring outperforms in-class active learning: an RCT introducing a novel research-based design in an authentic educational setting. Scientific Reports, 15, 97652",
        "authorOrSource": "Kestin, G",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Kestin, G, 2025).",
        "url": "https://www.nature.com/articles/s41598-025-97652-6"
    },
    "[2.5]": {
        "id": "5",
        "code": "[2.5]",
        "title": "Learning at the Speed of Thought: How AI Tutors Make Every Lesson Personal",
        "authorOrSource": "Alpha School",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Alpha School, 2025).",
        "url": "https://alpha.school/blog/learning-at-the-speed-of-thought-how-ai-tutors-make-every-lesson-personal/"
    },
    "[2.6]": {
        "id": "6",
        "code": "[2.6]",
        "title": "Mastery-Based K-12 Schedule and Adaptive Learning Framework",
        "authorOrSource": "2 Hour Learning",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (2 Hour Learning, 2025).",
        "url": "https://2hourlearning.com/"
    },
    "[2.7]": {
        "id": "7",
        "code": "[2.7]",
        "title": "Incept and TimeBack: AI-Driven Mastery Architecture",
        "authorOrSource": "Liemandt, J",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Liemandt, J, 2025).",
        "url": "https://colossus.com/topic/issue-04/"
    },
    "[2.8]": {
        "id": "8",
        "code": "[2.8]",
        "title": "Motivation Is 90% of Learning: The Science Behind Kids Who Love School",
        "authorOrSource": "Alpha School",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Alpha School, 2025).",
        "url": "https://alpha.school/blog/motivation-is-90-of-learning-the-science-behind-kids-who-love-school/"
    },
    "[2.9]": {
        "id": "9",
        "code": "[2.9]",
        "title": "How It Works: The TimeBack Educational Operating System",
        "authorOrSource": "Timeback Docs",
        "year": "2026",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Timeback Docs, 2026).",
        "url": "https://docs.timeback.com/beta/about-timeback/how-it-works"
    },
    "[2.10]": {
        "id": "10",
        "code": "[2.10]",
        "title": "Locations and Campus Network Expansion",
        "authorOrSource": "Alpha School",
        "year": "2026",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Alpha School, 2026).",
        "url": "https://alpha.school/locations/"
    },
    "[2.11]": {
        "id": "11",
        "code": "[2.11]",
        "title": "AI-Powered Socratic Tutoring for K-12 Classrooms",
        "authorOrSource": "Khan Academy & Khanmigo",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Khan Academy & Khanmigo, 2025).",
        "url": "https://www.khanmigo.ai/"
    },
    "[2.12]": {
        "id": "12",
        "code": "[2.12]",
        "title": "Khan for Educators: Foundations and Teacher Tools",
        "authorOrSource": "Khan Academy",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Khan Academy, 2025).",
        "url": "https://www.khanacademy.org/khan-for-educators"
    },
    "[2.13]": {
        "id": "13",
        "code": "[2.13]",
        "title": "Multilingual Support and Socratic Guardrails for Khanmigo",
        "authorOrSource": "Khan Academy Help Center",
        "year": "2026",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Khan Academy Help Center, 2026).",
        "url": "https://support.khanacademy.org/hc/en-us/articles/41626114291469-Which-languages-can-l-use-for-Khanmigo-and-free-teacher-tools"
    },
    "[2.14]": {
        "id": "14",
        "code": "[2.14]",
        "title": "Conundrums, Strategic Thinking and Collaborative Decision-Making",
        "authorOrSource": "Astra Nova School",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Astra Nova School, 2025).",
        "url": "https://www.astranova.org/"
    },
    "[2.15]": {
        "id": "15",
        "code": "[2.15]",
        "title": "Complex Systems, Game Theory and Socratic Debriefs for Young Minds",
        "authorOrSource": "Synthesis School",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Synthesis School, 2025).",
        "url": "https://www.synthesis.com/"
    },
    "[2.16]": {
        "id": "16",
        "code": "[2.16]",
        "title": "Adaptive Mathematical Foundations for Elementary Education",
        "authorOrSource": "Synthesis Tutor",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Synthesis Tutor, 2025).",
        "url": "https://www.synthesis.com/tutor"
    },
    "[2.17]": {
        "id": "17",
        "code": "[2.17]",
        "title": "The Acton Model: Socratic Guides, Studios, Quests and Hero's Journey",
        "authorOrSource": "Acton Academy Network",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Acton Academy Network, 2025).",
        "url": "https://www.actonacademy.org/"
    },
    "[2.18]": {
        "id": "18",
        "code": "[2.18]",
        "title": "Adaptive Learning Engine and Nanoconcept Knowledge Graphs in K-12 Education",
        "authorOrSource": "Squirrel AI Learning",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Squirrel AI Learning, 2025).",
        "url": "https://sites.google.com/view/learnerdatainstitute/activities/partners-data/squirrel-ai-learning-by-yixue"
    },
    "[2.19]": {
        "id": "19",
        "code": "[2.19]",
        "title": "Squirrel AI Learning Shines at IEEE/IROS: Nanoscale Knowledge Components",
        "authorOrSource": "PR Newswire / Squirrel AI",
        "year": "2019",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (PR Newswire / Squirrel AI, 2019).",
        "url": "https://www.prnewswire.com/news-releases/squirrel-ai-learning-shines-at-the-ieeeiros-2019-conference-the-era-of-ai--education-has-arrived-300975855.html"
    },
    "[2.20]": {
        "id": "20",
        "code": "[2.20]",
        "title": "AI Digital Textbooks for 2025 to Realize Personalized Education for All",
        "authorOrSource": "Ministry of Education",
        "year": "2024",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Ministry of Education, 2024).",
        "url": "https://english.moe.go.kr/boardCnts/viewRenewal.do?boardID=265&boardSeq=102075&lev=0&m=0201&opType=N&page=1&s=english&searchType=null&statusYN=W"
    },
    "[2.21]": {
        "id": "21",
        "code": "[2.21]",
        "title": "The Arrival of AI Digital Textbook: EdTech Policy Assemblage in South Korea. Postdigital Science and Education, Springer",
        "authorOrSource": "Lee, K",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Lee, K, 2025).",
        "url": "https://link.springer.com/article/10.1007/s42438-025-00614-4"
    },
    "[2.22]": {
        "id": "22",
        "code": "[2.22]",
        "title": "Board of Audit findings and selection of AI-Focused Schools (2025-2026)",
        "authorOrSource": "Asiae / Asia Business Daily",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Asiae / Asia Business Daily, 2025).",
        "url": "https://www.asiae.co.kr/article/2025121614431525429"
    },
    "[2.23]": {
        "id": "23",
        "code": "[2.23]",
        "title": "Guidelines for the Use of Generative AI in Primary and Secondary Education (Ver. 2.0)",
        "authorOrSource": "MEXT Japan",
        "year": "2024",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (MEXT Japan, 2024).",
        "url": "https://www.mext.go.jp/a_menu/other/mext_02412.html"
    },
    "[2.24]": {
        "id": "24",
        "code": "[2.24]",
        "title": "AI Reshaping Japanese Classrooms",
        "authorOrSource": "NHK World",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (NHK World, 2025).",
        "url": "https://www3.nhk.or.jp/nhkworld/en/news/backstories/4680/"
    },
    "[2.25]": {
        "id": "25",
        "code": "[2.25]",
        "title": "DIKSHA 2.0 and Personalised Adaptive Learning (PAL)",
        "authorOrSource": "Press Information Bureau / NCERT India",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Press Information Bureau / NCERT India, 2025).",
        "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2278569"
    },
    "[2.26]": {
        "id": "26",
        "code": "[2.26]",
        "title": "450,000 disadvantaged pupils could benefit from AI tutoring tools",
        "authorOrSource": "GOV",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (GOV, 2025).",
        "url": "https://www.gov.uk/government/news/450000-disadvantaged-pupils-could-benefit-from-ai-tutoring-tools"
    },
    "[2.27]": {
        "id": "27",
        "code": "[2.27]",
        "title": "Introducing Aila, our AI-powered lesson assistant",
        "authorOrSource": "Oak National Academy",
        "year": "2024",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Oak National Academy, 2024).",
        "url": "https://www.thenational.academy/blog/introducing-aila-for-ai-lesson-planning"
    },
    "[2.28]": {
        "id": "28",
        "code": "[2.28]",
        "title": "How to use Aila, our AI lesson assistant",
        "authorOrSource": "Oak National Academy",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Oak National Academy, 2025).",
        "url": "https://support.thenational.academy/using-aila"
    },
    "[2.29]": {
        "id": "29",
        "code": "[2.29]",
        "title": "L'intelligence artificielle pour accompagner les apprentissages des fondamentaux au cycle 2 et 3 (P2IA)",
        "authorOrSource": "Éduscol - Ministère de l'Éducation Nationale",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Éduscol - Ministère de l'Éducation Nationale, 2025).",
        "url": "https://eduscol.education.gouv.fr/6714/l-intelligence-artificielle-pour-accompagner-les-apprentissages-des-fondamentaux-au-cycle-2"
    },
    "[2.30]": {
        "id": "30",
        "code": "[2.30]",
        "title": "Déploiement du parcours Pix IA: l'École se prépare",
        "authorOrSource": "Ministère de l'Éducation Nationale",
        "year": "2026",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Ministère de l'Éducation Nationale, 2026).",
        "url": "https://www.education.gouv.fr/creation-du-comite-d-anticipation-en-education-et-deploiement-du-parcours-pix-ia-l-ecole-se-prepare-468899"
    },
    "[2.31]": {
        "id": "31",
        "code": "[2.31]",
        "title": "Plan #DigEdu: Digitalización y Competencias Digitales del Sistema Educativo",
        "authorOrSource": "España Digital",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (España Digital, 2025).",
        "url": "http://espanadigital.gob.es/lineas-de-actuacion/plan-digedu"
    },
    "[2.32]": {
        "id": "32",
        "code": "[2.32]",
        "title": "Educación acredita la competencia digital de 666.318 docentes y digitaliza 280.000 aulas",
        "authorOrSource": "Infobae / EFE",
        "year": "2026",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Infobae / EFE, 2026).",
        "url": "https://www.infobae.com/espana/agencias/2026/08/20/educacion-acredita-la-competencia-digital-de-666318-docentes-y-digitaliza-280000-aulas/"
    },
    "[2.33]": {
        "id": "33",
        "code": "[2.33]",
        "title": "Balance de transformación digital educativa, CompDigEdu y Código Escuela 4.0",
        "authorOrSource": "INTEF",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (INTEF, 2025).",
        "url": "https://intef.es/"
    },
    "[2.34]": {
        "id": "34",
        "code": "[2.34]",
        "title": "Evidence-Based Integration and effective use of ICT and Generative AI in K-12 schools in Spain",
        "authorOrSource": "EsadeEcPol",
        "year": "2026",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (EsadeEcPol, 2026).",
        "url": "https://www.esade.edu/ecpol/"
    },
    "[2.35]": {
        "id": "35",
        "code": "[2.35]",
        "title": "Guidelines on the use of artificial intelligence at schools (DM 166/2025)",
        "authorOrSource": "Eurydice / MIM Italia",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Eurydice / MIM Italia, 2025).",
        "url": "https://eurydice.eacea.ec.europa.eu/news/italy-guidelines-use-artificial-intelligence-schools"
    },
    "[2.36]": {
        "id": "36",
        "code": "[2.36]",
        "title": "Valditara: 100 million to train teachers and students in AI",
        "authorOrSource": "Il Sole 24 Ore",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Il Sole 24 Ore, 2025).",
        "url": "https://en.ilsole24ore.com/art/valditara-100-million-to-train-teachers-and-students-AH1j5Y6C"
    },
    "[2.37]": {
        "id": "37",
        "code": "[2.37]",
        "title": "Offizielle Website des Schul-KI-Chatbots Telli / AIS.chat",
        "authorOrSource": "Telli Schule",
        "year": "2026",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Telli Schule, 2026).",
        "url": "https://www.schulministerium.nrw/presse/pressemitteilungen/von-fuerst-stochastikus-bis-zu-telli-05-12-2025"
    },
    "[2.38]": {
        "id": "38",
        "code": "[2.38]",
        "title": "Von „Fürst Stochastikus“ bis zu „Telli“: NRW bringt KI an die Schulen",
        "authorOrSource": "Schulministerium Nordrhein-Westfalen",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Schulministerium Nordrhein-Westfalen, 2025).",
        "url": "https://www.schulministerium.nrw/presse/pressemitteilungen/von-fuerst-stochastikus-bis-zu-telli-05-12-2025"
    },
    "[2.39]": {
        "id": "39",
        "code": "[2.39]",
        "title": "Estonia launches AI Leap 2025 to transform education",
        "authorOrSource": "Education Estonia",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Education Estonia, 2025).",
        "url": "https://www.educationestonia.org/estonia-launches-ai-leap-2025-to-transform-education/"
    },
    "[2.40]": {
        "id": "40",
        "code": "[2.40]",
        "title": "President Karis spearheads AI-driven transformation in Estonia's high schools",
        "authorOrSource": "ERR News",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (ERR News, 2025).",
        "url": "https://news.err.ee/1609614773/president-karis-spearheads-ai-driven-transformation-in-estonia-s-high-schools"
    },
    "[2.41]": {
        "id": "41",
        "code": "[2.41]",
        "title": "AI Leap Estonia Official Portal and Programme Overview",
        "authorOrSource": "TI-Hüpe",
        "year": "2026",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (TI-Hüpe, 2026).",
        "url": "https://tihupe.ee/en/"
    },
    "[2.42]": {
        "id": "42",
        "code": "[2.42]",
        "title": "Europe's best AI literacy initiative for education comes from Finland (Generation AI)",
        "authorOrSource": "University of Helsinki",
        "year": "2026",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (University of Helsinki, 2026).",
        "url": "https://www.helsinki.fi/en/news/artificial-intelligence/europes-best-ai-literacy-initiative-education-comes-finland"
    },
    "[2.43]": {
        "id": "43",
        "code": "[2.43]",
        "title": "The Complete Guide to Using AI in the Education Industry in Finland in 2025 (Eduten)",
        "authorOrSource": "Nucamp",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Nucamp, 2025).",
        "url": "https://www.nucamp.co/blog/coding-bootcamp-finland-fin-education-the-complete-guide-to-using-ai-in-the-education-industry-in-finland-in-2025"
    },
    "[2.44]": {
        "id": "44",
        "code": "[2.44]",
        "title": "Undervisa i artificiell intelligens på gymnasiet och komvux",
        "authorOrSource": "Skolverket - Swedish National Agency for Education",
        "year": "2024",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Skolverket - Swedish National Agency for Education, 2024).",
        "url": "https://www.skolverket.se/kompetensutveckling/kurser-och-utbildningar/sok-kurser-och-utbildningar/undervisa-i-artificiell-intelligens-pa-gymnasiet"
    },
    "[2.45]": {
        "id": "45",
        "code": "[2.45]",
        "title": "Här blir AI vardag - i Europas bäst rankade skola",
        "authorOrSource": "SVT Nyheter",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (SVT Nyheter, 2025).",
        "url": "https://www.svt.se/nyhetskoll/har-blir-ai-vardag-i-europas-bast-rankade-skola"
    },
    "[2.46]": {
        "id": "46",
        "code": "[2.46]",
        "title": "Nordic survey: AI has become part of teachers' everyday life",
        "authorOrSource": "Kopiosto",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Kopiosto, 2025).",
        "url": "https://kopiosto.fi/en/kopiosto/nordic-survey-ai-has-become-part-of-teachers-everyday-life/"
    },
    "[2.47]": {
        "id": "47",
        "code": "[2.47]",
        "title": "Norway imposes near ban on AI in elementary school",
        "authorOrSource": "Reuters",
        "year": "2026",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Reuters, 2026).",
        "url": "https://www.reuters.com/technology/norway-imposes-near-ban-ai-elementary-school-2026-06-19/"
    },
    "[2.48]": {
        "id": "48",
        "code": "[2.48]",
        "title": "Plataformas Adaptativas, Pensamiento Computacional e IA en el Sistema Educativo Uruguayo",
        "authorOrSource": "Ceibal",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Ceibal, 2025).",
        "url": "https://ceibal.edu.uy/plataformas-y-programas/pensamiento-computacional-e-ia/"
    },
    "[2.49]": {
        "id": "49",
        "code": "[2.49]",
        "title": "Ceibal: Transformando la Educación en Uruguay a través de la Tecnología",
        "authorOrSource": "Banco Mundial",
        "year": "2024",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Banco Mundial, 2024).",
        "url": "https://www.bancomundial.org/es/country/uruguay/publication/ceibal-transforming-education-in-uruguay-through-technology"
    },
    "[2.50]": {
        "id": "50",
        "code": "[2.50]",
        "title": "Eligiendo Mi Camino: IA para el Aprendizaje y las Decisiones Vocacionales en Perú",
        "authorOrSource": "Banco Mundial",
        "year": "2026",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Banco Mundial, 2026).",
        "url": "https://www.bancomundial.org/es/country/peru/brief/eligiendo-mi-camino"
    },
    "[2.51]": {
        "id": "51",
        "code": "[2.51]",
        "title": "Capacitación en uso de IA a docentes de Lima Metropolitana",
        "authorOrSource": "DRELM & Banco Mundial",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (DRELM & Banco Mundial, 2025).",
        "url": "https://www.gob.pe/institucion/regionlima-drelm/noticias/1122292-bancomundial-brindo-capacitacion-en-uso-de-ia-a-600-docentes-de-lima-metropolitana"
    },
    "[2.52]": {
        "id": "52",
        "code": "[2.52]",
        "title": "Plataforma Oficial de Tutoría y Orientación Vocacional",
        "authorOrSource": "Programa Eligiendo Mi Camino",
        "year": "2026",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Programa Eligiendo Mi Camino, 2026).",
        "url": "https://eligiendomicamino.org/"
    },
    "[2.53]": {
        "id": "53",
        "code": "[2.53]",
        "title": "Centro Público de Formación en IA y Plataforma Saberes MX",
        "authorOrSource": "Agencia de Transformación Digital y Telecomunicaciones - ATDT México",
        "year": "2026",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Agencia de Transformación Digital y Telecomunicaciones - ATDT México, 2026).",
        "url": "https://www.gob.mx/atdt/comunicacion/mexico-pone-en-marcha-el-mayor-centro-de-formacion-en-inteligencia-artificial-de-latinoamerica"
    },
    "[2.54]": {
        "id": "54",
        "code": "[2.54]",
        "title": "México inaugura la mayor escuela pública de IA en América Latina",
        "authorOrSource": "Mexico Business News / Expansión",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Mexico Business News / Expansión, 2025).",
        "url": "https://expansion.mx/tecnologia/2025/11/06/mexico-inaugura-mayor-escuela-publica-ia-america-latina"
    },
    "[2.55]": {
        "id": "55",
        "code": "[2.55]",
        "title": "Documento CONPES 4144: Hoja de ruta para el desarrollo de capacidades en IA",
        "authorOrSource": "Departamento Nacional de Planeación - DNP Colombia",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Departamento Nacional de Planeación - DNP Colombia, 2025).",
        "url": "https://www.dnp.gov.co/publicaciones/Planeacion/Paginas/conpes-4144-hoja-de-ruta-colombia-inteligencia-artificial-retos-actuales-transformacion-futura.aspx"
    },
    "[2.56]": {
        "id": "56",
        "code": "[2.56]",
        "title": "Latin America Programme Framework: Raspberry Pi Foundation & Google DeepMind",
        "authorOrSource": "Experience AI & Day of AI",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Experience AI & Day of AI, 2025).",
        "url": "https://experience-ai.org/es-419"
    },
    "[2.57]": {
        "id": "57",
        "code": "[2.57]",
        "title": "Alertas tempranas para prevenir el abandono escolar: el caso de la provincia de Mendoza",
        "authorOrSource": "CAF - Banco de Desarrollo de América Latina y el Caribe / LIAA-UBA",
        "year": "2023",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (CAF - Banco de Desarrollo de América Latina y el Caribe / LIAA-UBA, 2023).",
        "url": "https://scioteca.caf.com/handle/123456789/2166"
    },
    "[2.58]": {
        "id": "58",
        "code": "[2.58]",
        "title": "En Argentina, un algoritmo lucha contra la deserción escolar: el sistema SAT en Mendoza",
        "authorOrSource": "UNESCO Courier",
        "year": "2023",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (UNESCO Courier, 2023).",
        "url": "https://courier.unesco.org/es/articles/en-argentina-un-algoritmo-lucha-contra-la-desercion-escolar"
    },
    "[2.59]": {
        "id": "59",
        "code": "[2.59]",
        "title": "Sistema de Alerta Temprana de Abandono Escolar (SATAE)",
        "authorOrSource": "Gobierno de la Ciudad Autónoma de Buenos Aires",
        "year": "2024",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Gobierno de la Ciudad Autónoma de Buenos Aires, 2024).",
        "url": "https://buenosaires.gob.ar/educacion"
    },
    "[2.60]": {
        "id": "60",
        "code": "[2.60]",
        "title": "IA: una aliada clave contra el abandono escolar",
        "authorOrSource": "CIPPEC",
        "year": "2024",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (CIPPEC, 2024).",
        "url": "https://www.cippec.org/textual/inteligencia-artificial-una-aliada-clave-contra-el-abandono-escolar/"
    },
    "[2.61]": {
        "id": "61",
        "code": "[2.61]",
        "title": "Programa Curricular de Inteligência Artificial para Leitura e Escrita",
        "authorOrSource": "Letrus Tecnologia Educacional",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Letrus Tecnologia Educacional, 2025).",
        "url": "https://www.letrus.com/"
    },
    "[2.62]": {
        "id": "62",
        "code": "[2.62]",
        "title": "Bringing the future of education to Brazil with Khan Academy and Khanmigo",
        "authorOrSource": "Khan Academy Blog",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Khan Academy Blog, 2025).",
        "url": "https://blog.khanacademy.org/bringing-the-future-of-education-to-brazil-with-khan-academy-and-khanmigo/"
    },
    "[2.63]": {
        "id": "63",
        "code": "[2.63]",
        "title": "IA en las aulas latinoamericanas: mapeando un futuro en construcción",
        "authorOrSource": "ProFuturo",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (ProFuturo, 2025).",
        "url": "https://profuturo.education/en/observatory/inspiring-experiences/ia-en-las-aulas-latinoamericanas-mapeando-un-futuro-en-construccion/"
    },
    "[2.64]": {
        "id": "64",
        "code": "[2.64]",
        "title": "Accredited Online High School: Project-Based Learning and Human Flourishing",
        "authorOrSource": "School of Humanity",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (School of Humanity, 2025).",
        "url": "https://sofhumanity.com/"
    },
    "[2.65]": {
        "id": "65",
        "code": "[2.65]",
        "title": "Cognitive Load Theory and Educational Technology. Educational Psychology Review, 32(1), 1-16",
        "authorOrSource": "Sweller, J",
        "year": "2020",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Sweller, J, 2020).",
        "url": "https://doi.org/10.1007/s10648-019-09465-5"
    },
    "[2.66]": {
        "id": "66",
        "code": "[2.66]",
        "title": "The \"What\" and \"Why\" of Goal Pursuits: Human Needs and the Self-Determination of Behavior. Psychological Inquiry, 11(4), 227-268",
        "authorOrSource": "Deci, E",
        "year": "2000",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Deci, E, 2000).",
        "url": "https://doi.org/10.1207/S15327965PLI1104_01"
    },
    "[2.67]": {
        "id": "67",
        "code": "[2.67]",
        "title": "Introducing Study Mode and ChatGPT Edu in K-12",
        "authorOrSource": "OpenAI",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (OpenAI, 2025).",
        "url": "https://openai.com/index/chatgpt-study-mode/"
    },
    "[2.68]": {
        "id": "68",
        "code": "[2.68]",
        "title": "Gemini Notebook and Guided Learning in Google Workspace",
        "authorOrSource": "Google for Education",
        "year": "2026",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Google for Education, 2026).",
        "url": "https://edu.google.com/ai-gemini-notebook/"
    },
    "[2.69]": {
        "id": "69",
        "code": "[2.69]",
        "title": "Introducing Claude for Education & Canvas LTI Integration",
        "authorOrSource": "Anthropic",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Anthropic, 2025).",
        "url": "https://www.anthropic.com/news/introducing-claude-for-education"
    },
    "[2.70]": {
        "id": "70",
        "code": "[2.70]",
        "title": "Study and Learn: AI Built for Your Student in Microsoft 365 Copilot",
        "authorOrSource": "Microsoft Education",
        "year": "2026",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Microsoft Education, 2026).",
        "url": "https://www.microsoft.com/en-us/education/blog/2026/05/study-and-learn-ai-built-for-your-student/"
    },
    "[2.71]": {
        "id": "71",
        "code": "[2.71]",
        "title": "xAI Pioneer Nationwide AI-Powered Education Program",
        "authorOrSource": "xAI",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (xAI, 2025).",
        "url": "https://x.ai/news/el-salvador-partnership"
    },
    "[2.72]": {
        "id": "72",
        "code": "[2.72]",
        "title": "Math TutorBench: A Benchmark for Measuring Open-ended Pedagogical Capabilities of LLM Tutors. EMNLP",
        "authorOrSource": "Macina, J",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Macina, J, 2025).",
        "url": "https://aclanthology.org/2025.emnlp-main.11/"
    },
    "[2.73]": {
        "id": "73",
        "code": "[2.73]",
        "title": "AI Course Authoring, SCORM/LTI and XAPI Export Standards",
        "authorOrSource": "Coursebox, Mindsmith, & Articulate",
        "year": "2026",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (Coursebox, Mindsmith, & Articulate, 2026).",
        "url": "https://www.coursebox.ai/"
    },
    "[2.74]": {
        "id": "74",
        "code": "[2.74]",
        "title": "Modular Off-Grid Containerized Classrooms and Solar Systems",
        "authorOrSource": "ContainerHomeX, Sun Ice Energy, & OffGridBox",
        "year": "2025",
        "justification": "Fuente académica y soporte investigativo para la Parte 2 (ContainerHomeX, Sun Ice Energy, & OffGridBox, 2025).",
        "url": "https://www.modular.org/"
    }
},
  references: [
    {
        "id": "ref-2-1",
        "code": "[2.1]",
        "citation": "**[2.1]** Caleido Humano & ENCOVI UCAB. (2024). Informe sobre Condiciones de Vida y Colapso del Sistema Educativo Venezolano. UCAB. https://www.proyectoencovi.com/",
        "url": "https://www.proyectoencovi.com/"
    },
    {
        "id": "ref-2-2",
        "code": "[2.2]",
        "citation": "**[2.2]** Monitor de Derechos Civiles y Educación (UCAB / Excubitus DHE). (2025). Déficit Docente y Crisis Estructural Escolar. https://elucabista.com/",
        "url": "https://elucabista.com/"
    },
    {
        "id": "ref-2-3",
        "code": "[2.3]",
        "citation": "**[2.3]** Bloom, B. S. (1984). The 2 Sigma Problem: The Search for Methods of Group Instruction as Effective as One-to-One Tutoring. Educational Researcher, 13(6), 4-16. https://doi.org/10.3102/0013189X013006004",
        "url": "https://doi.org/10.3102/0013189X013006004"
    },
    {
        "id": "ref-2-4",
        "code": "[2.4]",
        "citation": "**[2.4]** Kestin, G., Miller, K., & Ponti, G. (2025). AI tutoring outperforms in-class active learning: an RCT introducing a novel research-based design in an authentic educational setting. Scientific Reports, 15, 97652. https://www.nature.com/articles/s41598-025-97652-6",
        "url": "https://www.nature.com/articles/s41598-025-97652-6"
    },
    {
        "id": "ref-2-5",
        "code": "[2.5]",
        "citation": "**[2.5]** Alpha School. (2025). Learning at the Speed of Thought: How AI Tutors Make Every Lesson Personal. https://alpha.school/blog/learning-at-the-speed-of-thought-how-ai-tutors-make-every-lesson-personal/",
        "url": "https://alpha.school/blog/learning-at-the-speed-of-thought-how-ai-tutors-make-every-lesson-personal/"
    },
    {
        "id": "ref-2-6",
        "code": "[2.6]",
        "citation": "**[2.6]** 2 Hour Learning. (2025). Mastery-Based K-12 Schedule and Adaptive Learning Framework. https://2hourlearning.com/",
        "url": "https://2hourlearning.com/"
    },
    {
        "id": "ref-2-7",
        "code": "[2.7]",
        "citation": "**[2.7]** Liemandt, J. / Colossus. (2025). Incept and TimeBack: AI-Driven Mastery Architecture. https://colossus.com/topic/issue-04/",
        "url": "https://colossus.com/topic/issue-04/"
    },
    {
        "id": "ref-2-8",
        "code": "[2.8]",
        "citation": "**[2.8]** Alpha School. (2025). Motivation Is 90% of Learning: The Science Behind Kids Who Love School. https://alpha.school/blog/motivation-is-90-of-learning-the-science-behind-kids-who-love-school/",
        "url": "https://alpha.school/blog/motivation-is-90-of-learning-the-science-behind-kids-who-love-school/"
    },
    {
        "id": "ref-2-9",
        "code": "[2.9]",
        "citation": "**[2.9]** Timeback Docs. (2026). How It Works: The TimeBack Educational Operating System. https://docs.timeback.com/beta/about-timeback/how-it-works",
        "url": "https://docs.timeback.com/beta/about-timeback/how-it-works"
    },
    {
        "id": "ref-2-10",
        "code": "[2.10]",
        "citation": "**[2.10]** Alpha School. (2026). Locations and Campus Network Expansion. https://alpha.school/locations/",
        "url": "https://alpha.school/locations/"
    },
    {
        "id": "ref-2-11",
        "code": "[2.11]",
        "citation": "**[2.11]** Khan Academy & Khanmigo. (2025). AI-Powered Socratic Tutoring for K-12 Classrooms. https://www.khanmigo.ai/",
        "url": "https://www.khanmigo.ai/"
    },
    {
        "id": "ref-2-12",
        "code": "[2.12]",
        "citation": "**[2.12]** Khan Academy. (2025). Khan for Educators: Foundations and Teacher Tools. https://www.khanacademy.org/khan-for-educators",
        "url": "https://www.khanacademy.org/khan-for-educators"
    },
    {
        "id": "ref-2-13",
        "code": "[2.13]",
        "citation": "**[2.13]** Khan Academy Help Center. (2026). Multilingual Support and Socratic Guardrails for Khanmigo. https://support.khanacademy.org/hc/en-us/articles/41626114291469-Which-languages-can-l-use-for-Khanmigo-and-free-teacher-tools",
        "url": "https://support.khanacademy.org/hc/en-us/articles/41626114291469-Which-languages-can-l-use-for-Khanmigo-and-free-teacher-tools"
    },
    {
        "id": "ref-2-14",
        "code": "[2.14]",
        "citation": "**[2.14]** Astra Nova School. (2025). Conundrums, Strategic Thinking and Collaborative Decision-Making. https://www.astranova.org/",
        "url": "https://www.astranova.org/"
    },
    {
        "id": "ref-2-15",
        "code": "[2.15]",
        "citation": "**[2.15]** Synthesis School. (2025). Complex Systems, Game Theory and Socratic Debriefs for Young Minds. https://www.synthesis.com/",
        "url": "https://www.synthesis.com/"
    },
    {
        "id": "ref-2-16",
        "code": "[2.16]",
        "citation": "**[2.16]** Synthesis Tutor. (2025). Adaptive Mathematical Foundations for Elementary Education. https://www.synthesis.com/tutor",
        "url": "https://www.synthesis.com/tutor"
    },
    {
        "id": "ref-2-17",
        "code": "[2.17]",
        "citation": "**[2.17]** Acton Academy Network. (2025). The Acton Model: Socratic Guides, Studios, Quests and Hero's Journey. https://www.actonacademy.org/",
        "url": "https://www.actonacademy.org/"
    },
    {
        "id": "ref-2-18",
        "code": "[2.18]",
        "citation": "**[2.18]** Squirrel AI Learning. (2025). Adaptive Learning Engine and Nanoconcept Knowledge Graphs in K-12 Education. https://sites.google.com/view/learnerdatainstitute/activities/partners-data/squirrel-ai-learning-by-yixue",
        "url": "https://sites.google.com/view/learnerdatainstitute/activities/partners-data/squirrel-ai-learning-by-yixue"
    },
    {
        "id": "ref-2-19",
        "code": "[2.19]",
        "citation": "**[2.19]** PR Newswire / Squirrel AI. (2019). Squirrel AI Learning Shines at IEEE/IROS: Nanoscale Knowledge Components. https://www.prnewswire.com/news-releases/squirrel-ai-learning-shines-at-the-ieeeiros-2019-conference-the-era-of-ai--education-has-arrived-300975855.html",
        "url": "https://www.prnewswire.com/news-releases/squirrel-ai-learning-shines-at-the-ieeeiros-2019-conference-the-era-of-ai--education-has-arrived-300975855.html"
    },
    {
        "id": "ref-2-20",
        "code": "[2.20]",
        "citation": "**[2.20]** Ministry of Education (Korea) / English MOE. (2024). AI Digital Textbooks for 2025 to Realize Personalized Education for All. https://english.moe.go.kr/boardCnts/viewRenewal.do?boardID=265&boardSeq=102075&lev=0&m=0201&opType=N&page=1&s=english&searchType=null&statusYN=W",
        "url": "https://english.moe.go.kr/boardCnts/viewRenewal.do?boardID=265&boardSeq=102075&lev=0&m=0201&opType=N&page=1&s=english&searchType=null&statusYN=W"
    },
    {
        "id": "ref-2-21",
        "code": "[2.21]",
        "citation": "**[2.21]** Lee, K. et al. (2025). The Arrival of AI Digital Textbook: EdTech Policy Assemblage in South Korea. Postdigital Science and Education, Springer. https://link.springer.com/article/10.1007/s42438-025-00614-4",
        "url": "https://link.springer.com/article/10.1007/s42438-025-00614-4"
    },
    {
        "id": "ref-2-22",
        "code": "[2.22]",
        "citation": "**[2.22]** Asiae / Asia Business Daily. (2025). Board of Audit findings and selection of AI-Focused Schools (2025-2026). https://www.asiae.co.kr/article/2025121614431525429",
        "url": "https://www.asiae.co.kr/article/2025121614431525429"
    },
    {
        "id": "ref-2-23",
        "code": "[2.23]",
        "citation": "**[2.23]** MEXT Japan. (2024). Guidelines for the Use of Generative AI in Primary and Secondary Education (Ver. 2.0). https://www.mext.go.jp/a_menu/other/mext_02412.html",
        "url": "https://www.mext.go.jp/a_menu/other/mext_02412.html"
    },
    {
        "id": "ref-2-24",
        "code": "[2.24]",
        "citation": "**[2.24]** NHK World. (2025). AI Reshaping Japanese Classrooms. https://www3.nhk.or.jp/nhkworld/en/news/backstories/4680/",
        "url": "https://www3.nhk.or.jp/nhkworld/en/news/backstories/4680/"
    },
    {
        "id": "ref-2-25",
        "code": "[2.25]",
        "citation": "**[2.25]** Press Information Bureau / NCERT India. (2025). DIKSHA 2.0 and Personalised Adaptive Learning (PAL). https://www.pib.gov.in/PressReleasePage.aspx?PRID=2278569",
        "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2278569"
    },
    {
        "id": "ref-2-26",
        "code": "[2.26]",
        "citation": "**[2.26]** GOV.UK / Department for Education. (2025). 450,000 disadvantaged pupils could benefit from AI tutoring tools. https://www.gov.uk/government/news/450000-disadvantaged-pupils-could-benefit-from-ai-tutoring-tools",
        "url": "https://www.gov.uk/government/news/450000-disadvantaged-pupils-could-benefit-from-ai-tutoring-tools"
    },
    {
        "id": "ref-2-27",
        "code": "[2.27]",
        "citation": "**[2.27]** Oak National Academy. (2024). Introducing Aila, our AI-powered lesson assistant. https://www.thenational.academy/blog/introducing-aila-for-ai-lesson-planning",
        "url": "https://www.thenational.academy/blog/introducing-aila-for-ai-lesson-planning"
    },
    {
        "id": "ref-2-28",
        "code": "[2.28]",
        "citation": "**[2.28]** Oak National Academy. (2025). How to use Aila, our AI lesson assistant. https://support.thenational.academy/using-aila",
        "url": "https://support.thenational.academy/using-aila"
    },
    {
        "id": "ref-2-29",
        "code": "[2.29]",
        "citation": "**[2.29]** Éduscol - Ministère de l'Éducation Nationale. (2025). L'intelligence artificielle pour accompagner les apprentissages des fondamentaux au cycle 2 et 3 (P2IA). https://eduscol.education.gouv.fr/6714/l-intelligence-artificielle-pour-accompagner-les-apprentissages-des-fondamentaux-au-cycle-2",
        "url": "https://eduscol.education.gouv.fr/6714/l-intelligence-artificielle-pour-accompagner-les-apprentissages-des-fondamentaux-au-cycle-2"
    },
    {
        "id": "ref-2-30",
        "code": "[2.30]",
        "citation": "**[2.30]** Ministère de l'Éducation Nationale. (2026). Déploiement du parcours Pix IA: l'École se prépare. https://www.education.gouv.fr/creation-du-comite-d-anticipation-en-education-et-deploiement-du-parcours-pix-ia-l-ecole-se-prepare-468899",
        "url": "https://www.education.gouv.fr/creation-du-comite-d-anticipation-en-education-et-deploiement-du-parcours-pix-ia-l-ecole-se-prepare-468899"
    },
    {
        "id": "ref-2-31",
        "code": "[2.31]",
        "citation": "**[2.31]** España Digital. (2025). Plan #DigEdu: Digitalización y Competencias Digitales del Sistema Educativo. http://espanadigital.gob.es/lineas-de-actuacion/plan-digedu",
        "url": "http://espanadigital.gob.es/lineas-de-actuacion/plan-digedu"
    },
    {
        "id": "ref-2-32",
        "code": "[2.32]",
        "citation": "**[2.32]** Infobae / EFE. (2026). Educación acredita la competencia digital de 666.318 docentes y digitaliza 280.000 aulas. https://www.infobae.com/espana/agencias/2026/08/20/educacion-acredita-la-competencia-digital-de-666318-docentes-y-digitaliza-280000-aulas/",
        "url": "https://www.infobae.com/espana/agencias/2026/08/20/educacion-acredita-la-competencia-digital-de-666318-docentes-y-digitaliza-280000-aulas/"
    },
    {
        "id": "ref-2-33",
        "code": "[2.33]",
        "citation": "**[2.33]** INTEF. (2025). Balance de transformación digital educativa, CompDigEdu y Código Escuela 4.0. https://intef.es/",
        "url": "https://intef.es/"
    },
    {
        "id": "ref-2-34",
        "code": "[2.34]",
        "citation": "**[2.34]** EsadeEcPol. (2026). Evidence-Based Integration and effective use of ICT and Generative AI in K-12 schools in Spain. https://www.esade.edu/ecpol/",
        "url": "https://www.esade.edu/ecpol/"
    },
    {
        "id": "ref-2-35",
        "code": "[2.35]",
        "citation": "**[2.35]** Eurydice / MIM Italia. (2025). Guidelines on the use of artificial intelligence at schools (DM 166/2025). https://eurydice.eacea.ec.europa.eu/news/italy-guidelines-use-artificial-intelligence-schools",
        "url": "https://eurydice.eacea.ec.europa.eu/news/italy-guidelines-use-artificial-intelligence-schools"
    },
    {
        "id": "ref-2-36",
        "code": "[2.36]",
        "citation": "**[2.36]** Il Sole 24 Ore. (2025). Valditara: 100 million to train teachers and students in AI. https://en.ilsole24ore.com/art/valditara-100-million-to-train-teachers-and-students-AH1j5Y6C",
        "url": "https://en.ilsole24ore.com/art/valditara-100-million-to-train-teachers-and-students-AH1j5Y6C"
    },
    {
        "id": "ref-2-37",
        "code": "[2.37]",
        "citation": "**[2.37]** Telli Schule. (2026). Offizielle Website des Schul-KI-Chatbots Telli / AIS.chat. https://www.schulministerium.nrw/presse/pressemitteilungen/von-fuerst-stochastikus-bis-zu-telli-05-12-2025",
        "url": "https://www.schulministerium.nrw/presse/pressemitteilungen/von-fuerst-stochastikus-bis-zu-telli-05-12-2025"
    },
    {
        "id": "ref-2-38",
        "code": "[2.38]",
        "citation": "**[2.38]** Schulministerium Nordrhein-Westfalen. (2025). Von „Fürst Stochastikus“ bis zu „Telli“: NRW bringt KI an die Schulen. https://www.schulministerium.nrw/presse/pressemitteilungen/von-fuerst-stochastikus-bis-zu-telli-05-12-2025",
        "url": "https://www.schulministerium.nrw/presse/pressemitteilungen/von-fuerst-stochastikus-bis-zu-telli-05-12-2025"
    },
    {
        "id": "ref-2-39",
        "code": "[2.39]",
        "citation": "**[2.39]** Education Estonia. (2025). Estonia launches AI Leap 2025 to transform education. https://www.educationestonia.org/estonia-launches-ai-leap-2025-to-transform-education/",
        "url": "https://www.educationestonia.org/estonia-launches-ai-leap-2025-to-transform-education/"
    },
    {
        "id": "ref-2-40",
        "code": "[2.40]",
        "citation": "**[2.40]** ERR News. (2025). President Karis spearheads AI-driven transformation in Estonia's high schools. https://news.err.ee/1609614773/president-karis-spearheads-ai-driven-transformation-in-estonia-s-high-schools",
        "url": "https://news.err.ee/1609614773/president-karis-spearheads-ai-driven-transformation-in-estonia-s-high-schools"
    },
    {
        "id": "ref-2-41",
        "code": "[2.41]",
        "citation": "**[2.41]** TI-Hüpe. (2026). AI Leap Estonia Official Portal and Programme Overview. https://tihupe.ee/en/",
        "url": "https://tihupe.ee/en/"
    },
    {
        "id": "ref-2-42",
        "code": "[2.42]",
        "citation": "**[2.42]** University of Helsinki. (2026). Europe's best AI literacy initiative for education comes from Finland (Generation AI). https://www.helsinki.fi/en/news/artificial-intelligence/europes-best-ai-literacy-initiative-education-comes-finland",
        "url": "https://www.helsinki.fi/en/news/artificial-intelligence/europes-best-ai-literacy-initiative-education-comes-finland"
    },
    {
        "id": "ref-2-43",
        "code": "[2.43]",
        "citation": "**[2.43]** Nucamp. (2025). The Complete Guide to Using AI in the Education Industry in Finland in 2025 (Eduten). https://www.nucamp.co/blog/coding-bootcamp-finland-fin-education-the-complete-guide-to-using-ai-in-the-education-industry-in-finland-in-2025",
        "url": "https://www.nucamp.co/blog/coding-bootcamp-finland-fin-education-the-complete-guide-to-using-ai-in-the-education-industry-in-finland-in-2025"
    },
    {
        "id": "ref-2-44",
        "code": "[2.44]",
        "citation": "**[2.44]** Skolverket - Swedish National Agency for Education. (2024). Undervisa i artificiell intelligens på gymnasiet och komvux. https://www.skolverket.se/kompetensutveckling/kurser-och-utbildningar/sok-kurser-och-utbildningar/undervisa-i-artificiell-intelligens-pa-gymnasiet",
        "url": "https://www.skolverket.se/kompetensutveckling/kurser-och-utbildningar/sok-kurser-och-utbildningar/undervisa-i-artificiell-intelligens-pa-gymnasiet"
    },
    {
        "id": "ref-2-45",
        "code": "[2.45]",
        "citation": "**[2.45]** SVT Nyheter. (2025). Här blir AI vardag - i Europas bäst rankade skola. https://www.svt.se/nyhetskoll/har-blir-ai-vardag-i-europas-bast-rankade-skola",
        "url": "https://www.svt.se/nyhetskoll/har-blir-ai-vardag-i-europas-bast-rankade-skola"
    },
    {
        "id": "ref-2-46",
        "code": "[2.46]",
        "citation": "**[2.46]** Kopiosto. (2025). Nordic survey: AI has become part of teachers' everyday life. https://kopiosto.fi/en/kopiosto/nordic-survey-ai-has-become-part-of-teachers-everyday-life/",
        "url": "https://kopiosto.fi/en/kopiosto/nordic-survey-ai-has-become-part-of-teachers-everyday-life/"
    },
    {
        "id": "ref-2-47",
        "code": "[2.47]",
        "citation": "**[2.47]** Reuters. (2026). Norway imposes near ban on AI in elementary school. https://www.reuters.com/technology/norway-imposes-near-ban-ai-elementary-school-2026-06-19/",
        "url": "https://www.reuters.com/technology/norway-imposes-near-ban-ai-elementary-school-2026-06-19/"
    },
    {
        "id": "ref-2-48",
        "code": "[2.48]",
        "citation": "**[2.48]** Ceibal. (2025). Plataformas Adaptativas, Pensamiento Computacional e IA en el Sistema Educativo Uruguayo. https://ceibal.edu.uy/plataformas-y-programas/pensamiento-computacional-e-ia/",
        "url": "https://ceibal.edu.uy/plataformas-y-programas/pensamiento-computacional-e-ia/"
    },
    {
        "id": "ref-2-49",
        "code": "[2.49]",
        "citation": "**[2.49]** Banco Mundial. (2024). Ceibal: Transformando la Educación en Uruguay a través de la Tecnología. https://www.bancomundial.org/es/country/uruguay/publication/ceibal-transforming-education-in-uruguay-through-technology",
        "url": "https://www.bancomundial.org/es/country/uruguay/publication/ceibal-transforming-education-in-uruguay-through-technology"
    },
    {
        "id": "ref-2-50",
        "code": "[2.50]",
        "citation": "**[2.50]** Banco Mundial. (2026). Eligiendo Mi Camino: IA para el Aprendizaje y las Decisiones Vocacionales en Perú. https://www.bancomundial.org/es/country/peru/brief/eligiendo-mi-camino",
        "url": "https://www.bancomundial.org/es/country/peru/brief/eligiendo-mi-camino"
    },
    {
        "id": "ref-2-51",
        "code": "[2.51]",
        "citation": "**[2.51]** DRELM & Banco Mundial. (2025). Capacitación en uso de IA a docentes de Lima Metropolitana. https://www.gob.pe/institucion/regionlima-drelm/noticias/1122292-bancomundial-brindo-capacitacion-en-uso-de-ia-a-600-docentes-de-lima-metropolitana",
        "url": "https://www.gob.pe/institucion/regionlima-drelm/noticias/1122292-bancomundial-brindo-capacitacion-en-uso-de-ia-a-600-docentes-de-lima-metropolitana"
    },
    {
        "id": "ref-2-52",
        "code": "[2.52]",
        "citation": "**[2.52]** Programa Eligiendo Mi Camino. (2026). Plataforma Oficial de Tutoría y Orientación Vocacional. https://eligiendomicamino.org/",
        "url": "https://eligiendomicamino.org/"
    },
    {
        "id": "ref-2-53",
        "code": "[2.53]",
        "citation": "**[2.53]** Agencia de Transformación Digital y Telecomunicaciones - ATDT México. (2026). Centro Público de Formación en IA y Plataforma Saberes MX. https://www.gob.mx/atdt/comunicacion/mexico-pone-en-marcha-el-mayor-centro-de-formacion-en-inteligencia-artificial-de-latinoamerica",
        "url": "https://www.gob.mx/atdt/comunicacion/mexico-pone-en-marcha-el-mayor-centro-de-formacion-en-inteligencia-artificial-de-latinoamerica"
    },
    {
        "id": "ref-2-54",
        "code": "[2.54]",
        "citation": "**[2.54]** Mexico Business News / Expansión. (2025). México inaugura la mayor escuela pública de IA en América Latina. https://expansion.mx/tecnologia/2025/11/06/mexico-inaugura-mayor-escuela-publica-ia-america-latina",
        "url": "https://expansion.mx/tecnologia/2025/11/06/mexico-inaugura-mayor-escuela-publica-ia-america-latina"
    },
    {
        "id": "ref-2-55",
        "code": "[2.55]",
        "citation": "**[2.55]** Departamento Nacional de Planeación - DNP Colombia. (2025). Documento CONPES 4144: Hoja de ruta para el desarrollo de capacidades en IA. https://www.dnp.gov.co/publicaciones/Planeacion/Paginas/conpes-4144-hoja-de-ruta-colombia-inteligencia-artificial-retos-actuales-transformacion-futura.aspx",
        "url": "https://www.dnp.gov.co/publicaciones/Planeacion/Paginas/conpes-4144-hoja-de-ruta-colombia-inteligencia-artificial-retos-actuales-transformacion-futura.aspx"
    },
    {
        "id": "ref-2-56",
        "code": "[2.56]",
        "citation": "**[2.56]** Experience AI & Day of AI. (2025). Latin America Programme Framework: Raspberry Pi Foundation & Google DeepMind. https://experience-ai.org/es-419",
        "url": "https://experience-ai.org/es-419"
    },
    {
        "id": "ref-2-57",
        "code": "[2.57]",
        "citation": "**[2.57]** CAF - Banco de Desarrollo de América Latina y el Caribe / LIAA-UBA. (2023). Alertas tempranas para prevenir el abandono escolar: el caso de la provincia de Mendoza. https://scioteca.caf.com/handle/123456789/2166",
        "url": "https://scioteca.caf.com/handle/123456789/2166"
    },
    {
        "id": "ref-2-58",
        "code": "[2.58]",
        "citation": "**[2.58]** UNESCO Courier. (2023). En Argentina, un algoritmo lucha contra la deserción escolar: el sistema SAT en Mendoza. https://courier.unesco.org/es/articles/en-argentina-un-algoritmo-lucha-contra-la-desercion-escolar",
        "url": "https://courier.unesco.org/es/articles/en-argentina-un-algoritmo-lucha-contra-la-desercion-escolar"
    },
    {
        "id": "ref-2-59",
        "code": "[2.59]",
        "citation": "**[2.59]** Gobierno de la Ciudad Autónoma de Buenos Aires. (2024). Sistema de Alerta Temprana de Abandono Escolar (SATAE). https://buenosaires.gob.ar/educacion",
        "url": "https://buenosaires.gob.ar/educacion"
    },
    {
        "id": "ref-2-60",
        "code": "[2.60]",
        "citation": "**[2.60]** CIPPEC. (2024). IA: una aliada clave contra el abandono escolar. https://www.cippec.org/textual/inteligencia-artificial-una-aliada-clave-contra-el-abandono-escolar/",
        "url": "https://www.cippec.org/textual/inteligencia-artificial-una-aliada-clave-contra-el-abandono-escolar/"
    },
    {
        "id": "ref-2-61",
        "code": "[2.61]",
        "citation": "**[2.61]** Letrus Tecnologia Educacional. (2025). Programa Curricular de Inteligência Artificial para Leitura e Escrita. https://www.letrus.com/",
        "url": "https://www.letrus.com/"
    },
    {
        "id": "ref-2-62",
        "code": "[2.62]",
        "citation": "**[2.62]** Khan Academy Blog. (2025). Bringing the future of education to Brazil with Khan Academy and Khanmigo. https://blog.khanacademy.org/bringing-the-future-of-education-to-brazil-with-khan-academy-and-khanmigo/",
        "url": "https://blog.khanacademy.org/bringing-the-future-of-education-to-brazil-with-khan-academy-and-khanmigo/"
    },
    {
        "id": "ref-2-63",
        "code": "[2.63]",
        "citation": "**[2.63]** ProFuturo. (2025). IA en las aulas latinoamericanas: mapeando un futuro en construcción. https://profuturo.education/en/observatory/inspiring-experiences/ia-en-las-aulas-latinoamericanas-mapeando-un-futuro-en-construccion/",
        "url": "https://profuturo.education/en/observatory/inspiring-experiences/ia-en-las-aulas-latinoamericanas-mapeando-un-futuro-en-construccion/"
    },
    {
        "id": "ref-2-64",
        "code": "[2.64]",
        "citation": "**[2.64]** School of Humanity. (2025). Accredited Online High School: Project-Based Learning and Human Flourishing. https://sofhumanity.com/",
        "url": "https://sofhumanity.com/"
    },
    {
        "id": "ref-2-65",
        "code": "[2.65]",
        "citation": "**[2.65]** Sweller, J. (2020). Cognitive Load Theory and Educational Technology. Educational Psychology Review, 32(1), 1-16. https://doi.org/10.1007/s10648-019-09465-5",
        "url": "https://doi.org/10.1007/s10648-019-09465-5"
    },
    {
        "id": "ref-2-66",
        "code": "[2.66]",
        "citation": "**[2.66]** Deci, E. L., & Ryan, R. M. (2000). The \"What\" and \"Why\" of Goal Pursuits: Human Needs and the Self-Determination of Behavior. Psychological Inquiry, 11(4), 227-268. https://doi.org/10.1207/S15327965PLI1104_01",
        "url": "https://doi.org/10.1207/S15327965PLI1104_01"
    },
    {
        "id": "ref-2-67",
        "code": "[2.67]",
        "citation": "**[2.67]** OpenAI. (2025). Introducing Study Mode and ChatGPT Edu in K-12. https://openai.com/index/chatgpt-study-mode/",
        "url": "https://openai.com/index/chatgpt-study-mode/"
    },
    {
        "id": "ref-2-68",
        "code": "[2.68]",
        "citation": "**[2.68]** Google for Education. (2026). Gemini Notebook and Guided Learning in Google Workspace. https://edu.google.com/ai-gemini-notebook/",
        "url": "https://edu.google.com/ai-gemini-notebook/"
    },
    {
        "id": "ref-2-69",
        "code": "[2.69]",
        "citation": "**[2.69]** Anthropic. (2025). Introducing Claude for Education & Canvas LTI Integration. https://www.anthropic.com/news/introducing-claude-for-education",
        "url": "https://www.anthropic.com/news/introducing-claude-for-education"
    },
    {
        "id": "ref-2-70",
        "code": "[2.70]",
        "citation": "**[2.70]** Microsoft Education. (2026). Study and Learn: AI Built for Your Student in Microsoft 365 Copilot. https://www.microsoft.com/en-us/education/blog/2026/05/study-and-learn-ai-built-for-your-student/",
        "url": "https://www.microsoft.com/en-us/education/blog/2026/05/study-and-learn-ai-built-for-your-student/"
    },
    {
        "id": "ref-2-71",
        "code": "[2.71]",
        "citation": "**[2.71]** xAI. (2025). xAI Pioneer Nationwide AI-Powered Education Program. https://x.ai/news/el-salvador-partnership",
        "url": "https://x.ai/news/el-salvador-partnership"
    },
    {
        "id": "ref-2-72",
        "code": "[2.72]",
        "citation": "**[2.72]** Macina, J., et al. (2025). Math TutorBench: A Benchmark for Measuring Open-ended Pedagogical Capabilities of LLM Tutors. EMNLP. https://aclanthology.org/2025.emnlp-main.11/",
        "url": "https://aclanthology.org/2025.emnlp-main.11/"
    },
    {
        "id": "ref-2-73",
        "code": "[2.73]",
        "citation": "**[2.73]** Coursebox, Mindsmith, & Articulate. (2026). AI Course Authoring, SCORM/LTI and XAPI Export Standards. https://www.coursebox.ai/",
        "url": "https://www.coursebox.ai/"
    },
    {
        "id": "ref-2-74",
        "code": "[2.74]",
        "citation": "**[2.74]** ContainerHomeX, Sun Ice Energy, & OffGridBox. (2025). Modular Off-Grid Containerized Classrooms and Solar Systems. https://www.modular.org/",
        "url": "https://www.modular.org/"
    }
],
};

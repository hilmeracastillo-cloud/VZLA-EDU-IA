import { Chapter } from '../types';

export const executiveSummaryChapter: Chapter = {
  id: 'resumen-ejecutivo',
  slug: 'resumen-ejecutivo',
  part: 'Preliminares',
  partNumber: '0',
  number: '0.2',
  title: 'Resumen Ejecutivo',
  subtitle: 'Hoja de ruta y síntesis estratégica para la transformación educativa',
  author: 'Hilmer Castillo Bescanza',
  authorEmail: 'Hilmeracastillo@gmail.com',
  readingTimeMinutes: 7,
  subSections: [
    {
        "id": "exec-donde-estamos",
        "title": "¿Dónde estamos?",
        "level": 2
    },
    {
        "id": "exec-situacion-ia",
        "title": "¿Cuál es la situación del uso de la IA en la Educación Básica en el Mundo?",
        "level": 2
    },
    {
        "id": "exec-tormenta",
        "title": "¿Cómo aprovechar la Tormenta de Oportunidades que se presentarán?",
        "level": 2
    },
    {
        "id": "exec-medulares",
        "title": "Oportunidades Medulares (1, 2, 3)",
        "level": 3
    },
    {
        "id": "exec-funcionales",
        "title": "Oportunidades Funcionales (4)",
        "level": 3
    },
    {
        "id": "exec-estructurales",
        "title": "Oportunidades Estructurales (5, 6, 7)",
        "level": 3
    }
],
  blocks: [
    {
      id: 'exec-p-0',
      type: 'lead',
      text: `Esta propuesta, para el Programa Esta Tierra de Gracia, tiene tres partes.`,
    },
    {
      id: 'exec-donde-estamos',
      type: 'heading2',
      text: `¿Dónde estamos?`,
    },
    {
      id: 'exec-p-2',
      type: 'paragraph',
      text: `La educación básica de Venezuela necesita una construcción, no una reconstrucción. Su estado se resume con los siguientes valores:`,
    },
    {
      id: 'exec-orderedList-3',
      type: 'orderedList',
      items: [
        "1.Casi 4 millones de estudiantes han sido excluidos del sistema. (ENCOVI UCAB 2024)",
        "2.Más del 70% está sin acceso al Programa de Alimentación Escolar. (HumVenezuela 2024)",
        "3.La mayoría culmina primaria y secundaria sin habilidades fundamentales de lectura, matemática ni ciencias. (DevTech Systems 2023)",
        "4.El 40% de los profesores activos no tiene titulación universitaria. (UCAB/ Excubitus 2025)",
        "5.Hay un déficit de más de 250.000 profesores. (UCAB/ Excubitus 2025)",
        "6.Hay una caída del 76% de la matrícula universitaria en carreras pedagógicas. (UCAB/ Excubitus 2025)",
        "7.La deserción magisterial por estado llega alcanzar hasta el 98% (Estado Bolívar). (UCAB/ Excubitus 2025)",
        "8.La base curricular data de 2007 basado en el Currículo Nacional Bolivariano. (Educere 2007, UNESCO 2016)",
        "9.78% de los hogares reporta inasistencia escolar derivada a escasez de alimentos. (ENCOVI UCAB 2024)",
        "10.La tasa de informalidad laboral alcanza el 56.3% (ILOSTAT 2025)"
],
    },
    {
      id: 'exec-p-4',
      type: 'paragraph',
      text: `Esta situación situación requiere de acciones dramáticas de cambio que permitan una nivelación con el resto del mundo. Esa nivelación no puede ser progresiva porque el mundo se está moviendo a alta velocidad. Debe ejecutarse un salto cualitativo acelerado. Afortunadamente, la IA puede catalizar tal salto.`,
    },
    {
      id: 'exec-situacion-ia',
      type: 'heading2',
      text: `¿Cuál es la situación del uso de la Inteligencia Artificial (IA) en la Educación Básica en el Mundo?`,
    },
    {
      id: 'exec-p-6',
      type: 'paragraph',
      text: `La IA ha hecho posible implementar 3 características fundamentales para un tutor socrático:`,
    },
    {
      id: 'exec-orderedList-7',
      type: 'orderedList',
      items: [
        "1.Identificar las respuestas de atención y motoras de cada estudiante durante el aprendizaje en tiempo real.",
        "2.Basado en ello, generar el contenido adecuado para el próximo paso para los intereses y estilo de aprendizaje del estudiante de acuerdo con el diseño curricular definido.",
        "3.Lograr un dominio de aprendizaje de más del 90% antes de seguir avanzando en el proceso."
],
    },
    {
      id: 'exec-p-8',
      type: 'paragraph',
      text: `Estos 3 puntos anteriores producen no solo calidad del aprendizaje para cada individuo sino una eficacia del proceso en el uso de su tiempo. Esa eficacia libera tiempo escolar para el aprendizaje de Destrezas para La Vida que se requieren cada día más en una sociedad impactada por la IA en todas las dimensiones. Esas destrezas, que no son netamente cognitivas, son aprendizajes sociales, físicos y productivos.`,
    },
    {
      id: 'exec-p-9',
      type: 'paragraph',
      text: `El análisis de 25 casos de estudio del uso de la IA en educación básica en el mundo permite el agrupamiento en 3 categorías:`,
    },
    {
      id: 'exec-orderedList-10',
      type: 'orderedList',
      items: [
        "1.Sistemas tradicionales donde los docentes utilizan la IA para mejorar la calidad de los materiales que usan en el ambiente tradicional.",
        "2.Sistemas que han ido incorporando la tecnología interactiva de los computadores previos al 2022 cuando aparecen herramientas de IA de uso común.",
        "3.Sistemas que se han construido desde cero combinando los avances pedagógicos, psicológicos y la IA para implementar tutores socráticos, plenamente funcionales, en todas las áreas curriculares de aprendizaje cognitivo."
],
    },
    {
      id: 'exec-p-11',
      type: 'paragraph',
      text: `Dentro de cada sistema se destacan 3 dimensiones:`,
    },
    {
      id: 'exec-orderedList-12',
      type: 'orderedList',
      items: [
        "1.Masividad de la implementación",
        "2.Alcance Curricular",
        "3.Costos de implementación"
],
    },
    {
      id: 'exec-p-13',
      type: 'paragraph',
      text: `Venezuela puede aprovechar varias oportunidades que ofrece este panorama de casos y combinar sistemas dentro del nuevo país con un balance cuidadoso de las 3 dimensiones.`,
    },
    {
      id: 'exec-tormenta',
      type: 'heading2',
      text: `¿Cómo aprovechar la Tormenta de Oportunidades que se presentarán?`,
    },
    {
      id: 'exec-p-15',
      type: 'paragraph',
      text: `Ante la variedad y complejidad de los cambios necesarios, los retos deben transformarse en oportunidades y no en obstáculos. Como en toda oportunidad las posibilidades se abren para innumerables soluciones y el momento clave llega: hay que decidir y ejecutar. Como no existen las decisiones perfectas en la vida real, una buena dosis de flexibilidad y realismo siempre se debe tener como norte.`,
    },
    {
      id: 'exec-orderedList-16',
      type: 'orderedList',
      items: [
        "1.Medulares: constituyen la esencia del esfuerzo. Definen los objetivos finales.",
        "2.Funcionales: facilitan la operatividad de los esfuerzos.",
        "3.Estructurales: son el andamiaje con el que se hacen realidad los objetivos finales."
],
    },
    {
      id: 'exec-p-17',
      type: 'paragraph',
      text: `Cuáles son los objetivos finales:`,
    },
    {
      id: 'exec-orderedList-18',
      type: 'orderedList',
      items: [
        "1.Insertar en la sociedad Ciudadanos Productivos.",
        "2.Dotar de un Tutor socrático a cada estudiante que le facilite el aprendizaje cognitivo necesario para ser un Ciudadano Productivo.",
        "3.Dotar a cada egresado de la Educación Básica de un conjunto de Destrezas para La Vida de un Ciudadano Productivo."
],
    },
    {
      id: 'exec-medulares',
      type: 'heading3',
      text: `Oportunidades Medulares`,
    },
    {
      id: 'exec-sub-20',
      type: 'heading3',
      text: `Oportunidad 1`,
    },
    {
      id: 'exec-p-21',
      type: 'paragraph',
      text: `Abrir el diseño curricular a dos ámbitos:`,
    },
    {
      id: 'exec-orderedList-22',
      type: 'orderedList',
      items: [
        "1.Aprendizajes Cognitivos,",
        "2.Aprendizajes para La vida."
],
    },
    {
      id: 'exec-sub-23',
      type: 'heading3',
      text: `Oportunidad 2`,
    },
    {
      id: 'exec-p-24',
      type: 'paragraph',
      text: `Rebalancear los aprendizajes cognitivos entre:`,
    },
    {
      id: 'exec-orderedList-25',
      type: 'orderedList',
      items: [
        "1. Ciencias Sociales,",
        "2.Ciencias Naturales, Tecnología, Ingeniería y Matemáticas (STEM por sus siglas en inglés)."
],
    },
    {
      id: 'exec-sub-26',
      type: 'heading3',
      text: `Oportunidad 3`,
    },
    {
      id: 'exec-p-27',
      type: 'paragraph',
      text: `Seleccionar la mezcla de posibilidades de los Aprendizajes para la Vida:`,
    },
    {
      id: 'exec-list-28',
      type: 'list',
      items: [
        "Resolución de Problemas en Equipo,",
        "Presentación de ideas en público,",
        "Emprendimiento,",
        "Apresto Físico y Nutrición,",
        "Resiliencia Física y Mental,",
        "Expresión Artística y Musical,",
        "Dominio del Inglés,",
        "Compromiso Social,",
        "Viviendo en la era de la IA,",
        "Aprendiendo de por vida,",
        "Destrezas técnicas para el Desarrollo Regional"
],
    },
    {
      id: 'exec-funcionales',
      type: 'heading3',
      text: `Oportunidad Funcional`,
    },
    {
      id: 'exec-sub-30',
      type: 'heading3',
      text: `Oportunidad 4`,
    },
    {
      id: 'exec-p-31',
      type: 'paragraph',
      text: `Establecer los niveles de utilización de la IA que permitan adaptar los esfuerzos a diversas condiciones existentes en el sistema de Educación Básica actual y lograr su ascenso oportuno (Nivel Bajo, Nivel Medio, Nivel Alto).`,
    },
    {
      id: 'exec-list-32',
      type: 'list',
      items: [
        "Nivel Bajo: la IA es utilizada básicamente por profesores para mejorar su planificación de actividades docentes y mejorar la producción de materiales para el aprendizaje.",
        "Nivel Medio: los estudiantes utilizan recursos y herramientas de IA directamente para mejorar el proceso de aprendizaje, pero no exclusivamente un Tutor Socrático individualizado.",
        "Nivel Alto: todo estudiante apoya su aprendizaje cognitivo en un Tutor socrático individual y optimiza el tiempo en el aprendizaje de Destrezas para La Vida"
],
    },
    {
      id: 'exec-estructurales',
      type: 'heading3',
      text: `Oportunidades Estructurales`,
    },
    {
      id: 'exec-sub-34',
      type: 'heading3',
      text: `Oportunidad 5`,
    },
    {
      id: 'exec-p-35',
      type: 'paragraph',
      text: `Redefinir el rol docente:`,
    },
    {
      id: 'exec-list-36',
      type: 'list',
      items: [
        "De transmisor de contenidos a motivador del aprendizaje en el área cognitiva y desarrollador de materiales centrados en el aprendizaje.",
        "Incorporar destrezas de “coaching” para aprendizajes sociales (resolución de problemas en equipo, presentación de proyectos en público, etc) y físicos (apresto y resiliencia física).",
        "Incorporación de especialistas del sector productivo a la formación de los Ciudadanos Productivos."
],
    },
    {
      id: 'exec-sub-37',
      type: 'heading3',
      text: `Oportunidad 6`,
    },
    {
      id: 'exec-p-38',
      type: 'paragraph',
      text: `Establecer un sistema sólido de investigación y desarrollo, dinámico, en el área educativa:`,
    },
    {
      id: 'exec-orderedList-39',
      type: 'orderedList',
      items: [
        "1.Aportes de la Inteligencia Artificial y Robótica",
        "2.Desarrollo de materiales para la facilitación y calidad de los procesos de aprendizaje",
        "3.Cooperativa para el compartimiento de materiales y recursos",
        "4.Formación de autores de nuevos materiales para procesos de aprendizaje"
],
    },
    {
      id: 'exec-sub-40',
      type: 'heading3',
      text: `Oportunidad 7`,
    },
    {
      id: 'exec-p-41',
      type: 'paragraph',
      text: `Infraestructura educativa autosostenible:`,
    },
    {
      id: 'exec-orderedList-42',
      type: 'orderedList',
      items: [
        "1.Preconstrucción rápida",
        "2.Autonomía energética",
        "3.Autonomía de conexión digital",
        "4.Autonomía de agua"
],
    },
    {
      id: 'exec-p-43',
      type: 'paragraph',
      text: `Todas estas oportunidades requieren el involucramiento de lo mejor del talento venezolano. De los que están dentro del país y de los que están afuera. El reto es inmenso, pero es seguro que se puede hacer ¡A la Venezolana!`,
    },
  ],
  footnotes: {},
  references: [],
};

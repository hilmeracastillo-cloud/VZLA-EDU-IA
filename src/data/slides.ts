export interface PresentationSlide {
  id: number;
  part?: string;
  category?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  boxes: {
    title: string;
    badge?: string;
    text?: string;
    bullets?: string[];
    footerNote?: string;
  }[];
  quote?: string;
  themeColor?: 'cyan' | 'gold' | 'rose' | 'emerald' | 'purple';
}

export const PRESENTATION_SLIDES: PresentationSlide[] = [
  {
    id: 1,
    title: 'VENEZUELA, EDUCACIÓN E INTELIGENCIA ARTIFICIAL',
    subtitle: 'Hilmer Castillo Bescanza — Septiembre 2026',
    badge: 'PORTADA EDITORIAL',
    themeColor: 'gold',
    boxes: [
      {
        title: 'Tierra de Gracia en la Era de la Inteligencia Artificial',
        text: 'Una propuesta estratégica para la construcción del nuevo sistema de educación básica en Venezuela, aprovechando la convergencia de modelos de lenguaje, tutores socráticos e infraestructura autónoma.',
        footerNote: 'Contacto: Hilmeracastillo@gmail.com',
      },
    ],
  },
  {
    id: 2,
    part: 'PARTE 1',
    title: '¿Dónde estamos?',
    badge: 'DIAGNÓSTICO NACIONAL',
    themeColor: 'gold',
    boxes: [
      {
        title: 'El Estado Actual del Capital Humano y la Escuela Venezolana',
        text: 'Evaluación del impacto acumulativo de una década de emergencia humanitaria en los estudiantes, los docentes, la familia y el aparato productivo de la nación.',
        footerNote: 'Lienzo en blanco para una reconstrucción cualitativa acelerada',
      },
    ],
  },
  {
    id: 3,
    category: '2026 / REPORTE DIAGNÓSTICO',
    title: 'VENEZUELA: LA TORMENTA DE OPORTUNIDADES',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'La Realidad Base',
        text: 'Entre 2015 y 2025, una emergencia humanitaria compleja desarticuló de manera sistemática el sistema de educación pública primaria y secundaria. El resultado: colapso de infraestructura, deserción masiva y desalineación total de competencias.',
      },
      {
        title: 'El Imperativo',
        text: 'La reconstrucción socioeconómica enfrenta su mayor desafío histórico. Reconstruir mediante vías tradicionales requeriría décadas. Se exige un salto cualitativo; el colapso absoluto nos ha dejado un lienzo en blanco para implementar una disrupción tecnológica sin precedentes.',
      },
    ],
  },
  {
    id: 4,
    category: '2026 / POBLACIÓN ESTUDIANTIL',
    title: 'EL REZAGO ACUMULATIVO',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'Exclusión y Supervivencia',
        bullets: [
          '3.900.000 niños y adolescentes excluidos del sistema escolar formal.',
          '>70% de la matrícula no cuenta con acceso continuo al Programa de Alimentación Escolar (PAE).',
          'Impacto: Daño neurocognitivo directo, pérdida de atención y deserción.',
        ],
      },
      {
        title: 'El Vacío de Competencias',
        bullets: [
          'Ausencia de consolidación en comprensión lectora, lógica matemática básica y ciencias.',
          'Cero instrucción práctica en el idioma inglés y tecnologías de la información.',
          'Resultado: Exclusión drástica de la economía global del conocimiento.',
        ],
      },
    ],
  },
  {
    id: 5,
    category: '2026 / CUERPO DOCENTE',
    title: 'LA CRISIS DE RETENCIÓN',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'Aulas Vacías',
        text: 'De una plantilla histórica de >500.000 docentes, apenas restan 263.769 docentes activos con titulación. Déficit nacional de 255.374+ vacantes (crítico en STEM e idiomas).',
        footerNote: 'Deserción Magisterial por Estado: 98% Bolívar • 55% Zulia',
      },
      {
        title: 'La Fractura Generacional',
        text: '-76% de caída en la matrícula de carreras pedagógicas universitarias. Egresan apenas 4.000 profesionales al año para una demanda de cientos de miles de plazas. La reposición tradicional es matemáticamente imposible.',
      },
    ],
  },
  {
    id: 6,
    category: '2026 / DISEÑO CURRICULAR',
    title: 'EL ESTANCAMIENTO ACADÉMICO',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'Fundamentos Anacrónicos',
        bullets: [
          'El sistema primario y medio sigue operando bajo los cimientos del Currículo Nacional Bolivariano (CNB) del año 2007.',
          'Casi dos décadas sin un rediseño curricular integral y profundo a escala nacional.',
        ],
      },
      {
        title: 'Actualizaciones Superficiales',
        bullets: [
          'Los procesos de transformación (2015-2017, 2025) se han limitado a orientaciones metodológicas y ajustes de planes, no a metodologías cognitivas modernas.',
          'Dependencia generalizada de textos obsoletos (Colección Bicentenario) como soporte central del aprendizaje.',
        ],
      },
    ],
  },
  {
    id: 7,
    category: '2026 / ENTORNO SOCIOFAMILIAR',
    title: 'LA POBREZA MULTIDIMENSIONAL',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'Supervivencia vs. Educación',
        bullets: [
          '78,3% reporta inasistencia escolar derivada de la escasez de alimentos.',
          '55,5% carece de recursos económicos para adquirir uniformes y útiles básicos.',
        ],
      },
      {
        title: 'Colapso de Infraestructura Doméstica',
        text: '56,7% sufre la interrupción recurrente de clases debido al colapso de servicios de electricidad y agua potable.',
        footerNote: 'Resultado: Desarticulación total del acompañamiento pedagógico fuera del aula, acentuando la vulnerabilidad formativa.',
      },
    ],
  },
  {
    id: 8,
    category: '2026 / MERCADO LABORAL',
    title: 'DISTORSIONES ESTRUCTURALES',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'La Ilusión del Empleo',
        bullets: [
          'Desempleo abierto formal nominalmente bajo (6,1% en 2024).',
          'Sin embargo, la tasa de informalidad laboral absorbe un masivo 56,3% de la Población Económicamente Activa.',
          'Compromiso severo de la productividad y movilidad social.',
        ],
      },
      {
        title: 'Demografías Marginadas',
        bullets: [
          'Brecha de Género: Participación femenina (36,0%) vs masculina (63,2%) = Brecha negativa de -27,2 puntos porcentuales.',
          'Fuga de Talento Joven: El 37,1% de los jóvenes (15-24 años) se encuentra en condición NINI (ni estudia ni trabaja), al margen de circuitos de competencia técnica.',
        ],
      },
    ],
  },
  {
    id: 9,
    category: '2026 / DIAGNÓSTICO MATRICIAL',
    title: 'ANATOMÍA DEL COLAPSO',
    themeColor: 'gold',
    boxes: [
      {
        title: 'Bottom-Up Focus (El Individuo — Micro)',
        bullets: [
          'Estudiantes: 3.9M excluidos; >70% sin alimentación diaria (PAE); déficit cognitivo severo.',
          'Hogares: 78.3% sin poder asistir por hambre; 55.5% sin útiles o uniformes.',
          'Jóvenes: 37.1% atrapados en la trampa NINI; desconectados de la economía formal.',
        ],
        footerNote: 'Diagnóstico Micro: Lucha diaria por supervivencia biológica que anula el desarrollo cognitivo.',
      },
      {
        title: 'Top-Down Focus (El Sistema — Macro)',
        bullets: [
          'Docentes: Hemorragia de >250k profesionales; caída del 76% en reposición universitaria.',
          'Currículo: Estancado en diseño anacrónico de 2007; ausencia de STEM e inglés.',
          'Economía: 56.3% de informalidad estructural; infraestructura colapsada (56.7%).',
        ],
        footerNote: 'Diagnóstico Macro: Ecosistema institucional inoperante incapaz de generar o retener valor.',
      },
    ],
  },
  {
    id: 10,
    category: '2026 / EL NUEVO PARADIGMA',
    title: 'EL LIENZO EN BLANCO',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'De la Crisis al Lienzo en Blanco',
        bullets: [
          'La destrucción de los procesos tradicionales nos otorga una oportunidad única: no hay sistemas heredados que defender.',
          'El reto generacional es transformar rápidamente a una inmensa población adulta en Ciudadanos Productivos.',
        ],
      },
      {
        title: 'Formación Técnica Acelerada',
        bullets: [
          'Exponer a los adultos a procesos y herramientas intelectuales y sociales de la nueva era.',
          'Herramientas Inmediatas: Aprovechamiento masivo de YouTube, Chatbots de IA, Realidad Aumentada y Simuladores.',
          'Creación de rutas directas a la productividad sin esperar la reconstrucción de plantas físicas.',
        ],
      },
    ],
  },
  {
    id: 11,
    category: '2026 / EL NUEVO PARADIGMA',
    title: 'RECONQUISTAR LA ATENCIÓN',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'Seducir al Estudiante',
        bullets: [
          'El modelo aburrido de tiza y pizarrón no puede competir con los estímulos audiovisuales digitales de los teléfonos celulares.',
          'La prioridad absoluta es la reconquista del intervalo de atención mediante el aprendizaje individualizado y continuo.',
          'Aprender para vivir mejor debe ser evidente cada día que retornan al aula.',
        ],
      },
      {
        title: 'Redefinir al Docente',
        bullets: [
          'El educador debe evolucionar de un transmisor de contenidos obsoletos a un facilitador (coach) integral.',
          'El nuevo objetivo de vida profesional: enseñar al estudiante cómo aprender a aprender para toda la vida.',
        ],
        footerNote: '(No dar el pescado, enseñar a pescar).',
      },
    ],
  },
  {
    id: 12,
    part: 'PARTE 2',
    title: '¿Cuál es el panorama actual de la innovación educativa alrededor de la Inteligencia Artificial?',
    badge: 'BENCHMARKING GLOBAL (25 CASOS)',
    themeColor: 'gold',
    boxes: [
      {
        title: 'Innovación Mundial: Modelos Socráticos y Plataformas Adaptativas',
        text: 'Análisis de 25 experiencias internacionales en EE. UU., China, Asia, Europa y Latinoamérica a través de 10 dimensiones técnicas, pedagógicas y económicas.',
      },
    ],
  },
  {
    id: 13,
    category: '2026 / FUNDAMENTOS',
    title: 'El Problema de los 2 Sigma',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'La Barrera Histórica (1984)',
        text: 'El psicólogo educativo Benjamin Bloom demostró que un estudiante promedio instruido mediante tutoría individualizada (1-a-1) y aprendizaje para el dominio alcanza un rendimiento de +2 desviaciones estándar (2 Sigma) por encima del aula tradicional, escalando del percentil 50 al 98. Históricamente, este modelo era económicamente inescalable para la educación pública.',
      },
      {
        title: 'El Avance Algorítmico (2022+)',
        text: 'La convergencia de Modelos de Lenguaje Grande (LLMs), sistemas adaptativos e interfaces hiper-contextualizadas ha hecho que el "Tutor Socrático" sea computacionalmente viable. Hoy, la IA permite viabilizar este principio a escala masiva, adaptando la dificultad en tiempo real y detectando lagunas cognitivas sin requerir un tutor humano por cada estudiante.',
      },
    ],
  },
  {
    id: 14,
    category: '2026 / PANORAMA GLOBAL',
    title: 'Taxonomía de la Innovación Global',
    themeColor: 'cyan',
    boxes: [
      {
        title: '3 Categorías Operativas',
        bullets: [
          '1. Docente Aumentado: Sistemas donde el profesor usa IA para planificar (Ej. Aila en Reino Unido).',
          '2. Interactividad Pre-2022: Plataformas adaptativas previas a la IA generativa masiva.',
          '3. Tutor Socrático Autónomo: Ecosistemas construidos desde cero (Ej. Incept, Squirrel AI) que asumen la conducción cognitiva directa.',
        ],
      },
      {
        title: '3 Dimensiones Críticas de Éxito',
        bullets: [
          'Masividad: Capacidad de despliegue a nivel nacional vs. campus cerrados.',
          'Alcance Curricular: Cobertura de materias STEM y humanidades frente a nichos específicos.',
          'Costo de Implementación: Desde bienes públicos digitales gratuitos hasta licencias propietarias de alto costo.',
        ],
      },
    ],
  },
  {
    id: 15,
    category: '2026 / ESTRATEGIA',
    title: 'Ecosistemas de Implementación',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'Bottom-Up Focus (Disrupción Privada)',
        bullets: [
          'Concepto: Micro-escuelas y sistemas cerrados (Alpha Schools, Acton Academy, Synthesis).',
          'Dinámica: Modelo "2-Hour Learning". El trabajo cognitivo se comprime en la mañana.',
          'Economía: Licenciamiento de software hiper-adaptativo ronda $2.000 a $5.500/año.',
          'Disrupción: Alta autonomía sin ataduras burocráticas.',
        ],
      },
      {
        title: 'Top-Down Focus (Políticas de Estado)',
        bullets: [
          'Concepto: Plataformas nacionales estatales (India DIKSHA 2.0, Corea AIDT, España #DigEdu).',
          'Dinámica: Integración incremental en aula regular como soporte al docente.',
          'Economía: Bienes Públicos Digitales. Costo marginal entre $0 y $30 anuales.',
          'Disrupción: Cambio progresivo con foco en equidad masiva.',
        ],
      },
    ],
  },
  {
    id: 16,
    category: '2026 / MECÁNICA COGNITIVA',
    title: 'Anatomía del Aprendizaje Híper-Adaptativo',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'Inmersión Algorítmica Intensiva',
        text: 'Los sistemas de vanguardia (TimeBack/Incept de Alpha Schools o Squirrel AI) exigen entre 10 y 15 horas semanales de interacción focalizada. Utilizan módulos de visión computarizada (como Waste Meter) para monitorear los niveles de atención y detectar respuestas al azar, asegurando un esfuerzo cognitivo real.',
      },
      {
        title: 'Grafos Dinámicos y Nanoconceptos',
        text: 'El currículo abandona la linealidad de los libros de texto y se descompone en decenas de miles de "nanoconceptos". El sistema mantiene en tiempo real un Knowledge Graph (mapa de dominio y lagunas del alumno) y un Interest Graph (aficiones), generando problemas hiper-contextualizados dinámicamente.',
      },
    ],
  },
  {
    id: 17,
    category: '2026 / CIENCIA',
    title: 'Fundamentos Tecno-Pedagógicos',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'Pedagogía y Motivación',
        bullets: [
          'Aprendizaje para el Dominio (Bloom): Exige ≥90% de dominio comprobado antes de avanzar.',
          'Zona de Desarrollo Próximo (Vygotsky): Algoritmos ajustan el reto ligeramente sobre el nivel actual.',
          'Teoría de la Autodeterminación (Deci/Ryan): El entorno digital satisface autonomía, competencia y vinculación.',
        ],
      },
      {
        title: 'La Matemática Computacional',
        bullets: [
          'Rastreo Bayesiano del Conocimiento (BKT): Modelos probabilísticos de dominio continuo.',
          'Teoría de Respuesta al Ítem (IRT): Calibración dinámica para prevenir la sobrecarga cognitiva de Sweller.',
        ],
      },
    ],
  },
  {
    id: 18,
    category: '2026 / INGENIERÍA',
    title: 'Arquitectura Tecnológica',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'Bottom-Up Focus (Propietario y Cerrado)',
        bullets: [
          'Ecosistemas End-to-End desarrollados internamente (Squirrel AI, Synthesis Tutor).',
          'Desacoplamiento estricto entre el agente conversacional interactivo y el motor psicométrico de calificación.',
          'Contenidos y rutas de aprendizaje pertenecientes a la corporación.',
        ],
      },
      {
        title: 'Top-Down Focus (Abierto y Soberano)',
        bullets: [
          'Sistemas orquestados sobre modelos fundacionales (GPT, Claude, Gemini) adaptados a plataformas nacionales.',
          'Uso crítico de RAG (Retrieval-Augmented Generation) y guardrails para eliminar alucinaciones.',
          'Interoperabilidad soberana vía LTI 1.3, xAPI y SCORM.',
        ],
      },
    ],
  },
  {
    id: 19,
    category: '2026 / VIABILIDAD',
    title: 'Economía e Infraestructura Escolar',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'Hardware: La Línea Base No Negociable',
        text: 'La escalabilidad pedagógica requiere un ratio 1:1 de dispositivos por alumno (Chromebook, laptop o tableta con cámara frontal y auriculares con cancelación de ruido). A nivel de red, un salón concurrente exige conectividad Wi-Fi 6 de baja latencia con un ancho de banda dedicado de 1.5 a 3 Mbps por dispositivo activo, respaldado por sistemas eléctricos ininterrumpidos.',
      },
      {
        title: 'Costos Amortizados',
        text: 'La inversión inicial en hardware educativo ($180-$300 por terminal) representa, sobre un ciclo de vida útil de 3 a 4 años, un costo amortizado de $50 a $85 anuales por estudiante. Esta infraestructura física es el prerrequisito para ejecutar el software, el cual oscila entre la gratuidad de los bienes públicos y los $30 en licencias institucionales.',
      },
    ],
  },
  {
    id: 20,
    category: '2026 / CAPITAL HUMANO',
    title: 'El Nuevo Rol Docente',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'Bottom-Up Focus (El Docente como "Guide" o Coach)',
        bullets: [
          'Sustitución de la clase magistral: Opera como orientador motivacional ("Rescatar es robar").',
          'Función: Desbloquear la frustración, gestionar sistemas de motivación y facilitar talleres vespertinos.',
        ],
      },
      {
        title: 'Top-Down Focus (El Docente Facilitador)',
        bullets: [
          'Los profesores mantienen el control pedagógico ("Teachers lead, AI supports").',
          'Función: Usan tableros analíticos en tiempo real para intervenciones diferenciadas y creación de materiales personalizados.',
        ],
      },
    ],
  },
  {
    id: 21,
    category: '2026 / IMPACTO',
    title: 'El Dividendo del Tiempo',
    themeColor: 'gold',
    boxes: [
      {
        title: 'Compresión del Aprendizaje Cognitivo',
        text: 'Gracias a la altísima eficiencia de la tutoría socrática hiper-adaptativa, el dominio de las habilidades fundamentales (Matemáticas, Lectura, Ciencias) se alcanza en bloques matutinos concentrados de apenas 2 a 3 horas. Esto genera un excedente de tiempo sin precedentes en la historia escolar moderna: la recuperación de 3 a 4 horas diarias.',
      },
      {
        title: 'El Currículo "Libre de Pantallas"',
        bullets: [
          'Liderazgo, oratoria y resolución de simulaciones complejas (Conundrums).',
          'Emprendimiento comercial con riesgos y dinero real.',
          'Resiliencia física, mentalidad de crecimiento y esfuerzo sostenido.',
        ],
      },
    ],
  },
  {
    id: 22,
    category: '2026 / CONCLUSIONES',
    title: 'Síntesis Estratégica',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'El Tutor Socrático es una Realidad Desplegada',
        text: 'La instrucción 1-a-1 automatizada no es ciencia ficción; los casos de Squirrel AI y Alpha Schools demuestran su eficacia actual. Para Venezuela, la ejecución paralela es vital: iniciar con integraciones incrementales y de bajo costo (como Khanmigo o modelos fundacionales sobre plataformas públicas) mientras se avanza hacia la autonomía adaptativa total.',
      },
      {
        title: 'El Objetivo: Ciudadanos Productivos',
        text: 'La plataforma tecnológica es el prerrequisito ineludible, pero el objetivo final es puramente humano. La estrategia exige balancear la aceleración cognitiva matutina con el desarrollo de destrezas socioemocionales vespertinas, formando ciudadanos resilientes y emprendedores capaces de insertarse rápidamente en el proceso productivo.',
      },
    ],
  },
  {
    id: 23,
    part: 'PARTE 3',
    title: '¿Hacia dónde vamos?',
    badge: 'LA RUTA VENEZOLANA',
    themeColor: 'gold',
    boxes: [
      {
        title: 'El Modelo de las 7 Oportunidades y los Nodos Modulares (NEMA)',
        text: 'Propuesta de arquitectura nacional para transformar el colapso educativo en un salto de vanguardia tecno-pedagógica adaptado a la realidad venezolana.',
      },
    ],
  },
  {
    id: 24,
    category: '2026 / VISIÓN ESTRATÉGICA',
    title: 'El Lienzo Blanco: Construyendo al Ciudadano Productivo',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'El Desafío del Lienzo Blanco',
        text: 'La educación venezolana no requiere reconstrucción, sino una construcción desde cero. Las circunstancias actuales presentan una oportunidad única, libre del status quo, para implementar un salto cualitativo mediante la IA.',
      },
      {
        title: 'El Objetivo Trascendente',
        text: 'Formar al Ciudadano Productivo. Un individuo equipado tempranamente con herramientas cognitivas, sociales y espirituales, capaz de aprender a aprender para prosperar en una era de constantes transformaciones.',
      },
    ],
  },
  {
    id: 25,
    category: '2026 / ARQUITECTURA DEL CAMBIO',
    title: 'La Dinámica de las 7 Oportunidades',
    themeColor: 'purple',
    boxes: [
      {
        title: 'Oportunidades Medulares',
        bullets: [
          '1. Abrir el Diseño Curricular (Cognitivo vs. Vida).',
          '2. Rebalancear Aprendizajes Cognitivos (Sociales vs. STEM).',
          '3. Seleccionar Aprendizajes para la Vida (11 destrezas).',
        ],
      },
      {
        title: 'Oportunidad Funcional y Estructurales',
        bullets: [
          '4. Segmentación y Promoción (Nivel Bajo, Medio, Alto).',
          '5. Redefinición del Rol Docente (De transmisor a coach).',
          '6. I+D Educativo y Ecosistemas Abiertos.',
          '7. Infraestructura Educativa Autosostenible (NEMA).',
        ],
      },
    ],
  },
  {
    id: 26,
    category: '2026 / OPORTUNIDAD 1',
    title: 'La Bifurcación del Diseño Curricular',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'Aprendizajes Cognitivos (Vía Acelerada)',
        text: 'Abandono del modelo enciclopédico. Uso de Tutores Socráticos de IA para acelerar el dominio de los niveles básicos de Bloom, enfocando el tiempo en la aplicación, evaluación y síntesis.',
      },
      {
        title: 'Aprendizajes para la Vida (Vía Humana)',
        text: 'El tiempo rescatado por la eficiencia de la IA se invierte en destrezas de resiliencia, trabajo en equipo y emprendimiento. El aprendizaje deja de ser netamente individual y cognitivo.',
      },
    ],
  },
  {
    id: 27,
    category: '2026 / OPORTUNIDAD 2',
    title: 'Rebalanceo Cognitivo: Sociales vs STEM',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'Ciencias Sociales Integradas',
        bullets: [
          'Eliminación de compartimientos estancos.',
          'Fusión de Geografía, Economía y Sociología.',
          'Enfoque en comprender la trascendencia de los eventos históricos hacia la realidad contemporánea.',
        ],
      },
      {
        title: 'STEM Aplicado (Ciencia & Tecnología)',
        bullets: [
          'Transferencia rápida a la vida productiva.',
          'Priorización de experimentación práctica y simulaciones.',
          'Uso intensivo de realidad aumentada, robótica y programación conversacional (Vibe Coding).',
        ],
      },
    ],
  },
  {
    id: 28,
    category: '2026 / OPORTUNIDAD 3',
    title: 'Ecosistema de Destrezas para la Vida',
    themeColor: 'gold',
    boxes: [
      {
        title: 'Eje de Acción y Productividad',
        text: 'Habilidades para transformar el entorno: Resolución de problemas (toma de decisiones bajo incertidumbre), Oratoria (presentación persuasiva de proyectos en público), y Emprendimiento (ciclo de negocio y gestión de riesgos reales).',
      },
      {
        title: 'Eje de Resiliencia y Conexión',
        text: 'Fortalecimiento del individuo y su tejido social: Apresto Físico/Nutrición, Resiliencia Mental (esfuerzo sostenido), Arte/Inglés, Compromiso Social, y alfabetización ética en la Era de la IA.',
      },
    ],
  },
  {
    id: 29,
    category: '2026 / OPORTUNIDAD 3: ZOOM TÉCNICO',
    title: 'Sistema Dual: Matrices de Desarrollo Regional',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'Eje Norte y Occidente',
        bullets: [
          'Zulia (Hidrocarburos): Técnicos en bombeo artificial y biorremediación, operando detección de fugas.',
          'Barinas (Agro 4.0): Mecatrónica agrícola y pilotos de drones para telemetría de cultivos (Sensores IoT).',
        ],
      },
      {
        title: 'Eje Sur y Oriente',
        bullets: [
          'Bolívar (Metalurgia): Electromecánica de turbinas, soldadura TIG y concentración gravimétrica.',
          'Nueva Esparta (Economía Azul): Mecánica naval, plantas de desalinización (ósmosis inversa) y micro-redes solares.',
        ],
      },
    ],
  },
  {
    id: 30,
    category: '2026 / OPORTUNIDAD 4',
    title: 'Curva de Activación Algorítmica',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'Transición Operativa (Niveles Bajo y Medio)',
        bullets: [
          'Nivel Bajo: La IA opera en el "back-office". Profesores la utilizan para planificación y generación de materiales.',
          'Nivel Medio: Estudiantes interactúan con herramientas de IA como recurso complementario de consulta.',
        ],
      },
      {
        title: 'El Objetivo Final (Nivel Alto)',
        text: 'Despliegue universal del Tutor Socrático Individualizado. El 100% del aprendizaje cognitivo está hiper-personalizado, logrando eficiencia total y maximizando las horas disponibles para talleres presenciales de destrezas de vida.',
      },
    ],
  },
  {
    id: 31,
    category: '2026 / OPORTUNIDAD 5',
    title: 'Evolución del Perfil Docente',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'El Transmisor de Contenidos (Modelo Tradicional)',
        bullets: [
          'Enfocado en la entrega de información (ilustración).',
          'Trabaja como planificador aislado de clases estandarizadas.',
          'Evalúa memorización y repetición.',
        ],
      },
      {
        title: 'El Motivador y Coach Socrático (Nuevo Modelo)',
        bullets: [
          'Desarrollador de experiencias de aprendizaje basadas en taxonomía de Bloom y matrices "Big Five".',
          'Especialista en dinámicas de equipo, apresto físico y contención emocional.',
          'Enseña a "pescar" guiando mediante interrogación mayéutica.',
        ],
      },
    ],
  },
  {
    id: 32,
    category: '2026 / OPORTUNIDAD 5: ZOOM TÉCNICO',
    title: 'El Arsenal del Nuevo Docente',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'Fábrica Multimodal de Materiales',
        text: 'Transformación de currículos estáticos en ecosistemas vivos. Uso de NotebookLM para generar representaciones múltiples (audio, mapas mentales, infografías) según estilos de aprendizaje, y Gemini / ChatGPT para configurar entornos de descubrimiento guiado.',
      },
      {
        title: '"Vibe Coding" y Arquitectura Pedagógica',
        text: 'Los docentes construyen simuladores sin saber programar (vía Claude/Grok). Especifican parámetros socráticos (ej. "diseña un juego de fracciones, da 3 intentos, provee pistas, nunca des la respuesta directa").',
      },
    ],
  },
  {
    id: 33,
    category: '2026 / OPORTUNIDAD 6',
    title: 'I+D Educativo y Ecosistemas Abiertos',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'Transferencia Tecnológica Acelerada',
        text: 'El sentido de urgencia exige no inventar desde cero. Formalización de convenios inmediatos con pioneros globales (Alpha Schools, Khan Academy) para implementar arquitecturas de IA probadas y evitar los errores históricos de otros sistemas.',
      },
      {
        title: 'Cooperativa Nacional de Materiales',
        text: 'Creación de un banco en línea financiado por el sector privado e instituciones públicas. Un repositorio público, catalogado instruccionalmente, con acceso abierto para docentes, padres y administradores, unificando los recursos de todo el país.',
      },
    ],
  },
  {
    id: 34,
    category: '2026 / OPORTUNIDAD 7',
    title: 'NEMA: Nodos Modulares Autosustentables',
    themeColor: 'cyan',
    boxes: [
      {
        title: 'Autonomía Vital (Aislados del Colapso)',
        text: 'Estructuras desplegables en 48 horas (off-grid). Equipadas con arreglos fotovoltaicos y baterías LiFePO4 para autonomía eléctrica total, combinadas con recolección de lluvia y ósmosis inversa para sanidad y agua potable garantizada.',
      },
      {
        title: 'Conectividad y Función Modular',
        text: 'Enlaces satelitales ininterrumpidos (Starlink) para operar Tutores en la nube. Configurados en bloques funcionales: Aulas Cognitivas (NEMA-A), Talleres Maker/Técnicos (NEMA-T) y Cocinas del Programa de Alimentación Escolar (NEMA-C).',
      },
    ],
  },
  {
    id: 35,
    category: '2026 / SÍNTESIS FINAL',
    title: 'Dinámica del Tiempo: La Sinfonía del Sistema',
    themeColor: 'gold',
    boxes: [
      {
        title: 'La Secuencia Operativa',
        text: 'El cambio no es lineal, es orgánico. El Diseño Curricular (1) actúa como columna vertebral inicial. A partir de allí, el Rebalanceo Cognitivo (2) y las Destrezas (3) se despliegan en paralelo, acelerados o frenados por el diagnóstico de Segmentación de IA (4).',
      },
      {
        title: 'El Ciudadano Productivo',
        text: 'El resultado es un sistema educativo libre del status quo, reflexivo y autocorrectivo. Una arquitectura diseñada no solo para impartir conocimiento, sino para integrar talento humano capaz de crear riqueza y transformar la sociedad civil venezolana.',
      },
    ],
  },
];

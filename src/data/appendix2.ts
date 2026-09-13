import { Chapter, PlatformDetail } from '../types';

export const platformsList: PlatformDetail[] = [
  {
    "id": "plat-1",
    "name": "Alpha Schools (TimeBack / Incept)",
    "institution": "Alpha Schools (TimeBack / Incept)",
    "country": "Global",
    "pedagogicalFoundations": "Dominio estricto (90%), Pomodoro e Interest Graph [2.5], [2.6].",
    "developmentAndPublishers": "TimeBack / Incept [2.7]. Alinear al currículo estadounidense y pruebas normadas NWEA MAP [2.6].",
    "softwareAndHardwareCost": "Software: $2.000-$5.500/año [2.6]. Hardware: Chromebook/laptop con Waste Meter ($250-$350) [2.7].",
    "teacherStudentRatio": "1 guía cada 8-12 alumnos [2.6].",
    "highlights": []
  },
  {
    "id": "plat-2",
    "name": "Khanmigo / Khan Academy",
    "institution": "Khanmigo / Khan Academy",
    "country": "Global",
    "pedagogicalFoundations": "Mayéutica socrática digitalizada y andamiaje vygotskiano [2.4], [2.11].",
    "developmentAndPublishers": "Khan Academy y OpenAI [2.11]. Integración con el repositorio de Khan Academy y MAP Growth [2.12].",
    "softwareAndHardwareCost": "Software: $4-$20 alumno/año [2.11]. Terminal web ($180-$250) [2.11].",
    "teacherStudentRatio": "1 docente cada 25-35 alumnos [2.12].",
    "highlights": []
  },
  {
    "id": "plat-3",
    "name": "Squirrel AI",
    "institution": "Squirrel AI",
    "country": "Global",
    "pedagogicalFoundations": "Descomposición ontológica, diagnóstico bayesiano y remediación focalizada [2.18].",
    "developmentAndPublishers": "Shanghai Yixue Education [2.18]. Grafo de 30.000 nanoconceptos en currículo chino [2.18].",
    "softwareAndHardwareCost": "Software: $500-$1.500/año [2.18]. Terminal dedicada ($200-$300) [2.18].",
    "teacherStudentRatio": "1-2 tutores cada 20-30 terminales [2.18].",
    "highlights": []
  },
  {
    "id": "plat-4",
    "name": "Synthesis (Tutor & Teams)",
    "institution": "Synthesis (Tutor & Teams)",
    "country": "Global",
    "pedagogicalFoundations": "Razonamiento desde primeros principios, teoría de juegos y sistemas complejos [2.14], [2.15].",
    "developmentAndPublishers": "Synthesis School Inc. [2.15].",
    "softwareAndHardwareCost": "Software: $100-$180/mes [2.15]. Computadora personal con tarjeta gráfica GPU ($300-$450) [2.14].",
    "teacherStudentRatio": "1 facilitador cada 6-16 alumnos [2.14].",
    "highlights": []
  },
  {
    "id": "plat-5",
    "name": "Chatbots y Herramientas Fundacionales",
    "institution": "Chatbots y Herramientas Fundacionales",
    "country": "Global",
    "pedagogicalFoundations": "Modelos de lenguaje generalistas adaptados con guardrails pedagógicos.",
    "developmentAndPublishers": "OpenAI Study Mode y ChatGPT Edu (controles FERPA/COPPA) [2.67]; Google Gemini Guided Learning y NotebookLM [2.68]; Claude for Education y Artifacts (simulaciones HTML/JS) [2.69]; Microsoft 365 Copilot Study and Learn [2.70]; Grok (xAI) [2.71]; y herramientas de autoría asistida (Coursebox, Mindsmith, Articulate Rise 360) [2.73].",
    "softwareAndHardwareCost": "Desde gratuito/freemium hasta licencias institucionales ($0 a $30/año).",
    "teacherStudentRatio": "Variable según entorno escolar y plataforma.",
    "highlights": []
  },
  {
    "id": "plat-6",
    "name": "AIDT (Corea del Sur)",
    "institution": "AIDT (Corea del Sur)",
    "country": "Global",
    "pedagogicalFoundations": "Personalización algorítmica y dominio conceptual estatal ('Teachers lead, AI supports') [2.20], [2.21].",
    "developmentAndPublishers": "Ministerio de Educación de Corea del Sur + 12 editoriales [2.20]. Financiado por el Estado ($70M infraestructura + $760M capacitación) [2.20], [2.22].",
    "softwareAndHardwareCost": "100% público estatal; tabletas 1:1 en aulas de 20-28 alumnos [2.20].",
    "teacherStudentRatio": "1 docente cada 20-28 alumnos [2.20].",
    "highlights": []
  },
  {
    "id": "plat-7",
    "name": "DIKSHA 2.0 / PAL (India)",
    "institution": "DIKSHA 2.0 / PAL (India)",
    "country": "Global",
    "pedagogicalFoundations": "Aprendizaje adaptativo continuo y andamiaje multilingüe [2.25].",
    "developmentAndPublishers": "Ministerio de Educación / NCERT / MeitY [2.25]. Alineado a NEP 2020 [2.25].",
    "softwareAndHardwareCost": "$0 (Bien Público Digital) [2.25].",
    "teacherStudentRatio": "1 facilitador por 30-50 alumnos [2.25].",
    "highlights": []
  },
  {
    "id": "plat-8",
    "name": "Aila (Reino Unido - Oak National Academy)",
    "institution": "Aila (Reino Unido - Oak National Academy)",
    "country": "Global",
    "pedagogicalFoundations": "RAG pedagógico cerrado y reducción de carga burocrática docente [2.27], [2.28].",
    "developmentAndPublishers": "Oak National Academy / DfE [2.26]. Currículo Nacional de Inglaterra (Key Stages 1-4) [2.27].",
    "softwareAndHardwareCost": "Gratuito para escuelas públicas [2.26].",
    "teacherStudentRatio": "1 docente cada 22-30 alumnos [2.28].",
    "highlights": []
  },
  {
    "id": "plat-9",
    "name": "Telli / AIS.chat (Alemania)",
    "institution": "Telli / AIS.chat (Alemania)",
    "country": "Global",
    "pedagogicalFoundations": "Acceso seguro multi-LLM, soberanía de datos (GDPR) y creación de escenarios con QR [2.37], [2.38].",
    "developmentAndPublishers": "FWU / Länder [2.37].",
    "softwareAndHardwareCost": "Gratuito (DigitalPakt Schule) [2.37].",
    "teacherStudentRatio": "1 docente cada 20-30 alumnos [2.37].",
    "highlights": []
  },
  {
    "id": "plat-10",
    "name": "Eduten (Finlandia)",
    "institution": "Eduten (Finlandia)",
    "country": "Global",
    "pedagogicalFoundations": "Gamificación adaptativa y analítica de aprendizaje [2.43].",
    "developmentAndPublishers": "Universidad de Turku [2.43]. Penetración en ≥70% de escuelas finlandesas [2.43].",
    "softwareAndHardwareCost": "Público/subvencionado [2.43].",
    "teacherStudentRatio": "1 docente cada 18-24 alumnos [2.42].",
    "highlights": []
  },
  {
    "id": "plat-11",
    "name": "AI Leap Tools / TI-Hüpe (Estonia)",
    "institution": "AI Leap Tools / TI-Hüpe (Estonia)",
    "country": "Global",
    "pedagogicalFoundations": "Formación docente previa y alfabetización algorítmica [2.39], [2.41].",
    "developmentAndPublishers": "Ministerio de Educación e Investigación / OpenAI [2.39].",
    "softwareAndHardwareCost": "Gratuito / Presupuesto de €6,5M/año [2.39].",
    "teacherStudentRatio": "1 docente cada 20-26 alumnos [2.39].",
    "highlights": []
  },
  {
    "id": "plat-12",
    "name": "Letrus (Brasil)",
    "institution": "Letrus (Brasil)",
    "country": "Global",
    "pedagogicalFoundations": "Procesamiento de Lenguaje Natural para corrección diagnóstica de redacción y reescritura iterativa [2.61].",
    "developmentAndPublishers": "Letrus Tecnologia / Secretarías Estatales de Educación [2.61]. Alineado a BNCC y ENEM [2.61].",
    "softwareAndHardwareCost": "Público estatal y filantrópico [2.61].",
    "teacherStudentRatio": "1 docente cada 25-35 alumnos [2.61].",
    "highlights": []
  },
  {
    "id": "plat-13",
    "name": "Sistema de Alerta Temprana - SAT / GEM (Argentina - Mendoza)",
    "institution": "Sistema de Alerta Temprana - SAT / GEM (Argentina - Mendoza)",
    "country": "Global",
    "pedagogicalFoundations": "Analítica predictiva de deserción e intervención preventiva (Escolaridad Protegida) [2.57], [2.58].",
    "developmentAndPublishers": "DGE Mendoza / LIAA-UBA / CAF / CIPPEC [2.57]. Aplicado en 140.000+ alumnos con 96% de cobertura en secundaria [2.57], [2.58].",
    "softwareAndHardwareCost": "Financiación pública estatal [2.57].",
    "teacherStudentRatio": "1 docente / tutor cada 20-30 alumnos [2.57].",
    "highlights": []
  }
];

export const appendix2Chapter: Chapter = {
  id: 'apendice-2',
  slug: 'apendice-2',
  part: 'Apéndices',
  partNumber: 'A2',
  number: 'A.2',
  title: 'Apéndice 2: Fichas Técnicas de los 13 Softwares de IA',
  subtitle: 'Especificaciones técnicas, modelos pedagógicos y costos de licenciamiento',
  author: 'Hilmer Castillo Bescanza',
  readingTimeMinutes: 20,
  subSections: [
    {
        "id": "ap2-intro",
        "title": "Catálogo Tecnológico de Software de IA Educativa",
        "level": 2
    },
    {
        "id": "ap2-tools",
        "title": "Fichas Técnicas de las 13 Plataformas de IA",
        "level": 2
    }
],
  blocks: [
    {
      id: 'ap2-h2-0',
      type: 'heading2',
      text: `2.2.9.1. Alpha Schools (TimeBack / Incept)`,
    },
    {
      id: 'ap2-p-1',
      type: 'paragraph',
      text: `•Fundamentos: Dominio estricto (90%), Pomodoro e Interest Graph [2.5], [2.6].`,
    },
    {
      id: 'ap2-p-2',
      type: 'paragraph',
      text: `•Desarrollo / Editoriales: TimeBack / Incept [2.7]. Alinear al currículo estadounidense y pruebas normadas NWEA MAP [2.6].`,
    },
    {
      id: 'ap2-p-3',
      type: 'paragraph',
      text: `•Costo software / equipamiento: Software: $2.000-$5.500/año [2.6]. Hardware: Chromebook/laptop con Waste Meter ($250-$350) [2.7].`,
    },
    {
      id: 'ap2-p-4',
      type: 'paragraph',
      text: `•Ratio docente/estudiante: 1 guía cada 8-12 alumnos [2.6].`,
    },
    {
      id: 'ap2-h2-5',
      type: 'heading2',
      text: `2.2.9.2. Khanmigo / Khan Academy`,
    },
    {
      id: 'ap2-p-6',
      type: 'paragraph',
      text: `•Fundamentos: Mayéutica socrática digitalizada y andamiaje vygotskiano [2.4], [2.11].`,
    },
    {
      id: 'ap2-p-7',
      type: 'paragraph',
      text: `•Desarrollo / Editoriales: Khan Academy y OpenAI [2.11]. Integración con el repositorio de Khan Academy y MAP Growth [2.12].`,
    },
    {
      id: 'ap2-p-8',
      type: 'paragraph',
      text: `•Costo software / equipamiento: Software: $4-$20 alumno/año [2.11]. Terminal web ($180-$250) [2.11].`,
    },
    {
      id: 'ap2-p-9',
      type: 'paragraph',
      text: `•Ratio docente/estudiante: 1 docente cada 25-35 alumnos [2.12].`,
    },
    {
      id: 'ap2-h2-10',
      type: 'heading2',
      text: `2.2.9.3. Squirrel AI`,
    },
    {
      id: 'ap2-p-11',
      type: 'paragraph',
      text: `•Fundamentos: Descomposición ontológica, diagnóstico bayesiano y remediación focalizada [2.18].`,
    },
    {
      id: 'ap2-p-12',
      type: 'paragraph',
      text: `•Desarrollo / Editoriales: Shanghai Yixue Education [2.18]. Grafo de 30.000 nanoconceptos en currículo chino [2.18].`,
    },
    {
      id: 'ap2-p-13',
      type: 'paragraph',
      text: `•Costo software / equipamiento: Software: $500-$1.500/año [2.18]. Terminal dedicada ($200-$300) [2.18].`,
    },
    {
      id: 'ap2-p-14',
      type: 'paragraph',
      text: `•Ratio docente/estudiante: 1-2 tutores cada 20-30 terminales [2.18].`,
    },
    {
      id: 'ap2-h2-15',
      type: 'heading2',
      text: `2.2.9.4. Synthesis (Tutor & Teams)`,
    },
    {
      id: 'ap2-p-16',
      type: 'paragraph',
      text: `•Fundamentos: Razonamiento desde primeros principios, teoría de juegos y sistemas complejos [2.14], [2.15].`,
    },
    {
      id: 'ap2-p-17',
      type: 'paragraph',
      text: `•Desarrollo / Editoriales: Synthesis School Inc. [2.15].`,
    },
    {
      id: 'ap2-p-18',
      type: 'paragraph',
      text: `•Costo software / equipamiento: Software: $100-$180/mes [2.15]. Computadora personal con tarjeta gráfica GPU ($300-$450) [2.14].`,
    },
    {
      id: 'ap2-p-19',
      type: 'paragraph',
      text: `•Ratio docente/estudiante: 1 facilitador cada 6-16 alumnos [2.14].`,
    },
    {
      id: 'ap2-h2-20',
      type: 'heading2',
      text: `2.2.9.5. Chatbots y Herramientas Fundacionales`,
    },
    {
      id: 'ap2-p-21',
      type: 'paragraph',
      text: `•Fundamentos: Modelos de lenguaje generalistas adaptados con guardrails pedagógicos.`,
    },
    {
      id: 'ap2-p-22',
      type: 'paragraph',
      text: `•Desarrollo / Editoriales: OpenAI Study Mode y ChatGPT Edu (controles FERPA/COPPA) [2.67]; Google Gemini Guided Learning y NotebookLM [2.68]; Claude for Education y Artifacts (simulaciones HTML/JS) [2.69]; Microsoft 365 Copilot Study and Learn [2.70]; Grok (xAI) [2.71]; y herramientas de autoría asistida (Coursebox, Mindsmith, Articulate Rise 360) [2.73].`,
    },
    {
      id: 'ap2-p-23',
      type: 'paragraph',
      text: `•Costo software / equipamiento: Desde gratuito/freemium hasta licencias institucionales ($0 a $30/año).`,
    },
    {
      id: 'ap2-p-24',
      type: 'paragraph',
      text: `•Ratio docente/estudiante: Variable según entorno escolar y plataforma.`,
    },
    {
      id: 'ap2-h2-25',
      type: 'heading2',
      text: `2.2.9.6. AIDT (Corea del Sur)`,
    },
    {
      id: 'ap2-p-26',
      type: 'paragraph',
      text: `•Fundamentos: Personalización algorítmica y dominio conceptual estatal ('Teachers lead, AI supports') [2.20], [2.21].`,
    },
    {
      id: 'ap2-p-27',
      type: 'paragraph',
      text: `•Desarrollo / Editoriales: Ministerio de Educación de Corea del Sur + 12 editoriales [2.20]. Financiado por el Estado ($70M infraestructura + $760M capacitación) [2.20], [2.22].`,
    },
    {
      id: 'ap2-p-28',
      type: 'paragraph',
      text: `•Costo software / equipamiento: 100% público estatal; tabletas 1:1 en aulas de 20-28 alumnos [2.20].`,
    },
    {
      id: 'ap2-p-29',
      type: 'paragraph',
      text: `•Ratio docente/estudiante: 1 docente cada 20-28 alumnos [2.20].`,
    },
    {
      id: 'ap2-h2-30',
      type: 'heading2',
      text: `2.2.9.7. DIKSHA 2.0 / PAL (India)`,
    },
    {
      id: 'ap2-p-31',
      type: 'paragraph',
      text: `•Fundamentos: Aprendizaje adaptativo continuo y andamiaje multilingüe [2.25].`,
    },
    {
      id: 'ap2-p-32',
      type: 'paragraph',
      text: `•Desarrollo / Editoriales: Ministerio de Educación / NCERT / MeitY [2.25]. Alineado a NEP 2020 [2.25].`,
    },
    {
      id: 'ap2-p-33',
      type: 'paragraph',
      text: `•Costo software / equipamiento: $0 (Bien Público Digital) [2.25].`,
    },
    {
      id: 'ap2-p-34',
      type: 'paragraph',
      text: `•Ratio docente/estudiante: 1 facilitador por 30-50 alumnos [2.25].`,
    },
    {
      id: 'ap2-h2-35',
      type: 'heading2',
      text: `2.2.9.8. Aila (Reino Unido - Oak National Academy)`,
    },
    {
      id: 'ap2-p-36',
      type: 'paragraph',
      text: `•Fundamentos: RAG pedagógico cerrado y reducción de carga burocrática docente [2.27], [2.28].`,
    },
    {
      id: 'ap2-p-37',
      type: 'paragraph',
      text: `•Desarrollo / Editoriales: Oak National Academy / DfE [2.26]. Currículo Nacional de Inglaterra (Key Stages 1-4) [2.27].`,
    },
    {
      id: 'ap2-p-38',
      type: 'paragraph',
      text: `•Costo software / equipamiento: Gratuito para escuelas públicas [2.26].`,
    },
    {
      id: 'ap2-p-39',
      type: 'paragraph',
      text: `•Ratio docente/estudiante: 1 docente cada 22-30 alumnos [2.28].`,
    },
    {
      id: 'ap2-h2-40',
      type: 'heading2',
      text: `2.2.9.9. Telli / AIS.chat (Alemania)`,
    },
    {
      id: 'ap2-p-41',
      type: 'paragraph',
      text: `•Fundamentos: Acceso seguro multi-LLM, soberanía de datos (GDPR) y creación de escenarios con QR [2.37], [2.38].`,
    },
    {
      id: 'ap2-p-42',
      type: 'paragraph',
      text: `•Desarrollo / Editoriales: FWU / Länder [2.37].`,
    },
    {
      id: 'ap2-p-43',
      type: 'paragraph',
      text: `•Costo software / equipamiento: Gratuito (DigitalPakt Schule) [2.37].`,
    },
    {
      id: 'ap2-p-44',
      type: 'paragraph',
      text: `•Ratio docente/estudiante: 1 docente cada 20-30 alumnos [2.37].`,
    },
    {
      id: 'ap2-h2-45',
      type: 'heading2',
      text: `2.2.9.10. Eduten (Finlandia)`,
    },
    {
      id: 'ap2-p-46',
      type: 'paragraph',
      text: `•Fundamentos: Gamificación adaptativa y analítica de aprendizaje [2.43].`,
    },
    {
      id: 'ap2-p-47',
      type: 'paragraph',
      text: `•Desarrollo / Editoriales: Universidad de Turku [2.43]. Penetración en ≥70% de escuelas finlandesas [2.43].`,
    },
    {
      id: 'ap2-p-48',
      type: 'paragraph',
      text: `•Costo software / equipamiento: Público/subvencionado [2.43].`,
    },
    {
      id: 'ap2-p-49',
      type: 'paragraph',
      text: `•Ratio docente/estudiante: 1 docente cada 18-24 alumnos [2.42].`,
    },
    {
      id: 'ap2-h2-50',
      type: 'heading2',
      text: `2.2.9.11. AI Leap Tools / TI-Hüpe (Estonia)`,
    },
    {
      id: 'ap2-p-51',
      type: 'paragraph',
      text: `•Fundamentos: Formación docente previa y alfabetización algorítmica [2.39], [2.41].`,
    },
    {
      id: 'ap2-p-52',
      type: 'paragraph',
      text: `•Desarrollo / Editoriales: Ministerio de Educación e Investigación / OpenAI [2.39].`,
    },
    {
      id: 'ap2-p-53',
      type: 'paragraph',
      text: `•Costo software / equipamiento: Gratuito / Presupuesto de €6,5M/año [2.39].`,
    },
    {
      id: 'ap2-p-54',
      type: 'paragraph',
      text: `•Ratio docente/estudiante: 1 docente cada 20-26 alumnos [2.39].`,
    },
    {
      id: 'ap2-h2-55',
      type: 'heading2',
      text: `2.2.9.12. Letrus (Brasil)`,
    },
    {
      id: 'ap2-p-56',
      type: 'paragraph',
      text: `•Fundamentos: Procesamiento de Lenguaje Natural para corrección diagnóstica de redacción y reescritura iterativa [2.61].`,
    },
    {
      id: 'ap2-p-57',
      type: 'paragraph',
      text: `•Desarrollo / Editoriales: Letrus Tecnologia / Secretarías Estatales de Educación [2.61]. Alineado a BNCC y ENEM [2.61].`,
    },
    {
      id: 'ap2-p-58',
      type: 'paragraph',
      text: `•Costo software / equipamiento: Público estatal y filantrópico [2.61].`,
    },
    {
      id: 'ap2-p-59',
      type: 'paragraph',
      text: `•Ratio docente/estudiante: 1 docente cada 25-35 alumnos [2.61].`,
    },
    {
      id: 'ap2-h2-60',
      type: 'heading2',
      text: `2.2.9.13. Sistema de Alerta Temprana - SAT / GEM (Argentina - Mendoza)`,
    },
    {
      id: 'ap2-p-61',
      type: 'paragraph',
      text: `•Fundamentos: Analítica predictiva de deserción e intervención preventiva (Escolaridad Protegida) [2.57], [2.58].`,
    },
    {
      id: 'ap2-p-62',
      type: 'paragraph',
      text: `•Desarrollo / Editoriales: DGE Mendoza / LIAA-UBA / CAF / CIPPEC [2.57]. Aplicado en 140.000+ alumnos con 96% de cobertura en secundaria [2.57], [2.58].`,
    },
    {
      id: 'ap2-p-63',
      type: 'paragraph',
      text: `•Costo software / equipamiento: Financiación pública estatal [2.57].`,
    },
    {
      id: 'ap2-p-64',
      type: 'paragraph',
      text: `•Ratio docente/estudiante: 1 docente / tutor cada 20-30 alumnos [2.57].`,
    },
  ],
  footnotes: {},
  references: [],
};

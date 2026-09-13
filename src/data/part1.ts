import { Chapter } from '../types';

export const part1Chapter: Chapter = {
  id: 'parte-1',
  slug: 'parte-1',
  part: 'Parte I',
  partNumber: '1',
  number: '1',
  title: '¿Dónde estamos?',
  subtitle: 'Diagnóstico multidimensional de la crisis educativa y el mercado laboral',
  author: 'Hilmer Castillo Bescanza',
  readingTimeMinutes: 10,
  subSections: [
    {
        "id": "p1-1-estudiantes",
        "title": "1.1. Estudiantes",
        "level": 2
    },
    {
        "id": "p1-2-profesores",
        "title": "1.2. Profesores",
        "level": 2
    },
    {
        "id": "p1-3-planes",
        "title": "1.3. Planes de Estudio",
        "level": 2
    },
    {
        "id": "p1-4-hogares",
        "title": "1.4. Hogares",
        "level": 2
    },
    {
        "id": "p1-5-trabajadores",
        "title": "1.5. Trabajadores",
        "level": 2
    },
    {
        "id": "p1-6-oportunidades",
        "title": "1.6. Oportunidades",
        "level": 2
    }
],
  blocks: [
    {
      id: 'p1-b-0',
      type: 'lead',
      text: `La reconstrucción socioeconómica e institucional de Venezuela enfrenta su mayor desafío histórico en el ámbito del capital humano [1.1], [1.2], [1.3]. Entre 2015 y 2025, la emergencia humanitaria compleja desarticuló de manera sistemática el sistema de educación pública primaria y secundaria. Eso provocó el colapso de la infraestructura física escolar, la deserción masiva de personal docente calificado y una profunda desalineación entre las competencias transmitidas y los requerimientos de la economía moderna [1.1], [1.2], [1.4].`,
      footnoteIds: ["fn-1-1", "fn-1-2", "fn-1-3", "fn-1-1", "fn-1-2", "fn-1-4"],
    },
    {
      id: 'p1-1-estudiantes',
      type: 'heading2',
      text: `1.1. Estudiantes`,
    },
    {
      id: 'p1-b-2',
      type: 'paragraph',
      text: `La población en edad escolar sufre un rezago pedagógico y nutricional acumulativo [1.1], [1.2], [1.3]. Según datos de la Encuesta Nacional de Condiciones de Vida (ENCOVI), aproximadamente 3.900.000 niños y adolescentes permanecen excluidos del sistema escolar formal [1.1]. Para aquellos inscritos en planteles públicos, las condiciones de aprendizaje son severamente precarias: más del 70% de la matrícula no cuenta con acceso continuo al Programa de Alimentación Escolar (PAE), lo cual afecta directamente el desarrollo neurocognitivo, la capacidad de atención y la retención escolar [1.2].`,
      footnoteIds: ["fn-1-1", "fn-1-2", "fn-1-3", "fn-1-1", "fn-1-2"],
    },
    {
      id: 'p1-b-3',
      type: 'paragraph',
      text: `Las evaluaciones diagnósticas y estandarizadas evidencian que la gran mayoría de los alumnos culmina el ciclo primario y secundario sin consolidar habilidades fundamentales en comprensión lectora, lógica matemática básica ni ciencias experimentales [1.3], [1.4]. La ausencia casi absoluta de instrucción práctica en el idioma inglés y en tecnologías de la información restringe drásticamente sus oportunidades de inserción en la economía global del conocimiento [1.1], [1.3].`,
      footnoteIds: ["fn-1-3", "fn-1-4", "fn-1-1", "fn-1-3"],
    },
    {
      id: 'p1-2-profesores',
      type: 'heading2',
      text: `1.2. Profesores`,
    },
    {
      id: 'p1-b-5',
      type: 'paragraph',
      text: `El cuerpo docente venezolano atraviesa una crisis de retención sin precedentes [1.1], [1.4]. De una plantilla histórica superior a los 500.000 educadores registrados, permanecen activos en las aulas estatales apenas 263.769 docentes con titulación universitaria [1.4]. El déficit magisterial a nivel nacional sobrepasa las 255.374 vacantes, con una concentración crítica en las disciplinas STEM (Science, Technology, Engineering and Mathematics; ciencias, tecnología, ingeniería y matemáticas) e idiomas extranjeros [1.4].`,
      footnoteIds: ["fn-1-1", "fn-1-4", "fn-1-4", "fn-1-4"],
    },
    {
      id: 'p1-b-6',
      type: 'paragraph',
      text: `La deserción magisterial presenta variaciones geográficas extremas debido a la pulverización del poder adquisitivo. En el estado Bolívar la pérdida docente alcanza el 98%, mientras que en el estado Zulia se ubica en torno al 55% [1.4]. La reposición generacional se encuentra fracturada debido a una caída del 76% en la matrícula universitaria en carreras pedagógicas, egresando anualmente apenas 4.000 profesionales para atender una demanda de reemplazo de cientos de miles de plazas [1.1], [1.4].`,
      footnoteIds: ["fn-1-4", "fn-1-1", "fn-1-4"],
    },
    {
      id: 'p1-3-planes de es',
      type: 'heading2',
      text: `1.3. Planes de Estudio`,
    },
    {
      id: 'p1-b-8',
      type: 'paragraph',
      text: `El diseño curricular formal en primaria y media se sustenta fundamentalmente en el Currículo Nacional Bolivariano (CNB) de 2007 [1.5], [1.6], complementado por procesos de transformación parcial (2015-2017) [1.7], [1.8] y una reorganización de contenidos impulsada en 2025 con énfasis en áreas básicas como Matemáticas, Ciencias Naturales y Castellano [1.9], [1.10].`,
      footnoteIds: ["fn-1-5", "fn-1-6", "fn-1-7", "fn-1-8", "fn-1-9", "fn-1-10"],
    },
    {
      id: 'p1-b-9',
      type: 'paragraph',
      text: `A lo largo de estas décadas no se ha consolidado un rediseño curricular integral profundo a escala nacional; las actualizaciones han consistido en orientaciones metodológicas, ajustes de planes de estudio y el uso generalizado de los textos de la Colección Bicentenario como soporte central [1.11], [1.9].`,
      footnoteIds: ["fn-1-11", "fn-1-9"],
    },
    {
      id: 'p1-4-hogares',
      type: 'heading2',
      text: `1.4. Hogares`,
    },
    {
      id: 'p1-b-11',
      type: 'paragraph',
      text: `El entorno sociofamiliar de los estudiantes se encuentra impactado por la pobreza multidimensional [1.1], [1.2]. El 78,3% de los hogares reporta inasistencia escolar derivada de la escasez de alimentos; el 56,7% sufre la interrupción recurrente de las clases por el colapso de los servicios de electricidad y agua potable; y el 55,5% carece de recursos para adquirir uniformes, calzado y útiles básicos [1.1], [1.2].`,
      footnoteIds: ["fn-1-1", "fn-1-2", "fn-1-1", "fn-1-2"],
    },
    {
      id: 'p1-b-12',
      type: 'paragraph',
      text: `La desarticulación del entorno doméstico restringe el acompañamiento pedagógico fuera del aula y acentúa la vulnerabilidad formativa de los menores [1.1], [1.3].`,
      footnoteIds: ["fn-1-1", "fn-1-3"],
    },
    {
      id: 'p1-5-trabajadores',
      type: 'heading2',
      text: `1.5. Trabajadores`,
    },
    {
      id: 'p1-b-14',
      type: 'paragraph',
      text: `El mercado laboral venezolano presenta distorsiones estructurales que comprometen la productividad y limitan la movilidad social [1.1], [1.12]. Aunque la tasa de desempleo abierto formal se ubica en registros nominalmente bajos (entre 6,1% y 7,5%), la tasa de informalidad laboral alcanza el 56,3% de la Población Económicamente Activa (PEA) [1.1], [1.12].`,
      footnoteIds: ["fn-1-1", "fn-1-12", "fn-1-1", "fn-1-12"],
    },
    {
      id: 'p1-b-15',
      type: 'paragraph',
      text: `La brecha de género en la fuerza laboral refleja una inequidad marcada: la tasa de participación femenina se sitúa en 36,0%, frente al 63,2% de participación masculina, lo que representa una brecha negativa de 27,2 puntos porcentuales [1.1], [1.12]. A su vez, el 37,1% de los jóvenes entre 15 y 24 años se encuentra en condición NINI (ni estudia ni trabaja), quedando al margen de los circuitos formales de acumulación de competencias técnicas y profesionales [1.1], [1.12].`,
      footnoteIds: ["fn-1-1", "fn-1-12", "fn-1-1", "fn-1-12"],
    },
    {
      id: 'p1-tabla-1',
      type: 'table',
      tableData: {
        "caption": "Tabla 1. Indicadores del mercado laboral venezolano, 2015-2024",
        "headers": [
                "**Año**",
                "**Población Total (Millones)**",
                "**PEA (Millones)**",
                "**Participación Laboral Total (%)**",
                "**Desempleo Abierto (%)**",
                "**Tasa de Informalidad (%)**",
                "**Brecha de Participación Femenina**"
        ],
        "rows": [
                [
                        "**2015**",
                        "30,08",
                        "14,20",
                        "64,5%",
                        "6,8%",
                        "48,2%",
                        "-16,2%"
                ],
                [
                        "**2017**",
                        "29,40",
                        "13,10",
                        "60,5%",
                        "6,0%",
                        "55,4%",
                        "-18,1%"
                ],
                [
                        "**2019**",
                        "28,20",
                        "11,60",
                        "57,0%",
                        "7,1%",
                        "60,2%",
                        "-20,1%"
                ],
                [
                        "**2021**",
                        "28,70",
                        "11,45",
                        "58,5%",
                        "7,2%",
                        "59,0%",
                        "-21,0%"
                ],
                [
                        "**2023**",
                        "29,20",
                        "11,90",
                        "59,5%",
                        "6,5%",
                        "56,0%",
                        "-25,0%"
                ],
                [
                        "**2024**",
                        "29,37",
                        "12,10",
                        "59,8%",
                        "6,1%",
                        "56,3%",
                        "-27,2%"
                ]
        ]
},
    },
    {
      id: 'p1-6-oportunidade',
      type: 'heading2',
      text: `1.6. Oportunidades`,
    },
    {
      id: 'p1-b-18',
      type: 'paragraph',
      text: `Construir una nueva nación formada por Ciudadanos Productivos es un reto generacional. Las actuales circunstancias nos presentan la oportunidad que a un pintor le presenta un lienzo blanco.`,
    },
    {
      id: 'p1-b-19',
      type: 'paragraph',
      text: `Una inmensa población adulta necesita transformarse en productiva. Una inmensa población en edad escolar requiere herramientas cognitivas, sociales y espirituales que les permita ser feliz y exitosa en un mundo de grandes y aceleradas transformaciones. El aprender a aprender para toda la vida deberá ser el objetivo más trascendente.`,
    },
    {
      id: 'p1-b-20',
      type: 'paragraph',
      text: `A la población adulta se le debe exponer a procesos y herramientas intelectuales y sociales que la transformen, lo más rápido posible, en Ciudadanos Productivos en la era de la Inteligencia Artificial (IA).`,
    },
    {
      id: 'p1-b-21',
      type: 'paragraph',
      text: `Las herramientas están a la mano:`,
    },
    {
      id: 'p1-orderedList-22',
      type: 'orderedList',
      items: [
        "1. Medios de comunicación (televisión, teléfonos celulares, computadores, etc.)",
        "2. Programas de formación técnica acelerada apoyados con tecnologías como:"
],
    },
    {
      id: 'p1-list-23',
      type: 'list',
      items: [
        "YouTube,",
        "Chatbots de IA,",
        "Visión Aumentada,",
        "Simuladores y ambientes de prácticas reales entre otros."
],
    },
    {
      id: 'p1-b-24',
      type: 'paragraph',
      text: `Los procesos no existen.`,
    },
    {
      id: 'p1-b-25',
      type: 'paragraph',
      text: `Por otro lado, la población en edad escolar requiere de una seducción especial después de tal letargo educativo. Las clases aburridas con tiza, pizarrón y láminas estáticas no son opción. La experiencia escolar debe competir con los estímulos audiovisuales que todos los días miran en sus teléfonos o en los de sus padres. La reconquista de los intervalos de atención son la prioridad. Atender a su individualidad es parte de la clave. El aprender para vivir mejor y productivamente debe quedarles claro todos los días cuando retornen al colegio.`,
    },
    {
      id: 'p1-b-26',
      type: 'paragraph',
      text: `Finalmente, los docentes, los facilitadores del aprendizaje deberán repotenciarse. El desarrollar en sus estudiantes las habilidades de aprender a aprender debe ser su nuevo objetivo de vida profesional. No más darle pescado sino enseñarles a pescar. En conclusión, las oportunidades están en crear un ambiente de aprendizaje continuo, para toda la vida, donde la existencia de materiales, herramientas, programas y facilitadores permitan, al recurso humano del país, mantenerse como Ciudadanos Productivos constantemente.`,
    },
  ],
  footnotes: {
    "[1.1]": {
        "id": "1",
        "code": "[1.1]",
        "title": "Informe sobre Condiciones de Vida y Colapso del Sistema Educativo Venezolano. Universidad Católica Andrés Bello",
        "authorOrSource": "Caleido Humano & ENCOVI UCAB",
        "year": "2024",
        "justification": "Evidencia y sustento estadístico para la Parte 1 (Caleido Humano & ENCOVI UCAB, 2024).",
        "url": "https://www.proyectoencovi.com/"
    },
    "[1.2]": {
        "id": "2",
        "code": "[1.2]",
        "title": "Reporte de Monitoreo sobre Emergencia Humanitaria Compleja y Alimentación Escolar en Venezuela",
        "authorOrSource": "HumVenezuela",
        "year": "2024",
        "justification": "Evidencia y sustento estadístico para la Parte 1 (HumVenezuela, 2024).",
        "url": "https://reliefweb.int/organization/humvenezuela"
    },
    "[1.3]": {
        "id": "3",
        "code": "[1.3]",
        "title": "Diagnóstico de la Educación Básica en Venezuela",
        "authorOrSource": "DevTech Systems & ANOVA Policy Research",
        "year": "2023",
        "justification": "Evidencia y sustento estadístico para la Parte 1 (DevTech Systems & ANOVA Policy Research, 2023).",
        "url": "https://devtechsys.com/insights/"
    },
    "[1.4]": {
        "id": "4",
        "code": "[1.4]",
        "title": "Déficit Docente y Crisis Estructural Escolar",
        "authorOrSource": "Monitor de Derechos Civiles y Educación",
        "year": "2025",
        "justification": "Evidencia y sustento estadístico para la Parte 1 (Monitor de Derechos Civiles y Educación, 2025).",
        "url": "https://elucabista.com/"
    },
    "[1.5]": {
        "id": "5",
        "code": "[1.5]",
        "title": "Currículo Nacional Bolivariano: Diseño Curricular del Sistema Educativo Bolivariano. Caracas, septiembre 2007",
        "authorOrSource": "Ministerio del Poder Popular para la Educación",
        "year": "s.f.",
        "justification": "Evidencia y sustento estadístico para la Parte 1 (Ministerio del Poder Popular para la Educación, s.f.).",
        "url": "https://unesdoc.unesco.org/ark:/48223/pf0000221333"
    },
    "[1.6]": {
        "id": "6",
        "code": "[1.6]",
        "title": "(texto completo reproducido). Educere, vol. 11, núm. 39, 2007, pp. 751-775",
        "authorOrSource": "Currículo Nacional Bolivariano: Diseño Curricular del Sistema Educativo Bolivariano",
        "year": "s.f.",
        "justification": "Evidencia y sustento estadístico para la Parte 1 (Currículo Nacional Bolivariano: Diseño Curricular del Sistema Educativo Bolivariano, s.f.).",
        "url": "https://ve.scielo.org/pdf/edu/v11n39/art20.pdf"
    },
    "[1.7]": {
        "id": "7",
        "code": "[1.7]",
        "title": "Resolución 143/2016. Lineamientos del Proceso de Transformación Curricular en todos los Niveles y Modalidades",
        "authorOrSource": "SITEAL IIPE/UNESCO",
        "year": "s.f.",
        "justification": "Evidencia y sustento estadístico para la Parte 1 (SITEAL IIPE/UNESCO, s.f.).",
        "url": "https://siteal.iiep.unesco.org/pais/venezuela"
    },
    "[1.8]": {
        "id": "8",
        "code": "[1.8]",
        "title": "\"Ministerio de Educación ordenó suspender la aplicación del nuevo currículum\" (anuncio del ministro Elías Jaua, enero 2017)",
        "authorOrSource": "Maduradas",
        "year": "s.f.",
        "justification": "Evidencia y sustento estadístico para la Parte 1 (Maduradas, s.f.).",
        "url": "https://maduradas.com/informese-ministro-elias-jaua-ordena-suspender-la-aplicacion-del-nuevo-curriculum/"
    },
    "[1.9]": {
        "id": "9",
        "code": "[1.9]",
        "title": "(Escuela de Educación UCAB). \"Consideraciones de la UCAB sobre reorganización curricular impulsada por MinEducación\". 1 de octubre de 2025",
        "authorOrSource": "El Ucabista",
        "year": "s.f.",
        "justification": "Evidencia y sustento estadístico para la Parte 1 (El Ucabista, s.f.).",
        "url": "https://elucabista.com/2025/10/01/educacion-ucab-propuesta-de-reorganizacion-de-contenidos-del-ministerio-pudiera-generar-impacto-positivo/"
    },
    "[1.10]": {
        "id": "10",
        "code": "[1.10]",
        "title": "\"Ministerio de Educación lanza plan nacional para renovar materias\". 24 de junio de 2025",
        "authorOrSource": "El Nacional",
        "year": "s.f.",
        "justification": "Evidencia y sustento estadístico para la Parte 1 (El Nacional, s.f.).",
        "url": "https://www.elnacional.com/2025/06/ministerio-de-educacion-lanza-plan-nacional-para-renovar-materias/"
    },
    "[1.11]": {
        "id": "11",
        "code": "[1.11]",
        "title": "(IIPE) de la Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO). Perfil del país Venezuela",
        "authorOrSource": "SITEAL Instituto Internacional de Planeamiento de la Educación",
        "year": "s.f.",
        "justification": "Evidencia y sustento estadístico para la Parte 1 (SITEAL Instituto Internacional de Planeamiento de la Educación, s.f.).",
        "url": "https://siteal.iiep.unesco.org/pais/venezuela"
    },
    "[1.12]": {
        "id": "12",
        "code": "[1.12]",
        "title": "Country Profiles: Venezuela Labor Force and Informality Statistics",
        "authorOrSource": "Organización Internacional del Trabajo - ILOSTAT",
        "year": "2025",
        "justification": "Evidencia y sustento estadístico para la Parte 1 (Organización Internacional del Trabajo - ILOSTAT, 2025).",
        "url": "https://ilostat.ilo.org/data/"
    }
},
  references: [
    {
        "id": "ref-1-1",
        "code": "[1.1]",
        "citation": "**[1.1]** Caleido Humano & ENCOVI UCAB. (2024). Informe sobre Condiciones de Vida y Colapso del Sistema Educativo Venezolano. Universidad Católica Andrés Bello. https://www.proyectoencovi.com/",
        "url": "https://www.proyectoencovi.com/"
    },
    {
        "id": "ref-1-2",
        "code": "[1.2]",
        "citation": "**[1.2]** HumVenezuela. (2024). Reporte de Monitoreo sobre Emergencia Humanitaria Compleja y Alimentación Escolar en Venezuela. https://reliefweb.int/organization/humvenezuela",
        "url": "https://reliefweb.int/organization/humvenezuela"
    },
    {
        "id": "ref-1-3",
        "code": "[1.3]",
        "citation": "**[1.3]** DevTech Systems & ANOVA Policy Research. (2023). Diagnóstico de la Educación Básica en Venezuela. https://devtechsys.com/insights/",
        "url": "https://devtechsys.com/insights/"
    },
    {
        "id": "ref-1-4",
        "code": "[1.4]",
        "citation": "**[1.4]** Monitor de Derechos Civiles y Educación (UCAB / Excubitus DHE). (2025). Déficit Docente y Crisis Estructural Escolar. https://elucabista.com/",
        "url": "https://elucabista.com/"
    },
    {
        "id": "ref-1-5",
        "code": "[1.5]",
        "citation": "**[1.5]** Ministerio del Poder Popular para la Educación. Currículo Nacional Bolivariano: Diseño Curricular del Sistema Educativo Bolivariano. Caracas, septiembre 2007. https://unesdoc.unesco.org/ark:/48223/pf0000221333",
        "url": "https://unesdoc.unesco.org/ark:/48223/pf0000221333"
    },
    {
        "id": "ref-1-6",
        "code": "[1.6]",
        "citation": "**[1.6]** Currículo Nacional Bolivariano: Diseño Curricular del Sistema Educativo Bolivariano (texto completo reproducido). Educere, vol. 11, núm. 39, 2007, pp. 751-775. https://ve.scielo.org/pdf/edu/v11n39/art20.pdf",
        "url": "https://ve.scielo.org/pdf/edu/v11n39/art20.pdf"
    },
    {
        "id": "ref-1-7",
        "code": "[1.7]",
        "citation": "**[1.7]** SITEAL IIPE/UNESCO. Resolución 143/2016. Lineamientos del Proceso de Transformación Curricular en todos los Niveles y Modalidades. https://siteal.iiep.unesco.org/pais/venezuela",
        "url": "https://siteal.iiep.unesco.org/pais/venezuela"
    },
    {
        "id": "ref-1-8",
        "code": "[1.8]",
        "citation": "**[1.8]** Maduradas. \"Ministerio de Educación ordenó suspender la aplicación del nuevo currículum\" (anuncio del ministro Elías Jaua, enero 2017). https://maduradas.com/informese-ministro-elias-jaua-ordena-suspender-la-aplicacion-del-nuevo-curriculum/",
        "url": "https://maduradas.com/informese-ministro-elias-jaua-ordena-suspender-la-aplicacion-del-nuevo-curriculum/"
    },
    {
        "id": "ref-1-9",
        "code": "[1.9]",
        "citation": "**[1.9]** El Ucabista (Escuela de Educación UCAB). \"Consideraciones de la UCAB sobre reorganización curricular impulsada por MinEducación\". 1 de octubre de 2025. https://elucabista.com/2025/10/01/educacion-ucab-propuesta-de-reorganizacion-de-contenidos-del-ministerio-pudiera-generar-impacto-positivo/",
        "url": "https://elucabista.com/2025/10/01/educacion-ucab-propuesta-de-reorganizacion-de-contenidos-del-ministerio-pudiera-generar-impacto-positivo/"
    },
    {
        "id": "ref-1-10",
        "code": "[1.10]",
        "citation": "**[1.10]** El Nacional. \"Ministerio de Educación lanza plan nacional para renovar materias\". 24 de junio de 2025. https://www.elnacional.com/2025/06/ministerio-de-educacion-lanza-plan-nacional-para-renovar-materias/",
        "url": "https://www.elnacional.com/2025/06/ministerio-de-educacion-lanza-plan-nacional-para-renovar-materias/"
    },
    {
        "id": "ref-1-11",
        "code": "[1.11]",
        "citation": "**[1.11]** SITEAL Instituto Internacional de Planeamiento de la Educación (IIPE) de la Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO). Perfil del país Venezuela. https://siteal.iiep.unesco.org/pais/venezuela",
        "url": "https://siteal.iiep.unesco.org/pais/venezuela"
    },
    {
        "id": "ref-1-12",
        "code": "[1.12]",
        "citation": "**[1.12]** Organización Internacional del Trabajo - ILOSTAT. (2025). Country Profiles: Venezuela Labor Force and Informality Statistics. https://ilostat.ilo.org/data/",
        "url": "https://ilostat.ilo.org/data/"
    }
],
};

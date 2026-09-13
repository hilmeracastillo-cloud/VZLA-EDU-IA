export type ResourceFormat =
  | 'infografia'
  | 'resumen'
  | 'video'
  | 'presentacion'
  | 'interactive'
  | 'completo';

export interface ResourceItem {
  id: ResourceFormat;
  orderNumber: number;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  badgeColor: string;
  formatType: 'web' | 'pdf' | 'video' | 'presentation' | 'image';
  filePath: string;
  fallbackFileName: string;
  durationOrPages: string;
  highlights: string[];
  youtubeId?: string;
  youtubeUrl?: string;
}

export const WORK_RESOURCES: ResourceItem[] = [
  {
    id: 'infografia',
    orderNumber: 1,
    title: '1-. Infografía',
    subtitle: 'Síntesis Visual Ejecutiva de 1 Página',
    description:
      'Resumen gráfico, en una página de las 3 partes de la propuesta: Diagnóstico, Estado de la IA en Educación y las 7 Oportunidades que se presentan.',
    badge: '1 Página • Visual HD',
    badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-700/60',
    formatType: 'image',
    filePath: '/recursos/infografia-1-pagina.jpg',
    fallbackFileName: 'infografia-1-pagina.jpg',
    durationOrPages: '1 página (Infografía JPG)',
    highlights: [
      'Diagnóstico visual del rezago escolar y brecha educativa',
      'Arquitectura integrada del modelo de Nodos NEMA',
      'Cifras de factibilidad económica y técnica',
      'Visualización directa en alta definición y descargable',
    ],
  },
  {
    id: 'resumen',
    orderNumber: 2,
    title: '2-. Resumen Ejecutivo',
    subtitle: 'Versión en Línea Stand Alone (4 Páginas)',
    description:
      'Se presentan los detalles más relevantes de la propuesta para el programa Esta Tierra de Gracia',
    badge: '4 Páginas • Versión Stand Alone',
    badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-700/60',
    formatType: 'web',
    filePath: '/recursos/resumen-ejecutivo-4-paginas.pdf',
    fallbackFileName: 'resumen-ejecutivo-4-paginas.pdf',
    durationOrPages: '4 páginas (~7 min de lectura)',
    highlights: [
      'Diagnóstico situacional sintético de la educación',
      'Las 7 Oportunidades estratégicas con IA',
      'Hoja de ruta para formuladores de políticas públicas',
      'Lectura en línea independiente y opción descargable en PDF',
    ],
  },
  {
    id: 'video',
    orderNumber: 3,
    title: '3-. Resumen de Video',
    subtitle: 'Recorrido Audiovisual de 7 Minutos',
    description:
      'Recorrido audiovisual de los elementos más relevantes de la propuesta presentada',
    badge: '7:00 min • YouTube',
    badgeColor: 'bg-rose-950 text-rose-300 border-rose-700/60',
    formatType: 'video',
    filePath: '/recursos/video-resumen-7min.mp4',
    fallbackFileName: 'video-resumen-7min.mp4',
    youtubeId: 'v91urPdXtWc',
    youtubeUrl: 'https://youtu.be/v91urPdXtWc?si=eiQAG5ZQU_SNCxoo',
    durationOrPages: '7:00 min (Video)',
    highlights: [
      'Narrativa ejecutiva condensada de la investigación',
      'Reproductor embebido de alta definición en YouTube',
      'Modo pantalla completa y acceso multiplataforma',
      'Disponible directamente desde el canal oficial',
    ],
  },
  {
    id: 'presentacion',
    orderNumber: 4,
    title: '4-. Presentación sin audio',
    subtitle: 'Visor en Línea y Descarga PDF (35 Slides)',
    description:
      'Presentación gráfica en 35 láminas conceptuales que sintetizan el diagnóstico del sistema educativo, el avance algorítmico y las 7 oportunidades estratégicas.',
    badge: '35 Slides • En Línea & PDF',
    badgeColor: 'bg-amber-950 text-amber-300 border-amber-700/60',
    formatType: 'pdf',
    filePath: '/recursos/presentacion-35-slides.pdf',
    fallbackFileName: 'presentacion-35-slides.pdf',
    durationOrPages: '35 láminas (16:9 HD)',
    highlights: [
      'Visor interactivo en línea con navegación y modo presentación',
      '35 láminas visuales con esquemas de alta resolución',
      'Diagnóstico estructural y fundamentación del Problema de los 2 Sigma',
      'Descarga directa del documento PDF original sin esperas',
    ],
  },
  {
    id: 'interactive',
    orderNumber: 5,
    title: '5-. Documento Interactivo',
    subtitle: 'Navegación Digital & Lectura Integral (100 Páginas)',
    description:
      'Propuesta Completa, con referencias activas a lo largo del texto que permiten acceder a las fuentes bibliográficas del documento. El lector puede cambiar el fondo de lectura y ajustar a 3 tamaños de letras. Si se usa un teléfono se puede leer con orientación horizontal.',
    badge: '100 Páginas • Lector en Línea',
    badgeColor: 'bg-indigo-950 text-indigo-300 border-indigo-700/60',
    formatType: 'web',
    filePath: '',
    fallbackFileName: '',
    durationOrPages: '100 páginas (~7 capítulos)',
    highlights: [
      '7 capítulos completos y apéndices regionales (25 países, 13 plataformas)',
      'Buscador léxico instantáneo (Cmd+K)',
      'Resumen Ejecutivo integrado dentro del índice de la obra',
      'Notas al pie y referencias hipervinculadas',
    ],
  },
  {
    id: 'completo',
    orderNumber: 6,
    title: '6-. Documento pdf',
    subtitle: 'Descarga Directa en PDF (~100 Páginas)',
    description:
      'Monografía académica íntegra lista para descarga, archivo o impresión formal: aparato crítico completo, referencias bibliográficas y apéndices de casos y plataformas.',
    badge: '100 Páginas • Descarga PDF',
    badgeColor: 'bg-purple-950 text-purple-200 border-purple-600/70',
    formatType: 'pdf',
    filePath: '/recursos/documento-completo-100-paginas.pdf',
    fallbackFileName: 'documento-completo-100-paginas.pdf',
    durationOrPages: '100 páginas (PDF Descarga)',
    highlights: [
      'Descarga inmediata del archivo PDF completo maquetado en A4',
      'Texto íntegro de investigación con aparato crítico completo',
      'Marco teórico y estado del arte de la IA en educación',
      'Estudios de caso en 25 países y 13 plataformas de IA',
    ],
  },
];

export interface BookMetadata {
  title: string;
  subtitle: string;
  program: string;
  author: string;
  email: string;
  date: string;
  version: string;
  totalChapters: number;
  totalCaseStudies: number;
  totalAITools: number;
}

export const bookMeta: BookMetadata = {
  title: 'Venezuela, Educación e Inteligencia Artificial',
  subtitle: 'Tormenta de Oportunidades',
  program: 'Programa Esta Tierra de Gracia',
  author: 'Hilmer Castillo Bescanza',
  email: 'Hilmeracastillo@gmail.com',
  date: 'Septiembre 2026',
  version: '1.0.0',
  totalChapters: 7,
  totalCaseStudies: 25,
  totalAITools: 13,
};

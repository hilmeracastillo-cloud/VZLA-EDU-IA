export type FontSize = 'sm' | 'base' | 'lg';

export interface Footnote {
  id: string; // e.g. "1.1", "2.4"
  code: string; // e.g. "[1.1]"
  authorOrSource: string;
  year?: string;
  title: string;
  publication?: string;
  url?: string;
  doi?: string;
  justification?: string;
  recommendedReadings?: string[];
  contextTopic?: string;
}

export interface ReferenceItem {
  id: string;
  code: string;
  citation: string;
  url?: string;
  doi?: string;
  year?: string;
}

export type ContentBlockType =
  | 'paragraph'
  | 'heading2'
  | 'heading3'
  | 'lead'
  | 'callout'
  | 'quote'
  | 'statGrid'
  | 'table'
  | 'list'
  | 'orderedList'
  | 'nemaModules'
  | 'regionalGrid';

export interface StatItem {
  value: string;
  label: string;
  detail?: string;
  badge?: string;
}

export interface TableRow {
  [key: string]: string | number;
}

export interface TableData {
  headers: string[];
  rows: (string | number)[][];
  caption?: string;
}

export interface ContentBlock {
  id: string;
  type: ContentBlockType;
  text?: string;
  html?: string;
  items?: string[];
  quoteAuthor?: string;
  stats?: StatItem[];
  tableData?: TableData;
  calloutType?: 'info' | 'highlight' | 'warning' | 'quote';
  footnoteIds?: string[];
}

export interface SubSection {
  id: string;
  title: string;
  level: 2 | 3;
}

export interface Chapter {
  id: string;
  slug: string;
  part: string;
  partNumber: string;
  number: string;
  title: string;
  subtitle?: string;
  author: string;
  authorEmail?: string;
  readingTimeMinutes: number;
  subSections: SubSection[];
  blocks: ContentBlock[];
  footnotes: Record<string, Footnote>;
  references: ReferenceItem[];
}

export interface SearchResult {
  chapterId: string;
  chapterTitle: string;
  part: string;
  blockId: string;
  snippet: string;
  matchType: 'content' | 'footnote' | 'reference';
  score: number;
}

export interface CaseStudy {
  id: string;
  name: string;
  region: 'USA' | 'China' | 'Asia' | 'Europa' | 'Latinoamérica' | 'Global';
  country: string;
  schoolLevel: string;
  subjects: string[];
  teacherRole: string;
  socraticTool: boolean;
  softwareAi: string;
  weeklyTime: string;
  hardware: string;
  softwareCost: string;
  hardwareCost: string;
  yearsActive: string;
  dailyRoutine: string;
  teacherTraining: string;
  aiRole: string;
  studentsPerClass: string;
}

export interface PlatformDetail {
  id: string;
  name: string;
  institution: string;
  country: string;
  pedagogicalFoundations: string;
  developmentAndPublishers: string;
  softwareAndHardwareCost: string;
  teacherStudentRatio: string;
  highlights: string[];
}

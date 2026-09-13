import { Chapter, Footnote, ReferenceItem, SearchResult } from '../types';
import { introductionChapter } from './introduction';
import { executiveSummaryChapter } from './executiveSummary';
import { part1Chapter } from './part1';
import { part2Chapter } from './part2';
import { part3Chapter } from './part3';
import { appendix1Chapter } from './appendix1';
import { appendix2Chapter } from './appendix2';

export const allChapters: Chapter[] = [
  introductionChapter,
  executiveSummaryChapter,
  part1Chapter,
  part2Chapter,
  part3Chapter,
  appendix1Chapter,
  appendix2Chapter,
];

// Helper to get chapter by ID or Slug
export function getChapterById(id: string): Chapter | undefined {
  return allChapters.find((c) => c.id === id || c.slug === id);
}

// Global Footnotes Map
export const allFootnotesMap: Record<string, Footnote> = {
  ...part1Chapter.footnotes,
  ...part2Chapter.footnotes,
  ...part3Chapter.footnotes,
};

// Global References Map
export const allReferences: ReferenceItem[] = [
  ...part1Chapter.references,
  ...part2Chapter.references,
  ...part3Chapter.references,
];

// Search engine across all chapters
export function searchContent(query: string): SearchResult[] {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery || cleanQuery.length < 2) return [];

  const results: SearchResult[] = [];

  allChapters.forEach((chapter) => {
    // 1. Search blocks
    chapter.blocks.forEach((block) => {
      let textToSearch = block.text || '';
      if (block.items) textToSearch += ' ' + block.items.join(' ');
      if (block.tableData) {
        textToSearch += ' ' + block.tableData.headers.join(' ');
        block.tableData.rows.forEach((row) => {
          textToSearch += ' ' + row.join(' ');
        });
      }
      if (block.stats) {
        block.stats.forEach((s) => {
          textToSearch += ` ${s.value} ${s.label} ${s.detail || ''}`;
        });
      }

      const lower = textToSearch.toLowerCase();
      const matchIndex = lower.indexOf(cleanQuery);
      if (matchIndex !== -1) {
        const start = Math.max(0, matchIndex - 60);
        const end = Math.min(textToSearch.length, matchIndex + cleanQuery.length + 90);
        let snippet = textToSearch.substring(start, end);
        if (start > 0) snippet = '...' + snippet;
        if (end < textToSearch.length) snippet = snippet + '...';

        results.push({
          chapterId: chapter.id,
          chapterTitle: chapter.title,
          part: chapter.part,
          blockId: block.id,
          snippet,
          matchType: 'content',
          score: 10,
        });
      }
    });

    // 2. Search footnotes
    Object.values(chapter.footnotes).forEach((fn) => {
      const combined = `${fn.code} ${fn.title} ${fn.authorOrSource} ${fn.justification || ''} ${fn.contextTopic || ''}`.toLowerCase();
      if (combined.includes(cleanQuery)) {
        results.push({
          chapterId: chapter.id,
          chapterTitle: `${chapter.title} (Aparato Crítico)`,
          part: chapter.part,
          blockId: `footnote-${fn.id}`,
          snippet: `Nota ${fn.code}: ${fn.title} - ${fn.justification || fn.authorOrSource}`,
          matchType: 'footnote',
          score: 8,
        });
      }
    });

    // 3. Search references
    chapter.references.forEach((ref) => {
      if (ref.citation.toLowerCase().includes(cleanQuery)) {
        results.push({
          chapterId: chapter.id,
          chapterTitle: `${chapter.title} (Referencias)`,
          part: chapter.part,
          blockId: ref.id,
          snippet: `${ref.code} ${ref.citation}`,
          matchType: 'reference',
          score: 7,
        });
      }
    });
  });

  return results.slice(0, 30);
}

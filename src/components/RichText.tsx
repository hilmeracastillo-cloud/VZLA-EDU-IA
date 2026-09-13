import React from 'react';
import { Footnote, ReferenceItem } from '../types';

interface RichTextProps {
  text: string;
  className?: string;
  onSelectFootnote?: (footnote: Footnote) => void;
  chapterFootnotes?: Record<string, Footnote>;
  chapterReferences?: ReferenceItem[];
  allFootnotesMap?: Record<string, Footnote>;
  allReferences?: ReferenceItem[];
  hangingIndent?: boolean;
}

/**
 * RichText Component
 * Handles:
 * 1. Bold text: **texto en negrita**
 * 2. Italic text: *texto en cursiva*
 * 3. Citations: [X.Y] -> Interactive Footnote / Reference button
 * 4. Hanging indents (Sangría francesa)
 */
export interface HangingIndentParse {
  prefix: string;
  content: string;
}

export function parseHangingIndent(rawText: string): HangingIndentParse | null {
  if (!rawText) return null;
  const trimmed = rawText.trim();

  // 1. Bold bullet prefix: **• ...** or **•**
  const boldBulletMatch = trimmed.match(/^\*\*[•\-\*]\s*(.*?)\*\*(.*)$/s);
  if (boldBulletMatch) {
    const inner = boldBulletMatch[1].trim();
    const rest = boldBulletMatch[2];
    return {
      prefix: '•',
      content: inner ? `**${inner}**${rest}` : rest.trim(),
    };
  }

  // 2. Plain bullet: • **...** or • ...
  const bulletMatch = trimmed.match(/^(?:•|\-|\*|\*\*•\*\*|\*•\*)\s*(.*)$/s);
  if (bulletMatch) {
    return {
      prefix: '•',
      content: bulletMatch[1].trim(),
    };
  }

  // 3. Bold numbered prefix: **1. ...** or **a. ...**
  const boldNumMatch = trimmed.match(/^\*\*(\d+[\.\)]|[a-zA-Z][\.\)])\s*(.*?)\*\*(.*)$/s);
  if (boldNumMatch) {
    const numPrefix = boldNumMatch[1];
    const inner = boldNumMatch[2].trim();
    const rest = boldNumMatch[3];
    return {
      prefix: numPrefix.endsWith('.') || numPrefix.endsWith(')') ? numPrefix : `${numPrefix}.`,
      content: inner ? `**${inner}**${rest}` : rest.trim(),
    };
  }

  // 4. Plain numbered or lettered prefix: 1. or 1) or a. or b)
  const numMatch = trimmed.match(/^(\d+[\.\)]|[a-zA-Z][\.\)])\s*(.*)$/s);
  if (numMatch) {
    const numPrefix = numMatch[1];
    return {
      prefix: numPrefix.endsWith('.') || numPrefix.endsWith(')') ? numPrefix : `${numPrefix}.`,
      content: numMatch[2].trim(),
    };
  }

  // 5. Citation / reference code: [2.1] or **[2.1]**
  const citationMatch = trimmed.match(/^(?:\*\*)?\[(\d+\.\d+)\](?:\*\*)?\s*(.*)$/s);
  if (citationMatch) {
    return {
      prefix: `[${citationMatch[1]}]`,
      content: citationMatch[2].trim(),
    };
  }

  return null;
}

export const RichText: React.FC<RichTextProps> = ({
  text,
  className = '',
  onSelectFootnote,
  chapterFootnotes = {},
  chapterReferences = [],
  allFootnotesMap = {},
  allReferences = [],
  hangingIndent = false,
}) => {
  if (!text) return null;

  // Resolve citation footnote object
  const resolveFootnote = (cleanId: string): Footnote => {
    const bracketCode = `[${cleanId}]`;
    const rawFootnote =
      chapterFootnotes[bracketCode] ||
      chapterFootnotes[cleanId] ||
      allFootnotesMap[bracketCode] ||
      allFootnotesMap[cleanId];

    const refItem =
      chapterReferences.find(
        (r) =>
          r.code === bracketCode ||
          r.id === cleanId ||
          r.id === `ref-${cleanId.replace('.', '-')}`
      ) ||
      allReferences.find(
        (r) =>
          r.code === bracketCode ||
          r.id === cleanId ||
          r.id === `ref-${cleanId.replace('.', '-')}`
      );

    if (rawFootnote) {
      return {
        ...rawFootnote,
        url: rawFootnote.url || refItem?.url,
      };
    }

    if (refItem) {
      return {
        id: cleanId,
        code: bracketCode,
        title: refItem.citation
          .replace(/^\[\d+\.\d+\]\s*/, '')
          .replace(refItem.url || '', '')
          .trim(),
        authorOrSource: refItem.citation.split('.')[0] || 'Fuente de la obra',
        justification:
          'Nota o referencia citada en el cuerpo del texto para validación académica.',
        url: refItem.url,
      };
    }

    return {
      id: cleanId,
      code: bracketCode,
      title: `Referencia citada ${cleanId}`,
      authorOrSource: 'Fuente de la obra',
      justification:
        'Nota al pie citada en el cuerpo del texto para validación académica.',
    };
  };

  // Helper to parse citations within any segment
  const renderCitations = (subText: string, keyPrefix: string): React.ReactNode => {
    const parts = subText.split(/(\[\d+\.\d+\.?\])/g);
    return parts.map((part, idx) => {
      const match = part.match(/\[(\d+\.\d+)\.?\]/);
      if (match) {
        const cleanId = match[1];
        const bracketCode = `[${cleanId}]`;
        const footnote = resolveFootnote(cleanId);

        if (onSelectFootnote) {
          return (
            <button
              key={`${keyPrefix}-cit-${idx}`}
              type="button"
              onClick={() => onSelectFootnote(footnote)}
              title={
                footnote.title
                  ? `${footnote.title} - ${footnote.authorOrSource}`
                  : `Ver referencia ${bracketCode}`
              }
              className="inline-flex items-center mx-1 px-1.5 py-0.5 rounded text-[11px] font-mono font-bold text-indigo-300 bg-indigo-950/80 border border-indigo-700/70 hover:bg-indigo-600 hover:text-white hover:border-indigo-400 transition-all cursor-pointer shadow-sm align-baseline"
            >
              {bracketCode}
            </button>
          );
        }

        return (
          <span
            key={`${keyPrefix}-cit-${idx}`}
            className="inline-flex items-center mx-1 px-1.5 py-0.5 rounded text-[11px] font-mono font-bold text-indigo-300 bg-indigo-950/80 border border-indigo-700/60"
          >
            {bracketCode}
          </span>
        );
      }
      return part;
    });
  };

  // Parse markdown bold (**...**) and italic (*...*) tokens
  const renderTokens = (raw: string): React.ReactNode => {
    // Regex splits by bold (**...**) or single italic (*...*) or citations
    const tokenRegex = /(\*\*[^*]+\*\*|\*[^*]+\*|\[\d+\.\d+\.?\])/g;
    const segments = raw.split(tokenRegex);

    return segments.map((seg, i) => {
      if (seg.startsWith('**') && seg.endsWith('**') && seg.length >= 4) {
        const inner = seg.slice(2, -2);
        return (
          <strong key={`b-${i}`} className="font-bold text-white tracking-tight">
            {renderCitations(inner, `b-${i}`)}
          </strong>
        );
      }
      if (seg.startsWith('*') && seg.endsWith('*') && seg.length >= 2) {
        const inner = seg.slice(1, -1);
        return (
          <em key={`i-${i}`} className="italic text-neutral-200">
            {renderCitations(inner, `i-${i}`)}
          </em>
        );
      }
      if (/^\[\d+\.\d+\.?\]$/.test(seg)) {
        return renderCitations(seg, `c-${i}`);
      }
      return renderCitations(seg, `t-${i}`);
    });
  };

  const isHanging =
    hangingIndent ||
    /^(•|\d+[\.\)]|[a-zA-Z][\.\)]|\[\d+\.\d+\]|\*\*[•\-\*]|\*\*(\d+[\.\)]|[a-zA-Z][\.\)]))\s+/i.test(text.trim());

  if (isHanging) {
    const parsed = parseHangingIndent(text);
    if (parsed) {
      return (
        <span className={`hanging-indent-wrapper inline-flex items-start gap-2.5 sm:gap-3 w-full text-left ${className}`.trim()}>
          <span className="shrink-0 select-none font-semibold text-indigo-400 min-w-[1.25rem] text-right pt-[1px] leading-relaxed">
            {parsed.prefix === '•' ? (
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 align-middle mb-0.5" />
            ) : (
              parsed.prefix
            )}
          </span>
          <span className="flex-1 min-w-0 leading-relaxed">
            {renderTokens(parsed.content)}
          </span>
        </span>
      );
    }
  }

  const finalClass = `${isHanging ? 'sangria-francesa ' : ''}${className}`.trim();

  return <span className={finalClass}>{renderTokens(text)}</span>;
};

export default RichText;

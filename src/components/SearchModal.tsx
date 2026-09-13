import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, BookOpen, Quote, ExternalLink, ArrowRight } from 'lucide-react';
import { searchContent } from '../data/articles';
import { SearchResult } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (chapterId: string, blockId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'content' | 'footnote' | 'reference'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const rawResults = useMemo(() => {
    return searchContent(query);
  }, [query]);

  const filteredResults = useMemo(() => {
    if (activeCategory === 'all') return rawResults;
    return rawResults.filter((r) => r.matchType === activeCategory);
  }, [rawResults, activeCategory]);

  if (!isOpen) return null;

  const renderHighlightedText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <mark
              key={i}
              className="bg-amber-500/30 text-amber-200 px-0.5 rounded font-semibold border-b border-amber-400"
            >
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const suggestedQueries = [
    'Bloom 2 Sigma',
    'Mastery Learning',
    'Alpha Schools',
    'NEMA',
    'Tutor Socrático',
    'Barinas',
    'ENCOVI',
    'Vibe coding',
    'Big Five',
    'Squirrel AI',
  ];

  return (
    <div
      id="modal-search-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center p-2 sm:p-6 md:p-10 animate-fade-in safe-px"
      onClick={onClose}
    >
      <div
        id="modal-search-panel"
        className="w-full max-w-3xl bg-[#111111] rounded-2xl border border-[#262626] shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#222222] bg-[#161616] flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            ref={inputRef}
            id="input-global-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por conceptos, autores, datos estadísticos o citas..."
            className="w-full bg-transparent text-white placeholder-neutral-500 text-base sm:text-lg focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-neutral-400 hover:text-white hover:bg-neutral-800"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2.5 py-1 rounded bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-700 hidden sm:inline-block"
          >
            ESC
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-5 py-2.5 bg-[#0D0D0D] border-b border-[#1F1F1F] flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-neutral-500 text-[11px] uppercase tracking-wider mr-1">
            Filtrar:
          </span>
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-indigo-600 text-white font-medium'
                : 'bg-[#1A1A1A] text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Todos ({rawResults.length})
          </button>
          <button
            onClick={() => setActiveCategory('content')}
            className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
              activeCategory === 'content'
                ? 'bg-indigo-600 text-white font-medium'
                : 'bg-[#1A1A1A] text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Contenido ({rawResults.filter((r) => r.matchType === 'content').length})
          </button>
          <button
            onClick={() => setActiveCategory('footnote')}
            className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
              activeCategory === 'footnote'
                ? 'bg-indigo-600 text-white font-medium'
                : 'bg-[#1A1A1A] text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Notas al pie ({rawResults.filter((r) => r.matchType === 'footnote').length})
          </button>
          <button
            onClick={() => setActiveCategory('reference')}
            className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
              activeCategory === 'reference'
                ? 'bg-indigo-600 text-white font-medium'
                : 'bg-[#1A1A1A] text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Referencias ({rawResults.filter((r) => r.matchType === 'reference').length})
          </button>
        </div>

        {/* Results List or Suggestions */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {query.trim().length >= 2 ? (
            filteredResults.length > 0 ? (
              filteredResults.map((result, idx) => {
                return (
                  <button
                    key={`${result.chapterId}-${result.blockId}-${idx}`}
                    onClick={() => {
                      onNavigate(result.chapterId, result.blockId);
                      onClose();
                    }}
                    className="w-full text-left p-3.5 sm:p-4 rounded-xl bg-[#171717] border border-[#262626] hover:border-indigo-500/70 hover:bg-[#1B1B1B] transition-all group cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase bg-neutral-800 text-neutral-300 border border-neutral-700">
                          {result.part}
                        </span>
                        <span className="font-serif font-semibold text-sm text-neutral-200 group-hover:text-indigo-300 transition-colors">
                          {result.chapterTitle}
                        </span>
                      </div>
                      <span className="text-[11px] text-neutral-500 flex items-center gap-1 group-hover:text-neutral-300">
                        Ir al punto
                        <ArrowRight className="w-3 h-3 text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed line-clamp-3">
                      {renderHighlightedText(result.snippet, query)}
                    </p>

                    <div className="mt-2 flex items-center gap-2 text-[10px] text-neutral-500">
                      {result.matchType === 'footnote' && (
                        <span className="flex items-center gap-1 text-indigo-400">
                          <Quote className="w-2.5 h-2.5" /> Aparato Crítico
                        </span>
                      )}
                      {result.matchType === 'reference' && (
                        <span className="flex items-center gap-1 text-emerald-400">
                          <ExternalLink className="w-2.5 h-2.5" /> Cita Bibliográfica
                        </span>
                      )}
                      {result.matchType === 'content' && (
                        <span className="flex items-center gap-1 text-neutral-400">
                          <BookOpen className="w-2.5 h-2.5" /> Cuerpo de texto
                        </span>
                      )}
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="text-center py-12 text-neutral-500">
                <p className="text-sm">
                  No se encontraron resultados para &ldquo;{query}&rdquo;.
                </p>
                <p className="text-xs mt-1 text-neutral-600">
                  Prueba buscando por palabras clave como &quot;Bloom&quot;, &quot;Alpha&quot;, &quot;NEMA&quot; o &quot;Docente&quot;.
                </p>
              </div>
            )
          ) : (
            <div className="py-6 px-2 space-y-4">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                Términos y Conceptos Clave de Investigación:
              </span>
              <div className="flex flex-wrap gap-2">
                {suggestedQueries.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-[#2B2B2B] text-xs text-neutral-300 hover:text-indigo-300 hover:border-indigo-800 transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-[#141414] border border-[#222222] text-xs text-neutral-400 leading-relaxed">
                <p className="font-serif font-semibold text-neutral-200 mb-1">
                  Búsqueda exhaustiva en tiempo real
                </p>
                Este motor indexa automáticamente todos los capítulos de la obra, el aparato crítico con sus 96 referencias y los 25 casos de estudio internacionales.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  X,
  BookOpen,
  ChevronRight,
  Clock,
  Bookmark,
  ExternalLink,
  Hash,
  Quote,
} from 'lucide-react';
import { Chapter } from '../types';
import { allChapters } from '../data/articles';
import { bookMeta } from '../data/bookMeta';

interface TocModalProps {
  isOpen: boolean;
  activeChapterId: string;
  onClose: () => void;
  onSelectChapter: (chapterId: string, subSectionId?: string) => void;
}

export const TocModal: React.FC<TocModalProps> = ({
  isOpen,
  activeChapterId,
  onClose,
  onSelectChapter,
}) => {
  const [filterText, setFilterText] = useState('');

  if (!isOpen) return null;

  // Group chapters by part
  const chaptersByPart = allChapters.reduce<Record<string, Chapter[]>>(
    (acc, chap) => {
      if (!acc[chap.part]) acc[chap.part] = [];
      acc[chap.part].push(chap);
      return acc;
    },
    {}
  );

  const filterMatches = (chap: Chapter) => {
    if (!filterText.trim()) return true;
    const q = filterText.toLowerCase();
    if (chap.title.toLowerCase().includes(q)) return true;
    if (chap.part.toLowerCase().includes(q)) return true;
    if (chap.subSections.some((s) => s.title.toLowerCase().includes(q)))
      return true;
    return false;
  };

  return (
    <div
      id="modal-toc-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-start animate-fade-in"
      onClick={onClose}
    >
      <div
        id="modal-toc-panel"
        className="w-full max-w-xl sm:max-w-2xl bg-[#0F0F0F] h-full border-r border-[#262626] shadow-2xl flex flex-col overflow-hidden text-neutral-200 pl-[max(0rem,env(safe-area-inset-left))] pb-[max(0rem,env(safe-area-inset-bottom))]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#222222] bg-[#141414] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-950/60 border border-indigo-800/40 text-indigo-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-white tracking-tight">
                Tabla de Contenidos
              </h2>
              <p className="text-xs text-neutral-400">
                {bookMeta.title} • {bookMeta.author}
              </p>
            </div>
          </div>
          <button
            id="btn-close-toc"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter input */}
        <div className="p-4 border-b border-[#1E1E1E] bg-[#111111]">
          <input
            id="input-filter-toc"
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Filtrar por sección, tema o capítulo..."
            className="w-full px-3.5 py-2 rounded-lg bg-[#181818] border border-[#2B2B2B] text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        {/* Chapters list */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {Object.entries(chaptersByPart).map(([partName, chapters]) => {
            const visibleChaps = chapters.filter(filterMatches);
            if (visibleChaps.length === 0) return null;

            return (
              <div key={partName} className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase">
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{partName}</span>
                </div>

                <div className="space-y-3 pl-2 border-l border-[#222222]">
                  {visibleChaps.map((chap) => {
                    const isActive = chap.id === activeChapterId;
                    const footnoteCount = Object.keys(chap.footnotes).length;
                    const refCount = chap.references.length;

                    return (
                      <div
                        key={chap.id}
                        id={`toc-item-${chap.id}`}
                        className={`rounded-xl border transition-all p-4 ${
                          isActive
                            ? 'bg-indigo-950/20 border-indigo-700/60 shadow-lg shadow-indigo-950/10'
                            : 'bg-[#141414] border-[#242424] hover:border-neutral-600 hover:bg-[#181818]'
                        }`}
                      >
                        {/* Chapter main click */}
                        <button
                          onClick={() => {
                            onSelectChapter(chap.id);
                            onClose();
                          }}
                          className="w-full text-left group cursor-pointer"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <span className="text-[11px] font-mono font-medium text-neutral-400">
                                {chap.number !== '0.1' && chap.number !== '0.2'
                                  ? `Capítulo ${chap.number}`
                                  : 'Preliminar'}
                              </span>
                              <h3
                                className={`font-serif text-base font-semibold tracking-tight transition-colors ${
                                  isActive
                                    ? 'text-indigo-300'
                                    : 'text-neutral-100 group-hover:text-white'
                                }`}
                              >
                                {chap.title}
                              </h3>
                              {chap.subtitle && (
                                <p className="text-xs text-neutral-400 mt-1 line-clamp-1 font-sans">
                                  {chap.subtitle}
                                </p>
                              )}
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-neutral-500 shrink-0">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{chap.readingTimeMinutes} min</span>
                              <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                          </div>
                        </button>

                        {/* Sub-sections list */}
                        {chap.subSections.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-[#222222] space-y-1.5">
                            <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block">
                              Secciones Clave
                            </span>
                            <div className="grid grid-cols-1 gap-1 text-xs">
                              {chap.subSections.map((sub) => (
                                <button
                                  key={sub.id}
                                  onClick={() => {
                                    onSelectChapter(chap.id, sub.id);
                                    onClose();
                                  }}
                                  className={`flex items-center gap-2 py-1 px-2 rounded hover:bg-[#202020] text-neutral-400 hover:text-indigo-300 transition-colors text-left cursor-pointer ${
                                    sub.level === 3 ? 'pl-4 text-neutral-400' : sub.level === 4 ? 'pl-6 text-neutral-500 text-[11px]' : ''
                                  }`}
                                >
                                  <Hash className="w-3 h-3 text-neutral-600 shrink-0" />
                                  <span className="truncate">{sub.title}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Direct Shortcuts for Footnotes & References */}
                        {(footnoteCount > 0 || refCount > 0) && (
                          <div className="mt-3 pt-2.5 border-t border-[#1F1F1F] flex items-center gap-2 text-[11px]">
                            {footnoteCount > 0 && (
                              <button
                                onClick={() => {
                                  onSelectChapter(chap.id, 'chapter-footnotes-section');
                                  onClose();
                                }}
                                className="flex items-center gap-1 px-2 py-1 rounded bg-[#1A1A1A] border border-[#2B2B2B] text-neutral-400 hover:text-indigo-300 hover:border-indigo-800 transition-colors cursor-pointer"
                              >
                                <Quote className="w-3 h-3 text-indigo-400" />
                                <span>Notas al pie ({footnoteCount})</span>
                              </button>
                            )}
                            {refCount > 0 && (
                              <button
                                onClick={() => {
                                  onSelectChapter(chap.id, 'chapter-references-section');
                                  onClose();
                                }}
                                className="flex items-center gap-1 px-2 py-1 rounded bg-[#1A1A1A] border border-[#2B2B2B] text-neutral-400 hover:text-emerald-300 hover:border-emerald-800 transition-colors cursor-pointer"
                              >
                                <ExternalLink className="w-3 h-3 text-emerald-400" />
                                <span>Referencias ({refCount})</span>
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

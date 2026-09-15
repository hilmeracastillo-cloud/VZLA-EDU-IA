import React, { useState, useRef, useEffect } from 'react';
import {
  BookOpen,
  Search,
  Download,
  ChevronDown,
  ChevronRight,
  Check,
  Smartphone,
  Layers,
  ArrowLeft,
  Mail,
} from 'lucide-react';
import { Chapter, FontSize } from '../types';
import { bookMeta } from '../data/bookMeta';
import { allChapters } from '../data/articles';

interface HeaderProps {
  currentChapter: Chapter;
  readingProgress: number; // 0 to 100
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  onOpenToc: () => void;
  onOpenSearch: () => void;
  onOpenPdfExport: () => void;
  onOpenFormats: () => void;
  onNavigateChapter?: (chapterId: string) => void;
  onBackToLanding?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentChapter,
  readingProgress,
  fontSize,
  setFontSize,
  onOpenToc,
  onOpenSearch,
  onOpenPdfExport,
  onOpenFormats,
  onNavigateChapter,
  onBackToLanding,
}) => {
  const [isChapterMenuOpen, setIsChapterMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close chapter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsChapterMenuOpen(false);
      }
    };
    if (isChapterMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isChapterMenuOpen]);

  const currentIndex = allChapters.findIndex((c) => c.id === currentChapter.id);

  return (
    <header
      id="main-editorial-header"
      className="sticky top-0 z-40 w-full bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222222] transition-colors"
    >
      {/* Top Reading Progress Bar */}
      <div className="w-full h-[2px] bg-[#1A1A1A]">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-emerald-400 transition-all duration-150 ease-out"
          style={{ width: `${Math.max(2, Math.min(100, readingProgress))}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto safe-px h-14 sm:h-16 landscape:h-12 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Índice button & Book / Chapter Title */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          {/* Back to Landing / Menú de Opciones */}
          {onBackToLanding && (
            <button
              id="btn-header-back-menu"
              onClick={onBackToLanding}
              aria-label="Regresar al Menú de opciones"
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold text-neutral-200 bg-[#141414] hover:bg-[#202020] border border-[#2e2e2e] hover:border-indigo-500/60 hover:text-white transition-all cursor-pointer shadow-sm shrink-0 whitespace-nowrap"
              title="Regresar al Menú de opciones"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Menú de opciones</span>
            </button>
          )}

          {/* Main TOC Button - ALWAYS clearly labeled with icon + text on ALL screens */}
          <button
            id="btn-toc-trigger"
            onClick={onOpenToc}
            aria-label="Abrir Tabla de Contenidos Completa"
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-300 bg-indigo-950/50 border border-indigo-700/60 hover:bg-indigo-900/60 hover:text-white hover:border-indigo-500 transition-all cursor-pointer shrink-0 shadow-sm"
          >
            <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
            <span className="inline font-medium">Índice</span>
            <span className="hidden xs:inline-block px-1.5 py-0.2 rounded text-[10px] bg-indigo-900/60 text-indigo-200 border border-indigo-700/50">
              {currentIndex + 1}/{allChapters.length}
            </span>
          </button>

          {/* Quick Chapter Selector Dropdown */}
          <div ref={menuRef} className="relative min-w-0">
            <button
              id="btn-quick-chapter-selector"
              onClick={() => setIsChapterMenuOpen(!isChapterMenuOpen)}
              className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[#141414] hover:bg-[#1C1C1C] border border-[#262626] hover:border-neutral-600 transition-all text-left min-w-0 max-w-[160px] xs:max-w-[220px] sm:max-w-[340px] md:max-w-[420px] cursor-pointer"
              title="Seleccionar capítulo"
            >
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-indigo-400 shrink-0 uppercase tracking-tight">
                {currentChapter.number !== '0.1' && currentChapter.number !== '0.2'
                  ? `Cap. ${currentChapter.number}`
                  : 'Inicio'}
              </span>
              <span className="text-xs sm:text-sm text-neutral-200 font-medium truncate">
                {currentChapter.title}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 shrink-0 transition-transform ${isChapterMenuOpen ? 'rotate-180 text-indigo-400' : ''}`} />
            </button>

            {/* Dropdown Menu of Chapters */}
            {isChapterMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 sm:w-84 bg-[#121212] border border-[#2B2B2B] rounded-xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150 py-1 max-h-[70vh] overflow-y-auto">
                <div className="px-3 py-2 border-b border-[#202020] bg-[#161616] flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    Cambiar de Capítulo
                  </span>
                  <button
                    onClick={() => {
                      setIsChapterMenuOpen(false);
                      onOpenToc();
                    }}
                    className="text-[11px] text-indigo-400 hover:underline"
                  >
                    Ver índice completo
                  </button>
                </div>
                {allChapters.map((chap, idx) => {
                  const isCurrent = chap.id === currentChapter.id;
                  return (
                    <button
                      key={chap.id}
                      onClick={() => {
                        setIsChapterMenuOpen(false);
                        if (onNavigateChapter) onNavigateChapter(chap.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-full text-left px-3.5 py-2.5 flex items-start gap-2.5 transition-colors cursor-pointer border-b border-[#1A1A1A] last:border-0 ${
                        isCurrent
                          ? 'bg-indigo-950/40 text-indigo-200 font-semibold'
                          : 'text-neutral-300 hover:bg-[#1A1A1A] hover:text-white'
                      }`}
                    >
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1E1E1E] text-neutral-400 shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs truncate">{chap.title}</div>
                        <div className="text-[10px] text-neutral-500 truncate">{chap.part}</div>
                      </div>
                      {isCurrent && <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-1" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Author Name and Email Display in Header */}
          <div className="hidden xl:flex items-center gap-2 text-xs text-neutral-400 border-l border-[#222] pl-3">
            <span className="text-neutral-300 font-medium">{bookMeta.author}</span>
            <span className="text-neutral-600">•</span>
            <a
              href={`mailto:${bookMeta.email}`}
              className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 hover:underline font-mono text-[11px]"
              title={`Escribir a ${bookMeta.email}`}
            >
              <Mail className="w-3 h-3" />
              <span>{bookMeta.email}</span>
            </a>
          </div>
        </div>

        {/* Right: Study & Reader Tools (Responsive for Mobile, Tablet, PC & Landscape) */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Font Size Adjuster - Compact on small portrait, Full on tablet/desktop/landscape */}
          <div
            id="font-size-controls"
            className="hidden sm:flex items-center bg-[#141414] border border-[#262626] rounded-lg p-0.5 text-xs text-neutral-400"
          >
            <button
              id="btn-font-sm"
              onClick={() => setFontSize('sm')}
              title="Texto Pequeño (15px)"
              className={`px-2 py-1 rounded transition-colors ${
                fontSize === 'sm'
                  ? 'bg-neutral-800 text-white font-semibold'
                  : 'hover:text-neutral-200'
              }`}
            >
              A-
            </button>
            <button
              id="btn-font-base"
              onClick={() => setFontSize('base')}
              title="Texto Normal (17px)"
              className={`px-2 py-1 rounded transition-colors ${
                fontSize === 'base'
                  ? 'bg-neutral-800 text-white font-semibold'
                  : 'hover:text-neutral-200'
              }`}
            >
              A
            </button>
            <button
              id="btn-font-lg"
              onClick={() => setFontSize('lg')}
              title="Texto Grande (19.5px)"
              className={`px-2 py-1 rounded transition-colors ${
                fontSize === 'lg'
                  ? 'bg-neutral-800 text-white font-semibold'
                  : 'hover:text-neutral-200'
              }`}
            >
              A+
            </button>
          </div>

          {/* Formatos y Recursos Trigger Button */}
          <button
            id="btn-formats-trigger"
            onClick={onOpenFormats}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-300 bg-amber-950/40 border border-amber-700/50 hover:bg-amber-900/50 hover:border-amber-500 hover:text-white transition-all cursor-pointer shadow-sm"
            title="Ver opciones de interacción: Infografía, Resumen, Video, Presentación, Completo"
          >
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span className="inline">Formatos</span>
            <span className="hidden xs:inline-block px-1 py-0.2 rounded text-[9px] bg-amber-900/60 text-amber-200 border border-amber-700/40">
              6
            </span>
          </button>

          {/* Search Trigger */}
          <button
            id="btn-search-trigger"
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-300 bg-[#141414] border border-[#262626] hover:border-neutral-500 hover:text-white transition-all cursor-pointer"
            title="Buscar en la obra (Ctrl/Cmd + K)"
          >
            <Search className="w-3.5 h-3.5 text-neutral-400" />
            <span className="hidden md:inline">Buscar</span>
            <kbd className="hidden lg:inline-block text-[10px] bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded border border-neutral-700">
              ⌘K
            </kbd>
          </button>

          {/* PDF Export Trigger */}
          <button
            id="btn-pdf-trigger"
            onClick={onOpenPdfExport}
            className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium text-emerald-300 bg-emerald-950/30 border border-emerald-800/40 hover:bg-emerald-900/50 hover:border-emerald-500 transition-all cursor-pointer"
            title="Descargar versión PDF maquetada"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};


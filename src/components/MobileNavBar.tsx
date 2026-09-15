import React from 'react';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Search,
  Type,
  Download,
  Layers,
  ArrowLeft,
} from 'lucide-react';
import { Chapter, FontSize } from '../types';
import { allChapters } from '../data/articles';

interface MobileNavBarProps {
  currentChapter: Chapter;
  previousChapter?: Chapter;
  nextChapter?: Chapter;
  readingProgress: number;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  onOpenToc: () => void;
  onOpenSearch: () => void;
  onOpenPdfExport: () => void;
  onOpenFormats: () => void;
  onNavigateChapter: (chapterId: string) => void;
  onBackToLanding?: () => void;
}

export const MobileNavBar: React.FC<MobileNavBarProps> = ({
  currentChapter,
  previousChapter,
  nextChapter,
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
  const currentIndex = allChapters.findIndex((c) => c.id === currentChapter.id);
  const totalChapters = allChapters.length;

  const cycleFontSize = () => {
    if (fontSize === 'sm') setFontSize('base');
    else if (fontSize === 'base') setFontSize('lg');
    else setFontSize('sm');
  };

  return (
    <nav
      id="mobile-editorial-bottom-nav"
      aria-label="Navegación móvil del libro"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0C0C0C]/95 backdrop-blur-md border-t border-[#262626] shadow-2xl transition-all block md:hidden safe-pb"
    >
      {/* Mini Reading Progress line right above bottom bar */}
      <div className="w-full h-[2px] bg-[#1E1E1E]">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-150"
          style={{ width: `${Math.max(2, Math.min(100, readingProgress))}%` }}
        />
      </div>

      <div className="max-w-md mx-auto px-3 py-1.5 flex items-center justify-between gap-1 text-xs">
        {/* Menú de opciones Button */}
        {onBackToLanding && (
          <button
            id="btn-mobile-back-menu"
            onClick={onBackToLanding}
            aria-label="Regresar al Menú de opciones"
            className="flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-xl text-neutral-300 hover:text-white hover:bg-neutral-800/60 transition-all active:scale-95 cursor-pointer min-w-[50px]"
            title="Regresar al Menú de opciones"
          >
            <ArrowLeft className="w-4 h-4 mb-0.5 text-indigo-400" />
            <span className="text-[9.5px] font-medium leading-tight whitespace-nowrap">Menú de opciones</span>
          </button>
        )}

        {/* Previous Chapter Button */}
        <button
          onClick={() => {
            if (previousChapter) {
              onNavigateChapter(previousChapter.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          disabled={!previousChapter}
          aria-label="Ir al capítulo anterior"
          className={`flex flex-col items-center justify-center p-2 rounded-xl min-w-[58px] transition-all cursor-pointer ${
            previousChapter
              ? 'text-neutral-300 hover:text-white hover:bg-neutral-800/60 active:scale-95'
              : 'text-neutral-600 opacity-40 cursor-not-allowed'
          }`}
          title={previousChapter ? `Anterior: ${previousChapter.title}` : 'Primer capítulo'}
        >
          <ChevronLeft className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Anterior</span>
        </button>

        {/* Central Index / Chapter Selector Button */}
        <button
          onClick={onOpenToc}
          aria-label="Abrir Índice y Lista de Capítulos"
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-indigo-950/60 border border-indigo-700/60 text-indigo-200 hover:bg-indigo-900/70 hover:text-white transition-all shadow-md active:scale-95 cursor-pointer mx-1"
        >
          <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
          <div className="flex flex-col items-center leading-none">
            <span className="text-[11px] font-bold tracking-wide">
              Índice ({currentIndex + 1}/{totalChapters})
            </span>
            <span className="text-[9px] text-indigo-300/80 mt-0.5 max-w-[120px] truncate">
              {currentChapter.title}
            </span>
          </div>
        </button>

        {/* Next Chapter Button */}
        <button
          onClick={() => {
            if (nextChapter) {
              onNavigateChapter(nextChapter.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          disabled={!nextChapter}
          aria-label="Ir al capítulo siguiente"
          className={`flex flex-col items-center justify-center p-2 rounded-xl min-w-[58px] transition-all cursor-pointer ${
            nextChapter
              ? 'text-neutral-300 hover:text-white hover:bg-neutral-800/60 active:scale-95'
              : 'text-neutral-600 opacity-40 cursor-not-allowed'
          }`}
          title={nextChapter ? `Siguiente: ${nextChapter.title}` : 'Último capítulo'}
        >
          <ChevronRight className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Siguiente</span>
        </button>

        {/* Formatos y Recursos */}
        <button
          onClick={onOpenFormats}
          aria-label="Ver opciones y formatos de la obra"
          className="flex flex-col items-center justify-center p-2 rounded-xl text-amber-300 hover:text-amber-200 hover:bg-amber-950/40 transition-all active:scale-95 cursor-pointer min-w-[46px]"
          title="Opciones de Interacción (Infografía, Resumen, Video, Presentación, Interactivo, PDF Completo)"
        >
          <Layers className="w-4 h-4 mb-0.5 text-amber-400" />
          <span className="text-[10px] font-medium">Formatos</span>
        </button>

        {/* Quick Search */}
        <button
          onClick={onOpenSearch}
          aria-label="Buscar en el libro"
          className="flex flex-col items-center justify-center p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition-all active:scale-95 cursor-pointer min-w-[46px]"
          title="Buscar"
        >
          <Search className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-medium">Buscar</span>
        </button>

        {/* Text Size Quick Toggle */}
        <button
          onClick={cycleFontSize}
          aria-label="Ajustar tamaño de letra"
          className="flex flex-col items-center justify-center p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition-all active:scale-95 cursor-pointer min-w-[46px]"
          title={`Tamaño de letra actual: ${fontSize.toUpperCase()} (Tocar para cambiar)`}
        >
          <span className="font-serif font-bold text-xs leading-none mb-0.5">
            A<span className="text-[9px] font-normal">{fontSize === 'sm' ? '-' : fontSize === 'lg' ? '+' : ''}</span>
          </span>
          <span className="text-[10px] font-medium uppercase">{fontSize}</span>
        </button>
      </div>
    </nav>
  );
};

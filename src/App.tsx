import React, { useState, useEffect } from 'react';
import { Chapter, FontSize, Footnote } from './types';
import { allChapters, getChapterById } from './data/articles';
import { Header } from './components/Header';
import { TocModal } from './components/TocModal';
import { SearchModal } from './components/SearchModal';
import { FootnoteModal } from './components/FootnoteModal';
import { PdfExportModal } from './components/PdfExportModal';
import { FormatsModal } from './components/FormatsModal';
import { ChapterReader } from './components/ChapterReader';
import { MobileNavBar } from './components/MobileNavBar';
import { LandingCover } from './components/LandingCover';
import { ExecutiveSummaryStandalone } from './components/ExecutiveSummaryStandalone';
import { bookMeta } from './data/bookMeta';

export function App() {
  // Estado de vista: 'landing' (portada con menú), 'standalone-summary' (resumen ejecutivo en línea), o 'reader' (obra completa interactiva)
  const [viewMode, setViewMode] = useState<'landing' | 'standalone-summary' | 'reader'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const params = new URLSearchParams(window.location.search);
      if (hash === '#resumen-ejecutivo' || params.get('view') === 'resumen') {
        return 'standalone-summary';
      }
      if (hash === '#lector' || params.get('view') === 'online') {
        return 'reader';
      }
    }
    return 'landing';
  });

  const [activeChapterId, setActiveChapterId] = useState<string>('introduccion');
  const [fontSize, setFontSize] = useState<FontSize>('base');
  const [isTocOpen, setIsTocOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState<boolean>(false);
  const [isFormatsModalOpen, setIsFormatsModalOpen] = useState<boolean>(false);
  const [selectedFootnote, setSelectedFootnote] = useState<Footnote | null>(null);
  const [readingProgress, setReadingProgress] = useState<number>(0);

  // Active chapter lookup
  const currentChapter = getChapterById(activeChapterId) || allChapters[0];
  const currentIndex = allChapters.findIndex((c) => c.id === currentChapter.id);
  const previousChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : undefined;
  const nextChapter =
    currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : undefined;

  // Track window scroll for reading progress bar
  useEffect(() => {
    if (viewMode !== 'reader') return;
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight <= 0) {
        setReadingProgress(0);
        return;
      }
      const scrollPercent = (totalScroll / windowHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeChapterId, viewMode]);

  // Global Keyboard Shortcuts (Cmd+K / Ctrl+K for search, Escape to close modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsTocOpen(false);
        setIsSearchOpen(false);
        setIsPdfModalOpen(false);
        setSelectedFootnote(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation handler
  const handleNavigateChapter = (chapterId: string, blockId?: string) => {
    setActiveChapterId(chapterId);
    if (blockId) {
      setTimeout(() => {
        const el = document.getElementById(blockId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Subtle focus animation
          el.classList.add('ring-2', 'ring-indigo-500/80', 'transition-all');
          setTimeout(() => {
            el.classList.remove('ring-2', 'ring-indigo-500/80');
          }, 2500);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReturnToLanding = () => {
    setViewMode('landing');
    if (typeof window !== 'undefined') {
      history.pushState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnterOnlineReader = () => {
    setViewMode('reader');
    if (typeof window !== 'undefined') {
      window.location.hash = 'lector';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnterExecutiveSummaryStandalone = () => {
    setViewMode('standalone-summary');
    if (typeof window !== 'undefined') {
      window.location.hash = 'resumen-ejecutivo';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSwitchFromSummaryToReader = () => {
    setActiveChapterId('resumen-ejecutivo');
    setViewMode('reader');
    if (typeof window !== 'undefined') {
      window.location.hash = 'lector';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // VISTA 1: PORTADA OFICIAL Y MENÚ DE OPCIONES DE INTERACCIÓN
  if (viewMode === 'landing') {
    return (
      <LandingCover
        onSelectOnline={handleEnterOnlineReader}
        onSelectExecutiveSummaryStandalone={handleEnterExecutiveSummaryStandalone}
      />
    );
  }

  // VISTA 2: RESUMEN EJECUTIVO EN LÍNEA STAND ALONE
  if (viewMode === 'standalone-summary') {
    return (
      <ExecutiveSummaryStandalone
        onBackToMenu={handleReturnToLanding}
        onOpenInteractiveFull={handleSwitchFromSummaryToReader}
      />
    );
  }

  // VISTA 3: DOCUMENTO INTERACTIVO COMPLETO (7 Capítulos con Resumen Ejecutivo en su índice)
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] selection:bg-indigo-600 selection:text-white flex flex-col font-sans">
      {/* Editorial Sticky Header */}
      <Header
        currentChapter={currentChapter}
        readingProgress={readingProgress}
        fontSize={fontSize}
        setFontSize={setFontSize}
        onOpenToc={() => setIsTocOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenPdfExport={() => setIsPdfModalOpen(true)}
        onOpenFormats={() => setIsFormatsModalOpen(true)}
        onNavigateChapter={handleNavigateChapter}
        onBackToLanding={handleReturnToLanding}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pb-24 md:pb-20 safe-px">
        <ChapterReader
          chapter={currentChapter}
          previousChapter={previousChapter}
          nextChapter={nextChapter}
          fontSize={fontSize}
          onSelectFootnote={(fn) => setSelectedFootnote(fn)}
          onNavigateChapter={handleNavigateChapter}
          onOpenFormats={() => setIsFormatsModalOpen(true)}
        />
      </main>

      {/* Persistent Mobile / Tablet Bottom Navigation Bar */}
      <MobileNavBar
        currentChapter={currentChapter}
        previousChapter={previousChapter}
        nextChapter={nextChapter}
        readingProgress={readingProgress}
        fontSize={fontSize}
        setFontSize={setFontSize}
        onOpenToc={() => setIsTocOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenPdfExport={() => setIsPdfModalOpen(true)}
        onOpenFormats={() => setIsFormatsModalOpen(true)}
        onNavigateChapter={handleNavigateChapter}
        onBackToLanding={handleReturnToLanding}
      />

      {/* Site Footer */}
      <footer className="w-full border-t border-[#1C1C1C] bg-[#070707] py-10 px-4 sm:px-6 lg:px-8 text-center text-xs text-neutral-400 mb-14 md:mb-0 safe-pb">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="font-serif font-semibold text-neutral-300">
            {bookMeta.program}
          </p>
          <p className="text-neutral-400">
            {bookMeta.title}: {bookMeta.subtitle} • {bookMeta.author} ({bookMeta.email}) • {bookMeta.date}
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-indigo-400 pt-1">
            <button
              onClick={handleReturnToLanding}
              className="hover:underline cursor-pointer"
            >
              ← Menú de opciones
            </button>
            <span>•</span>
            <button
              onClick={handleEnterExecutiveSummaryStandalone}
              className="hover:underline cursor-pointer text-cyan-400"
            >
              Resumen Ejecutivo Stand Alone
            </button>
            <span>•</span>
            <button
              onClick={() => setIsFormatsModalOpen(true)}
              className="hover:underline cursor-pointer text-amber-300"
            >
              Catálogo de Opciones
            </button>
          </div>
          <p className="text-neutral-400 text-[11px] pt-1">
            Plataforma digital interactiva de investigación académica con aparato crítico y exportación formal a PDF.
          </p>
        </div>
      </footer>

      {/* Modals */}
      <FormatsModal
        isOpen={isFormatsModalOpen}
        onClose={() => setIsFormatsModalOpen(false)}
        onSelectInteractive={() => {
          setIsFormatsModalOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectExecutiveSummaryStandalone={() => {
          setIsFormatsModalOpen(false);
          handleEnterExecutiveSummaryStandalone();
        }}
      />

      <TocModal
        isOpen={isTocOpen}
        activeChapterId={activeChapterId}
        onClose={() => setIsTocOpen(false)}
        onSelectChapter={handleNavigateChapter}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigateChapter}
      />

      <FootnoteModal
        footnote={selectedFootnote}
        onClose={() => setSelectedFootnote(null)}
      />

      <PdfExportModal
        isOpen={isPdfModalOpen}
        currentChapter={currentChapter}
        onClose={() => setIsPdfModalOpen(false)}
      />
    </div>
  );
}

export default App;

import React, { useState, useEffect, useCallback } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize2,
  Minimize2,
  Layers,
  Sparkles,
  ExternalLink,
  Image as ImageIcon,
  FileText,
} from 'lucide-react';
import { PRESENTATION_SLIDES, PresentationSlide } from '../data/slides';

interface PresentationViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const PresentationViewerModal: React.FC<PresentationViewerModalProps> = ({
  isOpen,
  onClose,
  onDownload,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showThumbnails, setShowThumbnails] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'visual' | 'text'>('visual');
  const [imageError, setImageError] = useState<boolean>(false);

  const totalSlides = PRESENTATION_SLIDES.length;
  const slideNumber = currentSlideIndex + 1;
  const slideNumStr = String(slideNumber).padStart(2, '0');
  
  const currentSlideImage = `/recursos/slides/slide-${slideNumStr}.jpg?v=20260913`;
  const slide: PresentationSlide = PRESENTATION_SLIDES[currentSlideIndex] || PRESENTATION_SLIDES[0];

  // Preload next and previous slide images for instant switching
  useEffect(() => {
    const nextIdx = currentSlideIndex + 1;
    if (nextIdx < totalSlides) {
      const nextImg = new Image();
      nextImg.src = `/recursos/slides/slide-${String(nextIdx + 1).padStart(2, '0')}.jpg?v=20260913`;
    }
    const prevIdx = currentSlideIndex - 1;
    if (prevIdx >= 0) {
      const prevImg = new Image();
      prevImg.src = `/recursos/slides/slide-${String(prevIdx + 1).padStart(2, '0')}.jpg?v=20260913`;
    }
  }, [currentSlideIndex, totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
    setImageError(false);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
    setImageError(false);
  }, [totalSlides]);

  useEffect(() => {
    setImageError(false);
  }, [currentSlideIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrev();
      } else if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        handleNext();
      } else if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isFullscreen, handlePrev, handleNext, onClose]);

  if (!isOpen) return null;

  const isGold = slide.themeColor === 'gold';
  const isPurple = slide.themeColor === 'purple';
  const accentColorClass = isGold
    ? 'text-amber-400 border-amber-500/40 bg-amber-950/40'
    : isPurple
    ? 'text-purple-400 border-purple-500/40 bg-purple-950/40'
    : 'text-cyan-400 border-cyan-500/40 bg-cyan-950/40';

  const headingAccentClass = isGold
    ? 'text-amber-300'
    : isPurple
    ? 'text-purple-300'
    : 'text-cyan-300';

  return (
    <div
      className="fixed inset-0 z-60 bg-black/92 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className={`w-full ${
          isFullscreen ? 'h-full max-w-none rounded-none' : 'max-w-6xl max-h-[94vh] rounded-2xl'
        } bg-[#0b0f19] border border-[#1e293b] shadow-2xl overflow-hidden flex flex-col transition-all duration-200`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-4 py-3 bg-[#0d1322] border-b border-[#1e293b] flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-1.5 rounded-lg bg-indigo-950/70 border border-indigo-700/50 text-indigo-300">
              <Layers className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-white truncate">
                  4-. Presentación sin audio
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-700/50 hidden sm:inline-block">
                  35 Diapositivas
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 truncate">
                Venezuela, Educación e Inteligencia Artificial • Hilmer Castillo Bescanza
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* View Mode Toggle: Slide Original vs Analítico */}
            <div className="bg-[#101726] border border-[#22314a] rounded-lg p-0.5 flex items-center">
              <button
                onClick={() => setViewMode('visual')}
                className={`px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'visual'
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Ver diapositiva gráfica original"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Diapositiva</span>
              </button>
              <button
                onClick={() => setViewMode('text')}
                className={`px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'text'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Ver análisis y contenido de texto estructurado"
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Texto</span>
              </button>
            </div>

            {/* Slide Index Selector */}
            <select
              value={currentSlideIndex}
              onChange={(e) => {
                setCurrentSlideIndex(Number(e.target.value));
                setImageError(false);
              }}
              className="px-2 py-1 text-xs bg-[#131b2e] border border-[#243350] rounded-lg text-neutral-200 focus:outline-none focus:border-cyan-500 cursor-pointer hidden lg:block max-w-[180px]"
            >
              {PRESENTATION_SLIDES.map((s, idx) => (
                <option key={s.id} value={idx}>
                  {s.id}. {s.title.slice(0, 26)}...
                </option>
              ))}
            </select>

            <button
              onClick={() => setShowThumbnails(!showThumbnails)}
              className={`p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1 cursor-pointer ${
                showThumbnails
                  ? 'bg-cyan-950 text-cyan-300 border-cyan-700'
                  : 'bg-[#131b2e] hover:bg-[#1a253d] text-neutral-300 border-[#243350]'
              }`}
              title="Índice de Diapositivas"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Índice</span>
            </button>

            <button
              onClick={onDownload}
              className="px-2.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium flex items-center gap-1.5 shadow-md shadow-indigo-900/30 transition-all cursor-pointer"
              title="Descargar PDF de la Presentación"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Descargar PDF</span>
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-[#1a253d] transition-colors cursor-pointer"
              title={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-rose-950/40 hover:text-rose-300 transition-colors cursor-pointer"
              title="Cerrar visor"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Stage */}
        {viewMode === 'visual' ? (
          /* Visual Presentation Mode: Original Slides from Provided PDF */
          <div className="flex-1 overflow-hidden relative flex items-center justify-center bg-[#05070c] p-2 sm:p-4 select-none">
            {!imageError ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={currentSlideImage}
                  alt={`Diapositiva ${slide.id}: ${slide.title}`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-[#1b253b]"
                  onError={() => setImageError(true)}
                  loading="eager"
                />

                {/* Floating Previous / Next Arrow buttons on slide */}
                <button
                  onClick={handlePrev}
                  disabled={currentSlideIndex === 0}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/85 text-white/80 hover:text-white border border-white/10 backdrop-blur-md disabled:opacity-0 disabled:pointer-events-none transition-all cursor-pointer shadow-xl"
                  title="Diapositiva anterior"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentSlideIndex === totalSlides - 1}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/85 text-white/80 hover:text-white border border-white/10 backdrop-blur-md disabled:opacity-0 disabled:pointer-events-none transition-all cursor-pointer shadow-xl"
                  title="Diapositiva siguiente"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Subtle Slide Number Watermark */}
                <div className="absolute bottom-3 right-4 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/10 text-[11px] font-mono text-neutral-300 pointer-events-none">
                  Slide {slide.id} / {totalSlides}
                </div>
              </div>
            ) : (
              /* Fallback in case of image load error */
              <div className="text-center p-8 space-y-3">
                <p className="text-neutral-300 text-sm">Cargando diapositiva gráfica...</p>
                <button
                  onClick={() => setViewMode('text')}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
                >
                  Ver contenido en modo texto
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Structured Analytical Text Mode */
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 flex flex-col justify-between relative bg-radial from-[#111726] to-[#080c14]">
            {/* Top Slide Header */}
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {slide.category && (
                  <span
                    className={`text-[10.5px] font-mono font-semibold px-2.5 py-0.5 rounded-md border ${accentColorClass}`}
                  >
                    {slide.category}
                  </span>
                )}
                {slide.part && (
                  <span className="text-[11px] font-serif font-bold tracking-wider px-2.5 py-0.5 rounded-md border border-amber-500/40 bg-amber-950/40 text-amber-300">
                    {slide.part}
                  </span>
                )}
                {slide.badge && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#162033] text-neutral-300 border border-[#243350]">
                    {slide.badge}
                  </span>
                )}
                <span className="text-[11px] font-mono text-neutral-400 ml-auto">
                  Diapositiva {slide.id} de {totalSlides}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white tracking-tight leading-snug">
                {slide.title}
              </h2>
              {slide.subtitle && (
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">{slide.subtitle}</p>
              )}
            </div>

            {/* Slide Boxes / Body */}
            <div className="my-auto py-2">
              <div
                className={`grid gap-4 ${
                  slide.boxes.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
                }`}
              >
                {slide.boxes.map((box, bIdx) => (
                  <div
                    key={bIdx}
                    className="rounded-xl p-4 sm:p-5 bg-[#0e1422]/90 border border-[#1e293b] hover:border-[#2a3c5a] shadow-xl backdrop-blur-sm transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h3 className={`text-sm sm:text-base font-semibold mb-2.5 ${headingAccentClass}`}>
                        {box.title}
                      </h3>

                      {box.text && (
                        <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                          {box.text}
                        </p>
                      )}

                      {box.bullets && (
                        <ul className="space-y-2 text-xs sm:text-sm text-neutral-200">
                          {box.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {box.footerNote && (
                      <div className="mt-3 pt-2.5 border-t border-[#1a253a] text-[11px] text-neutral-400 italic">
                        {box.footerNote}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Footer */}
            <div className="mt-4 pt-3 border-t border-[#162033] flex items-center justify-between text-[10.5px] text-neutral-500 font-mono">
              <span>VENEZUELA, EDUCACIÓN E INTELIGENCIA ARTIFICIAL</span>
              <span>SEPT. 2026 • HILMER CASTILLO BESCANZA</span>
            </div>
          </div>
        )}

        {/* Thumbnail Drawer (if open) */}
        {showThumbnails && (
          <div className="p-3 bg-[#0d1322] border-t border-[#1e293b] overflow-x-auto flex items-center gap-2 max-h-32 shrink-0">
            {PRESENTATION_SLIDES.map((s, idx) => {
              const thumbNumStr = String(s.id).padStart(2, '0');
              const thumbImg = `/recursos/slides/slide-${thumbNumStr}.jpg?v=20260913`;
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    setCurrentSlideIndex(idx);
                    setImageError(false);
                  }}
                  className={`shrink-0 w-32 h-20 rounded-lg border text-left overflow-hidden relative transition-all cursor-pointer group ${
                    currentSlideIndex === idx
                      ? 'border-cyan-500 ring-2 ring-cyan-500/70'
                      : 'border-[#1e293b] hover:border-neutral-500 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={thumbImg}
                    alt={`Slide ${s.id}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-1.5">
                    <span className="text-[9px] font-mono text-cyan-300 font-bold">
                      #{s.id}
                    </span>
                    <span className="text-[8.5px] font-medium text-white truncate drop-shadow">
                      {s.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Bottom Control Bar */}
        <div className="px-4 py-3 bg-[#0a0e18] border-t border-[#162033] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handlePrev}
              disabled={currentSlideIndex === 0}
              className="px-3 py-1.5 rounded-xl bg-[#131b2e] hover:bg-[#1a253d] border border-[#243350] disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-medium flex items-center gap-1 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Anterior</span>
            </button>
            <button
              onClick={handleNext}
              disabled={currentSlideIndex === totalSlides - 1}
              className="px-3 py-1.5 rounded-xl bg-[#131b2e] hover:bg-[#1a253d] border border-[#243350] disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-medium flex items-center gap-1 transition-all cursor-pointer"
            >
              <span className="hidden sm:inline">Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Slide Progress Scrubber Bar */}
          <div className="flex-1 max-w-xs mx-auto flex items-center gap-2">
            <span className="text-[11px] font-mono text-neutral-400 shrink-0">
              {currentSlideIndex + 1}/{totalSlides}
            </span>
            <div className="w-full h-1.5 bg-[#162033] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentSlideIndex + 1) / totalSlides) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Quick Direct Link to PDF */}
          <a
            href="/recursos/presentacion-35-slides.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-xl bg-[#131b2e] hover:bg-[#1a253d] border border-[#243350] text-neutral-300 text-xs font-medium flex items-center gap-1.5 cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Abrir PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};

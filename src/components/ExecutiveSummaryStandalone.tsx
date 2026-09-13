import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Mail,
  Clock,
  BookOpen,
  Layers,
  FileCheck,
  ChevronDown,
  ChevronUp,
  Download,
} from 'lucide-react';
import { executiveSummaryChapter } from '../data/executiveSummary';
import { bookMeta } from '../data/bookMeta';
import { RichText } from './RichText';

interface ExecutiveSummaryStandaloneProps {
  onBackToMenu: () => void;
  onOpenInteractiveFull: () => void;
}

export const ExecutiveSummaryStandalone: React.FC<ExecutiveSummaryStandaloneProps> = ({
  onBackToMenu,
  onOpenInteractiveFull,
}) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setReadingProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] selection:bg-cyan-600 selection:text-white flex flex-col font-sans">
      {/* Top Reading Progress */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-[#1a1a1a]">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-indigo-400 transition-all duration-150 ease-out"
          style={{ width: `${Math.max(3, Math.min(100, readingProgress))}%` }}
        />
      </div>

      {/* Standalone Header */}
      <header className="sticky top-0 z-40 w-full bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222222]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">
          {/* Back to Menu of Options */}
          <button
            id="btn-standalone-back-menu"
            onClick={onBackToMenu}
            aria-label="Regresar al Menú de Opciones"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold text-neutral-200 bg-[#141414] hover:bg-[#202020] border border-[#2e2e2e] hover:border-cyan-500/60 hover:text-white transition-all cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400" />
            <span>Menú de Opciones</span>
          </button>

          {/* Center Identity */}
          <div className="flex items-center gap-2 text-center min-w-0">
            <span className="hidden md:inline-block px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-700/50 text-[10.5px] font-mono text-cyan-300 font-medium">
              Opción 2 • Versión en Línea Stand Alone
            </span>
            <h1 className="text-xs sm:text-sm font-serif font-bold text-white truncate">
              Resumen Ejecutivo (Lectura en Línea)
            </h1>
          </div>

          {/* Switch to Full Document */}
          <button
            id="btn-standalone-open-full-doc"
            onClick={onOpenInteractiveFull}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-indigo-300 bg-indigo-950/60 hover:bg-indigo-900/80 border border-indigo-700/60 hover:border-indigo-400 transition-all cursor-pointer shrink-0"
            title="Ir al Documento Interactivo Completo"
          >
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">Documento Interactivo</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Document Header */}
        <div className="border-b border-[#222222] pb-6 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-800/60 font-medium flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
              Resumen Ejecutivo Stand Alone
            </span>
            <span className="text-neutral-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              Lectura estimada: {executiveSummaryChapter.readingTimeMinutes || 7} min (4 páginas equivalentes)
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-white tracking-tight leading-[1.15]">
            {executiveSummaryChapter.title}
          </h2>

          {executiveSummaryChapter.subtitle && (
            <p className="font-serif italic text-base sm:text-lg text-neutral-300 leading-relaxed">
              {executiveSummaryChapter.subtitle}
            </p>
          )}

          {/* Author Block with Email */}
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-neutral-300">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-600 to-indigo-500 flex items-center justify-center font-bold text-white text-[11px] shrink-0">
              HC
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-white font-semibold">{executiveSummaryChapter.author || bookMeta.author}</span>
              <span className="text-neutral-600">•</span>
              <a
                href={`mailto:${bookMeta.email}`}
                className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 hover:underline font-mono"
              >
                <Mail className="w-3 h-3" />
                <span>{bookMeta.email}</span>
              </a>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400">{bookMeta.date}</span>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="mt-4 p-3.5 rounded-xl bg-[#111822] border border-cyan-900/60 text-xs text-neutral-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p>
              Estás visualizando el <strong className="text-cyan-300">Resumen Ejecutivo</strong> de forma aislada. También puedes consultar este mismo resumen integrado dentro del índice de la obra completa.
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="/recursos/resumen-ejecutivo-4-paginas.pdf"
                download="resumen-ejecutivo-4-paginas.pdf"
                className="px-2.5 py-1 rounded-lg bg-[#182635] hover:bg-[#203348] border border-cyan-700/50 text-cyan-200 text-xs flex items-center gap-1.5 transition-all"
              >
                <Download className="w-3 h-3 text-cyan-400" />
                <span>Descargar PDF</span>
              </a>
              <button
                onClick={onOpenInteractiveFull}
                className="px-2.5 py-1 rounded-lg bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-700/60 text-indigo-200 text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <BookOpen className="w-3 h-3 text-indigo-400" />
                <span>Ver en Obra Completa</span>
              </button>
            </div>
          </div>
        </div>

        {/* Section Index Jump Links */}
        {executiveSummaryChapter.subSections && executiveSummaryChapter.subSections.length > 0 && (
          <nav
            aria-label="Índice del Resumen Ejecutivo"
            className="p-4 rounded-2xl bg-[#0f1218] border border-[#1d2535] space-y-2.5"
          >
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold block">
              Contenido Estratégico
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {executiveSummaryChapter.subSections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="p-2 rounded-lg bg-[#141a24] hover:bg-[#1a2333] text-neutral-300 hover:text-white border border-[#222d40] transition-colors truncate block"
                >
                  {sec.title}
                </a>
              ))}
            </div>
          </nav>
        )}

        {/* Structured Blocks Rendering */}
        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-neutral-300">
          {executiveSummaryChapter.blocks.map((block) => {
            switch (block.type) {
              case 'lead':
                return (
                  <div
                    key={block.id}
                    id={block.id}
                    className="font-serif italic text-lg sm:text-xl text-neutral-200 border-l-2 border-cyan-500 pl-4 sm:pl-6 py-1 my-4 bg-gradient-to-r from-cyan-950/20 to-transparent"
                  >
                    <RichText text={block.text || ''} />
                  </div>
                );

              case 'heading2':
                return (
                  <div key={block.id} id={block.id} className="pt-7 scroll-mt-20">
                    <h3 className="font-serif font-bold text-white text-xl sm:text-2xl pb-2 border-b border-[#252525]">
                      <RichText text={block.text || ''} />
                    </h3>
                  </div>
                );

              case 'heading3':
                return (
                  <div key={block.id} id={block.id} className="pt-4 scroll-mt-20">
                    <h4 className="font-serif font-bold text-cyan-300 text-lg sm:text-xl">
                      <RichText text={block.text || ''} />
                    </h4>
                  </div>
                );

              case 'heading4':
                return (
                  <div key={block.id} id={block.id} className="pt-3 scroll-mt-16">
                    <h5 className="font-mono text-xs sm:text-sm uppercase tracking-wider font-bold text-amber-300/90 bg-amber-950/20 px-3 py-1 rounded-md border border-amber-800/40 inline-block">
                      <RichText text={block.text || ''} />
                    </h5>
                  </div>
                );

              case 'paragraph': {
                const isHanging =
                  block.hangingIndent ||
                  /^(•|\d+[\.\)]|[a-zA-Z][\.\)]|\[\d+\.\d+\])\s+/i.test(block.text || '');
                return (
                  <p
                    key={block.id}
                    id={block.id}
                    className={`text-neutral-300 text-justify sm:text-left leading-relaxed ${
                      isHanging ? 'sangria-francesa' : ''
                    }`}
                  >
                    <RichText text={block.text || ''} hangingIndent={isHanging} />
                  </p>
                );
              }

              case 'table':
                return (
                  <div
                    key={block.id}
                    id={block.id}
                    className="my-5 overflow-x-auto rounded-xl border border-[#2a2a2a] bg-[#111111]"
                  >
                    {block.tableData && (
                      <table className="w-full text-xs sm:text-sm text-left border-collapse">
                        {block.tableData.headers && (
                          <thead className="bg-[#171717] border-b border-[#2a2a2a] text-neutral-200 font-semibold">
                            <tr>
                              {block.tableData.headers.map((h, i) => (
                                <th key={i} className="p-3">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                        )}
                        <tbody className="divide-y divide-[#202020]">
                          {block.tableData.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-[#151515] transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3 text-neutral-300">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                );

              case 'orderedList':
                return (
                  <ol
                    key={block.id}
                    id={block.id}
                    className="space-y-2 my-4 text-neutral-300 text-sm sm:text-base leading-relaxed pl-4"
                  >
                    {block.items?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="font-semibold text-cyan-400 font-mono text-xs mt-1">
                          {idx + 1}.
                        </span>
                        <span><RichText text={item} /></span>
                      </li>
                    ))}
                  </ol>
                );

              case 'list':
                return (
                  <ul
                    key={block.id}
                    id={block.id}
                    className="space-y-2 my-4 text-neutral-300 text-sm sm:text-base leading-relaxed pl-2"
                  >
                    {block.items?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                        <span><RichText text={item} /></span>
                      </li>
                    ))}
                  </ul>
                );


              case 'callout':
                return (
                  <div
                    key={block.id}
                    id={block.id}
                    className="my-5 p-4 sm:p-5 rounded-2xl bg-[#0e171c] border border-cyan-800/60"
                  >
                    {block.text && (
                      <p className="text-sm text-neutral-200 leading-relaxed font-serif italic mb-2">
                        {block.text}
                      </p>
                    )}
                    {block.items && block.items.length > 0 && (
                      <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-300">
                        {block.items.map((it, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-0.5">•</span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );

              default:
                return (
                  <p key={block.id} id={block.id} className="text-neutral-300">
                    {block.text}
                  </p>
                );
            }
          })}
        </div>

        {/* Bottom Actions Bar */}
        <div className="pt-8 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToMenu}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#141414] hover:bg-[#202020] border border-[#2e2e2e] hover:border-cyan-500/60 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400" />
            <span>Volver al Menú de Opciones</span>
          </button>

          <button
            onClick={onOpenInteractiveFull}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Continuar al Documento Interactivo Completo</span>
          </button>
        </div>
      </main>

      {/* Standalone Footer */}
      <footer className="w-full border-t border-[#1a1a1a] bg-[#070707] py-6 px-4 text-center text-xs text-neutral-500 mt-12">
        <p>
          {bookMeta.title} • {bookMeta.subtitle} • {bookMeta.author} ({bookMeta.email})
        </p>
      </footer>
    </div>
  );
};


import React, { useState } from 'react';
import {
  Chapter,
  FontSize,
  Footnote,
  CaseStudy,
  PlatformDetail,
} from '../types';
import { caseStudiesList } from '../data/appendix1';
import { platformsList } from '../data/appendix2';
import { allFootnotesMap, allReferences } from '../data/articles';
import { RichText } from './RichText';
import {
  Quote,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Info,
  Clock,
  Layers,
  Filter,
  CheckCircle,
  Building2,
  Cpu,
  Zap,
  Droplet,
  Wifi,
  Users,
  Mail,
  Smartphone,
  RotateCcw,
  X,
} from 'lucide-react';

interface ChapterReaderProps {
  chapter: Chapter;
  previousChapter?: Chapter;
  nextChapter?: Chapter;
  fontSize: FontSize;
  onSelectFootnote: (footnote: Footnote) => void;
  onNavigateChapter: (chapterId: string, blockId?: string) => void;
  onOpenFormats?: () => void;
}

export const ChapterReader: React.FC<ChapterReaderProps> = ({
  chapter,
  previousChapter,
  nextChapter,
  fontSize,
  onSelectFootnote,
  onNavigateChapter,
  onOpenFormats,
}) => {
  // Region filter for Appendix 1
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);
  const [showLandscapeTip, setShowLandscapeTip] = useState<boolean>(() => {
    try {
      return localStorage.getItem('hide_landscape_tip') !== 'true';
    } catch {
      return true;
    }
  });

  const handleDismissLandscapeTip = () => {
    setShowLandscapeTip(false);
    try {
      localStorage.setItem('hide_landscape_tip', 'true');
    } catch {
      // ignore
    }
  };

  // Font size classes with subtitle hierarchy
  const fontSizes = {
    sm: {
      body: 'text-[15px] leading-[1.7]',
      lead: 'text-[17px] leading-[1.7]',
      h2: 'text-xl sm:text-2xl',
      h3: 'text-lg sm:text-xl',
      h4: 'text-base sm:text-lg',
    },
    base: {
      body: 'text-[17px] leading-[1.75]',
      lead: 'text-[19px] leading-[1.75]',
      h2: 'text-2xl sm:text-3xl',
      h3: 'text-xl sm:text-2xl',
      h4: 'text-lg sm:text-xl',
    },
    lg: {
      body: 'text-[19.5px] leading-[1.8]',
      lead: 'text-[22px] leading-[1.8]',
      h2: 'text-3xl sm:text-4xl',
      h3: 'text-2xl sm:text-3xl',
      h4: 'text-xl sm:text-2xl',
    },
  }[fontSize];

  // Helper to render rich text with bold, italics, citations and hanging indents
  const renderTextWithFootnotes = (text: string, hangingIndent = false) => {
    if (!text) return null;
    return (
      <RichText
        text={text}
        hangingIndent={hangingIndent}
        onSelectFootnote={onSelectFootnote}
        chapterFootnotes={chapter.footnotes}
        chapterReferences={chapter.references}
        allFootnotesMap={allFootnotesMap}
        allReferences={allReferences}
      />
    );
  };


  // Filtered case studies for Appendix 1
  const filteredCases = caseStudiesList.filter((cs) => {
    if (selectedRegion === 'all') return true;
    return cs.region === selectedRegion;
  });

  return (
    <article
      id={`chapter-reader-${chapter.id}`}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 text-[#E0E0E0] transition-all safe-px landscape-reading-padding"
    >
      {/* Chapter Top Meta Header */}
      <header className="mb-10 sm:mb-14 pb-8 border-b border-[#222222]">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-3">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            {chapter.part} • Capítulo {chapter.number}
          </span>
          <span className="flex items-center gap-1 text-neutral-400 normal-case font-normal">
            <Clock className="w-3.5 h-3.5" />
            Lectura estimada: {chapter.readingTimeMinutes} min
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
          {chapter.title}
        </h1>

        {chapter.subtitle && (
          <p className="font-serif italic text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl">
            {chapter.subtitle}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-neutral-400">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-emerald-500 flex items-center justify-center font-bold text-white text-[11px] shrink-0">
            HC
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-neutral-200 font-medium">{chapter.author}</span>
            {chapter.authorEmail && (
              <>
                <span className="text-neutral-600">•</span>
                <a
                  href={`mailto:${chapter.authorEmail}`}
                  className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors underline decoration-indigo-500/50 hover:decoration-indigo-300 font-medium"
                  title={`Escribir a ${chapter.authorEmail}`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{chapter.authorEmail}</span>
                </a>
              </>
            )}
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400">Septiembre 2026</span>
          </div>
        </div>
      </header>

      {/* Mobile Landscape Reading Recommendation Banner */}
      {showLandscapeTip && (
        <aside
          id="mobile-landscape-reading-tip"
          aria-label="Recomendación de lectura en teléfonos"
          className="mb-8 p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-indigo-950/60 via-indigo-900/30 to-purple-950/40 border border-indigo-700/50 text-neutral-200 shadow-lg flex items-start justify-between gap-3 block md:hidden"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-indigo-600/30 border border-indigo-500/50 text-indigo-300 shrink-0 mt-0.5">
              <Smartphone className="w-5 h-5 rotate-90" />
            </div>
            <div className="text-xs sm:text-sm leading-relaxed">
              <div className="flex items-center gap-1.5 font-semibold text-indigo-200 mb-0.5">
                <span>Consejo de lectura móvil</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 uppercase tracking-wider font-mono">
                  Horizontal
                </span>
              </div>
              <p className="text-neutral-300 text-[12px] sm:text-xs">
                Si estás leyendo desde un teléfono, puedes <strong>girar tu dispositivo a posición horizontal (landscape)</strong> para disfrutar de una lectura más amplia, descansada y con tipografía editorial optimizada.
              </p>
            </div>
          </div>
          <button
            onClick={handleDismissLandscapeTip}
            className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition-colors shrink-0 cursor-pointer"
            title="Ocultar esta sugerencia"
            aria-label="Cerrar sugerencia de lectura"
          >
            <X className="w-4 h-4" />
          </button>
        </aside>
      )}

      {/* Chapter In-Page Jump Links */}
      {chapter.subSections.length > 1 && (
        <nav
          id="chapter-quick-nav"
          className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#121212] border border-[#242424] text-xs"
        >
          <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 mb-2.5 block">
            En este capítulo:
          </span>
          <div className="flex flex-wrap gap-2">
            {chapter.subSections.map((sub) => (
              <a
                key={sub.id}
                href={`#${sub.id}`}
                className="px-2.5 py-1.5 rounded-lg bg-[#181818] border border-[#2B2B2B] text-neutral-300 hover:text-indigo-300 hover:border-indigo-800 transition-colors"
              >
                {sub.title}
              </a>
            ))}
          </div>
        </nav>
      )}

      {/* Main Content Blocks */}
      <div className="space-y-7 sm:space-y-9">
        {chapter.blocks.map((block) => {
          switch (block.type) {
            case 'lead':
              return (
                <div
                  key={block.id}
                  id={block.id}
                  className={`font-serif italic text-neutral-200 ${fontSizes.lead} border-l-2 border-indigo-500 pl-5 sm:pl-6 py-1 my-6`}
                >
                  {renderTextWithFootnotes(block.text || '')}
                </div>
              );

            case 'heading2':
              return (
                <div key={block.id} id={block.id} className="pt-8 sm:pt-10 scroll-mt-24">
                  <h2
                    className={`font-serif font-bold text-white tracking-tight ${fontSizes.h2} pb-2.5 border-b border-[#252525]`}
                  >
                    {renderTextWithFootnotes(block.text || '')}
                  </h2>
                </div>
              );

            case 'heading3':
              return (
                <div key={block.id} id={block.id} className="pt-6 sm:pt-7 pb-1 scroll-mt-24">
                  <h3
                    className={`font-serif font-bold text-indigo-300 tracking-tight ${fontSizes.h3}`}
                  >
                    {renderTextWithFootnotes(block.text || '')}
                  </h3>
                </div>
              );

            case 'heading4':
              return (
                <div key={block.id} id={block.id} className="pt-4 pb-1 scroll-mt-20">
                  <h4
                    className={`font-mono text-xs sm:text-sm uppercase tracking-wider font-bold text-amber-300/90 bg-amber-950/20 px-3 py-1.5 rounded-lg border border-amber-800/40 inline-block mb-1`}
                  >
                    {renderTextWithFootnotes(block.text || '')}
                  </h4>
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
                  className={`font-sans text-neutral-300 ${fontSizes.body} tracking-normal text-justify sm:text-left ${
                    isHanging ? 'sangria-francesa' : ''
                  }`}
                >
                  {renderTextWithFootnotes(block.text || '', isHanging)}
                </p>
              );
            }

            case 'quote':
              return (
                <figure
                  key={block.id}
                  id={block.id}
                  className="my-6 p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-indigo-950/20 to-transparent border border-indigo-900/40 relative"
                >
                  <Quote className="w-8 h-8 text-indigo-500/30 absolute top-4 right-4" />
                  <blockquote className="font-serif italic text-base sm:text-lg text-neutral-200 leading-relaxed">
                    &ldquo;{block.text}&rdquo;
                  </blockquote>
                  {block.quoteAuthor && (
                    <figcaption className="mt-3 text-xs sm:text-sm text-indigo-400 font-semibold">
                      — {block.quoteAuthor}
                    </figcaption>
                  )}
                </figure>
              );

            case 'orderedList':
              return (
                <ol
                  key={block.id}
                  id={block.id}
                  className="space-y-3 my-4 text-neutral-300 text-[16px] leading-[1.7]"
                >
                  {block.items?.map((item, idx) => {
                    const match = item.match(/^(\d+[\.\)]|[a-zA-Z][\.\)])\s*(.*)/s);
                    if (match) {
                      const prefix = match[1].endsWith('.') || match[1].endsWith(')') ? match[1] : `${match[1]}.`;
                      return (
                        <li key={idx} className="flex items-start gap-3 pl-1">
                          <span className="font-semibold text-indigo-400 shrink-0 select-none min-w-[24px]">
                            {prefix}
                          </span>
                          <span className="flex-1">{renderTextWithFootnotes(match[2])}</span>
                        </li>
                      );
                    }
                    return (
                      <li key={idx} className="flex items-start gap-3 pl-1">
                        <span className="font-semibold text-indigo-400 shrink-0 select-none min-w-[24px]">
                          {idx + 1}.
                        </span>
                        <span className="flex-1">{renderTextWithFootnotes(item)}</span>
                      </li>
                    );
                  })}
                </ol>
              );

            case 'list':
              return (
                <ul
                  key={block.id}
                  id={block.id}
                  className="space-y-2.5 my-4 text-neutral-300 text-[16px] leading-[1.7]"
                >
                  {block.items?.map((item, idx) => {
                    const trimmed = item.trim();
                    // Subtitles should never have a dot bullet
                    const isSubheading = /^(Oportunidades?\s+|Destrezas para La Vida|Objetivos:|Ejemplos de actividades:)/i.test(trimmed);
                    if (isSubheading) {
                      return (
                        <li key={idx} className="pt-3 pb-1 text-white font-serif font-bold text-base block list-none">
                          {renderTextWithFootnotes(item)}
                        </li>
                      );
                    }

                    // Numbered or lettered items should never have a dot bullet
                    const numMatch = item.match(/^(\d+[\.\)]|[a-zA-Z][\.\)])\s*(.*)/s);
                    if (numMatch) {
                      const prefix = numMatch[1].endsWith('.') || numMatch[1].endsWith(')') ? numMatch[1] : `${numMatch[1]}.`;
                      return (
                        <li key={idx} className="flex items-start gap-3 pl-1 list-none">
                          <span className="font-semibold text-indigo-400 shrink-0 select-none min-w-[24px]">
                            {prefix}
                          </span>
                          <span className="flex-1">{renderTextWithFootnotes(numMatch[2])}</span>
                        </li>
                      );
                    }

                    // Unnumbered bullet item
                    return (
                      <li key={idx} className="flex items-start gap-3 pl-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-2.5" />
                        <span className="flex-1">{renderTextWithFootnotes(item)}</span>
                      </li>
                    );
                  })}
                </ul>
              );

            case 'callout':
              return (
                <aside
                  key={block.id}
                  id={block.id}
                  className={`my-6 p-5 sm:p-6 rounded-2xl border transition-all ${
                    block.calloutType === 'highlight'
                      ? 'bg-indigo-950/25 border-indigo-800/60 shadow-lg shadow-indigo-950/10'
                      : block.calloutType === 'warning'
                      ? 'bg-amber-950/25 border-amber-800/60'
                      : 'bg-[#151515] border-[#2A2A2A]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div className="space-y-2 flex-1">
                      <p className="text-sm sm:text-base text-neutral-200 font-sans leading-relaxed">
                        {renderTextWithFootnotes(block.text || '')}
                      </p>
                      {block.items && block.items.length > 0 && (
                        <ul className="space-y-1.5 mt-2 text-xs sm:text-sm text-neutral-300">
                          {block.items.map((it, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-2" />
                              <span>{renderTextWithFootnotes(it)}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </aside>
              );

            case 'statGrid':
              return (
                <div
                  key={block.id}
                  id={block.id}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 my-8"
                >
                  {block.stats?.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#131313] border border-[#262626] hover:border-indigo-800/60 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <span className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {stat.value}
                        </span>
                        <h4 className="text-xs sm:text-sm font-semibold text-indigo-300 mt-1">
                          {stat.label}
                        </h4>
                      </div>
                      {stat.detail && (
                        <p className="text-[11px] text-neutral-400 mt-2 border-t border-[#1F1F1F] pt-2">
                          {stat.detail}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              );

            case 'table':
              if (!block.tableData) return null;
              return (
                <div key={block.id} id={block.id} className="my-8 space-y-2">
                  {block.tableData.caption && (
                    <h4 className="font-serif text-sm sm:text-base font-bold text-neutral-200">
                      {block.tableData.caption}
                    </h4>
                  )}
                  <div className="overflow-x-auto rounded-xl border border-[#262626] bg-[#111111]">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-[#181818] border-b border-[#262626] text-neutral-300 uppercase tracking-wider font-semibold text-[11px]">
                        <tr>
                          {block.tableData.headers.map((h, i) => (
                            <th key={i} className="px-4 py-3 whitespace-nowrap">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#1F1F1F] text-neutral-300">
                        {block.tableData.rows.map((row, rIndex) => (
                          <tr
                            key={rIndex}
                            className="hover:bg-[#161616] transition-colors"
                          >
                            {row.map((cell, cIndex) => (
                              <td key={cIndex} className="px-4 py-3 align-top font-sans">
                                {renderTextWithFootnotes(String(cell))}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );

            case 'nemaModules':
              return (
                <div
                  key={block.id}
                  id={block.id}
                  className="my-8 p-6 rounded-2xl bg-[#121212] border border-[#2B2B2B] space-y-5"
                >
                  <div className="flex items-center justify-between border-b border-[#222222] pb-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-emerald-400" />
                      <h4 className="font-serif text-base sm:text-lg font-bold text-white">
                        Arquitectura de un Complejo NEMA (Capacidad: 150 estudiantes)
                      </h4>
                    </div>
                    <span className="text-[11px] px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                      Off-Grid 48h
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {block.stats?.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#171717] border border-[#282828] hover:border-emerald-700/60 transition-all space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-emerald-300 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
                            {m.value}
                          </span>
                        </div>
                        <h5 className="font-semibold text-sm text-white">{m.label}</h5>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          {m.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#202020] flex flex-wrap gap-4 text-xs text-neutral-400">
                    <span className="flex items-center gap-1.5 text-neutral-300">
                      <Zap className="w-3.5 h-3.5 text-amber-400" /> Solar LiFePO4
                    </span>
                    <span className="flex items-center gap-1.5 text-neutral-300">
                      <Droplet className="w-3.5 h-3.5 text-blue-400" /> Ósmosis Inversa
                    </span>
                    <span className="flex items-center gap-1.5 text-neutral-300">
                      <Wifi className="w-3.5 h-3.5 text-indigo-400" /> Enlace Starlink Wi-Fi 6
                    </span>
                  </div>
                </div>
              );

            default:
              return null;
          }
        })}
      </div>

      {/* Special Interactive Section for Appendix 1 (25 Case Studies Explorer) */}
      {chapter.id === 'apendice-1' && (
        <div className="mt-12 pt-10 border-t border-[#262626] space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Explorador Interactivo de los 25 Casos de Estudio
              </h3>
              <p className="text-xs text-neutral-400">
                Filtrar por bloque geopolítico y consultar fichas analíticas en 10 dimensiones
              </p>
            </div>

            {/* Region Filter Buttons */}
            <div className="flex items-center gap-1.5 bg-[#141414] p-1 rounded-xl border border-[#262626] text-xs">
              <Filter className="w-3.5 h-3.5 text-neutral-400 ml-1.5 mr-0.5" />
              {['all', 'USA', 'Asia', 'Europa', 'Latinoamérica', 'Global'].map(
                (reg) => (
                  <button
                    key={reg}
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                      selectedRegion === reg
                        ? 'bg-indigo-600 text-white font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {reg === 'all' ? 'Todos (25)' : reg}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCases.map((cs) => {
              const isExpanded = activeCaseStudyId === cs.id;
              return (
                <div
                  key={cs.id}
                  id={`case-card-${cs.id}`}
                  className={`p-5 rounded-2xl border transition-all text-xs space-y-3 ${
                    isExpanded
                      ? 'bg-[#181818] border-indigo-600 shadow-xl'
                      : 'bg-[#131313] border-[#262626] hover:border-neutral-500'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-indigo-950 text-indigo-300 border border-indigo-800">
                          {cs.region}
                        </span>
                        <span className="text-neutral-400 text-[11px]">
                          {cs.country}
                        </span>
                      </div>
                      <h4 className="font-serif text-base font-bold text-white">
                        {cs.name}
                      </h4>
                    </div>

                    <button
                      onClick={() =>
                        setActiveCaseStudyId(isExpanded ? null : cs.id)
                      }
                      className="px-2.5 py-1 rounded bg-[#202020] text-neutral-300 hover:text-white hover:bg-indigo-700 transition-colors text-[11px] font-medium shrink-0 cursor-pointer"
                    >
                      {isExpanded ? 'Ver menos' : 'Ficha completa'}
                    </button>
                  </div>

                  <p className="text-neutral-300 leading-relaxed font-sans">
                    {cs.dailyRoutine}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#202020] text-[11px]">
                    <div>
                      <span className="text-neutral-400 block font-semibold">
                        Software de IA:
                      </span>
                      <span className="text-indigo-300 font-medium">{cs.softwareAi}</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 block font-semibold">
                        Rol del Docente:
                      </span>
                      <span className="text-neutral-200">{cs.teacherRole}</span>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="pt-3 border-t border-[#242424] space-y-2 text-[11px] text-neutral-300 bg-[#161616] -mx-5 -mb-5 p-4 rounded-b-2xl animate-fade-in">
                      <div>
                        <span className="font-semibold text-neutral-400">
                          Entrenamiento docente:
                        </span>{' '}
                        {cs.teacherTraining}
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-400">
                          Equipamiento requerido:
                        </span>{' '}
                        {cs.hardware} ({cs.hardwareCost})
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-400">
                          Costo estimado de software:
                        </span>{' '}
                        {cs.softwareCost}
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-400">
                          Estudiantes por clase / ratio:
                        </span>{' '}
                        {cs.studentsPerClass}
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-400">
                          Materias cubiertas:
                        </span>{' '}
                        {cs.subjects.join(', ')}
                      </div>
                      <div>
                        <span className="font-semibold text-neutral-400">
                          Años en funcionamiento:
                        </span>{' '}
                        {cs.yearsActive}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Special Interactive Section for Appendix 2 (13 Platforms Explorer) */}
      {chapter.id === 'apendice-2' && (
        <div className="mt-12 pt-10 border-t border-[#262626] space-y-6">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
            Catálogo de las 13 Plataformas de Inteligencia Artificial
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {platformsList.map((plat) => (
              <div
                key={plat.id}
                className="p-5 rounded-2xl bg-[#131313] border border-[#262626] hover:border-indigo-700/60 transition-all text-xs space-y-3"
              >
                <div className="flex items-center justify-between gap-2 border-b border-[#202020] pb-2.5">
                  <h4 className="font-serif text-base font-bold text-white">
                    {plat.name}
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#1F1F1F] text-neutral-300 font-mono">
                    {plat.country}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-neutral-400 block">
                    Desarrollo e Institución:
                  </span>
                  <p className="text-neutral-200">{plat.developmentAndPublishers}</p>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-neutral-400 block">
                    Fundamentos Pedagógicos:
                  </span>
                  <p className="text-neutral-300 leading-relaxed font-sans">
                    {plat.pedagogicalFoundations}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#1F1F1F] text-[11px]">
                  <div>
                    <span className="text-neutral-400 block font-semibold">
                      Costos:
                    </span>
                    <span className="text-indigo-300 font-medium">
                      {plat.softwareAndHardwareCost}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block font-semibold">
                      Ratio Docente/Alumno:
                    </span>
                    <span className="text-neutral-200">
                      {plat.teacherStudentRatio}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#1E1E1E]">
                  <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
                    Aspectos Destacados:
                  </span>
                  <ul className="space-y-1 text-[11px] text-neutral-300">
                    {plat.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Aparato Crítico: Footnotes Section at Chapter End */}
      {Object.keys(chapter.footnotes).length > 0 && (
        <section
          id="chapter-footnotes-section"
          className="mt-14 pt-8 border-t-2 border-[#242424] space-y-4 scroll-mt-24"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <Quote className="w-4 h-4 text-indigo-400" />
              Aparato Crítico (Notas al pie del capítulo)
            </h3>
            <span className="text-xs text-neutral-400">
              {Object.keys(chapter.footnotes).length} notas registradas
            </span>
          </div>

          <div className="space-y-2.5">
            {(Object.values(chapter.footnotes) as Footnote[]).map((fn) => (
              <div
                key={fn.id}
                id={`footnote-${fn.id}`}
                className="p-3.5 rounded-xl bg-[#121212] border border-[#222222] hover:border-indigo-700/60 transition-all text-xs flex items-start justify-between gap-3"
              >
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                      {fn.code}
                    </span>
                    <span className="font-semibold text-neutral-200">
                      {fn.title}
                    </span>
                  </div>
                  <p className="text-neutral-400">
                    {fn.authorOrSource} {fn.year && `(${fn.year})`}.{' '}
                    {fn.publication && `Publicado en ${fn.publication}.`}
                  </p>
                  {fn.justification && (
                    <p className="text-neutral-300 italic pt-1 font-sans">
                      &quot;{fn.justification}&quot;
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => onSelectFootnote(fn)}
                    className="px-2.5 py-1.5 rounded bg-indigo-900/40 text-indigo-300 hover:bg-indigo-800 text-[11px] font-medium transition-colors cursor-pointer"
                  >
                    Detalle
                  </button>
                  {fn.url && (
                    <a
                      href={fn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                      title="Abrir enlace externo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Chapter Academic References Section */}
      {chapter.references.length > 0 && (
        <section
          id="chapter-references-section"
          className="mt-10 pt-8 border-t border-[#242424] space-y-4 scroll-mt-24"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-emerald-400" />
              Referencias Bibliográficas Oficiales
            </h3>
            <span className="text-xs text-neutral-400">
              {chapter.references.length} fuentes indexadas
            </span>
          </div>

          <div className="space-y-2 text-xs text-neutral-400 font-sans leading-relaxed">
            {chapter.references.map((ref) => (
              <div
                key={ref.id}
                id={ref.id}
                className="p-3 rounded-xl bg-[#111111] border border-[#202020] hover:border-emerald-800/60 transition-colors flex items-start gap-3"
              >
                <span className="font-mono font-bold text-emerald-400 shrink-0">
                  {ref.code}
                </span>
                <div className="flex-1">
                  <p className="text-neutral-300">{ref.citation}</p>
                  {ref.url && (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-400 hover:underline mt-1 break-all"
                    >
                      <span>{ref.url}</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Chapter Footer Nav: Anterior / Siguiente */}
      <footer className="mt-14 pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
        {previousChapter ? (
          <button
            onClick={() => {
              onNavigateChapter(previousChapter.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto p-4 rounded-xl bg-[#141414] border border-[#262626] hover:border-indigo-600/70 hover:bg-[#181818] transition-all text-left flex items-center gap-3 group cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-neutral-400 group-hover:text-indigo-400 group-hover:-translate-x-1 transition-transform shrink-0" />
            <div>
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-semibold">
                Capítulo Anterior
              </span>
              <span className="font-serif font-bold text-sm text-neutral-200 group-hover:text-white">
                {previousChapter.title}
              </span>
            </div>
          </button>
        ) : (
          <div className="hidden sm:block" />
        )}

        {nextChapter && (
          <button
            onClick={() => {
              onNavigateChapter(nextChapter.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto p-4 rounded-xl bg-[#141414] border border-[#262626] hover:border-indigo-600/70 hover:bg-[#181818] transition-all text-right flex items-center justify-end gap-3 group cursor-pointer"
          >
            <div>
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-semibold">
                Siguiente Capítulo
              </span>
              <span className="font-serif font-bold text-sm text-neutral-200 group-hover:text-white">
                {nextChapter.title}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-indigo-400 group-hover:translate-x-1 transition-transform shrink-0" />
          </button>
        )}
      </footer>
    </article>
  );
};

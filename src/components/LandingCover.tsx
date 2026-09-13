import React, { useState } from 'react';
import {
  BookOpen,
  FileText,
  Play,
  Image as ImageIcon,
  FileCheck,
  Download,
  ChevronRight,
  User,
  Calendar,
  Sparkles,
  Award,
  CheckCircle2,
  Youtube,
  Mail,
  Eye,
} from 'lucide-react';
import { bookMeta } from '../data/bookMeta';
import { WORK_RESOURCES } from '../data/resources';
import { VideoPlayerModal } from './VideoPlayerModal';
import { InfographicViewerModal } from './InfographicViewerModal';
import { PresentationViewerModal } from './PresentationViewerModal';

interface LandingCoverProps {
  onSelectOnline: () => void;
  onSelectExecutiveSummaryStandalone: () => void;
}

export const LandingCover: React.FC<LandingCoverProps> = ({
  onSelectOnline,
  onSelectExecutiveSummaryStandalone,
}) => {
  const [activeVideoModal, setActiveVideoModal] = useState<boolean>(false);
  const [activeImageModal, setActiveImageModal] = useState<boolean>(false);
  const [activePresentationModal, setActivePresentationModal] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash === '#presentacion';
    }
    return false;
  });
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const videoResource = WORK_RESOURCES.find((r) => r.id === 'video');
  const infografiaResource = WORK_RESOURCES.find((r) => r.id === 'infografia');

  const handleDownloadFile = async (
    filePath: string,
    fileName: string,
    fallbackGenerate = false
  ) => {
    setDownloadToast(`Iniciando descarga de "${fileName}"...`);

    try {
      const res = await fetch(filePath, { method: 'HEAD' });
      if (res.ok) {
        const link = document.createElement('a');
        link.href = filePath;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadToast(`¡Descarga de "${fileName}" iniciada!`);
        setTimeout(() => setDownloadToast(null), 3500);
        return;
      }
    } catch {
      // Fallback
    }

    if (fallbackGenerate) {
      setDownloadToast('Componiendo y descargando Documento Completo en PDF...');
      try {
        const { generateBookPDF } = await import('../utils/pdfGenerator');
        await generateBookPDF({
          scope: 'all',
          onProgress: (percent, msg) => {
            setDownloadToast(`Generando PDF (${percent}%): ${msg}`);
          },
        });
        setDownloadToast('¡Descarga del Documento Completo completada exitosamente!');
        setTimeout(() => setDownloadToast(null), 3500);
      } catch (err) {
        console.error(err);
        setDownloadToast('Error al generar el PDF. Por favor reintente.');
        setTimeout(() => setDownloadToast(null), 4000);
      }
    } else {
      setDownloadToast(`Descarga de "${fileName}" procesada.`);
      setTimeout(() => setDownloadToast(null), 3500);
    }
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-[#EDEDED] flex flex-col font-sans selection:bg-indigo-600 selection:text-white relative">
      {/* Toast Notification */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-[#141B2D] border border-indigo-500/60 shadow-2xl text-xs sm:text-sm text-indigo-100 flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-3 duration-200 max-w-md">
          <Download className="w-4 h-4 text-emerald-400 shrink-0 animate-bounce" />
          <span className="truncate">{downloadToast}</span>
        </div>
      )}

      {/* Top Institutional Header */}
      <header className="w-full border-b border-[#161d2d] bg-[#090d16]/80 backdrop-blur-md py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-neutral-400 tracking-wider uppercase font-mono text-[10px] sm:text-[11px]">
            <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate font-semibold text-neutral-300">
              Programa de Gobernabilidad, Gerencia Política y Gestión Pública
            </span>
          </div>
          <div className="text-[10.5px] font-mono text-neutral-400 hidden sm:block">
            CAF • UCAB • The George Washington University
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-12">
        {/* ========================================================= */}
        {/* SECUENCIA 1: TÍTULO DE LA OBRA, AUTOR, CORREO Y FECHA      */}
        {/* ========================================================= */}
        <section id="portada-identidad-obra" className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-700/50 text-indigo-300 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Investigación Académica & Propuesta de Políticas Públicas</span>
          </div>

          {/* El Título de la Obra */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12]">
              {bookMeta.title}
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl font-serif text-amber-300/90 font-medium italic">
              {bookMeta.subtitle}
            </p>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Propuesta estratégica y modelo tecno-pedagógico para la reconstrucción integral, erradicación del rezago educativo y despliegue de tutores socráticos con inteligencia artificial en Venezuela.
          </p>

          {/* Bloque Autor, Correo Electrónico y Fecha */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
            {/* El Nombre del Autor con Correo Electrónico al lado */}
            <div className="flex flex-wrap items-center gap-2 px-4 py-2 rounded-xl bg-[#0f1422] border border-[#1e293b] text-neutral-200">
              <User className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-neutral-400">Autor:</span>
              <strong className="text-white font-semibold">{bookMeta.author}</strong>
              <span className="text-neutral-600 hidden xs:inline">•</span>
              <a
                href={`mailto:${bookMeta.email}`}
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 hover:underline font-mono text-xs"
                title={`Enviar correo a ${bookMeta.email}`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{bookMeta.email}</span>
              </a>
            </div>

            {/* La Fecha */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0f1422] border border-[#1e293b] text-neutral-200">
              <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-neutral-400">Fecha:</span>
              <strong className="text-white font-semibold">{bookMeta.date}</strong>
            </div>

            {/* Longitud total */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0f1422] border border-[#1e293b] text-neutral-200">
              <BookOpen className="w-4 h-4 text-purple-400 shrink-0" />
              <span className="text-neutral-400">Extensión:</span>
              <strong className="text-white font-semibold">100 Páginas • 7 Capítulos</strong>
            </div>
          </div>
        </section>

        {/* Divider subtle accent */}
        <div className="w-full max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-[#25324b] to-transparent" />

        {/* ========================================================= */}
        {/* SECUENCIA 2: MENÚ DE OPCIONES DE INTERACCIÓN CON LA OBRA   */}
        {/* Orden estricto:                                           */}
        {/* 1-. Infografía                                             */}
        {/* 2-. Resumen Ejecutivo                                      */}
        {/* 3-. Resumen de Video                                       */}
        {/* 4-. Presentación sin audio                                 */}
        {/* 5-. Documento Interactivo                                  */}
        {/* 6-. Documento pdf                                          */}
        {/* ========================================================= */}
        <section id="menu-opciones-obra" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#1b2335] pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-indigo-400">
                  Opciones de Interacción
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight mt-1">
                Menú de Opciones de Interacción con la Obra
              </h2>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm">
              Explore los 6 formatos diseñados para cada perfil de lectura y nivel de profundidad requerida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* ===================================================== */}
            {/* 1-. Infografía (1 Página • Síntesis Visual HD)         */}
            {/* ===================================================== */}
            <div className="rounded-2xl border border-emerald-900/60 bg-[#0d1612] hover:bg-[#111c17] p-5 flex flex-col justify-between transition-all hover:border-emerald-500/70 hover:shadow-xl group">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-700/60 text-emerald-300 font-mono text-xs font-bold flex items-center justify-center">
                      1
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wide">
                      Infografía
                    </span>
                  </div>
                  <span className="text-[10.5px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700/60">
                    1 Página • Visual HD
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-white group-hover:text-emerald-300 transition-colors">
                  1-. Infografía
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  Resumen gráfico, en una página de las 3 partes de la propuesta: Diagnóstico, Estado de la IA en Educación y las 7 Oportunidades que se presentan.
                </p>

                <div className="pt-1 text-[11px] text-neutral-400 flex items-center gap-1.5 font-mono">
                  <span className="text-emerald-400 font-bold">Longitud:</span>
                  <span>1 página de alta resolución</span>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-emerald-900/40 grid grid-cols-2 gap-2">
                <button
                  id="btn-landing-ver-infografia"
                  onClick={() => setActiveImageModal(true)}
                  className="py-2.5 px-2 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-600/60 text-emerald-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ver en Línea HD</span>
                </button>
                <a
                  id="btn-landing-descargar-infografia"
                  href="/recursos/infografia-1-pagina.jpg"
                  download="infografia-1-pagina.jpg"
                  className="py-2.5 px-2 rounded-xl bg-[#14231c] hover:bg-[#1a2d24] border border-emerald-800/40 text-neutral-200 font-medium text-xs flex items-center justify-center gap-1.5 transition-all text-center cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Descargar JPG</span>
                </a>
              </div>
            </div>

            {/* ===================================================== */}
            {/* 2-. Resumen Ejecutivo (Versión en Línea Stand Alone)   */}
            {/* ===================================================== */}
            <div className="rounded-2xl border border-cyan-800/60 bg-[#0b151c] hover:bg-[#0f1d28] p-5 flex flex-col justify-between transition-all hover:border-cyan-400/80 hover:shadow-xl group relative">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-700/60 text-cyan-300 font-mono text-xs font-bold flex items-center justify-center">
                      2
                    </span>
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wide">
                      Resumen Ejecutivo
                    </span>
                  </div>
                  <span className="text-[10.5px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-700/60">
                    Versión en Línea Stand Alone
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-white group-hover:text-cyan-300 transition-colors">
                  2-. Resumen Ejecutivo
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  Se presentan los detalles más relevantes de la propuesta para el programa Esta Tierra de Gracia
                </p>

                <div className="pt-1 text-[11px] text-neutral-400 flex items-center gap-1.5 font-mono">
                  <span className="text-cyan-400 font-bold">Longitud:</span>
                  <span>4 páginas (~7 min de lectura)</span>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-cyan-900/40 grid grid-cols-2 gap-2">
                <button
                  id="btn-landing-resumen-online-standalone"
                  onClick={onSelectExecutiveSummaryStandalone}
                  className="py-2.5 px-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Leer en Línea</span>
                </button>
                <button
                  id="btn-landing-descargar-resumen-pdf"
                  onClick={() =>
                    handleDownloadFile(
                      '/recursos/resumen-ejecutivo-4-paginas.pdf',
                      'resumen-ejecutivo-4-paginas.pdf',
                      false
                    )
                  }
                  className="py-2.5 px-2 rounded-xl bg-[#14232f] hover:bg-[#1a3142] border border-cyan-800/60 text-neutral-200 font-medium text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Descargar PDF</span>
                </button>
              </div>
            </div>

            {/* ===================================================== */}
            {/* 3-. Resumen de Video (10 Minutos • Audiovisual)        */}
            {/* ===================================================== */}
            <div className="rounded-2xl border border-rose-900/60 bg-[#160e12] hover:bg-[#1c1217] p-5 flex flex-col justify-between transition-all hover:border-rose-500/70 hover:shadow-xl group">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-rose-950 border border-rose-700/60 text-rose-300 font-mono text-xs font-bold flex items-center justify-center">
                      3
                    </span>
                    <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wide">
                      Resumen de Video
                    </span>
                  </div>
                  <span className="text-[10.5px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-700/60">
                    10:00 min • Audiovisual
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-white group-hover:text-rose-300 transition-colors">
                  3-. Resumen de Video
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  Recorrido audiovisual en 10 minutos con los elementos más relevantes de la propuesta presentada
                </p>

                <div className="pt-1 text-[11px] text-neutral-400 flex items-center gap-1.5 font-mono">
                  <span className="text-rose-400 font-bold">Longitud:</span>
                  <span>10 minutos de duración</span>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-rose-900/40 grid grid-cols-2 gap-2">
                <button
                  id="btn-landing-play-video"
                  onClick={() => setActiveVideoModal(true)}
                  className="py-2.5 px-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Reproducir</span>
                </button>
                <a
                  id="btn-landing-youtube-external"
                  href="https://youtu.be/DgbAiGmCH2Y"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-2 rounded-xl bg-[#26181e] hover:bg-[#321f28] border border-rose-800/50 text-rose-200 font-medium text-xs flex items-center justify-center gap-1.5 transition-all text-center cursor-pointer"
                  title="Ver en YouTube (https://youtu.be/DgbAiGmCH2Y)"
                >
                  <Youtube className="w-3.5 h-3.5 text-rose-400" />
                  <span>En YouTube</span>
                </a>
              </div>
            </div>

            {/* ===================================================== */}
            {/* 4-. Presentación sin audio (35 Slides • PDF Descarga)  */}
            {/* ===================================================== */}
            <div className="rounded-2xl border border-amber-800/60 bg-[#17120a] hover:bg-[#1f170c] p-5 flex flex-col justify-between transition-all hover:border-amber-400/80 hover:shadow-xl group">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-950 border border-amber-700/60 text-amber-300 font-mono text-xs font-bold flex items-center justify-center">
                      4
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wide">
                      Presentación sin audio
                    </span>
                  </div>
                  <span className="text-[10.5px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-700/60">
                    35 Slides • En Línea & PDF
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                  4-. Presentación sin audio
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  Presentación gráfica en 35 láminas conceptuales que sintetizan el diagnóstico del sistema educativo, el avance algorítmico y las 7 oportunidades estratégicas.
                </p>

                <div className="pt-1 text-[11px] text-neutral-400 flex items-center gap-1.5 font-mono">
                  <span className="text-amber-400 font-bold">Longitud:</span>
                  <span>35 láminas (PDF 16:9 HD)</span>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-amber-900/40 grid grid-cols-2 gap-2">
                <button
                  id="btn-landing-ver-presentacion"
                  onClick={() => setActivePresentationModal(true)}
                  className="py-2.5 px-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md active:scale-[0.98]"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ver en Línea</span>
                </button>
                <button
                  id="btn-landing-descargar-presentacion"
                  onClick={() =>
                    handleDownloadFile(
                      '/recursos/presentacion-35-slides.pdf',
                      'presentacion-35-slides.pdf',
                      false
                    )
                  }
                  className="py-2.5 px-2 rounded-xl bg-[#22180d] hover:bg-[#2d2012] border border-amber-800/60 text-amber-200 font-medium text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer text-center"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Descargar PDF</span>
                </button>
              </div>
            </div>

            {/* ===================================================== */}
            {/* 5-. Documento Interactivo (Lector Digital Completo)    */}
            {/* ===================================================== */}
            <div className="rounded-2xl border border-indigo-500/60 bg-gradient-to-b from-[#12162a] via-[#0e1322] to-[#090d18] p-5 flex flex-col justify-between transition-all hover:border-indigo-400 hover:shadow-2xl group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-3 relative z-10">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-indigo-950 border border-indigo-700/60 text-indigo-300 font-mono text-xs font-bold flex items-center justify-center">
                      5
                    </span>
                    <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wide">
                      Documento Interactivo
                    </span>
                  </div>
                  <span className="text-[10.5px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-700/60">
                    Lector en Línea Integral
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-white group-hover:text-indigo-300 transition-colors">
                  5-. Documento Interactivo
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  Propuesta Completa, con referencias activas a lo largo del texto que permiten acceder a las fuentes bibliográficas del documento. El lector puede cambiar el fondo de lectura y ajustar a 3 tamaños de letras. Si se usa un teléfono se puede leer con orientación horizontal.
                </p>

                <div className="pt-1 text-[11px] text-neutral-400 flex items-center gap-1.5 font-mono">
                  <span className="text-indigo-400 font-bold">Longitud:</span>
                  <span>7 capítulos completos • 100 páginas equivalentes</span>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-indigo-900/40 relative z-10">
                <button
                  id="btn-landing-entrar-interactivo"
                  onClick={onSelectOnline}
                  className="w-full py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-indigo-600/30"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Ingresar al Documento Interactivo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* ===================================================== */}
            {/* 6-. Documento pdf (Descarga Directa • 100 Páginas)     */}
            {/* ===================================================== */}
            <div className="rounded-2xl border border-purple-900/60 bg-[#120f1b] hover:bg-[#161222] p-5 flex flex-col justify-between transition-all hover:border-purple-500/70 hover:shadow-xl group">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-purple-950 border border-purple-700/60 text-purple-300 font-mono text-xs font-bold flex items-center justify-center">
                      6
                    </span>
                    <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wide">
                      Documento pdf
                    </span>
                  </div>
                  <span className="text-[10.5px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-700/60">
                    PDF Monográfico A4
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-white group-hover:text-purple-300 transition-colors">
                  6-. Documento pdf
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  Monografía académica íntegra lista para descarga, archivo o impresión formal: aparato crítico completo, referencias bibliográficas y apéndices de casos (25 países) y plataformas (13 herramientas).
                </p>

                <div className="pt-1 text-[11px] text-neutral-400 flex items-center gap-1.5 font-mono">
                  <span className="text-purple-400 font-bold">Longitud:</span>
                  <span>100 páginas (PDF estándar A4)</span>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-purple-900/40">
                <button
                  id="btn-landing-descargar-completo"
                  onClick={() =>
                    handleDownloadFile(
                      '/recursos/documento-completo-100-paginas.pdf',
                      'documento-completo-100-paginas.pdf',
                      true
                    )
                  }
                  className="w-full py-2.5 px-3 rounded-xl bg-purple-900/60 hover:bg-purple-800/80 border border-purple-600/50 hover:border-purple-400 text-purple-100 font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <Download className="w-4 h-4 text-purple-300" />
                  <span>Descargar Documento pdf</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Institutional Bibliographic Footer */}
      <footer className="w-full border-t border-[#161d2d] bg-[#070a12] py-8 px-4 sm:px-6 lg:px-8 text-center text-xs text-neutral-400 space-y-2 mt-auto">
        <p className="font-serif font-medium text-neutral-300">
          {bookMeta.program} • {bookMeta.date}
        </p>
        <p className="text-neutral-400 text-[11px] font-mono">
          Cita bibliográfica: {bookMeta.author} ({bookMeta.email}). (2026).{' '}
          <em>{bookMeta.title}: {bookMeta.subtitle}</em>.
        </p>
      </footer>

      {/* Embedded Modals */}
      <VideoPlayerModal
        isOpen={activeVideoModal}
        resource={videoResource}
        onClose={() => setActiveVideoModal(false)}
        initialTab="youtube"
      />

      <InfographicViewerModal
        isOpen={activeImageModal}
        resource={infografiaResource}
        onClose={() => setActiveImageModal(false)}
      />

      <PresentationViewerModal
        isOpen={activePresentationModal}
        onClose={() => {
          setActivePresentationModal(false);
          if (typeof window !== 'undefined' && window.location.hash === '#presentacion') {
            history.pushState(null, '', window.location.pathname);
          }
        }}
        onDownload={() =>
          handleDownloadFile(
            '/recursos/presentacion-35-slides.pdf',
            'presentacion-35-slides.pdf',
            false
          )
        }
      />
    </div>
  );
};

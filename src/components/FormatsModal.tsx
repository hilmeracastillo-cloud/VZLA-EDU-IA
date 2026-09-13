import React, { useState, useEffect } from 'react';
import {
  X,
  Layers,
  FileText,
  Video,
  FileCheck,
  BookOpen,
  Download,
  ExternalLink,
  Play,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Image as ImageIcon,
  Youtube,
  ZoomIn,
  Maximize2,
  Edit3,
  Loader2,
  Eye,
} from 'lucide-react';
import { WORK_RESOURCES, ResourceItem } from '../data/resources';
import { PresentationViewerModal } from './PresentationViewerModal';
import { VideoPlayerModal } from './VideoPlayerModal';

interface FormatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectInteractive: () => void;
  onSelectExecutiveSummaryStandalone?: () => void;
}

export const FormatsModal: React.FC<FormatsModalProps> = ({
  isOpen,
  onClose,
  onSelectInteractive,
  onSelectExecutiveSummaryStandalone,
}) => {
  const [activeVideoModal, setActiveVideoModal] = useState<ResourceItem | null>(null);
  const [previewResource, setPreviewResource] = useState<ResourceItem | null>(null);
  const [activeImageModal, setActiveImageModal] = useState<ResourceItem | null>(null);
  const [activePresentationModal, setActivePresentationModal] = useState<boolean>(false);
  const [imageZoom, setImageZoom] = useState<boolean>(false);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);
  const [isGeneratingFullPdf, setIsGeneratingFullPdf] = useState<boolean>(false);

  // YouTube URL state
  const OFFICIAL_YOUTUBE_URL = 'https://youtu.be/DgbAiGmCH2Y';
  const [youtubeUrl, setYoutubeUrl] = useState<string>(() => {
    const saved = localStorage.getItem('venezuela_ia_youtube_url');
    if (saved && (saved.includes('v91urPdXtWc') || saved.trim() === '')) {
      return OFFICIAL_YOUTUBE_URL;
    }
    return saved || OFFICIAL_YOUTUBE_URL;
  });
  const [editingYoutube, setEditingYoutube] = useState<boolean>(false);
  const [tempYoutubeInput, setTempYoutubeInput] = useState<string>('');

  useEffect(() => {
    if (youtubeUrl) {
      localStorage.setItem('venezuela_ia_youtube_url', youtubeUrl);
    }
  }, [youtubeUrl]);

  if (!isOpen) return null;

  // Extract YouTube ID from URL
  const getYouTubeEmbedUrl = (url: string): string | null => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0`;
    }
    return null;
  };

  const getFormatIcon = (formatType: string) => {
    switch (formatType) {
      case 'web':
        return <BookOpen className="w-5 h-5 text-indigo-400" />;
      case 'video':
        return <Video className="w-5 h-5 text-rose-400" />;
      case 'image':
        return <ImageIcon className="w-5 h-5 text-emerald-400" />;
      default:
        return <FileText className="w-5 h-5 text-cyan-400" />;
    }
  };

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
      // Ignore network check failure and continue with fallback
    }

    if (fallbackGenerate) {
      setIsGeneratingFullPdf(true);
      setDownloadToast('Componiendo y descargando Documento Completo en PDF...');
      try {
        const { generateBookPDF } = await import('../utils/pdfGenerator');
        await generateBookPDF({
          scope: 'all',
          onProgress: (percent, msg) => {
            setDownloadToast(`Generando PDF (${percent}%): ${msg}`);
          },
        });
        setDownloadToast('¡Descarga del Documento Completo completada!');
        setTimeout(() => setDownloadToast(null), 3500);
      } catch (err) {
        console.error('Error al generar PDF dinámico:', err);
      } finally {
        setIsGeneratingFullPdf(false);
      }
      return;
    }

    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadToast(`Descargando "${fileName}"...`);
    setTimeout(() => setDownloadToast(null), 3500);
  };

  const handleAction = (res: ResourceItem) => {
    if (res.id === 'interactive') {
      onSelectInteractive();
      onClose();
      return;
    }

    if (res.id === 'infografia') {
      setImageZoom(false);
      setActiveImageModal(res);
      return;
    }

    if (res.id === 'video') {
      setActiveVideoModal(res);
      return;
    }

    if (res.id === 'completo') {
      // DIRECT EXECUTION: Download the full PDF document
      handleDownloadFile(res.filePath, res.fallbackFileName, true);
      return;
    }

    if (res.id === 'resumen') {
      // Direct execution: Download executive summary PDF
      handleDownloadFile(res.filePath, res.fallbackFileName, false);
      return;
    }

    if (res.id === 'presentacion') {
      // Direct execution: Download presentation PDF (35 slides)
      handleDownloadFile(res.filePath, res.fallbackFileName, false);
      return;
    }

    // Fallback preview modal
    setPreviewResource(res);
  };

  const handleSaveYoutube = (e: React.FormEvent) => {
    e.preventDefault();
    setYoutubeUrl(tempYoutubeInput.trim());
    setEditingYoutube(false);
  };

  const embedUrl = getYouTubeEmbedUrl(youtubeUrl);

  return (
    <>
      <div
        id="modal-formats-backdrop"
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in safe-px"
        onClick={onClose}
      >
        <div
          id="modal-formats-panel"
          className="w-full max-w-5xl bg-[#101010] rounded-2xl border border-[#2B2B2B] shadow-2xl flex flex-col max-h-[92vh] overflow-hidden relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-[#222222] bg-gradient-to-r from-[#141414] to-[#181818] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-700/50 text-indigo-400 shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-base sm:text-xl font-serif font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Opciones de Interacción con la Obra</span>
                  <span className="text-[11px] font-sans px-2 py-0.5 rounded-full bg-indigo-900/60 text-indigo-300 border border-indigo-700/50">
                    6 Formatos
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                  Selecciona el formato que mejor se adapte a tu tiempo, objetivo y dispositivo.
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800/80 transition-colors cursor-pointer shrink-0"
              title="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Floating Download Toast */}
          {downloadToast && (
            <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-[#181224] border border-purple-500/80 text-purple-100 text-xs font-semibold shadow-2xl flex items-center gap-2.5 animate-in fade-in slide-in-from-top-2 max-w-[90%]">
              <Download className="w-4 h-4 text-emerald-400 shrink-0 animate-bounce" />
              <span className="truncate">{downloadToast}</span>
            </div>
          )}

          {/* Cards Grid */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {WORK_RESOURCES.map((res) => {
                const isInteractive = res.id === 'interactive';
                const isInfografia = res.id === 'infografia';
                const isVideo = res.id === 'video';
                const isPresentacion = res.id === 'presentacion';
                const isCompleto = res.id === 'completo';
                const isResumen = res.id === 'resumen';

                return (
                  <div
                    key={res.id}
                    className={`rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all group hover:shadow-xl relative ${
                      isInteractive
                        ? 'bg-gradient-to-b from-[#161622] to-[#101016] border-indigo-600/60 hover:border-indigo-400 ring-1 ring-indigo-500/30'
                        : isInfografia
                        ? 'bg-[#121814] hover:bg-[#152019] border-emerald-900/50 hover:border-emerald-600/60'
                        : isVideo
                        ? 'bg-[#181214] hover:bg-[#201418] border-rose-900/50 hover:border-rose-600/60'
                        : isPresentacion
                        ? 'bg-[#18130d] hover:bg-[#20180f] border-amber-900/50 hover:border-amber-500/70'
                        : isCompleto
                        ? 'bg-[#16111e] hover:bg-[#1b1426] border-purple-900/60 hover:border-purple-500/80 ring-1 ring-purple-600/30 shadow-purple-950/20'
                        : 'bg-[#141414] hover:bg-[#181818] border-[#262626] hover:border-neutral-600'
                    }`}
                  >
                    <div>
                      {/* Top Bar: Icon + Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="p-2 rounded-xl bg-[#1F1F1F] border border-[#2E2E2E]">
                          {getFormatIcon(res.formatType)}
                        </div>
                        <span
                          className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${res.badgeColor}`}
                        >
                          {res.badge}
                        </span>
                      </div>

                      {/* Titles */}
                      <h3 className="text-base font-serif font-bold text-white group-hover:text-indigo-200 transition-colors">
                        {res.title}
                      </h3>
                      <p className="text-xs text-indigo-400/90 font-medium mt-0.5 mb-2.5">
                        {res.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3 mb-3.5">
                        {res.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 mb-4 pt-2 border-t border-[#202020]">
                        {res.highlights.slice(0, 2).map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-1.5 text-[11px] text-neutral-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-3 border-t border-[#222222]/80 mt-auto">
                      {isInteractive ? (
                        <button
                          onClick={() => handleAction(res)}
                          className="w-full py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 active:scale-[0.98] transition-all cursor-pointer"
                        >
                          <BookOpen className="w-4 h-4" />
                          <span>Explorar en Línea Ahora</span>
                        </button>
                      ) : isInfografia ? (
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => handleAction(res)}
                            className="py-2 px-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/70 border border-emerald-700/50 text-emerald-200 font-medium text-[11px] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                          >
                            <ZoomIn className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Ver Imagen</span>
                          </button>
                          <a
                            href={res.filePath}
                            download={res.fallbackFileName}
                            className="py-2 px-2.5 rounded-xl bg-[#202020] hover:bg-[#2A2A2A] border border-[#333] text-neutral-200 font-medium text-[11px] flex items-center justify-center gap-1.5 transition-all text-center"
                          >
                            <Download className="w-3.5 h-3.5 text-neutral-400" />
                            <span>Descargar</span>
                          </a>
                        </div>
                      ) : isVideo ? (
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            id="btn-play-video-modal"
                            onClick={() => handleAction(res)}
                            className="py-2 px-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-[11px] flex items-center justify-center gap-1.5 shadow-md shadow-rose-950/30 active:scale-[0.98] transition-all cursor-pointer"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Reproducir</span>
                          </button>
                          <a
                            id="link-open-youtube-direct"
                            href={youtubeUrl || OFFICIAL_YOUTUBE_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="py-2 px-2 rounded-xl bg-[#22161a] hover:bg-[#2d1b22] border border-rose-800/50 hover:border-rose-600/70 text-rose-200 font-medium text-[11px] flex items-center justify-center gap-1.5 transition-all text-center cursor-pointer"
                            title="Ver en YouTube (https://youtu.be/DgbAiGmCH2Y)"
                          >
                            <Youtube className="w-3.5 h-3.5 text-rose-400" />
                            <span>En YouTube</span>
                          </a>
                        </div>
                      ) : isCompleto ? (
                        <div className="space-y-1.5">
                          <button
                            id="btn-download-complete-pdf"
                            onClick={() => handleAction(res)}
                            disabled={isGeneratingFullPdf}
                            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 hover:from-purple-600 hover:to-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-900/30 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-75"
                          >
                            {isGeneratingFullPdf ? (
                              <Loader2 className="w-4 h-4 animate-spin text-purple-200" />
                            ) : (
                              <Download className="w-4 h-4 text-purple-200" />
                            )}
                            <span>
                              {isGeneratingFullPdf
                                ? 'Preparando descarga...'
                                : 'Descargar Documento Completo (PDF)'}
                            </span>
                          </button>
                          <p className="text-[10.5px] text-purple-300/80 text-center flex items-center justify-center gap-1 font-medium">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span>Ejecución directa: descarga inmediata del PDF</span>
                          </p>
                        </div>
                      ) : isResumen ? (
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => {
                              onClose();
                              if (onSelectExecutiveSummaryStandalone) {
                                onSelectExecutiveSummaryStandalone();
                              }
                            }}
                            className="py-2.5 px-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>Leer en Línea</span>
                          </button>
                          <button
                            onClick={() => handleAction(res)}
                            className="py-2.5 px-2 rounded-xl bg-cyan-950/70 hover:bg-cyan-900/80 border border-cyan-700/50 hover:border-cyan-500 text-cyan-200 font-medium text-[11px] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                          >
                            <Download className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Descargar PDF</span>
                          </button>
                        </div>
                      ) : isPresentacion ? (
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            id="btn-view-presentation-modal"
                            onClick={() => setActivePresentationModal(true)}
                            className="py-2.5 px-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md active:scale-[0.98]"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Ver en Línea</span>
                          </button>
                          <button
                            id="btn-download-presentation-modal"
                            onClick={() => handleAction(res)}
                            className="py-2.5 px-2 rounded-xl bg-amber-950/70 hover:bg-amber-900/80 border border-amber-700/50 hover:border-amber-500 text-amber-200 font-medium text-[11px] flex items-center justify-center gap-1.5 transition-all cursor-pointer text-center"
                          >
                            <Download className="w-3.5 h-3.5 text-amber-400" />
                            <span>Descargar PDF</span>
                          </button>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => handleAction(res)}
                            className="py-2 px-2.5 rounded-xl bg-[#202020] hover:bg-[#2A2A2A] border border-[#303030] text-neutral-200 font-medium text-[11px] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                          >
                            <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                            <span>Abrir</span>
                          </button>
                          <a
                            href={res.filePath}
                            download={res.fallbackFileName}
                            className="py-2 px-2.5 rounded-xl bg-indigo-950/50 hover:bg-indigo-900/60 border border-indigo-700/40 text-indigo-300 font-medium text-[11px] flex items-center justify-center gap-1.5 transition-all text-center"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Descargar</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note for the reader / uploader instructions */}
            <div className="mt-6 p-4 rounded-xl bg-[#151515] border border-[#292929] flex items-start gap-3 text-xs text-neutral-300">
              <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong className="text-white font-semibold">
                  Sincronización Multimedia:
                </strong>{' '}
                Los archivos de descarga y visualización se enlazan directamente a{' '}
                <code className="font-mono bg-[#202020] text-indigo-300 px-1.5 py-0.5 rounded text-[11px]">
                  /public/recursos
                </code>
                . El video de síntesis cuenta con reproductor embebido de YouTube para evitar límites de almacenamiento.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infografía High-Resolution Image Viewer Modal */}
      {activeImageModal && (
        <div
          className="fixed inset-0 z-60 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-fade-in"
          onClick={() => setActiveImageModal(null)}
        >
          <div
            className="w-full max-w-5xl bg-[#111111] rounded-2xl border border-[#2E2E2E] shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3.5 sm:p-4 border-b border-[#222222] flex items-center justify-between bg-[#161616]">
              <div className="flex items-center gap-2.5">
                <ImageIcon className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white">
                    {activeImageModal.title} (Visualización en Alta Resolución)
                  </h3>
                  <p className="text-[11px] text-neutral-400">
                    Haz clic en la imagen o usa los botones para alternar zoom
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setImageZoom(!imageZoom)}
                  className="px-2.5 py-1.5 rounded-lg bg-[#222] hover:bg-[#2c2c2c] text-neutral-200 border border-[#333] text-xs flex items-center gap-1 cursor-pointer"
                  title="Ampliar imagen"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>{imageZoom ? 'Ajustar' : 'Zoom'}</span>
                </button>
                <a
                  href={activeImageModal.filePath}
                  download={activeImageModal.fallbackFileName}
                  className="px-2.5 py-1.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-emerald-200 border border-emerald-700/60 text-xs flex items-center gap-1 cursor-pointer"
                  title="Descargar imagen JPG"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar JPG</span>
                </a>
                <button
                  onClick={() => setActiveImageModal(null)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Image Stage */}
            <div
              className={`flex-1 overflow-auto p-4 flex items-center justify-center bg-[#09090b] relative ${
                imageZoom ? 'cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setImageZoom(!imageZoom)}
            >
              <img
                src={activeImageModal.filePath}
                alt="Infografía Síntesis - Educación e Inteligencia Artificial en Venezuela"
                className={`transition-all duration-200 rounded-lg shadow-2xl object-contain ${
                  imageZoom ? 'max-w-none w-full scale-125' : 'max-h-[75vh] w-auto max-w-full'
                }`}
                onError={(e) => {
                  // If image fails to load from /recursos, fallback message
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.img-error-msg')) {
                    const div = document.createElement('div');
                    div.className = 'img-error-msg p-8 text-center text-neutral-300 max-w-md';
                    div.innerHTML = `
                      <div class="p-3 w-12 h-12 mx-auto mb-3 rounded-xl bg-emerald-950/60 border border-emerald-700/50 flex items-center justify-center text-emerald-400">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      </div>
                      <h4 class="font-bold text-white mb-1">Archivo infografia-1-pagina.jpg en sincronización</h4>
                      <p class="text-xs text-neutral-400 mb-4">El archivo se cargará desde <code>/public/recursos/infografia-1-pagina.jpg</code> al publicarse o al adjuntarlo.</p>
                    `;
                    parent.appendChild(div);
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Video Player Modal (MP4 10 min / YouTube / Upload) */}
      <VideoPlayerModal
        isOpen={!!activeVideoModal}
        resource={activeVideoModal}
        onClose={() => setActiveVideoModal(null)}
        initialTab="youtube"
      />

      {/* PDF / Document Viewer / Fallback Modal */}
      {previewResource && (
        <div
          className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={() => setPreviewResource(null)}
        >
          <div
            className="w-full max-w-3xl bg-[#121212] rounded-2xl border border-[#2E2E2E] shadow-2xl overflow-hidden flex flex-col p-5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-[#222222]">
              <div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border bg-indigo-950 text-indigo-300 border-indigo-700/50 uppercase">
                  {previewResource.durationOrPages}
                </span>
                <h3 className="text-lg font-serif font-bold text-white mt-1">
                  {previewResource.title}
                </h3>
                <p className="text-xs text-neutral-400">{previewResource.subtitle}</p>
              </div>
              <button
                onClick={() => setPreviewResource(null)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              {previewResource.description}
            </p>

            <div className="bg-[#181818] p-4 rounded-xl border border-[#282828] mb-6 space-y-2 text-xs">
              <div className="flex items-center justify-between text-neutral-400">
                <span>Ruta del archivo:</span>
                <code className="font-mono text-indigo-300">{previewResource.filePath}</code>
              </div>
              <div className="flex items-center justify-between text-neutral-400">
                <span>Nombre asignado:</span>
                <span className="text-neutral-200 font-medium">
                  {previewResource.fallbackFileName}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setPreviewResource(null)}
                className="px-4 py-2 rounded-xl bg-[#202020] hover:bg-[#282828] text-neutral-300 text-xs font-medium cursor-pointer"
              >
                Volver
              </button>
              <a
                href={previewResource.filePath}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#282828] hover:bg-[#333] border border-[#3E3E3E] text-white text-xs font-medium flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Abrir en Nueva Pestaña</span>
              </a>
              <a
                href={previewResource.filePath}
                download={previewResource.fallbackFileName}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium flex items-center gap-1.5 shadow-lg shadow-indigo-600/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descargar Archivo</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Visor de Presentación en Línea (35 Slides) */}
      <PresentationViewerModal
        isOpen={activePresentationModal}
        onClose={() => setActivePresentationModal(false)}
        onDownload={() =>
          handleDownloadFile(
            '/recursos/presentacion-35-slides.pdf',
            'presentacion-35-slides.pdf',
            false
          )
        }
      />
    </>
  );
};

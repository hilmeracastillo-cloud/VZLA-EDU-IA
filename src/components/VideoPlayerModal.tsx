import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Video,
  Youtube,
  Edit3,
  ExternalLink,
  Upload,
  Download,
  RotateCcw,
  CheckCircle2,
  Film,
} from 'lucide-react';
import { ResourceItem } from '../data/resources';

interface VideoPlayerModalProps {
  isOpen: boolean;
  resource?: ResourceItem | null;
  onClose: () => void;
  initialTab?: 'youtube' | 'video';
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  isOpen,
  resource,
  onClose,
  initialTab = 'youtube',
}) => {
  const OFFICIAL_YOUTUBE_URL = 'https://youtu.be/DgbAiGmCH2Y';
  const OFFICIAL_YOUTUBE_ID = 'DgbAiGmCH2Y';
  const DEFAULT_VIDEO_PATH = '/recursos/video-resumen-10min.mp4';

  const [activeTab, setActiveTab] = useState<'youtube' | 'video'>(initialTab);
  const [youtubeUrl, setYoutubeUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('venezuela_ia_youtube_url');
      if (!saved || saved.includes('v91urPdXtWc') || saved.trim() === '') {
        localStorage.setItem('venezuela_ia_youtube_url', OFFICIAL_YOUTUBE_URL);
        return OFFICIAL_YOUTUBE_URL;
      }
      return saved;
    } catch {
      return OFFICIAL_YOUTUBE_URL;
    }
  });
  const [editingYoutube, setEditingYoutube] = useState<boolean>(false);
  const [tempYoutubeInput, setTempYoutubeInput] = useState<string>('');

  // Always reset to requested tab (defaulting to YouTube) when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab || 'youtube');
    }
  }, [isOpen, initialTab]);

  // Local/Custom Video state
  const [customVideoUrl, setCustomVideoUrl] = useState<string | null>(null);
  const [customVideoName, setCustomVideoName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Load custom video from IndexedDB if previously uploaded by user
  useEffect(() => {
    try {
      const request = indexedDB.open('venezuela_ia_video_db', 1);
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains('videos')) {
          db.createObjectStore('videos');
        }
      };
      request.onsuccess = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        const tx = db.transaction('videos', 'readonly');
        const store = tx.objectStore('videos');
        const getReq = store.get('annexed_video');
        getReq.onsuccess = () => {
          if (getReq.result) {
            const blob = getReq.result as Blob;
            const objUrl = URL.createObjectURL(blob);
            setCustomVideoUrl(objUrl);
            setCustomVideoName('video-anexo-guardado.mp4');
          }
        };
      };
    } catch {
      // IndexedDB fallback
    }
  }, []);

  useEffect(() => {
    if (youtubeUrl) {
      localStorage.setItem('venezuela_ia_youtube_url', youtubeUrl);
    }
  }, [youtubeUrl]);

  // Sync playback rate to video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed, customVideoUrl, activeTab]);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleVideoFile = (file: File) => {
    if (!file.type.startsWith('video/')) {
      showToast('Por favor selecciona un archivo de video válido (.mp4, .webm, etc.)');
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setCustomVideoUrl(objectUrl);
    setCustomVideoName(file.name);
    setActiveTab('video');
    showToast(`¡Video cargado con éxito: "${file.name}"!`);

    // Store in IndexedDB for persistence
    try {
      const request = indexedDB.open('venezuela_ia_video_db', 1);
      request.onsuccess = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        const tx = db.transaction('videos', 'readwrite');
        const store = tx.objectStore('videos');
        store.put(file, 'annexed_video');
      };
    } catch {
      // IndexedDB persistence fallback
    }
  };

  const handleResetDefaultVideo = () => {
    if (customVideoUrl) {
      URL.revokeObjectURL(customVideoUrl);
    }
    setCustomVideoUrl(null);
    setCustomVideoName(null);
    try {
      const request = indexedDB.open('venezuela_ia_video_db', 1);
      request.onsuccess = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        const tx = db.transaction('videos', 'readwrite');
        tx.objectStore('videos').delete('annexed_video');
      };
    } catch {
      // ignore
    }
    showToast('Restablecido al video de síntesis original (10 min)');
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleVideoFile(e.dataTransfer.files[0]);
    }
  };

  const getYouTubeEmbedUrl = (url: string): string => {
    if (!url) return `https://www.youtube.com/embed/${OFFICIAL_YOUTUBE_ID}?autoplay=1&rel=0`;
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0`;
    }
    return `https://www.youtube.com/embed/${OFFICIAL_YOUTUBE_ID}?autoplay=1&rel=0`;
  };

  const handleSaveYoutube = (e: React.FormEvent) => {
    e.preventDefault();
    setYoutubeUrl(tempYoutubeInput.trim() || OFFICIAL_YOUTUBE_URL);
    setEditingYoutube(false);
  };

  const embedUrl = getYouTubeEmbedUrl(youtubeUrl);
  const currentVideoSrc = customVideoUrl || resource?.filePath || DEFAULT_VIDEO_PATH;

  return (
    <div
      className="fixed inset-0 z-70 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-5 animate-fade-in safe-px"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl bg-[#111111] rounded-2xl border border-[#2E2E2E] shadow-2xl overflow-hidden flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toast Notification */}
        {toastMessage && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 z-80 px-4 py-2 rounded-xl bg-[#1c1424] border border-rose-500/70 text-rose-100 text-xs font-semibold shadow-2xl flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Modal Header */}
        <div className="p-3 sm:p-4 border-b border-[#222222] flex flex-wrap items-center justify-between gap-3 bg-[#161616]">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-2 rounded-xl bg-rose-950/70 border border-rose-800/60 text-rose-400 shrink-0">
              <Video className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white truncate">
                  3-. Resumen de Video
                </h3>
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-700/60">
                  10:00 min • Audiovisual
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 truncate hidden sm:block">
                {customVideoName
                  ? `Reproduciendo video anexo: ${customVideoName}`
                  : 'Recorrido audiovisual en 10 minutos de la propuesta presentada'}
              </p>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Tab Toggle: YouTube (Principal) vs Archivo MP4 */}
            <div className="flex items-center bg-[#1f1f1f] rounded-xl p-0.5 border border-[#2d2d2d] text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveTab('youtube')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'youtube'
                    ? 'bg-rose-600 text-white shadow-sm font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Youtube className="w-3.5 h-3.5 text-rose-300" />
                <span>YouTube</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('video')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'video'
                    ? 'bg-rose-600 text-white shadow-sm font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>Video MP4</span>
              </button>
            </div>

            {/* Direct YouTube Link in header */}
            <a
              href={youtubeUrl || OFFICIAL_YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="px-2.5 py-1.5 rounded-xl bg-[#26181e] hover:bg-[#321f28] border border-rose-800/50 text-rose-200 text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer"
              title="Abrir directamente en YouTube"
            >
              <Youtube className="w-3.5 h-3.5 text-rose-400" />
              <span className="hidden md:inline">En YouTube</span>
              <ExternalLink className="w-3 h-3 text-rose-400" />
            </a>

            {/* Upload MP4 Button */}
            <input
              type="file"
              ref={fileInputRef}
              accept="video/mp4,video/webm,video/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleVideoFile(e.target.files[0]);
                }
              }}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-2.5 py-1.5 rounded-xl bg-[#222] hover:bg-[#2c2c2c] border border-[#383838] text-neutral-200 text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer"
              title="Cargar o sustituir por tu archivo de video MP4 del equipo"
            >
              <Upload className="w-3.5 h-3.5 text-rose-400" />
              <span className="hidden md:inline">Cargar MP4</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              title="Cerrar reproductor"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* YouTube URL Editor Bar (Visible only when YouTube tab is active and editing) */}
        {activeTab === 'youtube' && editingYoutube && (
          <form
            onSubmit={handleSaveYoutube}
            className="p-3 bg-[#181818] border-b border-[#282828] flex items-center gap-2"
          >
            <Youtube className="w-4 h-4 text-rose-400 shrink-0" />
            <input
              type="text"
              value={tempYoutubeInput}
              onChange={(e) => setTempYoutubeInput(e.target.value)}
              placeholder="Pega aquí la URL de YouTube (ej. https://youtu.be/... o https://www.youtube.com/watch?v=...)"
              className="flex-1 px-3 py-1.5 text-xs bg-[#101010] border border-[#333] rounded-lg text-white focus:outline-none focus:border-rose-500"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-medium cursor-pointer"
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={() => setEditingYoutube(false)}
              className="px-2 py-1.5 rounded-lg bg-[#252525] hover:bg-[#303030] text-neutral-400 text-xs cursor-pointer"
            >
              Cancelar
            </button>
          </form>
        )}

        {/* Video Player Display Area */}
        <div
          className="bg-black aspect-video flex items-center justify-center relative select-none overflow-hidden"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* Drag and drop overlay */}
          {isDragging && (
            <div className="absolute inset-0 z-30 bg-rose-950/80 border-2 border-dashed border-rose-500 flex flex-col items-center justify-center gap-3 backdrop-blur-sm p-6 text-center animate-fade-in">
              <Upload className="w-12 h-12 text-rose-300 animate-bounce" />
              <p className="text-sm font-semibold text-white">
                Suelta aquí tu archivo de video MP4
              </p>
              <p className="text-xs text-rose-200">
                Se reproducirá de inmediato en el reproductor de 10 minutos
              </p>
            </div>
          )}

          {activeTab === 'video' ? (
            <div className="w-full h-full relative group">
              <video
                key={currentVideoSrc}
                ref={videoRef}
                src={currentVideoSrc}
                poster="/recursos/slides/slide-01.jpg"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain bg-black"
              >
                Tu navegador no soporta la etiqueta de video HTML5.
              </video>

              {/* Custom video badge if user uploaded one */}
              {customVideoUrl && (
                <div className="absolute top-3 left-3 z-20 px-3 py-1 rounded-lg bg-black/75 border border-rose-500/60 text-[11px] text-rose-200 font-medium flex items-center gap-2 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="truncate max-w-[200px]">{customVideoName || 'Video anexo activo'}</span>
                  <button
                    onClick={handleResetDefaultVideo}
                    className="ml-1 text-neutral-400 hover:text-white underline text-[10px] cursor-pointer"
                    title="Volver al video original"
                  >
                    Restablecer
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* YouTube Player Mode */
            <div className="w-full h-full flex items-center justify-center relative">
              {embedUrl ? (
                <iframe
                  key={embedUrl}
                  src={embedUrl}
                  title="Video Síntesis (10 min) - Educación e Inteligencia Artificial en Venezuela (Hilmer Castillo)"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#141416] to-[#09090b]">
                  <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-800/40 text-rose-400 mb-4">
                    <Youtube className="w-10 h-10" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-white mb-1.5">
                    Transmisión en YouTube
                  </h4>
                  <p className="text-xs text-neutral-400 max-w-md mb-4 leading-relaxed">
                    Pega el enlace de YouTube correspondiente al video de síntesis de 10 minutos.
                  </p>
                  <button
                    onClick={() => {
                      setTempYoutubeInput(youtubeUrl);
                      setEditingYoutube(true);
                    }}
                    className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-rose-600/30 cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Pegar URL de YouTube</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-3 sm:p-4 bg-[#141414] border-t border-[#222222] flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Speed selector & source info */}
          <div className="flex flex-wrap items-center gap-3">
            {activeTab === 'video' && (
              <div className="flex items-center gap-1.5 bg-[#1b1b1b] px-2 py-1 rounded-lg border border-[#2c2c2c]">
                <span className="text-[11px] text-neutral-400 font-mono">Velocidad:</span>
                {[0.75, 1, 1.25, 1.5, 2].map((speed) => (
                  <button
                    key={speed}
                    type="button"
                    onClick={() => setPlaybackSpeed(speed)}
                    className={`px-1.5 py-0.5 rounded text-[10.5px] font-mono font-medium transition-all cursor-pointer ${
                      playbackSpeed === speed
                        ? 'bg-rose-600 text-white font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
            )}

            <span className="text-neutral-400 text-[11px] hidden sm:inline">
              {activeTab === 'video'
                ? customVideoUrl
                  ? 'Video anexo personalizado activo'
                  : 'Archivo de video nativo (10 minutos • HD 1080p)'
                : 'Transmisión vía YouTube'}
            </span>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2">
            {customVideoUrl && (
              <button
                type="button"
                onClick={handleResetDefaultVideo}
                className="py-1.5 px-2.5 rounded-lg bg-[#222] hover:bg-[#2d2d2d] border border-[#333] text-neutral-300 text-[11px] font-medium flex items-center gap-1.5 transition-all cursor-pointer"
                title="Volver al video predeterminado"
              >
                <RotateCcw className="w-3 h-3 text-amber-400" />
                <span>Restablecer</span>
              </button>
            )}

            <a
              href={DEFAULT_VIDEO_PATH}
              download="video-resumen-10min.mp4"
              className="py-1.5 px-3 rounded-lg bg-rose-950/60 hover:bg-rose-900/80 border border-rose-800/60 text-rose-200 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
              title="Descargar archivo de video (MP4)"
            >
              <Download className="w-3.5 h-3.5 text-rose-400" />
              <span>Descargar MP4</span>
            </a>

            {activeTab === 'youtube' && (
              <a
                href={youtubeUrl || OFFICIAL_YOUTUBE_URL}
                target="_blank"
                rel="noreferrer"
                className="py-1.5 px-2.5 rounded-lg bg-[#22161a] hover:bg-[#2d1b22] border border-rose-800/50 text-rose-300 text-xs flex items-center gap-1 transition-all"
              >
                <span>Abrir en YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


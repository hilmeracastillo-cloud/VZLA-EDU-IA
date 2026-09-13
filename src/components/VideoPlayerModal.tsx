import React, { useState, useEffect } from 'react';
import { X, Video, Youtube, Edit3, ExternalLink } from 'lucide-react';
import { ResourceItem } from '../data/resources';

interface VideoPlayerModalProps {
  isOpen: boolean;
  resource?: ResourceItem | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  isOpen,
  resource,
  onClose,
}) => {
  const OFFICIAL_YOUTUBE_URL = 'https://youtu.be/v91urPdXtWc?si=eiQAG5ZQU_SNCxoo';
  const [youtubeUrl, setYoutubeUrl] = useState<string>(() => {
    const saved = localStorage.getItem('venezuela_ia_youtube_url');
    return saved && saved.trim().length > 0 ? saved : OFFICIAL_YOUTUBE_URL;
  });
  const [editingYoutube, setEditingYoutube] = useState<boolean>(false);
  const [tempYoutubeInput, setTempYoutubeInput] = useState<string>('');

  useEffect(() => {
    if (youtubeUrl) {
      localStorage.setItem('venezuela_ia_youtube_url', youtubeUrl);
    }
  }, [youtubeUrl]);

  if (!isOpen) return null;

  const getYouTubeEmbedUrl = (url: string): string | null => {
    if (!url) return null;
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0`;
    }
    return null;
  };

  const handleSaveYoutube = (e: React.FormEvent) => {
    e.preventDefault();
    setYoutubeUrl(tempYoutubeInput.trim() || OFFICIAL_YOUTUBE_URL);
    setEditingYoutube(false);
  };

  const embedUrl = getYouTubeEmbedUrl(youtubeUrl);

  return (
    <div
      className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-[#111111] rounded-2xl border border-[#2E2E2E] shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-3.5 sm:p-4 border-b border-[#222222] flex items-center justify-between bg-[#161616]">
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-rose-400" />
            <h3 className="text-sm sm:text-base font-semibold text-white">
              {resource?.title || 'Video Síntesis'} — {resource?.durationOrPages || '7:00 min'}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={youtubeUrl || OFFICIAL_YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="px-2.5 py-1 rounded-lg bg-rose-950/60 hover:bg-rose-900/80 text-rose-200 border border-rose-800/50 text-xs flex items-center gap-1.5 transition-all"
              title="Abrir en YouTube oficial"
            >
              <Youtube className="w-3.5 h-3.5 text-rose-400" />
              <span className="hidden sm:inline">Ver en YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={() => {
                setTempYoutubeInput(youtubeUrl);
                setEditingYoutube(!editingYoutube);
              }}
              className="px-2 py-1 rounded-lg bg-[#222] hover:bg-[#2E2E2E] text-[11px] text-neutral-300 border border-[#333] flex items-center gap-1 cursor-pointer"
              title="Configurar enlace de YouTube"
            >
              <Edit3 className="w-3 h-3 text-neutral-400" />
              <span className="hidden sm:inline">{youtubeUrl ? 'Editar enlace' : 'Poner enlace'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-neutral-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* YouTube URL Editor Bar */}
        {editingYoutube && (
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

        {/* Video Player Area */}
        <div className="bg-black aspect-video flex items-center justify-center relative">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title="Video Síntesis - Educación e Inteligencia Artificial en Venezuela"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#141416] to-[#09090b]">
              <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-800/40 text-rose-400 mb-4">
                <Youtube className="w-10 h-10" />
              </div>
              <h4 className="text-base font-serif font-bold text-white mb-1.5">
                Video de Síntesis en YouTube
              </h4>
              <p className="text-xs text-neutral-400 max-w-md mb-4 leading-relaxed">
                Reproducción directa en alta definición desde el canal oficial de la investigación.
              </p>
              <a
                href={OFFICIAL_YOUTUBE_URL}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-rose-600/30 cursor-pointer"
              >
                <Youtube className="w-4 h-4" />
                <span>Abrir en YouTube Oficial</span>
              </a>
            </div>
          )}
        </div>

        <div className="p-3 bg-[#131313] border-t border-[#222222] flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-400">
          <span>Fuente: YouTube Oficial • Hilmer Castillo Bescanza</span>
          <a
            href={youtubeUrl || OFFICIAL_YOUTUBE_URL}
            target="_blank"
            rel="noreferrer"
            className="text-rose-400 hover:underline flex items-center gap-1 text-[11px]"
          >
            <span>{youtubeUrl || OFFICIAL_YOUTUBE_URL}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

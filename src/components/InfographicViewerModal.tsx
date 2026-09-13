import React, { useState } from 'react';
import { X, ZoomIn, Download, Image as ImageIcon } from 'lucide-react';
import { ResourceItem } from '../data/resources';

interface InfographicViewerModalProps {
  isOpen: boolean;
  resource?: ResourceItem | null;
  onClose: () => void;
}

export const InfographicViewerModal: React.FC<InfographicViewerModalProps> = ({
  isOpen,
  resource,
  onClose,
}) => {
  const [imageZoom, setImageZoom] = useState<boolean>(false);

  if (!isOpen) return null;

  const filePath = resource?.filePath || '/recursos/infografia-1-pagina.jpg';
  const fileName = resource?.fallbackFileName || 'infografia-1-pagina.jpg';

  return (
    <div
      className="fixed inset-0 z-60 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-fade-in"
      onClick={onClose}
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
                {resource?.title || 'Infografía Síntesis'} (Visualización en Alta Resolución)
              </h3>
              <p className="text-[11px] text-neutral-400">
                Haz clic en la imagen o usa el botón Zoom para ampliar
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
              href={filePath}
              download={fileName}
              className="px-2.5 py-1.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-emerald-200 border border-emerald-700/60 text-xs flex items-center gap-1 cursor-pointer"
              title="Descargar imagen JPG"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar JPG</span>
            </a>
            <button
              onClick={onClose}
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
            src={filePath}
            alt="Infografía Síntesis - Educación e Inteligencia Artificial en Venezuela"
            className={`transition-all duration-200 rounded-lg shadow-2xl object-contain ${
              imageZoom ? 'max-w-none w-full scale-125' : 'max-h-[75vh] w-auto max-w-full'
            }`}
            onError={(e) => {
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
                  <p class="text-xs text-neutral-400 mb-4">El archivo se cargará desde <code>/public/recursos/infografia-1-pagina.jpg</code>.</p>
                `;
                parent.appendChild(div);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

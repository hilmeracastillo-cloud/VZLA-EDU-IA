import React, { useState } from 'react';
import { X, ExternalLink, BookOpen, Copy, Check, Info, Bookmark } from 'lucide-react';
import { Footnote } from '../types';

interface FootnoteModalProps {
  footnote: Footnote | null;
  onClose: () => void;
}

export const FootnoteModal: React.FC<FootnoteModalProps> = ({
  footnote,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!footnote) return null;

  const handleCopyCitation = () => {
    const text = `${footnote.code} ${footnote.authorOrSource} (${footnote.year || 's.f.'}). ${footnote.title}. ${footnote.publication || ''} ${footnote.url || ''}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="modal-footnote-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        id="modal-footnote-card"
        className="w-full max-w-xl bg-[#111111] rounded-2xl border border-[#2B2B2B] shadow-2xl p-4 sm:p-6 text-neutral-200 max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between gap-3 border-b border-[#222222] pb-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-indigo-950/80 text-indigo-300 border border-indigo-700/60">
              {footnote.code}
            </span>
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
              Aparato Crítico & Fuente Académica
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title and Author */}
        <div className="space-y-2 mb-5">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug">
            {footnote.title}
          </h3>
          <p className="text-xs sm:text-sm text-indigo-300 font-medium">
            {footnote.authorOrSource} {footnote.year && `(${footnote.year})`}
          </p>
          {footnote.publication && (
            <p className="text-xs text-neutral-400 italic">
              Publicado en: {footnote.publication}
            </p>
          )}
        </div>

        {/* Active URL & Direct Access */}
        {footnote.url && (
          <div className="mb-4 p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <ExternalLink className="w-4 h-4 text-indigo-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-300/80 block">
                  Enlace Oficial de Acceso a la Fuente
                </span>
                <a
                  href={footnote.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-indigo-200 hover:text-white underline font-mono truncate block"
                  title={footnote.url}
                >
                  {footnote.url}
                </a>
              </div>
            </div>
            <a
              href={footnote.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-950/40 transition-colors"
            >
              <span>Abrir fuente</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Conceptual Justification */}
        {footnote.justification && (
          <div className="mb-4 p-3.5 rounded-xl bg-[#171717] border border-[#262626]">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-300 mb-1.5">
              <Info className="w-3.5 h-3.5 text-indigo-400" />
              <span>Justificación o Delimitador Conceptual</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
              {footnote.justification}
            </p>
          </div>
        )}

        {/* Recommended Readings */}
        {footnote.recommendedReadings && footnote.recommendedReadings.length > 0 && (
          <div className="mb-4 p-3.5 rounded-xl bg-[#141414] border border-[#222222]">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-2">
              <Bookmark className="w-3.5 h-3.5" />
              <span>Lecturas Recomendadas Vinculadas</span>
            </div>
            <ul className="space-y-1 text-xs text-neutral-400 list-disc list-inside">
              {footnote.recommendedReadings.map((reading, idx) => (
                <li key={idx} className="leading-normal">
                  {reading}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions Bottom Bar */}
        <div className="mt-5 pt-4 border-t border-[#222222] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopyCitation}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-neutral-300 bg-[#1A1A1A] border border-[#2E2E2E] hover:text-white hover:border-neutral-500 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Cita copiada</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar cita académica</span>
              </>
            )}
          </button>

          {footnote.url && (
            <a
              href={footnote.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-950/40"
            >
              <span>Acceder al documento oficial</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

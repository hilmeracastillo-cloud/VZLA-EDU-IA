import React, { useState } from 'react';
import {
  X,
  Download,
  FileText,
  Book,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
} from 'lucide-react';
import { Chapter } from '../types';
import { generateBookPDF } from '../utils/pdfGenerator';
import { bookMeta } from '../data/bookMeta';

interface PdfExportModalProps {
  isOpen: boolean;
  currentChapter: Chapter;
  onClose: () => void;
}

export const PdfExportModal: React.FC<PdfExportModalProps> = ({
  isOpen,
  currentChapter,
  onClose,
}) => {
  const [exportScope, setExportScope] = useState<'all' | 'chapter'>('all');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleStartExport = async () => {
    setIsGenerating(true);
    setProgressPercent(5);
    setStatusMessage('Inicializando motor de renderizado PDF (jsPDF)...');
    setIsSuccess(false);
    setErrorMessage('');

    try {
      if (exportScope === 'all') {
        try {
          const testRes = await fetch('/recursos/documento-completo-100-paginas.pdf', { method: 'HEAD' });
          if (testRes.ok) {
            const a = document.createElement('a');
            a.href = '/recursos/documento-completo-100-paginas.pdf';
            a.download = 'documento-completo-100-paginas.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setProgressPercent(100);
            setIsSuccess(true);
            setStatusMessage('¡Descarga directa del Documento Completo iniciada!');
            setIsGenerating(false);
            return;
          }
        } catch {
          // Si falla, continúa con generación dinámica
        }
      }

      await generateBookPDF({
        scope: exportScope,
        chapter: currentChapter,
        onProgress: (percent, statusText) => {
          setProgressPercent(percent);
          setStatusMessage(statusText);
        },
      });

      setIsSuccess(true);
      setStatusMessage('¡Documento PDF generado y descargado con éxito!');
    } catch (err: any) {
      console.error('Error al generar PDF:', err);
      setErrorMessage(
        'Hubo un problema al maquetar el documento. Por favor intente nuevamente.'
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const handleClose = () => {
    if (isGenerating) return;
    setIsSuccess(false);
    setErrorMessage('');
    setProgressPercent(0);
    setStatusMessage('');
    onClose();
  };

  return (
    <div
      id="modal-pdf-backdrop"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={handleClose}
    >
      <div
        id="modal-pdf-panel"
        className="w-full max-w-lg bg-[#121212] rounded-2xl border border-[#2B2B2B] shadow-2xl p-5 sm:p-6 text-neutral-200 max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b border-[#222222] pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/50 text-emerald-400">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white tracking-tight">
                Exportador a PDF Editorial
              </h3>
              <p className="text-xs text-neutral-400">
                Maquetación formal en cliente (A4, portada, TOC y aparato crítico)
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            disabled={isGenerating}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors disabled:opacity-30"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selection Options */}
        {!isGenerating && !isSuccess && (
          <div className="space-y-4 mb-6">
            <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider block">
              Seleccionar alcance de la exportación:
            </label>

            {/* Complete Book */}
            <div
              onClick={() => setExportScope('all')}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                exportScope === 'all'
                  ? 'bg-indigo-950/30 border-indigo-600 shadow-md shadow-indigo-950/30'
                  : 'bg-[#181818] border-[#2A2A2A] hover:border-neutral-600'
              }`}
            >
              <Book
                className={`w-5 h-5 mt-0.5 shrink-0 ${
                  exportScope === 'all' ? 'text-indigo-400' : 'text-neutral-500'
                }`}
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm text-white">
                    Obra Completa (Serie Editorial)
                  </h4>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-900/50 text-indigo-300 border border-indigo-700/50">
                    Recomendado
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Incluye Portada Formal, Índice de Contenidos, Preliminares, Partes 1, 2 y 3, los 25 Casos de Estudio y Fichas Técnicas.
                </p>
              </div>
            </div>

            {/* Current Chapter */}
            <div
              onClick={() => setExportScope('chapter')}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                exportScope === 'chapter'
                  ? 'bg-emerald-950/30 border-emerald-600 shadow-md shadow-emerald-950/30'
                  : 'bg-[#181818] border-[#2A2A2A] hover:border-neutral-600'
              }`}
            >
              <FileText
                className={`w-5 h-5 mt-0.5 shrink-0 ${
                  exportScope === 'chapter'
                    ? 'text-emerald-400'
                    : 'text-neutral-500'
                }`}
              />
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-white">
                  Capítulo Activo ({currentChapter.number})
                </h4>
                <p className="text-xs text-neutral-400 mt-1 line-clamp-1">
                  {currentChapter.title} — con su respectivo aparato crítico y referencias.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#171717] border border-[#262626] text-xs text-neutral-400 leading-relaxed flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Generación 100% en cliente sin envío de datos a servidores externos.
              </span>
            </div>
          </div>
        )}

        {/* Live Progress Bar during generation */}
        {isGenerating && (
          <div className="py-6 space-y-4">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-indigo-300 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
                {statusMessage}
              </span>
              <span className="font-mono font-bold text-white text-sm">
                {progressPercent}%
              </span>
            </div>

            <div className="w-full h-3 bg-[#1C1C1C] rounded-full overflow-hidden border border-[#2D2D2D]">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-emerald-400 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <p className="text-[11px] text-neutral-500 text-center">
              Maquetando tablas, citas y jerarquía tipográfica... por favor espere un momento.
            </p>
          </div>
        )}

        {/* Success State */}
        {isSuccess && (
          <div className="py-6 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="font-serif text-lg font-bold text-white">
              Descarga Completada
            </h4>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto">
              El archivo PDF con maquetación formal se ha descargado a su dispositivo.
            </p>
            <div className="pt-2">
              <button
                onClick={handleClose}
                className="px-5 py-2 rounded-lg text-xs font-semibold text-neutral-200 bg-[#222222] hover:bg-[#2C2C2C] transition-colors cursor-pointer"
              >
                Cerrar ventana
              </button>
            </div>
          </div>
        )}

        {/* Error State */}
        {errorMessage && (
          <div className="p-3.5 mb-4 rounded-xl bg-red-950/40 border border-red-800 text-xs text-red-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Footer Actions */}
        {!isSuccess && (
          <div className="pt-3 border-t border-[#222222] flex items-center justify-end gap-3">
            <button
              onClick={handleClose}
              disabled={isGenerating}
              className="px-4 py-2 rounded-lg text-xs font-medium text-neutral-400 hover:text-white transition-colors disabled:opacity-30 cursor-pointer"
            >
              Cancelar
            </button>
            <button
              id="btn-confirm-pdf-export"
              onClick={handleStartExport}
              disabled={isGenerating}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 transition-all shadow-lg shadow-indigo-950/50 cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Procesando...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Generar y Descargar PDF</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

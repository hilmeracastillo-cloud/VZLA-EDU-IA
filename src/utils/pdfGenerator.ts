import { jsPDF } from 'jspdf';
import { Chapter } from '../types';
import { allChapters } from '../data/articles';
import { bookMeta } from '../data/bookMeta';
import { caseStudiesList } from '../data/appendix1';
import { platformsList } from '../data/appendix2';

export interface ExportOptions {
  scope: 'all' | 'chapter';
  chapter?: Chapter;
  onProgress: (percent: number, statusText: string) => void;
}

export async function buildBookPDFDoc(options: ExportOptions): Promise<jsPDF> {
  const { scope, chapter, onProgress } = options;
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const marginX = 20;
  const marginTop = 24;
  const marginBottom = 24;
  const contentWidth = pageWidth - marginX * 2;
  let currentY = marginTop;

  const chaptersToExport: Chapter[] =
    scope === 'chapter' && chapter ? [chapter] : allChapters;

  const totalSteps = chaptersToExport.length + (scope === 'all' ? 2 : 1);
  let currentStep = 0;

  function updateProgress(stepName: string) {
    currentStep++;
    const percent = Math.min(100, Math.round((currentStep / totalSteps) * 100));
    options.onProgress(percent, stepName);
  }

  const checkPageBreak = (heightNeeded: number) => {
    if (currentY + heightNeeded > pageHeight - marginBottom) {
      doc.addPage();
      currentY = marginTop;
      printHeaderFooter();
    }
  };

  const printHeaderFooter = () => {
    const pageNum = doc.getNumberOfPages();
    // Header
    doc.setFont('times', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text(bookMeta.title.toUpperCase(), marginX, 15);
    doc.text(bookMeta.subtitle, pageWidth - marginX, 15, { align: 'right' });
    doc.setDrawColor(210, 215, 225);
    doc.setLineWidth(0.2);
    doc.line(marginX, 17, pageWidth - marginX, 17);

    // Footer
    doc.line(marginX, pageHeight - 16, pageWidth - marginX, pageHeight - 16);
    doc.setFont('times', 'normal');
    doc.text(bookMeta.author, marginX, pageHeight - 11);
    doc.text(`Página ${pageNum}`, pageWidth - marginX, pageHeight - 11, {
      align: 'right',
    });
  };

  // 1. Portada formal
  if (scope === 'all') {
    updateProgress('Componiendo portada editorial...');
    await new Promise((r) => setTimeout(r, 40));

    // Elegant background banner
    doc.setFillColor(15, 17, 23);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // Subtle gold / indigo accent border
    doc.setDrawColor(99, 102, 241);
    doc.setLineWidth(1.2);
    doc.rect(14, 14, pageWidth - 28, pageHeight - 28);
    doc.setDrawColor(212, 175, 55);
    doc.setLineWidth(0.4);
    doc.rect(16, 16, pageWidth - 32, pageHeight - 32);

    // Cover Typography
    doc.setTextColor(156, 163, 175);
    doc.setFont('times', 'normal');
    doc.setFontSize(11);
    doc.text(bookMeta.program.toUpperCase(), pageWidth / 2, 50, {
      align: 'center',
    });

    doc.setTextColor(255, 255, 255);
    doc.setFont('times', 'bold');
    doc.setFontSize(25);
    doc.text('VENEZUELA, EDUCACIÓN E', pageWidth / 2, 75, { align: 'center' });
    doc.text('INTELIGENCIA ARTIFICIAL', pageWidth / 2, 87, { align: 'center' });

    doc.setFont('times', 'italic');
    doc.setFontSize(18);
    doc.setTextColor(129, 140, 248);
    doc.text('Tormenta de Oportunidades', pageWidth / 2, 103, {
      align: 'center',
    });

    // Decorative divider
    doc.setDrawColor(129, 140, 248);
    doc.setLineWidth(0.6);
    doc.line(pageWidth / 2 - 35, 115, pageWidth / 2 + 35, 115);

    // Summary box
    doc.setFont('times', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(209, 213, 219);
    const abstractLines = doc.splitTextToSize(
      'Propuesta integral para la reconstrucción y el salto cualitativo de la educación básica en Venezuela mediante la convergencia de la Inteligencia Artificial, el método socrático individualizado y la reestructuración curricular hacia Destrezas para la Vida.',
      pageWidth - 65
    );
    doc.text(abstractLines, pageWidth / 2, 135, { align: 'center' });

    // Author details
    doc.setTextColor(255, 255, 255);
    doc.setFont('times', 'bold');
    doc.setFontSize(14);
    doc.text(bookMeta.author, pageWidth / 2, 230, { align: 'center' });

    doc.setTextColor(156, 163, 175);
    doc.setFont('times', 'normal');
    doc.setFontSize(10);
    doc.text(bookMeta.email, pageWidth / 2, 238, { align: 'center' });
    doc.text(bookMeta.date, pageWidth / 2, 245, { align: 'center' });

    doc.addPage();
    currentY = marginTop;
  }

  // 2. Tabla de Contenidos (si es libro completo)
  if (scope === 'all') {
    updateProgress('Generando tabla de contenidos...');
    await new Promise((r) => setTimeout(r, 40));
    printHeaderFooter();

    doc.setFont('times', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(20, 20, 20);
    doc.text('Índice General de Contenidos', marginX, currentY);
    currentY += 12;

    doc.setFont('times', 'normal');
    doc.setFontSize(9.5);

    chaptersToExport.forEach((chap) => {
      checkPageBreak(12);
      doc.setFont('times', 'bold');
      doc.setTextColor(30, 41, 59);
      doc.text(`${chap.part} — ${chap.title}`, marginX, currentY);
      currentY += 5.5;

      doc.setFont('times', 'normal');
      doc.setTextColor(75, 85, 99);
      chap.subSections.slice(0, 5).forEach((sub) => {
        checkPageBreak(5.5);
        doc.text(`   • ${sub.title}`, marginX + 4, currentY);
        currentY += 4.5;
      });
      currentY += 3;
    });

    doc.addPage();
    currentY = marginTop;
  }

  // 3. Renderizar Capítulos
  for (let i = 0; i < chaptersToExport.length; i++) {
    const chap = chaptersToExport[i];
    updateProgress(`Maquetando: ${chap.title}...`);
    await new Promise((r) => setTimeout(r, 40));

    if (i > 0 || scope === 'chapter') {
      if (scope === 'chapter' && i === 0) {
        // First page of chapter
      } else {
        doc.addPage();
        currentY = marginTop;
      }
    }

    printHeaderFooter();

    // Chapter Header
    doc.setFont('times', 'italic');
    doc.setFontSize(9.5);
    doc.setTextColor(99, 102, 241);
    doc.text(`${chap.part.toUpperCase()} | CAPÍTULO ${chap.number}`, marginX, currentY);
    currentY += 6.5;

    doc.setFont('times', 'bold');
    doc.setFontSize(17);
    doc.setTextColor(17, 24, 39);
    const titleLines = doc.splitTextToSize(chap.title, contentWidth);
    doc.text(titleLines, marginX, currentY);
    currentY += titleLines.length * 6.5 + 2;

    if (chap.subtitle) {
      doc.setFont('times', 'italic');
      doc.setFontSize(10.5);
      doc.setTextColor(107, 114, 128);
      const subLines = doc.splitTextToSize(chap.subtitle, contentWidth);
      doc.text(subLines, marginX, currentY);
      currentY += subLines.length * 4.8 + 4;
    }

    // Divider
    doc.setDrawColor(229, 231, 235);
    doc.setLineWidth(0.4);
    doc.line(marginX, currentY, pageWidth - marginX, currentY);
    currentY += 7;

    // Render blocks
    for (const block of chap.blocks) {
      if (block.type === 'lead') {
        checkPageBreak(25);
        doc.setFont('times', 'italic');
        doc.setFontSize(11);
        doc.setTextColor(31, 41, 55);
        const lines = doc.splitTextToSize(block.text || '', contentWidth);
        doc.text(lines, marginX, currentY);
        currentY += lines.length * 5.4 + 5;
      } else if (block.type === 'heading2') {
        checkPageBreak(20);
        currentY += 4;
        doc.setFont('times', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(17, 24, 39);
        const lines = doc.splitTextToSize(block.text || '', contentWidth);
        doc.text(lines, marginX, currentY);
        currentY += lines.length * 5.6 + 3.5;
      } else if (block.type === 'heading3') {
        checkPageBreak(15);
        currentY += 3;
        doc.setFont('times', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(55, 65, 81);
        const lines = doc.splitTextToSize(block.text || '', contentWidth);
        doc.text(lines, marginX, currentY);
        currentY += lines.length * 4.8 + 2.5;
      } else if (block.type === 'paragraph') {
        doc.setFont('times', 'normal');
        doc.setFontSize(9.8);
        doc.setTextColor(55, 65, 81);
        const lines = doc.splitTextToSize(block.text || '', contentWidth);
        const height = lines.length * 4.4;
        checkPageBreak(height + 3);
        doc.text(lines, marginX, currentY);
        currentY += height + 3.8;
      } else if (block.type === 'quote') {
        doc.setFont('times', 'italic');
        doc.setFontSize(9.5);
        doc.setTextColor(55, 65, 81);
        const quoteLines = doc.splitTextToSize(`«${block.text}»`, contentWidth - 14);
        const qHeight = quoteLines.length * 4.2 + 6;
        checkPageBreak(qHeight + 3);
        doc.setDrawColor(99, 102, 241);
        doc.setLineWidth(1);
        doc.line(marginX + 2, currentY + 1, marginX + 2, currentY + qHeight - 1);
        doc.text(quoteLines, marginX + 8, currentY + 4.5);
        currentY += qHeight + 3;
      } else if ((block.type === 'list' || block.type === 'orderedList') && block.items) {
        for (let i = 0; i < block.items.length; i++) {
          const item = block.items[i];
          const trimmed = item.trim();
          const isSub = /^(Oportunidades?\s+|Destrezas para La Vida|Objetivos:|Ejemplos de actividades:)/i.test(trimmed);
          const isNum = block.type === 'orderedList' || /^(\d+[\.\)]|[a-zA-Z][\.\)])\s*/.test(trimmed);

          let textToRender = item;
          if (isSub) {
            doc.setFont('times', 'bold');
            doc.setFontSize(10);
            doc.setTextColor(31, 41, 55);
            textToRender = item;
          } else if (isNum) {
            doc.setFont('times', 'normal');
            doc.setFontSize(9.3);
            doc.setTextColor(55, 65, 81);
            if (!/^(\d+[\.\)]|[a-zA-Z][\.\)])\s*/.test(trimmed)) {
              textToRender = `${i + 1}. ${item}`;
            }
          } else {
            doc.setFont('times', 'normal');
            doc.setFontSize(9.3);
            doc.setTextColor(55, 65, 81);
            textToRender = `• ${item}`;
          }

          const itemLines = doc.splitTextToSize(textToRender, contentWidth - 4);
          checkPageBreak(itemLines.length * 4.2 + 2);
          doc.text(itemLines, marginX + 3, currentY);
          currentY += itemLines.length * 4.2 + (isSub ? 2.5 : 1.8);
        }
        currentY += 2.5;
      } else if (block.type === 'callout') {
        doc.setFont('times', 'normal');
        doc.setFontSize(9.3);
        const calloutText = block.text || '';
        const lines = doc.splitTextToSize(calloutText, contentWidth - 10);
        const boxHeight = lines.length * 4.3 + 7;
        checkPageBreak(boxHeight + 4);

        doc.setFillColor(243, 244, 246);
        doc.setDrawColor(99, 102, 241);
        doc.setLineWidth(0.5);
        doc.roundedRect(marginX, currentY, contentWidth, boxHeight, 1.5, 1.5, 'FD');

        doc.setTextColor(31, 41, 55);
        doc.text(lines, marginX + 5, currentY + 5.5);
        currentY += boxHeight + 4.5;
      } else if (block.type === 'table' && block.tableData) {
        const { caption, headers, rows } = block.tableData;
        checkPageBreak(25);

        if (caption) {
          doc.setFont('times', 'bold');
          doc.setFontSize(9);
          doc.setTextColor(30, 41, 59);
          const capLines = doc.splitTextToSize(caption, contentWidth);
          doc.text(capLines, marginX, currentY);
          currentY += capLines.length * 4 + 2;
        }

        const colCount = headers.length;
        const colWidth = contentWidth / colCount;

        // Header
        checkPageBreak(12);
        doc.setFillColor(238, 242, 255);
        doc.setDrawColor(199, 210, 254);
        doc.setLineWidth(0.3);
        doc.rect(marginX, currentY, contentWidth, 7, 'FD');

        doc.setFont('times', 'bold');
        doc.setFontSize(7.5);
        doc.setTextColor(30, 41, 59);
        headers.forEach((h, colIdx) => {
          const hLines = doc.splitTextToSize(h, colWidth - 2.5);
          doc.text(hLines[0] || '', marginX + colIdx * colWidth + 1.5, currentY + 4.8);
        });
        currentY += 7.5;

        // Rows
        doc.setFont('times', 'normal');
        doc.setFontSize(7);
        doc.setTextColor(55, 65, 81);

        rows.forEach((row, rIdx) => {
          let maxCellLines = 1;
          const splitCells = row.map((cell) => {
            const lines = doc.splitTextToSize(String(cell || ''), colWidth - 2.5);
            if (lines.length > maxCellLines) maxCellLines = lines.length;
            return lines;
          });

          const rowHeight = Math.max(5.5, maxCellLines * 3.2 + 2);
          checkPageBreak(rowHeight + 2);

          if (rIdx % 2 === 0) {
            doc.setFillColor(250, 250, 250);
            doc.rect(marginX, currentY, contentWidth, rowHeight, 'F');
          }
          doc.setDrawColor(229, 231, 235);
          doc.setLineWidth(0.15);
          doc.line(marginX, currentY + rowHeight, marginX + contentWidth, currentY + rowHeight);

          splitCells.forEach((lines, colIdx) => {
            doc.text(lines, marginX + colIdx * colWidth + 1.5, currentY + 3.2);
          });
          currentY += rowHeight;
        });
        currentY += 4.5;
      } else if (block.type === 'nemaModules' && block.stats) {
        checkPageBreak(30);
        doc.setFont('times', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(30, 41, 59);
        doc.text('Arquitectura de un Complejo NEMA (Capacidad: 150 estudiantes — Off-Grid 48h):', marginX, currentY);
        currentY += 6;

        block.stats.forEach((st) => {
          checkPageBreak(18);
          doc.setFont('times', 'bold');
          doc.setFontSize(9);
          doc.setTextColor(16, 185, 129);
          doc.text(`[${st.value}] ${st.label}`, marginX + 3, currentY);
          currentY += 4.5;

          doc.setFont('times', 'normal');
          doc.setFontSize(8.2);
          doc.setTextColor(55, 65, 81);
          const detLines = doc.splitTextToSize(st.detail || '', contentWidth - 8);
          doc.text(detLines, marginX + 5, currentY);
          currentY += detLines.length * 3.8 + 2.5;
        });
        currentY += 3;
      }
    }

    // Render Case Studies for Apéndice 1
    if (chap.id === 'apendice-1' && caseStudiesList && caseStudiesList.length > 0) {
      checkPageBreak(30);
      currentY += 5;
      doc.setFont('times', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(17, 24, 39);
      doc.text('Catálogo Exhaustivo de los 25 Casos de Estudio Internacionales', marginX, currentY);
      currentY += 7;

      caseStudiesList.forEach((cs, idx) => {
        checkPageBreak(40);
        doc.setFont('times', 'bold');
        doc.setFontSize(10.5);
        doc.setTextColor(17, 24, 39);
        doc.text(`Caso #${idx + 1}: ${cs.name} (${cs.country})`, marginX + 2, currentY + 5);
        currentY += 8;

        doc.setFont('times', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(55, 65, 81);

        const fields = [
          `Región: ${cs.region} | Nivel Educativo: ${cs.schoolLevel}`,
          `Materias Cubiertas: ${cs.subjects.join(', ')}`,
          `Rol del Docente: ${cs.teacherRole}`,
          `Software e IA: ${cs.softwareAi} (Socrático: ${cs.socraticTool ? 'Sí' : 'No'})`,
          `Tiempo Semanal: ${cs.weeklyTime} | Equipamiento: ${cs.hardware}`,
          `Costos: Software: ${cs.softwareCost} | Hardware: ${cs.hardwareCost}`,
          `Ratio Alumnos/Clase: ${cs.studentsPerClass} | Años Activo: ${cs.yearsActive}`,
          `Rutina Diaria: ${cs.dailyRoutine}`,
          `Rol de la IA: ${cs.aiRole}`,
          `Capacitación Docente: ${cs.teacherTraining}`,
        ];

        fields.forEach((f) => {
          const fLines = doc.splitTextToSize(f, contentWidth - 4);
          checkPageBreak(fLines.length * 3.4 + 2);
          doc.text(fLines, marginX + 3, currentY);
          currentY += fLines.length * 3.4 + 1.2;
        });

        doc.setDrawColor(229, 231, 235);
        doc.setLineWidth(0.2);
        doc.line(marginX, currentY + 2, marginX + contentWidth, currentY + 2);
        currentY += 5;
      });
    }

    // Render Platforms for Apéndice 2
    if (chap.id === 'apendice-2' && platformsList && platformsList.length > 0) {
      checkPageBreak(30);
      currentY += 5;
      doc.setFont('times', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(17, 24, 39);
      doc.text('Fichas Técnicas Detalladas de las 13 Tecnologías de IA Analizadas', marginX, currentY);
      currentY += 7;

      platformsList.forEach((plat, pIdx) => {
        checkPageBreak(45);
        doc.setFont('times', 'bold');
        doc.setFontSize(10.5);
        doc.setTextColor(17, 24, 39);
        doc.text(`${pIdx + 1}. ${plat.name} (${plat.country})`, marginX + 2, currentY + 5);
        currentY += 8;

        doc.setFont('times', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(55, 65, 81);

        const fields = [
          `Institución / Desarrollador: ${plat.institution} | ${plat.developmentAndPublishers}`,
          `Bases Psicopedagógicas: ${plat.pedagogicalFoundations}`,
          `Costos de Software y Hardware: ${plat.softwareAndHardwareCost}`,
          `Ratio Docente / Alumnos: ${plat.teacherStudentRatio}`,
        ];

        fields.forEach((f) => {
          const fLines = doc.splitTextToSize(f, contentWidth - 4);
          checkPageBreak(fLines.length * 3.4 + 2);
          doc.text(fLines, marginX + 3, currentY);
          currentY += fLines.length * 3.4 + 1.2;
        });

        if (plat.highlights && plat.highlights.length > 0) {
          doc.setFont('times', 'bold');
          doc.setFontSize(8);
          doc.setTextColor(30, 41, 59);
          checkPageBreak(6);
          doc.text('Características e innovaciones pedagógicas:', marginX + 3, currentY + 1.5);
          currentY += 4;

          doc.setFont('times', 'normal');
          doc.setFontSize(7.8);
          doc.setTextColor(75, 85, 99);
          plat.highlights.forEach((hl) => {
            const hlLines = doc.splitTextToSize(`• ${hl}`, contentWidth - 8);
            checkPageBreak(hlLines.length * 3.2 + 2);
            doc.text(hlLines, marginX + 5, currentY);
            currentY += hlLines.length * 3.2 + 1.2;
          });
        }

        doc.setDrawColor(229, 231, 235);
        doc.setLineWidth(0.2);
        doc.line(marginX, currentY + 2, marginX + contentWidth, currentY + 2);
        currentY += 5;
      });
    }

    // Render Aparato Crítico / Footnotes for this chapter
    const fnEntries = Object.values(chap.footnotes);
    if (fnEntries.length > 0) {
      checkPageBreak(30);
      currentY += 6;
      doc.setFont('times', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(17, 24, 39);
      doc.text('Aparato Crítico (Notas al Pie)', marginX, currentY);
      currentY += 6;

      doc.setFont('times', 'normal');
      doc.setFontSize(8.2);
      doc.setTextColor(75, 85, 99);

      fnEntries.forEach((fn) => {
        const fnDesc = `${fn.code} ${fn.title}. ${fn.authorOrSource} (${fn.year || ''}). ${fn.justification || ''}`;
        const lines = doc.splitTextToSize(fnDesc, contentWidth);
        checkPageBreak(lines.length * 3.6 + 3);
        doc.text(lines, marginX, currentY);
        currentY += lines.length * 3.6 + 2.2;
      });
      currentY += 3.5;
    }

    // Render References for this chapter
    if (chap.references.length > 0) {
      checkPageBreak(30);
      currentY += 6;
      doc.setFont('times', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(17, 24, 39);
      doc.text('Referencias Bibliográficas', marginX, currentY);
      currentY += 6;

      doc.setFont('times', 'normal');
      doc.setFontSize(8.2);
      doc.setTextColor(75, 85, 99);

      chap.references.forEach((ref) => {
        const refDesc = `${ref.code} ${ref.citation} ${ref.url ? `[Enlace: ${ref.url}]` : ''}`;
        const lines = doc.splitTextToSize(refDesc, contentWidth);
        checkPageBreak(lines.length * 3.6 + 3);
        doc.text(lines, marginX, currentY);
        currentY += lines.length * 3.6 + 2.2;
      });
      currentY += 5;
    }
  }

  updateProgress('Finalizando documento...');
  await new Promise((r) => setTimeout(r, 60));

  return doc;
}

export async function generateBookPDF(options: ExportOptions): Promise<void> {
  const doc = await buildBookPDFDoc(options);
  const filename =
    options.scope === 'chapter' && options.chapter
      ? `Venezuela-Educacion-IA-${options.chapter.slug}.pdf`
      : 'Venezuela-Educacion-e-IA-Tormenta-de-Oportunidades.pdf';

  doc.save(filename);
}

export async function generatePresentationPDF(
  onProgress?: (percent: number, msg: string) => void
): Promise<void> {
  if (onProgress) onProgress(10, 'Iniciando generación de diapositivas...');
  const { PRESENTATION_SLIDES } = await import('../data/slides');

  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4', // 297 x 210 mm
  });

  const pageWidth = 297;
  const pageHeight = 210;

  PRESENTATION_SLIDES.forEach((slide, index) => {
    if (index > 0) {
      doc.addPage('a4', 'landscape');
    }

    if (onProgress) {
      const p = Math.round(((index + 1) / PRESENTATION_SLIDES.length) * 90);
      onProgress(p, `Procesando diapositiva ${slide.id} de ${PRESENTATION_SLIDES.length}`);
    }

    // Background
    doc.setFillColor(11, 15, 25);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // Outer subtle border
    doc.setDrawColor(25, 35, 55);
    doc.setLineWidth(0.3);
    doc.rect(10, 10, pageWidth - 20, pageHeight - 20, 'S');

    // Accent line
    const isGold = slide.themeColor === 'gold';
    const isPurple = slide.themeColor === 'purple';
    if (isGold) {
      doc.setFillColor(245, 158, 11);
    } else if (isPurple) {
      doc.setFillColor(168, 85, 247);
    } else {
      doc.setFillColor(6, 182, 212);
    }
    doc.rect(10, 10, 45, 1.5, 'F');

    // Category / Part
    if (slide.category) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(isGold ? 251 : 56, isGold ? 191 : 189, isGold ? 36 : 248);
      doc.text(slide.category.toUpperCase(), 16, 20);
    } else if (slide.part) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(245, 158, 11);
      doc.text(slide.part.toUpperCase(), 16, 20);
    }

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);
    let titleFontSize = 18;
    if (slide.title.length > 50) titleFontSize = 15;
    if (slide.title.length > 75) titleFontSize = 13;
    doc.setFontSize(titleFontSize);

    const titleLines = doc.splitTextToSize(slide.title, pageWidth - 36);
    doc.text(titleLines, 16, 28);
    const titleHeight = titleLines.length * (titleFontSize * 0.42);

    if (slide.subtitle) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(148, 163, 184);
      doc.text(slide.subtitle, 16, 28 + titleHeight + 3);
    }

    // Boxes
    const contentTop = Math.max(38, 28 + titleHeight + (slide.subtitle ? 10 : 6));
    const contentBottom = pageHeight - 16;
    const availableHeight = contentBottom - contentTop;

    const numBoxes = slide.boxes.length;
    if (numBoxes === 1) {
      const box = slide.boxes[0];
      const boxWidth = pageWidth - 32;
      const boxHeight = availableHeight;
      const boxX = 16;
      const boxY = contentTop;

      doc.setFillColor(18, 24, 38);
      doc.setDrawColor(isGold ? 180 : 35, isGold ? 130 : 65, isGold ? 30 : 100);
      doc.setLineWidth(0.5);
      doc.roundedRect(boxX, boxY, boxWidth, boxHeight, 3, 3, 'FD');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(isGold ? 251 : 56, isGold ? 191 : 189, isGold ? 36 : 248);
      doc.text(box.title, boxX + 8, boxY + 12);

      let currentY = boxY + 20;

      if (box.text) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10.5);
        doc.setTextColor(226, 232, 240);
        const textLines = doc.splitTextToSize(box.text, boxWidth - 16);
        doc.text(textLines, boxX + 8, currentY);
        currentY += textLines.length * 5.8 + 4;
      }

      if (box.bullets) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.setTextColor(203, 213, 225);
        box.bullets.forEach((bullet) => {
          const bulletLines = doc.splitTextToSize(`•  ${bullet}`, boxWidth - 18);
          doc.text(bulletLines, boxX + 8, currentY);
          currentY += bulletLines.length * 5.2 + 2.5;
        });
      }

      if (box.footerNote) {
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(9);
        doc.setTextColor(isGold ? 251 : 52, isGold ? 191 : 211, isGold ? 36 : 153);
        doc.text(box.footerNote, boxX + 8, boxY + boxHeight - 7);
      }
    } else if (numBoxes >= 2) {
      const gap = 8;
      const boxWidth = (pageWidth - 32 - gap) / 2;
      const boxHeight = availableHeight;
      const boxY = contentTop;

      slide.boxes.forEach((box, bIdx) => {
        const boxX = 16 + bIdx * (boxWidth + gap);

        doc.setFillColor(18, 24, 38);
        const isSecondGold = bIdx === 1 && (slide.themeColor === 'gold' || isGold);
        doc.setDrawColor(
          isSecondGold ? 180 : 30,
          isSecondGold ? 130 : 60,
          isSecondGold ? 30 : 90
        );
        doc.setLineWidth(0.4);
        doc.roundedRect(boxX, boxY, boxWidth, boxHeight, 3, 3, 'FD');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(isSecondGold ? 251 : 56, isSecondGold ? 191 : 189, isSecondGold ? 36 : 248);
        const titleL = doc.splitTextToSize(box.title, boxWidth - 12);
        doc.text(titleL, boxX + 6, boxY + 10);

        let currentY = boxY + 12 + titleL.length * 4.5;

        if (box.text) {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(9);
          doc.setTextColor(226, 232, 240);
          const textLines = doc.splitTextToSize(box.text, boxWidth - 12);
          doc.text(textLines, boxX + 6, currentY);
          currentY += textLines.length * 4.5 + 3;
        }

        if (box.bullets) {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8.7);
          doc.setTextColor(203, 213, 225);
          box.bullets.forEach((bullet) => {
            const bulletLines = doc.splitTextToSize(`• ${bullet}`, boxWidth - 14);
            doc.text(bulletLines, boxX + 6, currentY);
            currentY += bulletLines.length * 4.2 + 2;
          });
        }

        if (box.footerNote) {
          doc.setFont('helvetica', 'italic');
          doc.setFontSize(8);
          doc.setTextColor(148, 163, 184);
          const fLines = doc.splitTextToSize(box.footerNote, boxWidth - 12);
          doc.text(fLines, boxX + 6, boxY + boxHeight - 5 - (fLines.length - 1) * 3.5);
        }
      });
    }

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text(
      'VENEZUELA, EDUCACIÓN E INTELIGENCIA ARTIFICIAL — HILMER CASTILLO BESCANZA',
      16,
      pageHeight - 6
    );
    doc.text(`Diapositiva ${slide.id} de ${PRESENTATION_SLIDES.length}`, pageWidth - 42, pageHeight - 6);
  });

  if (onProgress) onProgress(100, 'Descargando presentación...');
  doc.save('Venezuela-Educacion-IA-Presentacion-35-Slides.pdf');
}

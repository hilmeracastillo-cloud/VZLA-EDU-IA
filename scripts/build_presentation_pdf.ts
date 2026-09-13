import fs from 'fs';
import { jsPDF } from 'jspdf';
import { PRESENTATION_SLIDES, PresentationSlide } from '../src/data/slides';

export function buildPresentationDoc(): jsPDF {
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

    // Background: Deep dark Obsidian
    doc.setFillColor(11, 15, 25);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // Subtle decorative grid / border accents
    doc.setDrawColor(25, 35, 55);
    doc.setLineWidth(0.3);
    doc.rect(10, 10, pageWidth - 20, pageHeight - 20, 'S');

    // Top accent bar
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

    // Slide category / tag
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

    // Slide Main Title
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

    // Content cards layout
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

      // Card background
      doc.setFillColor(18, 24, 38);
      doc.setDrawColor(isGold ? 180 : 35, isGold ? 130 : 65, isGold ? 30 : 100);
      doc.setLineWidth(0.5);
      doc.roundedRect(boxX, boxY, boxWidth, boxHeight, 3, 3, 'FD');

      // Box title
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
      // 2 Columns Layout
      const gap = 8;
      const boxWidth = (pageWidth - 32 - gap) / 2;
      const boxHeight = availableHeight;
      const boxY = contentTop;

      slide.boxes.forEach((box, bIdx) => {
        const boxX = 16 + bIdx * (boxWidth + gap);

        // Card background
        doc.setFillColor(18, 24, 38);
        const isSecondGold = bIdx === 1 && (slide.themeColor === 'gold' || isGold);
        doc.setDrawColor(
          isSecondGold ? 180 : 30,
          isSecondGold ? 130 : 60,
          isSecondGold ? 30 : 90
        );
        doc.setLineWidth(0.4);
        doc.roundedRect(boxX, boxY, boxWidth, boxHeight, 3, 3, 'FD');

        // Box title
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

    // Footer
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text(
      'VENEZUELA, EDUCACIÓN E INTELIGENCIA ARTIFICIAL — HILMER CASTILLO BESCANZA',
      16,
      pageHeight - 6
    );
    doc.text(`Diapositiva ${slide.id} de 35`, pageWidth - 42, pageHeight - 6);
  });

  return doc;
}

async function main() {
  console.log('Construyendo PDF de la presentación (35 diapositivas en formato apaisado)...');
  const doc = buildPresentationDoc();
  const outBuf = Buffer.from(doc.output('arraybuffer'));

  fs.mkdirSync('public/recursos', { recursive: true });
  fs.writeFileSync('public/recursos/presentacion-35-slides.pdf', outBuf);

  if (fs.existsSync('dist/recursos')) {
    fs.writeFileSync('dist/recursos/presentacion-35-slides.pdf', outBuf);
  }

  console.log('¡PDF de presentación generado con éxito!');
  console.log(`Ruta: public/recursos/presentacion-35-slides.pdf`);
  console.log(`Diapositivas: ${doc.getNumberOfPages()}, Tamaño: ${(outBuf.length / 1024).toFixed(1)} KB`);
}

main().catch((err) => {
  console.error('Error generando presentación PDF:', err);
  process.exit(1);
});

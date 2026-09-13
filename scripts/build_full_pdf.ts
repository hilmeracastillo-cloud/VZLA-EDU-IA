import fs from 'fs';
import { buildBookPDFDoc } from '../src/utils/pdfGenerator';

async function main() {
  console.log('Generando PDF del documento completo usando buildBookPDFDoc...');
  const doc = await buildBookPDFDoc({
    scope: 'all',
    onProgress: (percent, msg) => {
      console.log(`[${percent}%] ${msg}`);
    },
  });

  const outBuf = Buffer.from(doc.output('arraybuffer'));
  fs.mkdirSync('public/recursos', { recursive: true });
  fs.writeFileSync('public/recursos/documento-completo-100-paginas.pdf', outBuf);

  if (fs.existsSync('dist/recursos')) {
    fs.writeFileSync('dist/recursos/documento-completo-100-paginas.pdf', outBuf);
  }

  console.log(`¡Éxito! Archivo guardado: public/recursos/documento-completo-100-paginas.pdf`);
  console.log(`Páginas: ${doc.getNumberOfPages()}, Tamaño: ${(outBuf.length / 1024).toFixed(1)} KB`);

  // También generar Resumen Ejecutivo
  const { allChapters } = await import('../src/data/articles');
  const resumenChap = allChapters.find(c => c.slug === 'resumen-ejecutivo' || c.number === '2');
  if (resumenChap) {
    const docResumen = await buildBookPDFDoc({
      scope: 'chapter',
      chapter: resumenChap,
      onProgress: () => {},
    });
    const bufResumen = Buffer.from(docResumen.output('arraybuffer'));
    fs.writeFileSync('public/recursos/resumen-ejecutivo-4-paginas.pdf', bufResumen);
    console.log(`Resumen Ejecutivo generado: public/recursos/resumen-ejecutivo-4-paginas.pdf (${(bufResumen.length / 1024).toFixed(1)} KB)`);
  }
}

main().catch((err) => {
  console.error('Error generando PDF estático:', err);
  process.exit(1);
});

import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import pdfCertificate from './assets/42-certificate.pdf';

export async function modifyPdf() {
    const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
    const pdfDoc = await PDFDocument.load(existingPdfBytes)
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    const { width, height } = firstPage.getSize()
    firstPage.drawText('This text was added with JavaScript!', {
      x: 5,
      y: height / 2 + 300,
      size: 50,
      font: helveticaFont,
      color: rgb(0.95, 0.1, 0.1),
      rotate: degrees(-45),
    })
    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
};  

export async function createPdf() {
    const pdfDoc = await PDFLib.PDFDocument.load(pdfCertificate);
    const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    return pdfDataUri
}

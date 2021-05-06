import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { pdfUrl, primaryColor } from './constants';

export const modifyPdf = async ({ username }) => {
    const existingPdfBytes = await fetch(pdfUrl).then(res => res.arrayBuffer())
    const pdfDoc = await PDFDocument.load(existingPdfBytes)
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    const { width, height } = firstPage.getSize()
    firstPage.drawText(username, {
        x: width / 1.75,
        y: height / 1.25,
        size: 42,
        font: helveticaFont,
        color: rgb(...primaryColor),
    })
    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
};  

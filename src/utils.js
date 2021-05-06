import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { pdfUrl, primaryColor } from './constants';

export const modifyPdf = async ({ user = '' }) => {
    const existingPdfBytes = await fetch(pdfUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0]
    const width = firstPage.getWidth();
    const height = firstPage.getHeight();
    const text = user.toUpperCase();
    const textSize = 24;
    const textWidth = helveticaFont.widthOfTextAtSize(text, textSize);
    const textHeight = helveticaFont.heightAtSize(textSize);
    const magicNumber = 42 / 2;
    firstPage.drawText(text, {
        x: width / 2 - textWidth / 2,
        y: (height / 2 - textHeight / 2) - magicNumber,
        size: textSize,
        font: helveticaFont,
        color: rgb(...primaryColor),
    })
    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
};  

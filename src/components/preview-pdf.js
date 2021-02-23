import { useEffect } from 'preact/hooks';
import { PDFDocument } from 'pdf-lib'

const PreviewPdf = () => {
    useEffect(() => {
        const loadPdf = async () => {
            const url = '../assets/42-certificate.pdf';
            const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());
            const pdfDoc = await PDFDocument.load(existingPdfBytes)
            const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
            document.getElementById('pdf').src = pdfDataUri;
        }
        loadPdf();
    }, []);
    return (
        <iframe id="pdf" className="pdf-frame" />
    );
};

export default PreviewPdf;

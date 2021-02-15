import React from 'react';
import { createPdf } from '../utils';

const DownloadPDF = () => {
    const handleDownloadPrompt = e => {
        console.log('handleDownloadPrompt: ', e);
        const pdf = createPdf();
        console.log('createPdf: ', pdf);
    }
    return (
        <button onClick={handleDownloadPrompt}>
            Download PDF
        </button>
    )
};

export default DownloadPDF;
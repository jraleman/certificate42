import React from 'react';
import { createPdf, modifyPdf } from '../utils';

const DownloadPDF = () => {
    const handleDownloadPrompt = e => {
        console.log('handleDownloadPrompt: ', e);
        // modifyPdf();
        createPdf();
    }
    return (
        <button onClick={handleDownloadPrompt}>
            Download PDF
        </button>
    )
};

export default DownloadPDF;
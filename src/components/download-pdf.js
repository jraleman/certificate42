const DownloadPDF = () => {
    const handleDownloadPrompt = async e => {
        console.log('handleDownloadPrompt: ', e);
    }

    return (
        <button onClick={handleDownloadPrompt}>
            Download PDF
        </button>
    )
};

export default DownloadPDF;
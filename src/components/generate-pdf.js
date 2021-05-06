import { useState } from 'preact/hooks';
import download from 'downloadjs'
import { modifyPdf } from '../utils';
import { userPlaceholder, downloadButtonLabel } from '../constants';

const GeneratePdf = () => {
    const [username, setUsername] = useState('');

    const handleInput = (event) => {
        const { target } = event || {};
        const { value } = target || {};
        setUsername(value);
    };

    const handleDownloadPrompt = async () => {
        const pdfBytes = await modifyPdf({ username });
        const blob = new Blob([pdfBytes], {type: 'application/pdf'});
        download(blob);
    };

    return (
        <div>
            <input
                value={username}
                placeholder={userPlaceholder}
                onChange={handleInput}
            />
            <button onClick={handleDownloadPrompt}>
                {downloadButtonLabel}
            </button>
        </div>
    )
};

export default GeneratePdf;
import { useState } from 'preact/hooks';
import download from 'downloadjs'
import { modifyPdf } from '../utils';
import { 
    userError,
    userPlaceholder,
    downloadButtonLabel,
} from '../constants';

const GeneratePdf = () => {
    const [user, setUser] = useState('');

    const handleInput = ({ target: { value }}) => {
        setUser(value);
    };

    const handleDownloadPrompt = async () => {
        if (!user || user.length > 42) {
            return window.alert(userError);
        }
        const pdfBytes = await modifyPdf({ user });
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const filename = `unofficial-certificate-${user}.42.pdf`;
        return download(blob, filename);
    };

    return (
        <div className="generate-pdf">
            <input
                value={user}
                placeholder={userPlaceholder}
                onChange={handleInput}
                className="user-input"
            />
            <button onClick={handleDownloadPrompt} className="download-btn">
                {downloadButtonLabel}
            </button>
        </div>
    )
};

export default GeneratePdf;
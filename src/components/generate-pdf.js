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

    const handleInput = (event) => {
        const { target } = event || {};
        const { value } = target || {};
        setUser(value);
    };

    const handleDownloadPrompt = async () => {
        if (!user || user.length > 42) {
            return window.alert(userError);
        }
        const pdfBytes = await modifyPdf({ user });
        const blob = new Blob([pdfBytes], {type: 'application/pdf'});
        download(blob);
    };

    return (
        <div>
            <input
                value={user}
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
import './style';
import Instructions from './components/instructions';
import DownloadPDF from './components/download-pdf';
import PreviewPdf from './components/preview-pdf';

const App = () => (
	<div>
		<h1>Certificate.42</h1>
		<Instructions />
		<DownloadPDF />
		<PreviewPdf />
	</div>
);

export default App;
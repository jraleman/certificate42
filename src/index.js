import './style';
import Instructions from './components/instructions';
import DownloadPDF from './components/download-pdf';

const App = () => (
	<div>
		<h1>Certificate.42</h1>
		<Instructions />
		<DownloadPDF />
	</div>
);

export default App;
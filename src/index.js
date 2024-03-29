import Instructions from './components/instructions';
import GeneratePdf from './components/generate-pdf';
import { appTtitle } from './constants';
import './style';

const App = () => (
	<div className="container">
		<h1>{appTtitle}</h1>
		<Instructions />
		<GeneratePdf />
	</div>
);

export default App;
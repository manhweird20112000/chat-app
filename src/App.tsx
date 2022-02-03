import { BrowserRouter as Router } from 'react-router-dom';
import { MainLayout } from './app/layouts';

function App() {
	return (
		<div className="app">
			<Router>
				<MainLayout />
			</Router>
		</div>
	);
}

export default App;

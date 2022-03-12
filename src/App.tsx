import { Loading, Toast } from 'components';
import { HomeRoutes } from 'routes';

function App() {
	return (
		<div className="app overflow-hidden relative w-screen h-screen">
			<HomeRoutes />
			<Loading state="idle" />
			<Toast />
		</div>
	);
}

export default App;

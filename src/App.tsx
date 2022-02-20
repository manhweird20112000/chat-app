import { HomeRoutes } from 'routes';

function App() {
	console.log(process.env.REACT_APP_API);
	return (
		<div className="app">
			<HomeRoutes />
		</div>
	);
}

export default App;

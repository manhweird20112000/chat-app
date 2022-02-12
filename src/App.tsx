import { useAppSelector } from 'hooks/hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthRoutes } from 'routes/auth/auth-routes';
import { MainLayout } from './app/layouts';

function App() {
	const user = useAppSelector((state) => state.auth.user);
	console.log(user.token);
	return (
		<div className="app">
			<Router>
				{user.accessToken !== undefined ? <MainLayout /> : <AuthRoutes />}
			</Router>
		</div>
	);
}

export default App;

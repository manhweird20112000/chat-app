import { MainLayout } from 'app/layouts';
import { LoginPage } from 'app/modules';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { AuthRoutes } from 'routes/auth/auth-routes';

export function HomeRoutes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/login" component={LoginPage} />
				<AuthRoutes path="/" component={MainLayout} />
			</Switch>
		</Router>
	);
}

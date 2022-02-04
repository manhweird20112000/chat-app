import { LoginPage } from 'app/modules';
import { Redirect, Route, Switch } from 'react-router-dom';

export function AuthRoutes() {
	return (
		<Switch>
			<Route path="/login" exact component={LoginPage} />
			<Redirect to="/login" />
		</Switch>
	);
}

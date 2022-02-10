import { LoginPage, RegisterPages } from 'app/modules';
import { Redirect, Route, Switch } from 'react-router-dom';

export function AuthRoutes() {
	return (
		<Switch>
			<Route path="/login" exact component={LoginPage} />
			<Route path="/resgiter" exact component={RegisterPages} />
			<Redirect to="/login" />
		</Switch>
	);
}

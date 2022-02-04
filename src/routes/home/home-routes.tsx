import { Chat } from 'app/modules';
import { Redirect, Route, Switch } from 'react-router-dom';

export function HomeRoutes() {
	return (
		<Switch>
			<Route path="/chat" exact component={Chat} />
			<Route path="/chat/:id" exact component={Chat} />
			<Redirect to="/chat" />
		</Switch>
	);
}

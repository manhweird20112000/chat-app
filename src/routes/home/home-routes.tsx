import { Chat } from 'app/modules';
import { Route, Switch } from 'react-router-dom';

export function HomeRoutes() {
	return (
		<Switch>
			<Route path="/:id" exact component={Chat} />
		</Switch>
	);
}

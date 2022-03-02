import { Chat } from 'app/modules';
import Overview from 'app/modules/overview/overview';
import { Route, Switch } from 'react-router-dom';

export function ChatRoutes() {
	return (
		<Switch>
			<Route exact path={'/'} component={Overview} />
			<Route exact path={'/:id'} component={Chat} />
		</Switch>
	);
}

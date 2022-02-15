import { Chat } from 'app/modules';
import { Route, Switch } from 'react-router-dom';

export function ChatRoutes() {
	return (
		<Switch>
			<Route exact path={'/:id'} component={Chat} />
		</Switch>
	);
}

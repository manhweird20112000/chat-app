import { Redirect, Route } from 'react-router-dom';
import TokenService from 'utils/token-service';

export function AuthRoutes(props: any) {
	const { component: Component, ...rest } = props;
	return (
		<Route
			exact
			{...rest}
			render={(props) =>
				TokenService.getUser('user') ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{ pathname: '/signin', state: { from: props.location } }}
					/>
				)
			}
		/>
	);
}

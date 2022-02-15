import { useAuth } from 'hooks';
import { Redirect, Route } from 'react-router-dom';

export function AuthRoutes(props: any) {
	const { component: Component, ...rest } = props;
	const { isAuth } = useAuth();
	return (
		<Route
			exact
			{...rest}
			render={(props) =>
				isAuth() ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{ pathname: '/login', state: { from: props.location } }}
					/>
				)
			}
		/>
	);
}

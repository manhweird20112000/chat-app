import { useAuth } from 'hooks';
import { Redirect, Route } from 'react-router-dom';

export function AuthRoutes(props: any) {
	const { component: Component, ...rest } = props;
	const { isSigin } = useAuth();
	alert(isSigin);
	return (
		<Route
			exact
			{...rest}
			render={(props) =>
				isSigin ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/', state: { from: props.location } }} />
				)
			}
		/>
	);
}

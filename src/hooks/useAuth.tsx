import { useEffect, useState } from 'react';
import TokenService from 'utils/token-service';

export function useAuth() {
	const [isSigin, setIsSignin] = useState<Boolean>(false);
	function isAuth() {
		const user = TokenService.getUser('user');
		if (user) {
			setIsSignin(true);
		}
	}

	useEffect(() => {
		isAuth();
		return () => isAuth();
	}, []);
	return {
		isSigin,
	};
}

import TokenService from 'utils/token-service';

export function useAuth() {
	function isAuth() {
		const user = TokenService.getUser('user');
		if (user) {
			return true;
		} else {
			return false;
		}
	}
	return {
		isAuth,
	};
}

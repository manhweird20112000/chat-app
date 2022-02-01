import { Avatar } from 'components';
import { useAppSelector } from 'hooks/hooks';
import { NavbarProps } from './navbar.props';

export function Navbar(props: NavbarProps) {
	const user = useAppSelector((state) => state.chat);
	return (
		<div
			className="py-3 px-4 border-b-[1px]"
			style={{ boxShadow: '5px -3px 20px 1px rgba(0, 0, 0, 0.08)' }}>
			<div className="flex items-center">
				<Avatar uri={user.avatar} size={40} />
				<p className="font-medium text-lg ml-2">{user.fullname}</p>
			</div>
			<div></div>
		</div>
	);
}

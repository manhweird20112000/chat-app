import { Avatar } from 'components';
import { NavbarProps } from './navbar.props';

export function Navbar(props: NavbarProps) {
	const { avatar, fullName } = props;
	return (
		<div
			className="py-3 px-4 border-b-[1px]"
			style={{ boxShadow: '5px -3px 20px 1px rgba(0, 0, 0, 0.08)' }}>
			<div className="flex items-center">
				<Avatar uri={avatar} size={40} />
				<p className="font-medium text-lg ml-2">{fullName}</p>
			</div>
			<div></div>
		</div>
	);
}

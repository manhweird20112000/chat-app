import { Avatar } from 'components';
import { UserConnectionProps } from './user-connection.props';

export function UserConnection(props: UserConnectionProps) {
	const { avatar, fullname, selectedUser, userId } = props;
	return (
		<div
			className="flex items-center px-1 py-2 hover:bg-slate-100 rounded-lg cursor-pointer"
			onClick={selectedUser}>
			<Avatar size={36} uri={avatar || ''} />
			<div className="ml-2 font-normal text-sm text-gray-800">
				<p>{fullname}</p>
			</div>
		</div>
	);
}

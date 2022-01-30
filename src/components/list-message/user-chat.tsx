import { IconTick } from 'assets';
import { Avatar } from 'components';
import { EVENT_CHAT } from '../../constants';
import { UserChatProps } from './user-chat.props';

export function UserChat(props: UserChatProps) {
	const {
		onPress,
		userId,
		fullname,
		username,
		message,
		read_status,
		onlineTime,
		avatar,
		lastUser,
	} = props;
	const user = {
		id: 10,
	};

	function handleMessage(message: string): string {
		if (message.length > 25) {
			return message.slice(0, 25) + '...';
		} else {
			return message;
		}
	}

	return (
		<div
			className="p-2 cursor-pointer hover:bg-gray-100 rounded-xl pb-2 flex items-center"
			onClick={() => onPress(userId)}>
			<Avatar size={56} uri={avatar} />
			<div className="ml-3 w-[79%]">
				<p className="text-base font-medium">{fullname}</p>
				<div className="flex items-center justify-between">
					<p
						className={
							read_status === EVENT_CHAT.UNREAD && lastUser !== user.id
								? 'text-sm font-semibold'
								: 'text-sm  text-gray-500'
						}>
						{lastUser === user.id && <span>You: </span>}
						<span
							className={
								read_status === EVENT_CHAT.UNREAD && lastUser !== user.id
									? 'font-bold'
									: 'font-normal'
							}>
							{handleMessage(message)}
						</span>
						<span className="ml-2 font-normal"> 8 giờ</span>
					</p>
					<div className="flex items-center">
						{read_status === EVENT_CHAT.UNREAD && lastUser !== user.id && (
							<span
								id="not-read"
								className="block w-[10px] h-[10px] bg-blue-500 rounded-full"></span>
						)}

						{lastUser === user.id && (
							<span>
								<IconTick size={30} color="gray" />
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

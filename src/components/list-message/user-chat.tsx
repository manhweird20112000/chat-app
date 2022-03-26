import { IconTick } from 'assets';
import { Avatar } from 'components';
import { useRouteMatch } from 'react-router-dom';
import { UserChatProps } from './user-chat.props';

export function UserChat(props: UserChatProps) {
	const {
		onPress,
		avatar,
		fullName,
		ownerId,
		lastedMessage,
		lastedUserId,
		lastMessageStatus,
		username,
	} = props;

	console.log(username);

	const match = useRouteMatch({
		path: `/${username}`,
		exact: true,
	});

	function handleMessage(message: string): string {
		if (message.length > 25) {
			return message.slice(0, 25) + '...';
		} else {
			return message;
		}
	}
	return (
		<div
			style={{ backgroundColor: match ? '#8080801a' : 'transparent' }}
			className="p-2 cursor-pointer hover:bg-gray-100 rounded-xl pb-2 flex items-center my-1"
			onClick={onPress}>
			<Avatar size={56} uri={avatar || ''} isOnline={'ONLINE'} />
			<div className="ml-3 xl:block md:hidden xl:w-[79%]">
				<p className="text-base font-medium">{fullName}</p>
				<div className="flex items-center justify-between">
					<p
						className={
							ownerId === lastedUserId
								? 'text-sm  text-gray-500'
								: 'text-sm font-semibold'
						}>
						{ownerId === lastedUserId ? <span>You: </span> : ''}
						<span
							className={
								ownerId === lastedUserId ? 'font-normal' : 'font-bold'
							}>
							{handleMessage(lastedMessage || '')}
						</span>
						{/* <span className="ml-2 font-normal"> 8 giờ</span> */}
					</p>
					<div className="flex items-center">
						{ownerId !== lastedUserId && lastMessageStatus === 'SENT' && (
							<span
								id="not-read"
								className="block w-[10px] h-[10px] bg-blue-500 rounded-full"></span>
						)}

						{ownerId === lastedUserId && lastMessageStatus === 'SENT' && (
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

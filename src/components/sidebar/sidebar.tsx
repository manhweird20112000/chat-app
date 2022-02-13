import { selectUser } from 'app/modules/chat/chat-slice';
import { UserChat } from 'components';
import { useAppDispath } from 'hooks/hooks';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarProps } from './sidebar.props';
import './styles.scss';

export function Sidebar(props: SidebarProps) {
	const sidebar = useRef<any>(null);
	const [loading, setLoading] = useState<Boolean>(false);
	const dispath = useAppDispath();
	const chats = [
		{
			id: 1,
			userId: 1,
			avatar:
				'https://i.pinimg.com/736x/d4/3d/01/d43d013e778016b6d0869a2973c90f5d.jpg',
			fullname: 'Thành Draw',
			message: 'Vì em so đẹp',
			read_status: 'UNREAD',
			lastUser: 15,
			username: '9t.draw',
			online: 'OFFLINE',
		},
	];

	const handleSelector = (user: any) => {
		dispath(
			selectUser({
				user: user.userId,
				avatar: user.avatar,
				fullname: user.fullname,
			})
		);
	};

	function handleScrollUserChat() {
		if (
			sidebar?.current.scrollTop + sidebar?.current.clientHeight >=
			sidebar?.current.scrollHeight - 20
		) {
			setLoading(true);
		}
	}

	return (
		<div
			ref={sidebar}
			id="list-user-chat"
			className="overflow-x-hidden overflow-y-auto mt-2"
			onScroll={handleScrollUserChat}>
			{chats.map((item) => (
				<Link key={item.id} to={'/chat/' + item.username}>
					<UserChat
						isOnline={item.online}
						userId={item.userId}
						fullname={item.fullname}
						message={item.message}
						read_status={item.read_status}
						lastUser={item.lastUser}
						onPress={() => handleSelector(item)}
						avatar={item.avatar}
						username={item.username}
					/>
				</Link>
			))}
			{loading && (
				<div className="text-center text-base text-gray-500 font-medium my-2">
					Đang tải ...
				</div>
			)}
		</div>
	);
}

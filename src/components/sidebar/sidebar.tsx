import { selectedChat } from 'app/features/chat/chat-slice';
import { createRoomAsync, roomsAsync } from 'app/features/rooms/rooms-slice';
import { UserChat, UserConnection } from 'components';
import { useAppDispatch } from 'hooks/hooks';
import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Helper } from 'utils/helper';
import { SidebarProps } from './sidebar.props';
import './styles.scss';

export function Sidebar(props: SidebarProps) {
	const { type, data } = props;
	const sidebar = useRef<any>(null);
	const [loading, setLoading] = useState<Boolean>(false);
	const dispatch = useAppDispatch();
	const history = useHistory();

	const IMAGE_DEFAUT =
		'https://i.pinimg.com/564x/c3/08/69/c3086973f6c6601732b7dce0c822ccc5.jpg';

	const handleSelector = (item: any) => {
		const payload = {
			fullName: item.user.fullName,
			avatar: Helper.renderImage(item.user.avatar),
			roomId: item.roomId,
			color: item.color,
		};
		dispatch(selectedChat(payload));
		history.push(`/${item.roomId}`);
	};

	function handleScrollUserChat() {
		if (
			sidebar?.current.scrollTop + sidebar?.current.clientHeight >=
			sidebar?.current.scrollHeight - 20
		) {
			setLoading(true);
		}
	}

	function selectedUser(item: any): void {
		dispatch(createRoomAsync({ receiver: item._id })).then((data) => {
			if (data.payload instanceof Object) {
				if (data.payload.type === 'EXIST') {
					history.push(`/${item.username}`);
				} else {
					history.push(`/${item.username}`);
				}
			}
		});
	}

	useEffect(() => {
		dispatch(roomsAsync());
	}, []);

	if (type === 'FRIEND') {
		return (
			<div
				ref={sidebar}
				id="list-user-chat"
				className="overflow-x-hidden overflow-y-auto mt-2"
				onScroll={handleScrollUserChat}>
				{data.length > 0 &&
					data.map((item: any, index: number) => (
						<UserChat
							onPress={() => handleSelector(item)}
							key={index}
							fullname={item.user.fullName}
							username={item.user.username}
							message={
								_.isEmpty(item.messages)
									? `Bạn đã kết nối với ${item.user.fullName}`
									: item.messages.message
							}
							avatar={Helper.renderImage(item.user.avatar)}
							userId={item.receiver}
						/>
					))}
				{loading && (
					<div className="text-center text-base text-gray-500 font-medium my-2">
						Đang tải ...
					</div>
				)}
			</div>
		);
	} else if (type === 'CONNECTION') {
		return (
			<div
				ref={sidebar}
				id="list-user-chat"
				className="overflow-x-hidden overflow-y-auto mt-2"
				onScroll={handleScrollUserChat}>
				{data.length > 0 &&
					data.map((item: any, index: number) => (
						<UserConnection
							key={index}
							fullname={item.firstName + ' ' + item.lastName}
							username={item.username}
							avatar={IMAGE_DEFAUT}
							selectedUser={() => selectedUser(item)}
						/>
					))}
				{loading && (
					<div className="text-center text-base text-gray-500 font-medium my-2">
						Đang tải ...
					</div>
				)}
			</div>
		);
	} else {
		return <div>other</div>;
	}
}

import React, {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { Message, Navbar, TimeLine, ToolBar } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { listAsync, readAsync, sendAsync } from 'app/features/chat/chat-slice';
import { useDimensions, useSocket } from 'hooks';
import _ from 'lodash';
import TokenService from 'utils/token-service';
import moment from 'moment-timezone';
import { Helper } from 'utils/helper';
import './style.scss';
import { DetailChat } from '../detail/detail-chat';

export function Chat(props: any) {
	const dispatch = useAppDispatch();
	const {
		joinRoom,
		connectFriendNew,
		leave,
		read,
		remove,
		send,
		special,
		typing,
		trigger,
	} = useSocket();
	const { chatSelected, messages } = useAppSelector((state) => state.chat);

	const [skip, setSkip] = useState<number>(0);
	const [limit, setLimit] = useState<number>(40);
	const chat = useRef<any>();

	function clearState() {
		setLimit(40);
		setSkip(0);
	}

	function scrollBottom() {
		chat.current.scrollTop = chat.current.scrollHeight;
	}

	const receiverMessage = useCallback(() => {
		setTimeout(() => {
			scrollBottom();
		}, 400);
	}, [trigger]);

	function getListMessages() {
		const params = { roomId: chatSelected.roomId, skip: skip, limit: limit };
		if (Object.keys(chatSelected).length > 0) {
			dispatch(listAsync(params))
				.then((data) => {
					joinRoom({ roomId: chatSelected.roomId });
					dispatch(readAsync(chatSelected.roomId));
					scrollBottom();
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}

	function handleSendMessage(messages: string) {
		if (_.isNull(messages) || messages.trim() === '') {
			console.log('nhập input');
		} else {
			dispatch(
				sendAsync({ roomId: chatSelected.roomId, message: messages.trim() })
			)
				.then((data) => {
					send(data.payload);
				})
				.then(() => {
					setTimeout(() => {
						scrollBottom();
					}, 400);
				});
		}
	}

	useEffect(() => {
		getListMessages();
		return () => clearState();
	}, [chatSelected]);
	return (
		<div className="h-screen flex">
			<div className="chat border overflow-hidden">
				<Navbar fullName={chatSelected.fullName} avatar={chatSelected.avatar} />
				<div className="container-chat" ref={chat}>
					{/* <TimeLine /> */}
					{messages.map((item: any, index: number) => (
						<Message
							avatar={Helper.renderImage(item.user.avatar)}
							key={index}
							message={item.message}
							userId={item.ownerId}
							color={chatSelected.color}
						/>
					))}
				</div>
				<div>
					<ToolBar roomId={chatSelected.roomId} send={handleSendMessage} />
				</div>
			</div>
			<div className="w-[380px]">
				<DetailChat />
			</div>
		</div>
	);
}

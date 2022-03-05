import React, { useEffect, useRef, useState } from 'react';
import { Message, Navbar, TimeLine, ToolBar } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { listAsync, sendAsync } from 'app/features/chat/chat-slice';
import { useDimensions, useSocket } from 'hooks';
import _ from 'lodash';
import TokenService from 'utils/token-service';
import moment from 'moment-timezone';
import './style.scss';

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
	} = useSocket();
	const { size } = useDimensions();
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

	function getListMessages() {
		console.log('get list');
		const params = { roomId: chatSelected.roomId, skip: skip, limit: limit };
		if (Object.keys(chatSelected).length > 0) {
			dispatch(listAsync(params))
				.then((data) => {
					joinRoom({ roomId: chatSelected.roomId });
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
					scrollBottom();
				});
		}
	}

	useEffect(() => {
		getListMessages();
		return () => clearState();
	}, [chatSelected]);
	return (
		<div className="h-screen">
			<Navbar fullName={chatSelected.fullName} avatar={chatSelected.avatar} />
			<div className="container-chat" ref={chat}>
				{/* <TimeLine /> */}
				{messages.map((item: any, index: number) => (
					<Message
						avatar="https://i.pinimg.com/564x/aa/e3/91/aae39130ea0941683983b51a33f689b8.jpg"
						key={index}
						message={item.message}
						userId={item.ownerId}
						color={'#0084ff'}
					/>
				))}
			</div>
			<div>
				<ToolBar roomId={chatSelected.roomId} send={handleSendMessage} />
			</div>
		</div>
	);
}

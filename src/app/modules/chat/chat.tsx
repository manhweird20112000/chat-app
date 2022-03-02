import React, { useEffect, useState } from 'react';
import { Message, Navbar, TimeLine, ToolBar } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { listAsync, sendAsync } from 'app/features/chat/chat-slice';
import { useDimensions } from 'hooks';
import _ from 'lodash';

export function Chat(props: any) {
	const dispatch = useAppDispatch();
	const { size } = useDimensions();
	const { chatSelected, messages } = useAppSelector((state) => state.chat);
	const [skip, setSkip] = useState<number>(0);
	const [limit, setLimit] = useState<number>(20);
	const className = `h-[${
		size.height === 0 ? window.innerHeight - 125 : Number(size.height) - 125
	}px]`;

	function clearState() {
		setLimit(20);
		setSkip(0);
	}

	function getListMessages() {
		const roomId = props.match.params.id;
		const params = { roomId: '', skip: skip, limit: limit };
		if (roomId) {
			params.roomId = roomId;
		} else {
			params.roomId = chatSelected.roomId;
		}
		dispatch(listAsync(params));
	}

	function handleSendMessage(messages: string) {
		if (_.isNull(messages) || messages.trim() === '') {
			console.log('nhập input');
		} else {
			dispatch(
				sendAsync({ roomId: chatSelected.roomId, message: messages.trim() })
			);
		}
	}

	useEffect(() => {
		getListMessages();
		return () => clearState();
	}, [props.match.params]);
	return (
		<div className="h-screen">
			<Navbar fullName={chatSelected.fullName} avatar={chatSelected.avatar} />
			<div className={className}>
				{/* <TimeLine /> */}
				{messages.map((item: any) => (
					<Message
						avatar="https://i.pinimg.com/564x/aa/e3/91/aae39130ea0941683983b51a33f689b8.jpg"
						key={item._id}
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

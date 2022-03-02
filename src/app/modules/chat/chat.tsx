import React, { useEffect, useState } from 'react';
import { Message, Navbar, TimeLine, ToolBar } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { listAsync } from 'app/features/chat/chat-slice';

export function Chat(props: any) {
	const dispatch = useAppDispatch();
	const { chatSelected, messages } = useAppSelector((state) => state.chat);
	const [skip, setSkip] = useState<number>(0);
	const [limit, setLimit] = useState<number>(20);

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

	useEffect(() => {
		getListMessages();

		return () => clearState();
	}, [props.match.params]);
	return (
		<div className="">
			<Navbar fullName={chatSelected.fullName} avatar={chatSelected.avatar} />
			<div>
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
				<ToolBar />
			</div>
		</div>
	);
}

const listMessage = [
	{
		id: 1,
		message: 'Hello',
		userId: 1,
	},
	{
		id: 2,
		message:
			'IM Possible VS $A Milo VS Cà Nâu - 1, 2, 3 - Team Binz | Rap Việt - Mùa 2 [MV Lyrics]',
		userId: 1,
	},
	{
		id: 3,
		message: 'Hello',
		userId: 5,
	},
];

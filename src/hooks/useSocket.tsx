import { appendMessage } from 'app/features/chat/chat-slice';
import { updateMessageLasted } from 'app/features/rooms/rooms-slice';
import { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import TokenService from 'utils/token-service';
import { useAppDispatch } from './hooks';

interface JoinRoomProps {
	roomId: number;
}

export function useSocket() {
	const user = TokenService.getUser('user');
	const ref = useRef<any>();

	const dispatch = useAppDispatch();

	const online = (): void => {
		ref.current.emit('online', { id: user.id });
	};

	const offline = (): void => {
		ref.current.emit('offline', { id: user.id });
	};

	const joinRoom = (data: JoinRoomProps): void => {
		ref.current.emit('joinRoom', data);
	};

	const connectFriendNew = (data: any): void => {
		ref.current.emit('connectFriend', data);
	};

	const send = (data: any): void => {
		ref.current.emit('send', {
			...data,
			ownerId: user.id,
			user: {
				avatar: user.avatar,
				fullname: user.firstName + ' ' + user.lastName,
				id: user.id,
			},
		});
	};

	const read = (data: any): void => {
		ref.current.emit('read', data);
	};

	const typing = (data: any): void => {
		ref.current.emit('typing', data);
	};

	const special = (data: any): void => {
		ref.current.emit('love', data);
	};

	const remove = (data: any): void => {
		ref.current.emit('remove', data);
	};

	const leave = (data: any): void => {
		ref.current.emit('leaveRoom', data);
	};

	useEffect(() => {
		const socket = io(`${process.env.REACT_APP_API_URL}`, {
			query: {
				token: `Bearer ${user.accessToken}`,
			},
			transports: ['polling'],
		});

		socket.on('connected', (data) => {
			console.log('connected', data);
		});

		socket.on('connectFriend', (data) => {
			console.log(data);
		});

		socket.on('typing', (data) => {
			console.log('Đang chat' + data);
		});

		socket.on('send', (data) => {
			dispatch(appendMessage(data));
		});

		socket.on('read', (data) => {
			console.log(data);
		});

		socket.on('love', (data) => {
			console.log(data);
		});

		socket.on('leaveRoom', (data) => {
			console.log(data);
		});

		socket.on('sendAll', (data) => {
			dispatch(updateMessageLasted(data));
		});

		socket.on('readAll', (data) => {
			console.log(data);
		});

		socket.on('userOnline', (data) => {
			console.log(data);
		});

		socket.on('userOffline', (data) => {
			console.log(data);
		});

		ref.current = socket;
	}, []);

	return {
		joinRoom,
		connectFriendNew,
		send,
		read,
		typing,
		special,
		leave,
		remove,
		online,
		offline,
	};
}

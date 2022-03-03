import { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import TokenService from 'utils/token-service';

interface Props {
	roomId: string;
}

interface JoinRoomProps {
	roomId: number;
}

export function useSocket({ roomId }: Props) {
	const user = TokenService.getUser('user');
	const ref = useRef<any>();

	const joinRoom = (data: JoinRoomProps): void => {
		ref.current.emit('joinRoom', data);
	};

	const connectFriendNew = (data: any): void => {
		ref.current.emit('connectFriend', data);
	};

	const send = (data: any): void => {
		ref.current.emit('send', data);
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

		socket.on('connectFriend', (data) => {
			console.log(data);
		});

		socket.on('typing', (data) => {
			console.log(data);
		});

		socket.on('send', (data) => {
			console.log(data);
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
			console.log(data);
		});

		socket.on('readAll', (data) => {
			console.log(data);
		});

		ref.current = socket;
	}, [roomId]);

	return {
		joinRoom,
		connectFriendNew,
		send,
		read,
		typing,
		special,
		leave,
		remove,
	};
}

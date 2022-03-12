import { IconArrowLeft, IconSearch, IconThreeDot } from 'assets';
import React, { useEffect, useRef } from 'react';
import { Avatar, Sidebar } from 'components';
import { useDimensions, useSocket } from 'hooks';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { useState } from 'react';
import { ChatRoutes } from 'routes';
import './styles.scss';
import { roomsAsync } from 'app/features/rooms/rooms-slice';
import {
	avatarAsync,
	fetchAsyncUsers,
	setUser,
} from 'app/features/user/user-slice';
import TokenService from 'utils/token-service';
import { Helper } from 'utils/helper';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import { setError, setProcess } from 'app/features/toast/toast-slice';

export function MainLayout() {
	const avatar = useRef<any>(null);

	const rooms = useAppSelector((state) => state.rooms.rooms);
	const { users, user } = useAppSelector((state) => state.user);

	const { size } = useDimensions();
	const history = useHistory();
	const { online, offline } = useSocket();

	const [focus, setFocus] = useState<Boolean>(false);
	const [isLogout, setIsLogout] = useState<Boolean>(false);
	const [sidebar, setSidebar] = useState(false);

	const dispatch = useAppDispatch();

	const className = `xl:w-[${Number(size.width) - 360}px] w-screen `;

	function logout() {
		localStorage.clear();
		offline();
		history.push('/signin');
	}

	function findUserConnection(event: any) {
		const params = {
			skip: 0,
			username: event.target.value,
			limit: 20,
		};

		if (event.target.value.trim() !== '' || !_.isNull(event.target.value)) {
			dispatch(fetchAsyncUsers(params));
		}
	}

	function updateAvatar() {
		avatar.current.click();
	}

	function handleUploadFile(event: any) {
		const formData = new FormData();
		formData.append('avatar', event.target.files[0]);
		dispatch(setProcess());
		dispatch(avatarAsync(formData)).then((res) => {
			if (res.payload.data instanceof Object) {
				TokenService.updateProperties('avatar', res.payload.data.avatar);
				dispatch(
					setError({
						type: 'success',
						content: 'Cập nhật ảnh đại diện thành công',
						title: 'Thông báo',
					})
				);
			}
		});
	}

	useEffect(() => {
		history.push('/');
		online();
		dispatch(setUser(TokenService.getUser('user')));
		dispatch(roomsAsync());

		return () => {
			offline();
		};
	}, []);

	return (
		<div className="flex">
			<div
				className="absolute bottom-10 left-0 z-10"
				onClick={() => setSidebar(!sidebar)}>
				<div
					style={{ width: '20px', height: '20px' }}
					className="bg-red-600"></div>
			</div>
			<div
				id="sidebar"
				className={`xl:min-w-[360px] bg-white xl:max-w-[360px] w-full absolute ${
					sidebar ? 'translate-x-0' : '-translate-x-full'
				} xl:translate-x-0 lg:translate-x-0 md:translate-x-0 xl:relative xl:block md:block pl-2 pr-0.5 border-r-[1px] pb-10 h-screen overflow-y-hidden`}>
				<div className="px-2 py-4 flex items-center justify-between">
					<div className="flex items-center xl:justify-start md:justify-center ">
						<Avatar
							size={36}
							uri={Helper.renderImage(user.avatar)}
							onPress={() => console.log('Xem ảnh đại diện')}
						/>
						<p className="font-bold text-2xl ml-3 xl:block md:hidden">Chat</p>
					</div>
					<div className="relative">
						<span
							className="flex items-center justify-center cursor-pointer w-[35px] h-[35px] hover:bg-gray-100 rounded-full rotate-90"
							onClick={() => setIsLogout(!isLogout)}>
							<IconThreeDot size={30} />
						</span>
						{isLogout && (
							<div className="modal-main absolute z-50 right-0 top-12 bg-white rounded-lg min-w-[200px] p-1">
								<div
									className="cursor-pointer hover:bg-slate-100 p-1.5 rounded-sm"
									onClick={() => updateAvatar()}>
									<p className="font-medium text-sm">Cập nhật ảnh đại diện</p>
									<input
										type="file"
										className="hidden"
										ref={avatar}
										onChange={(event) => handleUploadFile(event)}
									/>
								</div>
								<div
									className="cursor-pointer hover:bg-slate-100 p-1.5 rounded-sm"
									onClick={() => logout()}>
									<p className="font-medium text-sm">Đăng xuất</p>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className="flex items-center justify-center">
					{focus && (
						<div
							className="cursor-pointer p-0.5 hover:bg-gray-100 rounded-full"
							onClick={() => setFocus(false)}>
							<IconArrowLeft size={30} />
						</div>
					)}
					<div className="relative p-2 xl:block md:hidden w-11/12 ">
						<input
							type="text"
							placeholder="Tìm kiếm trên Messenger"
							className=" bg-gray-100 py-2 pl-9 pr-2 w-full outline-none font-normal text-sm rounded-full"
							onChange={(event) => findUserConnection(event)}
							onFocus={() => setFocus(true)}
						/>
						<span className="absolute top-1/2 -translate-y-1/2 left-4">
							<IconSearch color="gray" />
						</span>
					</div>
				</div>
				<Sidebar
					type={focus ? 'CONNECTION' : 'FRIEND'}
					data={focus ? users : rooms}
				/>
			</div>
			<div id="container" className={className}>
				<ChatRoutes />
			</div>
		</div>
	);
}

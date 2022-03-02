import { IconArrowLeft, IconSearch, IconThreeDot } from 'assets';
import React, { useEffect } from 'react';
import { Avatar, Sidebar } from 'components';
import { useDimensions } from 'hooks';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { useState } from 'react';
import { ChatRoutes } from 'routes';
import './styles.scss';
import { roomsAsync } from 'app/features/rooms/rooms-slice';
import { fetchAsyncUsers, setUser } from 'app/features/user/user-slice';
import TokenService from 'utils/token-service';
import { Helper } from 'utils/helper';

export function MainLayout() {
	const rooms = useAppSelector((state) => state.rooms.rooms);
	const { users, user } = useAppSelector((state) => state.user);

	const { width } = useDimensions();
	const [focus, setFocus] = useState<Boolean>(false);
	const [isLogout, setIsLogout] = useState<Boolean>(false);
	const dispatch = useAppDispatch();

	const className = `xl:w-[${Number(width) - 360}px] w-screen `;

	useEffect(() => {
		dispatch(setUser(TokenService.getUser('user')));
		dispatch(roomsAsync());
	}, []);

	return (
		<div className="flex">
			<div
				id="sidebar"
				className="xl:w-[360px]  hidden xl:block md:block pl-2 pr-0.5 border-r-[1px] pb-10 h-screen overflow-y-hidden">
				<div className="px-2 py-4 flex items-center justify-between">
					<div className="flex items-center xl:justify-start md:justify-center ">
						<Avatar size={36} uri={''} />
						<p className="font-bold text-2xl ml-3 xl:block md:hidden">Chat</p>
					</div>
					<div className="relative xl:block hidden lg:block md:hidden">
						<span
							className="flex items-center justify-center cursor-pointer w-[35px] h-[35px] hover:bg-gray-100 rounded-full rotate-90"
							onClick={() => setIsLogout(!isLogout)}>
							<IconThreeDot size={30} />
						</span>
						{isLogout && (
							<div className="modal-main absolute z-50 right-0 top-12 bg-white rounded-lg min-w-[150px] p-1">
								<div
									className="cursor-pointer hover:bg-slate-100 p-1.5 rounded-sm"
									onClick={() => console.log('đăng xuất')}>
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
							onChange={() => dispatch(fetchAsyncUsers())}
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

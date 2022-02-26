import { IconArrowLeft, IconSearch } from 'assets';
import { Avatar, Sidebar } from 'components';
import { useDimensions } from 'hooks';
import { useAppSelector } from 'hooks/hooks';
import { useState } from 'react';
import { ChatRoutes } from 'routes';

export function MainLayout() {
	const user = useAppSelector((state) => state.user);
	const { width } = useDimensions();
	const [focus, setFocus] = useState<Boolean>(false);

	const className = `xl:w-[${Number(width) - 360}px] w-screen `;

	return (
		<div className="flex">
			<div
				id="sidebar"
				className="xl:w-[360px]  hidden xl:block md:block pl-2 pr-0.5 border-r-[1px] pb-10 h-screen overflow-y-hidden">
				<div className="px-2 py-4">
					<div className="flex items-center xl:justify-start md:justify-center ">
						<Avatar size={36} uri={user.avatar} />
						<p className="font-bold text-2xl ml-3 xl:block md:hidden">Chat</p>
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
							onFocus={() => setFocus(true)}
						/>
						<span className="absolute top-1/2 -translate-y-1/2 left-4">
							<IconSearch color="gray" />
						</span>
					</div>
				</div>
				<Sidebar type={focus ? 'CONNECTION' : 'FRIEND'} />
			</div>
			<div id="container" className={className}>
				<ChatRoutes />
				{/* <HomeRoutes /> */}
			</div>
		</div>
	);
}

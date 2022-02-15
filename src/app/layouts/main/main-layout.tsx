import { IconSearch } from 'assets';
import { Avatar, Sidebar } from 'components';
import { useAppSelector } from 'hooks/hooks';
import { ChatRoutes, HomeRoutes } from 'routes';
import './styles.scss';

export function MainLayout() {
	const user = useAppSelector((state) => state.user);
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
				<div className="relative p-2 xl:block md:hidden">
					<input
						type="text"
						placeholder="Tìm kiếm trên Messenger"
						className="bg-gray-100 py-2 pl-9 pr-2 w-full outline-none font-normal text-s\ rounded-full"
					/>
					<span className="absolute top-1/2 -translate-y-1/2 left-4">
						<IconSearch color="gray" />
					</span>
				</div>
				<Sidebar />
			</div>
			<div id="container" className="">
				<ChatRoutes />
				{/* <HomeRoutes /> */}
			</div>
		</div>
	);
}

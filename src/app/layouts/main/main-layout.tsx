import { IconSearch } from 'assets';
import { Avatar, Sidebar } from 'components';
import { HomeRoutes } from 'routes';
import './styles.scss';

export function MainLayout() {
	return (
		<div className="flex">
			<div id="sidebar" className="w-[360px] px-2 border-r-[1px] h-screen">
				<div className="px-2 py-4">
					<div className="flex items-center justify-start ">
						<Avatar
							size={36}
							uri="https://i.pinimg.com/564x/aa/e3/91/aae39130ea0941683983b51a33f689b8.jpg"
						/>
						<p className="font-bold text-2xl ml-3">Chat</p>
					</div>
				</div>
				<div className="relative p-2">
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
				<HomeRoutes />
			</div>
		</div>
	);
}

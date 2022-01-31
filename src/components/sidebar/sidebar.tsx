import { UserChat } from 'components';
import { Link } from 'react-router-dom';
import { SidebarProps } from './sidebar.props';

export function Sidebar(props: SidebarProps) {
	const chats = [
		{
			id: 1,
			userId: 1,
			avatar:
				'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/271139103_1076409309569843_4136733297496816757_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=48KMSGP9LmwAX-m79ES&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8eR-Mo4INM991KJFIlVMZKBP3xcHgZmZzK2BoDsWRXKw&oe=61FBFC1D',
			fullname: 'Đồng Thúy Quỳnh',
			message: 'I love you ạhdssjjhzbaj ạhdssjjhzbaj',
			read_status: 'UNREAD',
			lastUser: 15,
			username: 'dilys1210',
			online: 1,
		},
		{
			id: 2,
			userId: 4,
			avatar: 'https://hosonhanvat.net/wp-content/uploads/2021/06/robe.jpg',
			fullname: 'H$ Robe',
			message: 'Wellcome to Hu$tlang.',
			read_status: 'READ',
			lastUser: 15,
			username: 'hs.robe',
			online: 1,
		},
	];

	return (
		<div className="overflow-x-hidden overflow-y-auto mt-2">
			{chats.map((item) => (
				<Link key={item.id} to={item.username}>
					<UserChat
						isOnline={item.online}
						userId={item.userId}
						fullname={item.fullname}
						message={item.message}
						read_status={item.read_status}
						lastUser={item.lastUser}
						onPress={() => console.log(item.fullname)}
						avatar={item.avatar}
						username={'disly0712'}
					/>
				</Link>
			))}
		</div>
	);
}

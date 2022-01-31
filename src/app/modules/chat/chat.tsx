import { Avatar, Message, TimeLine } from 'components';

export function Chat() {
	return (
		<div className="">
			<div
				className="py-3 px-4 border-b-[1px]"
				style={{ boxShadow: '5px -3px 20px 1px rgba(0, 0, 0, 0.08)' }}>
				<div className="flex items-center">
					<Avatar
						uri="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/271139103_1076409309569843_4136733297496816757_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=48KMSGP9LmwAX-m79ES&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8eR-Mo4INM991KJFIlVMZKBP3xcHgZmZzK2BoDsWRXKw&oe=61FBFC1D"
						size={40}
					/>
					<p className="font-medium text-lg ml-2">Đồng Thúy Quỳnh</p>
				</div>
				<div></div>
			</div>
			<div>
				<TimeLine />
				{listMessage.map((item) => (
					<Message
						key={item.id}
						message={item.message}
						userId={item.userId}
						color="pink"
					/>
				))}
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

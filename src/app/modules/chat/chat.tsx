import { Message, Navbar, TimeLine, ToolBar } from 'components';

export function Chat() {
	return (
		<div className="">
			<Navbar />
			<div>
				<TimeLine />
				{listMessage.map((item) => (
					<Message
						avatar="https://i.pinimg.com/564x/aa/e3/91/aae39130ea0941683983b51a33f689b8.jpg"
						key={item.id}
						message={item.message}
						userId={item.userId}
						color="pink"
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

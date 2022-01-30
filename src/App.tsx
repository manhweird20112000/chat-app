import { BrowserRouter as Router } from 'react-router-dom';
import { MainLayout } from './app/layouts';

function App() {
	return (
		<div className="app">
			<Router>
				<MainLayout />
			</Router>
		</div>
	);
}

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
	},
	{
		id: 2,
		userId: 1,
		avatar:
			'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/271139103_1076409309569843_4136733297496816757_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=48KMSGP9LmwAX-m79ES&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8eR-Mo4INM991KJFIlVMZKBP3xcHgZmZzK2BoDsWRXKw&oe=61FBFC1D',
		fullname: 'Đồng Thúy Quỳnh',
		message: 'I love you ạhdssjjhzbaj ạhdssjjhzbaj',
		read_status: 'UNREAD',
		lastUser: 15,
	},
];

export default App;

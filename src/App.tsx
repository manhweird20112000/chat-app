import { Avatar } from './components';

function App() {
	return (
		<div className="app">
			<div id="sidebar">
				<Avatar
					uri="https://i.pinimg.com/originals/a4/02/28/a40228816d2b554edf03978bb2b96d98.jpg"
					size={100}
				/>
			</div>
			<div id="container"></div>
		</div>
	);
}

export default App;

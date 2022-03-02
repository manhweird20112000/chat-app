import { IconSend } from 'assets';
import { useState } from 'react';
import { ToolBarProps } from './tool-bar.props';

export function ToolBar(props: ToolBarProps) {
	const { send } = props;
	const [message, setMessage] = useState<string>('');

	function onChangeInput(event: any) {
		setMessage(event.target.value);
	}
	function submitToolbar(event: any) {
		event.preventDefault();
		send(message);
		setMessage('');
	}

	return (
		<div className="flex items-center h-[60px]">
			<div className="w-full px-5">
				<form
					onSubmit={(event) => submitToolbar(event)}
					className="flex items-center">
					<input
						value={message}
						className="bg-gray-100 text-sm mr-2 py-1.5 px-4 rounded-2xl outline-none w-10/12"
						type="text"
						placeholder="Aa"
						onChange={onChangeInput}
					/>
					<button
						type="submit"
						className="hover:bg-gray-100 rounded-full py-1 px-1 flex items-center justify-center">
						<IconSend size={30} color="#0084ff" />
					</button>
				</form>
			</div>
		</div>
	);
}

import { IconEmoji, IconSend } from 'assets';
import { useState } from 'react';
import { ToolBarProps } from './tool-bar.props';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

export function ToolBar(props: ToolBarProps) {
	const { send } = props;
	const [message, setMessage] = useState<string>('');
	const [func, setFunc] = useState({
		emoji: false,
	});

	function onChangeInput(event: any) {
		setMessage(event.target.value);
	}
	function submitToolbar(event: any) {
		event.preventDefault();
		send(message);
		setMessage('');
	}

	function handleUseFunc(state: string, payload: any) {
		const clone: any = func;
		clone[`${state}`] = payload;
		setFunc({ ...clone });
	}

	function handleEmoji(event: any) {
		const emoji = event.native;
		const clone = message;
		setMessage(clone + emoji);
	}

	return (
		<div className="flex items-center h-[60px]">
			<div className="w-full px-5">
				<form
					onSubmit={(event) => submitToolbar(event)}
					className="flex items-center">
					<div className="relative w-[95%]">
						<input
							value={message}
							className="w-full bg-gray-100 text-sm mr-2 py-1.5 px-4 rounded-2xl outline-none h-[36px]"
							type="text"
							placeholder="Aa"
							onChange={onChangeInput}
						/>
						<div
							id="emoji"
							className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2">
							<div onClick={() => handleUseFunc('emoji', !func.emoji)}>
								<IconEmoji size={25} />
							</div>
							<div className="absolute bottom-8 -right-4">
								{func.emoji && (
									<Picker
										set="twitter"
										title="hs.weird"
										onClick={(event) => handleEmoji(event)}
									/>
								)}
							</div>
						</div>
					</div>

					<div className="flex items-center justify-center w-[5%]">
						<button
							type="submit"
							className="hover:bg-gray-100 rounded-full py-1 px-1 flex items-center justify-center">
							<IconSend size={30} color="#0084ff" />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

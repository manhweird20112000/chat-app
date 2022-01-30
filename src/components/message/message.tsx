import { MessageProps } from './message.props';

export function Message(props: MessageProps) {
	const { color, message } = props;
	return (
		<div className="flex items-center justify-end">
			<div
				className="max-w-[50%] text-white font-medium text-base py-1.5 px-3 rounded-full"
				style={{ background: color }}>
				{message}
			</div>
		</div>
	);
}

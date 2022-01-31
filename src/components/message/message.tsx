import { IconThreeDot } from 'assets/icons/icon-three-dot';
import { Avatar } from 'components';
import { useState } from 'react';
import { MessageProps } from './message.props';

export function Message(props: MessageProps) {
	const { color, message, userId } = props;
	const [option, setOption] = useState<Boolean>(false);
	return (
		<div
			onMouseOver={() => setOption(true)}
			onMouseLeave={() => setOption(false)}
			className="flex items-center my-1 mx-2"
			style={{ justifyContent: userId !== 5 ? 'flex-start' : 'flex-end' }}>
			{userId !== 5 && (
				<Avatar
					uri="https://hosonhanvat.net/wp-content/uploads/2021/06/robe.jpg"
					size={28}
				/>
			)}
			{option && userId === 5 && (
				<div className="ml-2" onClick={() => console.log('option')}>
					<div className="hover:bg-gray-200 rounded-full py-0.5 px-0.5 cursor-pointer ">
						<IconThreeDot size={20} color="gray" />
					</div>
					<div></div>
				</div>
			)}
			<div
				className="max-w-[50%]  font-medium text-base py-2 px-3 rounded-xl ml-2"
				style={{
					background: userId !== 5 ? '#e4e6eb' : color,
					color: userId !== 5 ? 'black' : 'white',
				}}>
				{message}
			</div>
			{option && userId !== 5 && (
				<div className="ml-2" onClick={() => console.log('option')}>
					<div className="hover:bg-gray-200 rounded-full py-0.5 px-0.5 cursor-pointer ">
						<IconThreeDot size={20} color="gray" />
					</div>
					<div></div>
				</div>
			)}
		</div>
	);
}

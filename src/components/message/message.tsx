import { IconThreeDot } from 'assets';
import { Avatar } from 'components';
import { useAppSelector } from 'hooks/hooks';
import { useState } from 'react';
import { MessageProps } from './message.props';

export function Message(props: MessageProps) {
	const { color, message, userId, avatar } = props;
	const [option, setOption] = useState<Boolean>(false);
	const user = useAppSelector((state) => state.user);
	return (
		<div
			onMouseOver={() => setOption(true)}
			onMouseLeave={() => setOption(false)}
			className="flex items-center my-1 mx-2"
			style={{
				justifyContent: userId !== user.id ? 'flex-start' : 'flex-end',
			}}>
			{userId !== user.id && (
				<Avatar
					uri={avatar}
					size={28}
				/>
			)}
			{option && userId === user.id && (
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
					background: userId !== user.id ? '#e4e6eb' : color,
					color: userId !== user.id ? 'black' : 'white',
				}}>
				{message}
			</div>
			{option && userId !== user.id && (
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

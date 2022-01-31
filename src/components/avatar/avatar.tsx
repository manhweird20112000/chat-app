import { AvatarProps } from './avatar.props';

export function Avatar(props: AvatarProps) {
	const { size, uri, title, onPress, onlineSize = 18, isOnline } = props;
	return (
		<div className="relative" onClick={onPress}>
			<div
				style={{ width: size, height: size }}
				className="rounded-full overflow-hidden cursor-pointer">
				<img src={uri} alt={title} className="object-cover w-full h-full " />
			</div>
			{isOnline && (
				<div
					style={{ width: onlineSize, height: onlineSize }}
					className="bg-green-500 rounded-full absolute -right-1 bottom-0 border-[2px] border-white"></div>
			)}
		</div>
	);
}

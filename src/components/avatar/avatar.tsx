import { AvatarProps } from './avatar.props';

export function Avatar(props: AvatarProps) {
	const { size, uri, title, onPress } = props;
	return (
		<div
			onClick={onPress}
			style={{ width: size, height: size }}
			className="rounded-full overflow-hidden cursor-pointer">
			<img src={uri} alt={title} className="object-cover w-full h-full " />
		</div>
	);
}

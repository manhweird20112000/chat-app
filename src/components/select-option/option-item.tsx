interface Props {
	icon?: React.ReactNode;
	label: string;
	onPress?(): void;
}

export function OptionItem(props: Props) {
	const { icon, label, onPress } = props;
	return (
		<div
			onClick={onPress}
			className="flex items-center rounded-md cursor-pointer hover:bg-gray-100 px-1.5 py-2 my-1">
			{icon && <p className="mr-3">{icon}</p>}
			<p className="font-semibold text-sm text-black">{label}</p>
		</div>
	);
}

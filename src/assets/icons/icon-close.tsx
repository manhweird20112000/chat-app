interface Props {
	size?: number;
	color?: string;
}

export function IconClose(props: Props) {
	const { size = 24, color = 'black' } = props;
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.46445 15.5354L15.5355 8.46436"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M8.46446 8.46458L15.5355 15.5356"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}

interface Props {
	size?: number;
	color?: string;
}

export function IconColor(props: Props) {
	const { size = 10, color } = props;
	return (
		<div
			style={{
				width: `${size}px`,
				height: `${size}px`,
				border: `${size / 4}px solid ${color} `,
				borderRadius: '100rem',
			}}></div>
	);
}

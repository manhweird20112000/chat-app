interface Props {
	size?: number;
}

export function IconEmoji(props: Props) {
	const { size } = props;
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 36 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
				fill="#FFCC4D"
			/>
			<path
				d="M10.515 23.621C10.56 23.8 11.683 28 18 28C24.318 28 25.44 23.8 25.485 23.621C25.54 23.404 25.442 23.179 25.248 23.067C25.053 22.956 24.809 22.989 24.648 23.144C24.629 23.163 22.694 25 18 25C13.306 25 11.37 23.163 11.352 23.145C11.256 23.05 11.128 23 11 23C10.916 23 10.831 23.021 10.754 23.064C10.558 23.176 10.46 23.403 10.515 23.621Z"
				fill="#664500"
			/>
			<path
				d="M12 17C13.3807 17 14.5 15.433 14.5 13.5C14.5 11.567 13.3807 10 12 10C10.6193 10 9.5 11.567 9.5 13.5C9.5 15.433 10.6193 17 12 17Z"
				fill="#664500"
			/>
			<path
				d="M24 17C25.3807 17 26.5 15.433 26.5 13.5C26.5 11.567 25.3807 10 24 10C22.6193 10 21.5 11.567 21.5 13.5C21.5 15.433 22.6193 17 24 17Z"
				fill="#664500"
			/>
		</svg>
	);
}

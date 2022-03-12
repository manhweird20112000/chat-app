import { LoadingProps } from './loading.props';
import './style.scss';

export function Loading(props: LoadingProps) {
	const {
		background = '#ffffff99',
		color = '#2e89ff',
		fullPage = true,
		size = 50,
		border = 5,
		state
	} = props;
	if (state === 'loading') {
		return (
			<div
				className={fullPage ? 'fixed inset-0' : 'w-full h-full'}
				style={{ backgroundColor: `${background}` }}>
				<div className="w-full h-full  flex items-center justify-center">
					<div
						className="loading"
						style={{
							width: `${size}px`,
							height: `${size}px`,
							borderColor: `${color} transparent ${color} ${color}`,
							borderWidth: `${border}px`,
							borderStyle: 'solid',
						}}></div>
				</div>
			</div>
		);
	} else {
		return <></>;
	}
}

import { COLORS } from './constants';

export function ColorsPicker() {
	return (
		<div id="color-picker ">
			<div className="grid grid-cols-4 gap-4 px-10 cursor-pointer">
				{COLORS.map((item, index) => (
					<div
						key={index}
						onClick={() => console.log('set lại màu cho tin nhắn')}
						className="p-2 rounded-xl hover:bg-gray-100 flex items-center justify-center w-[60px] h-[60px]">
						<div
							style={{
								width: '45px',
								height: '45px',
								backgroundColor: item.color,
								borderRadius: '100rem',
							}}></div>
					</div>
				))}
			</div>
		</div>
	);
}

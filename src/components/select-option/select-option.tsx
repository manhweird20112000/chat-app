import { IconArrowDown } from 'assets';
import { useState } from 'react';

interface SelectOptionProps {
	label: string;
	children: React.ReactNode;
}
export function SelectOption(props: SelectOptionProps) {
	const { label, children } = props;
	const [isShow, setIsShow] = useState<Boolean>(false);
	return (
		<div>
			<div
				className="flex items-center mb-2 justify-between px-1.5 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
				onClick={() => setIsShow(!isShow)}>
				<p className="font-semibold text-sm text-black">{label}</p>
				<div>
					<IconArrowDown />
				</div>
			</div>
			{isShow && <div>{children}</div>}
		</div>
	);
}

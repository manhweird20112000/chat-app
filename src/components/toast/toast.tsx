import './style.scss';
import { Loading } from 'components';
import { IconClose, IconDanger, IconSuccess, IconWarning } from 'assets';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { setClose } from 'app/features/toast/toast-slice';

export function Toast() {
	const { content, hide, title, type } = useAppSelector((state) => state.toast);
	const dispatch = useAppDispatch();

	function renderIcon(type: string) {
		switch (type) {
			case 'success':
				return <IconSuccess size={35} color={'#4BDE97'} />;
			case 'warning':
				return <IconWarning size={35} color={'#FFB648'} />;
			case 'danger':
				return <IconDanger size={35} color={'#F26464'} />;
		}
	}

	function renderCss(type: string) {
		switch (type) {
			case 'success':
				return '#4BDE97';
			case 'warning':
				return '#FFB648';
			case 'danger':
				return '#F26464';
		}
	}

	if (hide) {
		return (
			<div className="toast absolute top-0 right-0 md:top-2 md:right-2 lg:top-2 lg:right-2 xl:top-2 xl:right-2 bg-white p-2 rounded-md w-full xl:w-[380px] lg:w-[380px] md:w-[380px]">
				{type === 'process' && (
					<div id="processing" className="flex items-center p-2">
						<div className="mr-3">
							<Loading state="loading" fullPage={false} size={30} border={3} />
						</div>
						<p className="text-lg font-medium text-[#2e89ff]">
							Đang xử lý ....
						</p>
					</div>
				)}

				{type !== 'process' && (
					<div>
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								{renderIcon(type)}
								<p
									style={{ color: renderCss(type) }}
									className={`text-base font-medium  mx-2`}>
									{title}
								</p>
							</div>
							<div
								className="cursor-pointer"
								onClick={() => dispatch(setClose())}>
								<IconClose size={35} />
							</div>
						</div>
						<p className="mt-1 ml-1 font-normal text-base text-gray-700">
							{content}
						</p>
					</div>
				)}
			</div>
		);
	} else {
		return <></>;
	}
}

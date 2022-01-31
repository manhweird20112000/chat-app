import moment from 'moment';

export function TimeLine() {
	return (
		<div className="flex justify-center items-center my-2">
			<p className="text-gray-500 text-base font-normal">
				{moment().format('HH:MM , DD') +
					' Tháng ' +
					moment().format('MM , YYYY')}
			</p>
		</div>
	);
}

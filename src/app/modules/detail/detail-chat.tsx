import { Avatar, OptionItem, SelectOption } from 'components';
import { useAppSelector } from 'hooks/hooks';

export function DetailChat() {
	const subject = useAppSelector((state) => state.chat.chatSelected);
	return (
		<div id="detail-chat" className="px-2 pt-2">
			<div className="p-1 flex justify-center items-center flex-col">
				<Avatar uri={subject.avatar} size={80} />
				<p className="mt-2 font-medium text-black text-xl">
					{subject.fullName}
				</p>
				<p className="text-sm">Hoạt động 7 giờ trước</p>
			</div>
			<div>
				<SelectOption label="Tùy chỉnh đoạn chat">
					<OptionItem label="Đổi tên" />
				</SelectOption>
			</div>
		</div>
	);
}

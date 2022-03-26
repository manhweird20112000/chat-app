import { IconColor, IconDanger, IconImage } from 'assets';
import { Avatar, OptionItem, SelectOption } from 'components';
import { useAppSelector } from 'hooks/hooks';

export function DetailChat() {
	const subject = useAppSelector((state) => state.chat.chatSelected);

	const customzie = [
		{
			label: 'Tùy chỉnh đoạn chat',
			has_child: 1,
			child: [
				{
					id: 1,
					icon: <IconColor color={subject.color} size={20} />,
					label: 'Đổi màu',
					onPress: () => console.log('say hi'),
				},
			],
		},
		{
			label: 'File phương tiện, file và liên kết',
			has_child: 1,
			child: [
				{
					id: 1,
					icon: <IconImage />,
					label: 'File phương tiện',
					onPress: () => console.log('say hi'),
				},
			],
		},
		{
			label: 'Quyền riêng tư & hỗ trợ',
			has_child: 1,
			child: [
				{
					id: 1,
					icon: <IconDanger />,
					label: 'Báo cáo',
					onPress: () => console.log('say hi'),
				},
			],
		},
	];

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
				{customzie.map((option, index) => {
					return (
						<SelectOption key={index} label={option.label}>
							{option.has_child
								? option.child?.map((item) => {
										return (
											<OptionItem
												icon={item.icon}
												key={item.id}
												label={item.label}
												onPress={item.onPress}
											/>
										);
								  })
								: ''}
						</SelectOption>
					);
				})}
			</div>
		</div>
	);
}

import { selectUser } from 'app/modules/chat/chat-slice';
import { UserChat } from 'components';
import { useAppDispath } from 'hooks/hooks';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarProps } from './sidebar.props';
import './styles.scss';

export function Sidebar(props: SidebarProps) {
	const sidebar = useRef<any>(null);
	const [loading, setLoading] = useState<Boolean>(false);
	const dispath = useAppDispath();
	const chats = [
		{
			id: 16,
			userId: 15,
			avatar:
				'https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/259962754_1262584720892476_2520426149541909923_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=2S1qphJgoMEAX9KNntF&_nc_ht=scontent.fhan3-4.fna&oh=00_AT9Q7XS2J86_qe_gI7ixsVbJ00fXDm4QmstkbZEYd6ldGw&oe=62004B98',
			fullname: 'Đinh Mạnh',
			message: 'yah...',
			read_status: 'UNREAD',
			lastUser: 15,
			username: 'manh.weird',
			online: 'ONLINE',
		},
		{
			id: 1,
			userId: 1,
			avatar:
				'https://i.pinimg.com/736x/d4/3d/01/d43d013e778016b6d0869a2973c90f5d.jpg',
			fullname: 'Thành Draw',
			message: 'Vì em so đẹp',
			read_status: 'UNREAD',
			lastUser: 15,
			username: '9t.draw',
			online: 'OFFLINE',
		},
		{
			id: 2,
			userId: 4,
			avatar: 'https://hosonhanvat.net/wp-content/uploads/2021/06/robe.jpg',
			fullname: 'H$ Robe',
			message: 'Wellcome to Hu$tlang.',
			read_status: 'READ',
			lastUser: 15,
			username: 'hs.robe',
			online: 'ONLINE',
		},
		{
			id: 3,
			userId: 5,
			avatar:
				'https://35express.org/wp-content/uploads/2021/12/tom-tat-tieu-su-ly-lich-ve-rapper-winno-35express.jpg',
			fullname: 'H$ Winno',
			message: 'Em 20.',
			read_status: 'UNREAD',
			lastUser: 15,
			username: 'hs.winno',
			online: 'OFFLINE',
		},
		{
			id: 4,
			userId: 7,
			avatar:
				'https://thegioidienanh.vn/stores/news_dataimages/anhvu/122021/05/10/5322_262040370_3047710455545386_6433576249802592095_n.jpg?rt=20211205105440',
			fullname: 'H$ VSoul',
			message: 'Nhà anh nghèo nghèo nhất khu nhà gìau.',
			read_status: 'READ',
			lastUser: 15,
			username: 'hs.vsoul',
			online: 'ONLINE',
		},
		{
			id: 5,
			userId: 8,
			avatar:
				'https://static1.dienanh.net/upload/202110/0067409c-02ea-455d-90d6-1a186531a64b.jpg',
			fullname: 'DCOD Sol7',
			message: ' 5 10 15 20',
			read_status: 'READ',
			lastUser: 15,
			username: 'sol.7',
			online: 'OFFLINE',
		},
		{
			id: 6,
			userId: 10,
			avatar:
				'https://media.thieunien.vn/resize/640x480/upload/hachi/2022/01/03/mck-bong-hoa-than-thanh-ha-anh-tuan-ngoai-hinh-trong-se-ra-sao-1-1641200398.jpg',
			fullname: 'RPT MCk',
			message: 'HNDCMM',
			read_status: 'UNREAD',
			lastUser: 15,
			username: 'rpt.mck',
			online: 'ONLINE',
		},
		{
			id: 7,
			userId: 11,
			avatar:
				'https://channel.mediacdn.vn/thumb_w/640/prupload/879/2018/08/img20180806115131434.jpg',
			fullname: 'Wean Lê',
			message: 'Một người vì em đắm say',
			read_status: 'UNREAD',
			lastUser: 15,
			username: 'wean',
			online: 'ONLINE',
		},
		{
			id: 8,
			userId: 12,
			avatar:
				'https://vnmedia.vn/file/8a10a0d36ccebc89016ce0c6fa3e1b83/8a10a0d36d961641016da40adf3508e0/012022/vie_channel_vieon_photo_rv2_12_obito_16_20220103070338.jpg',
			fullname: 'Obito',
			message: 'When you look at me.',
			read_status: 'UNREAD',
			lastUser: 15,
			username: 'youngtobie',
			online: 'ONLINE',
		},
		{
			id: 9,
			userId: 20,
			avatar:
				'https://35express.org/wp-content/uploads/2021/11/ho-so-tieu-su-cua-rapper-raf-35express.jpg',
			fullname: 'Raf',
			message: 'OK',
			read_status: 'READ',
			lastUser: 15,
			username: 'raf',
			online: 'OFFLINE',
		},
		{
			id: 56,
			userId: 122,
			avatar:
				'https://i.scdn.co/image/ab6761610000e5eb0c11e7a027e8b6cda83d6caf',
			fullname: 'Lil Wuyn',
			message: 'A B C D E F G.',
			read_status: 'UNREAD',
			lastUser: 15,
			username: 'wuyn',
			online: 'ONLINE',
		},
		{
			id: 205,
			userId: 12,
			avatar:
				'https://vnmedia.vn/file/8a10a0d36ccebc89016ce0c6fa3e1b83/8a10a0d36d961641016da40adf3508e0/012022/vie_channel_vieon_photo_rv2_12_obito_16_20220103070338.jpg',
			fullname: 'Obito',
			message: 'When you look at me.',
			read_status: 'UNREAD',
			lastUser: 15,
			username: 'youngtobie',
			online: 'ONLINE',
		},
		{
			id: 54,
			userId: 12,
			avatar:
				'https://vnmedia.vn/file/8a10a0d36ccebc89016ce0c6fa3e1b83/8a10a0d36d961641016da40adf3508e0/012022/vie_channel_vieon_photo_rv2_12_obito_16_20220103070338.jpg',
			fullname: 'Obito',
			message: 'When you look at me.',
			read_status: 'UNREAD',
			lastUser: 15,
			username: 'youngtobie',
			online: 'ONLINE',
		},
		{
			id: 58,
			userId: 12,
			avatar:
				'https://vnmedia.vn/file/8a10a0d36ccebc89016ce0c6fa3e1b83/8a10a0d36d961641016da40adf3508e0/012022/vie_channel_vieon_photo_rv2_12_obito_16_20220103070338.jpg',
			fullname: 'Obito',
			message: 'When you look at me.',
			read_status: 'UNREAD',
			lastUser: 15,
			username: 'youngtobie',
			online: 'ONLINE',
		},
	];

	const handleSelector = (user: any) => {
		dispath(
			selectUser({
				user: user.userId,
				avatar: user.avatar,
				fullname: user.fullname,
			})
		);
	};

	function handleScrollUserChat() {
		if (
			sidebar?.current.scrollTop + sidebar?.current.clientHeight >=
			sidebar?.current.scrollHeight - 20
		) {
			setLoading(true);
		}
	}

	return (
		<div
			ref={sidebar}
			id="list-user-chat"
			className="overflow-x-hidden overflow-y-auto mt-2"
			onScroll={handleScrollUserChat}>
			{chats.map((item) => (
				<Link key={item.id} to={'/chat/' + item.username}>
					<UserChat
						isOnline={item.online}
						userId={item.userId}
						fullname={item.fullname}
						message={item.message}
						read_status={item.read_status}
						lastUser={item.lastUser}
						onPress={() => handleSelector(item)}
						avatar={item.avatar}
						username={item.username}
					/>
				</Link>
			))}
			{loading && (
				<div className="text-center text-base text-gray-500 font-medium my-2">
					Đang tải ...
				</div>
			)}
		</div>
	);
}

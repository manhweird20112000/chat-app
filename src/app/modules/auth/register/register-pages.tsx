import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { IconClose } from 'assets';
import { RegisterProps } from './register.props';
import { useAppDispatch } from 'hooks/hooks';
import moment from 'moment';
import { signupAsync } from 'app/features/auth/auth-slice';
import { setError, setProcess } from 'app/features/toast/toast-slice';

export function RegisterPages(props: RegisterProps) {
	const { hideModal } = props;

	const dispatch = useAppDispatch();

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			birthday: moment(Date.now()),
			gender: '',
		},
		validationSchema: Yup.object({
			firstName: Yup.string().required(),
			lastName: Yup.string().required(),
			email: Yup.string().required().email(),
			password: Yup.string().required().min(6),
			// bithday: Yup.string().required(),
			gender: Yup.string().required().oneOf(['MALE', 'FEMALE']),
		}),

		onSubmit: (value) => {
			dispatch(setProcess());
			const payload = {
				...value,
				birthday: moment(value.birthday).format('DD-MM-YYYY'),
			};
			dispatch(signupAsync(payload)).then((res) => {
				console.log(res);
				if (res.payload.data instanceof Object) {
					hideModal();
					dispatch(
						setError({
							type: 'success',
							title: 'Thông báo',
							content: 'Đăng ký tài khoản thành công',
						})
					);
				} else {
					dispatch(
						setError({
							type: 'warning',
							title: 'Thông báo',
							content: res.payload.message,
						})
					);
				}
			});
		},
	});

	return (
		<div className="w-screen h-screen flex items-center justify-center xl:px-0 lg:px-0 md:px-0 px-5">
			<div
				className="xl:w-[432px] lg:w-[432px] md:w-[432px] w-full  bg-white rounded-lg"
				style={{ boxShadow: '2px 5px 15px 1px rgba(0, 0,0, 0.2)' }}>
				<div className="px-3 pt-2 py-1 relative">
					<p className="font-bold text-3xl">Đăng ký</p>
					<p className="text-base font-normal text-gray-500 mt-1">
						Nhanh chóng và dễ dàng
					</p>
					<div
						className="absolute top-0 right-0 cursor-pointer"
						onClick={hideModal}>
						<IconClose size={45} />
					</div>
				</div>
				<div className="h-[1px] bg-gray-200 w-full my-1"></div>
				<form
					method="post"
					onSubmit={formik.handleSubmit}
					className="px-3 py-1">
					<div className="flex items-center justify-between my-1">
						<input
							onChange={formik.handleChange}
							value={formik.values.firstName}
							type="text"
							name="firstName"
							placeholder="Họ"
							className={`w-[49%] outline-none text-md font-normal px-2 py-2 border-[1.5px] border-gray-400 rounded-md bg-gray-100 ${
								formik.errors.firstName && formik.touched.firstName
									? 'border-red-500'
									: ''
							}`}
						/>
						<input
							onChange={formik.handleChange}
							value={formik.values.lastName}
							type="text"
							name="lastName"
							placeholder="Tên"
							className={`w-[49%] outline-none text-md font-normal px-2 py-2 border-[1.5px] border-gray-400 rounded-md bg-gray-100 ${
								formik.errors.lastName && formik.touched.lastName
									? 'border-red-500'
									: ''
							}`}
						/>
					</div>
					<input
						onChange={formik.handleChange}
						value={formik.values.email}
						type="text"
						name="email"
						placeholder="Số điện thoại  hoặc email"
						className={`my-1 w-full outline-none text-md font-normal px-2 py-2 border-[1.5px] border-gray-400 rounded-md bg-gray-100 ${
							formik.errors.email && formik.touched.email
								? 'border-red-500'
								: ''
						}`}
					/>
					<input
						name="password"
						onChange={formik.handleChange}
						value={formik.values.password}
						type="password"
						placeholder="Mật khẩu mới"
						className={`my-1 w-full outline-none text-md font-normal px-2 py-2 border-[1.5px] border-gray-400 rounded-md bg-gray-100 ${
							formik.errors.password && formik.touched.password
								? 'border-red-500'
								: ''
						}`}
					/>
					{/* <div>
						<label className="text-sm text-gray-500">Sinh nhật</label>
						<div className="my-1">
							<DatePicker
								name="birthday"
								format={'DD-MM-YYYY'}
								className={`my-1 w-full outline-none text-md font-normal px-2 py-2 border-[1.5px] border-gray-400 rounded-md bg-gray-100 ${
									formik.errors.birthday && formik.touched.birthday
										? 'border-red-500'
										: ''
								}`}
								placeholder="Chọn ngày sinh nhật"
								value={formik.values.birthday}
								onChange={formik.handleChange}
							/>
						</div>
					</div> */}
					<div className="my-1">
						<label className="text-sm text-gray-500">Giới tính</label>
						<div className="grid grid-cols-3 gap-2">
							<label
								htmlFor="female"
								className="outline-none text-md font-normal border-[1.5px] border-gray-400 rounded-md py-1 px-2 flex items-center justify-between ">
								<label>Nữ</label>
								<input
									id="female"
									type="radio"
									value="FEMALE"
									name="gender"
									onChange={formik.handleChange}
								/>
							</label>
							<label
								htmlFor="male"
								className="outline-none text-md font-normal border-[1.5px] border-gray-400 rounded-md py-1 px-2 flex items-center justify-between ">
								<label>Nam</label>
								<input
									type="radio"
									value="MALE"
									name="gender"
									id="male"
									onChange={formik.handleChange}
								/>
							</label>
						</div>
					</div>
					<p className="text-xs font-normal text-gray-500 mt-3">
						Bằng cách nhấp vào Đăng ký, bạn đồng ý với
						<Link
							className="text-blue-600 cursor-pointer hover:underline"
							to={''}>
							{' '}
							Điều khoản
						</Link>
						,{' '}
						<Link
							className="text-blue-600 cursor-pointer hover:underline"
							to={''}>
							Chính sách dữ liệu
						</Link>{' '}
						và{' '}
						<Link
							className="text-blue-600 cursor-pointer hover:underline"
							to={''}>
							{' '}
							Chính sách cookie
						</Link>{' '}
						của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS
						và hủy nhận bất kỳ lúc nào.
					</p>

					<div className="my-4 flex items-center justify-center">
						<button
							type="submit"
							className="bg-green-600 text-white p-2 rounded-xl font-semibold text-base w-8/12 hover:opacity-90">
							Đăng ký
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

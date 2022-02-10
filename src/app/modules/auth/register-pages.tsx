import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

export function RegisterPages() {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			day: '',
			month: '',
			year: '',
			gender: '',
		},
		validationSchema: Yup.object({
			firstName: Yup.string().required(),
			lastName: Yup.string().required(),
			email: Yup.string().required().email(),
			password: Yup.string().required().min(6),
			day: Yup.string().required(),
			month: Yup.string().required(),
			year: Yup.string().required(),
			gender: Yup.string().required(),
		}),
		onSubmit: (value) => {
			console.log(value);
		},
	});

	return (
		<div
			style={{ background: '#f0f2f5' }}
			className="w-screen h-screen flex items-center justify-center">
			<div className="w-[432px] bg-white rounded-xl">
				<div className="px-3 pt-2 py-1">
					<p className="font-bold text-3xl">Đăng ký</p>
					<p className="text-base font-normal text-gray-500 mt-1">
						Nhanh chóng và dễ dàng
					</p>
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
							placeholder="Họ"
							className="w-[49%] outline-none text-md font-normal px-2 py-2 border-[1.5px] border-gray-400 rounded-md bg-gray-100"
						/>
						<input
							onChange={formik.handleChange}
							value={formik.values.lastName}
							type="text"
							placeholder="Tên"
							className="w-[49%] outline-none text-md font-normal px-2 py-2 border-[1.5px] border-gray-400 rounded-md bg-gray-100"
						/>
					</div>
					<input
						onChange={formik.handleChange}
						value={formik.values.email}
						type="email"
						placeholder="Số điện thoại  hoặc email"
						className="my-1 w-full outline-none text-md font-normal px-2 py-2 border-[1.5px] border-gray-400 rounded-md bg-gray-100"
					/>
					<input
						onChange={formik.handleChange}
						value={formik.values.password}
						type="password"
						placeholder="Mật khẩu mới"
						className="my-1 w-full outline-none text-md font-normal px-2 py-2 border-[1.5px] border-gray-400 rounded-md bg-gray-100"
					/>
					<div>
						<label className="text-sm text-gray-500">Sinh nhật</label>
						<div className="grid grid-cols-3 gap-1 my-1">
							<select
								onChange={formik.handleChange}
								value={formik.values.day}
								name="day"
								id="day"
								className="min-w-[33%] outline-none text-md font-normal border-[1.5px] border-gray-400 rounded-md py-1 pl-1">
								<option value="1">1</option>
							</select>
							<select
              	onChange={formik.handleChange}
                value={formik.values.month}
								name="month"
								id="day"
								className="min-w-[33%] outline-none text-md font-normal border-[1.5px] border-gray-400 rounded-md py-1 pl-1">
								<option value=""></option>
							</select>
							<select
              	onChange={formik.handleChange}
                value={formik.values.year}
								name="year"
								id="day"
								className="min-w-[33%] outline-none text-md font-normal border-[1.5px] border-gray-400 rounded-md py-1 pl-1">
								<option value=""></option>
							</select>
						</div>
					</div>
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
									checked
									name="gender"
								/>
							</label>
							<label
								htmlFor="male"
								className="outline-none text-md font-normal border-[1.5px] border-gray-400 rounded-md py-1 px-2 flex items-center justify-between ">
								<label>Nam</label>
								<input type="radio" value="MALE" name="gender" id="male" />
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

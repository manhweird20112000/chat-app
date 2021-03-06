import * as Yup from 'yup';
import { useFormik } from 'formik';
import { RegisterPages } from '../..';
import { useState } from 'react';
import { useAppDispatch } from 'hooks/hooks';
import { useHistory } from 'react-router-dom';
import { signinAsync } from 'app/features/auth/auth-slice';
import TokenService from 'utils/token-service';
import { setClose, setError, setProcess } from 'app/features/toast/toast-slice';
import _ from 'lodash';

export function LoginPage() {
	const [modalRegister, setModalRegister] = useState<Boolean>(false);
	const dispatch = useAppDispatch();
	const history = useHistory();
	const login = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().email().required(),
			password: Yup.string().required().min(6),
		}),
		onSubmit: (value) => {
			dispatch(setProcess());
			dispatch(signinAsync(value))
				.then((res) => {
					if (res.payload instanceof Object && !_.isNull(res.payload.data)) {
						TokenService.setUser(res.payload.data, 'user');
						dispatch(setClose());
						history.replace('/');
					} else {
						dispatch(
							setError({
								type: 'warning',
								title: 'Thông báo',
								content: res.payload.message,
							})
						);
					}
				})
				.catch((error) => {
					dispatch(
						setError({
							type: 'danger',
							title: 'Thông báo',
							content: 'Không thể đăng nhập lúc này.',
						})
					);
				});
		},
	});

	function hideModalRegister(): void {
		setModalRegister(!modalRegister);
	}

	return (
		<div id="auth" className="h-screen" style={{ background: '#f0f2f5' }}>
			<div className="xl:mx-auto max-w-screen-lg flex xl:items-center justify-center h-full xl:flex-row flex-col md:flex-row md:items-center">
				<div className="mx-5 my-5">
					<p className="text-blue-600 font-bold text-5xl xl:text-6xl">
						{process.env.SIGNATURE || 'faceboook'}
					</p>
					<p className="font-normal text-2xl mt-5 hidden xl:block md:block">
						{process.env.SIGNATURE || 'faceboook'} giúp bạn kết nối và chia sẻ
						với mọi người trong cuộc sống của bạn.
					</p>
				</div>
				<div className="xl:max-w-[396px] bg-white rounded-xl py-2 px-4 mx-5">
					<form onSubmit={login.handleSubmit} method="post">
						<div>
							<input
								type="text"
								name="email"
								id="email"
								onChange={login.handleChange}
								value={login.values.email}
								placeholder="Email hoặc số điện thoại"
								className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 font-medium text-lg outline-1 outline-blue-600 my-2"
							/>
							<input
								onChange={login.handleChange}
								type="password"
								name="password"
								placeholder="Mật khẩu"
								value={login.values.password}
								className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 font-medium text-lg outline-1 outline-blue-600 my-2"
							/>
							<button
								type="submit"
								className="bg-blue-500 text-white font-semibold text-xl w-full px-5 py-2 rounded-lg mt-2">
								Đăng nhập
							</button>
						</div>
					</form>
					<div className="h-[1px] bg-gray-300 my-8 "></div>
					<div className="flex items-center justify-center my-5">
						<button
							onClick={() => setModalRegister(!modalRegister)}
							className="bg-green-500 text-white px-5 py-2 rounded-lg text-lg font-semibold">
							Tạo tài khoản mới
						</button>
					</div>
				</div>
			</div>
			{modalRegister && (
				<div
					style={{ background: 'rgba(255 ,255, 255, .8)' }}
					className="fixed inset-0">
					<RegisterPages hideModal={hideModalRegister} />
				</div>
			)}
		</div>
	);
}

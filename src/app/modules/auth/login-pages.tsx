export function LoginPage() {
	return (
		<div id="auth" className="h-screen" style={{ background: '#f0f2f5' }}>
			<div className="xl:mx-auto max-w-screen-lg flex items-center justify-center h-full">
				<div className="mx-5">
					<p className="text-blue-600 font-bold text-6xl">facebook</p>
					<p className="font-normal text-2xl mt-5">
						Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
						của bạn.
					</p>
				</div>
				<div className="bg-white rounded-xl p-2 mx-5">
					<form action="" method="post">
						<div>
							<input
								type="text"
								name="email"
								id="email"
								placeholder="Email hoặc số điện thoại"
								className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 font-medium text-lg outline-1 outline-blue-600 my-2"
							/>
							<input
								type="password"
								placeholder="Mật khẩu"
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
						<button className="bg-green-500 text-white px-5 py-2 rounded-lg text-lg font-semibold">
							Tạo tài khoản mới
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
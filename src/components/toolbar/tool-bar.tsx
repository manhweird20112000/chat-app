import { IconSend } from 'assets';

export function ToolBar() {
	return (
		<div>
			<div className="w-1/4 bg-red-400"></div>
			<div className="w-9/12">
				<form className="flex items-center">
					<input
						className="bg-gray-100 text-lg mr-2 py-1.5 px-2 rounded-2xl outline-none"
						type="text"
						placeholder="Aa"
					/>
					<button
						type="submit"
						className="hover:bg-gray-100 rounded-full py-1 px-1 flex items-center justify-center">
						<IconSend size={30} color="pink" />
					</button>
				</form>

				<div></div>
			</div>
		</div>
	);
}

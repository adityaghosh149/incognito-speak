import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/appSlice";

const NavigationBar = () => {
	const username = useSelector((state) => state.app.username);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<nav className="bg-gray-800 p-4 flex justify-center items-center mb-2">
			<div className="w-full max-w-screen-lg flex justify-between items-center">
				{/* Left Section (Logo) */}
				<div className="flex items-center gap-4">
					<a href="/" className="text-white text-lg font-bold">
						IncognitoSpeak
					</a>
				</div>

				{/* Middle Section (Search Post) */}
				<div className="flex-1 px-4">
					<input
						type="text"
						placeholder="Search posts..."
						className="w-full py-2 px-4 rounded bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
					/>
				</div>

				{/* Right Section (Username or Logout) */}
				<div className="flex items-center gap-4 justify-end">
					{username !== "Guest" && (
						<>
							<span className="text-gray-300 text-base font-semibold">
								{username}
							</span>
							<button
								onClick={handleLogout}
								className="text-gray-300 hover:text-white focus:outline-none text-xs  rounded-md px-3 py-[6px] hover:bg-red-500 font-semibold"
							>
								Logout
							</button>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default NavigationBar;

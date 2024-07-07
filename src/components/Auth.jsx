/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { users } from "../data/users"; // Import temporary user data array
import { setUsername } from "../redux/appSlice";

const Auth = () => {
	const [isLogin, setIsLogin] = useState(true);
	const dispatch = useDispatch();
	const [username, setUsernameState] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleLogin = () => {
		const user = users.find(
			(user) => user.username === username && user.password === password
		);
		if (user) {
			dispatch(setUsername(user.username));
		} else {
			setError("Invalid username or password");
		}
	};

	const handleSignup = () => {
		// Check if username already exists
		const existingUser = users.find((user) => user.username === username);
		if (existingUser) {
			setError("Username already exists!");
			return;
		}

		// Add new user to the temporary array
		const newUser = { username, password };
		users.push(newUser); // Store new user in temporary array
		dispatch(setUsername(newUser.username));
	};

	const handleToggle = () => {
		setIsLogin(!isLogin);
		setUsernameState("");
		setPassword("");
		setError("");
	};

	return (
		<div className="bg-white p-4 rounded shadow">
			{isLogin ? (
				<>
					<h2 className="text-xl font-bold mb-4">Login</h2>
					{error && <p className="text-red-500 mb-4">{error}</p>}
					<input
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsernameState(e.target.value)}
						className="w-full py-2 px-4 mb-4 rounded bg-gray-200 focus:outline-none"
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full py-2 px-4 mb-4 rounded bg-gray-200 focus:outline-none"
					/>
					<button
						onClick={handleLogin}
						className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
					>
						Login
					</button>
					<p className="mt-4">
						Don't have an account?{" "}
						<button onClick={handleToggle} className="text-blue-500 underline">
							Sign up
						</button>
					</p>
				</>
			) : (
				<>
					<h2 className="text-xl font-bold mb-4">Sign Up</h2>
					{error && <p className="text-red-500 mb-4">{error}</p>}
					<input
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => {
							setUsernameState(e.target.value);
							setError(""); // Clear error message on input change
						}}
						className="w-full py-2 px-4 mb-4 rounded bg-gray-200 focus:outline-none"
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full py-2 px-4 mb-4 rounded bg-gray-200 focus:outline-none"
					/>

					<button
						onClick={handleSignup}
						className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
					>
						Sign Up
					</button>
					<p className="mt-4">
						Already have an account?{" "}
						<button onClick={handleToggle} className="text-blue-500 underline">
							Login
						</button>
					</p>
				</>
			)}
		</div>
	);
};

export default Auth;

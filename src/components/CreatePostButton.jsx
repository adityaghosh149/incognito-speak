import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/appSlice";

const CreatePostButton = () => {
	const dispatch = useDispatch();

	const handleOpenModal = () => {
		dispatch(openModal());
	};

	return (
		<div className="flex justify-center ">
			<button
				onClick={handleOpenModal}
				className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none w-full max-w-xl font-semibold"
			>
				Create Thread
			</button>
		</div>
	);
};

export default CreatePostButton;

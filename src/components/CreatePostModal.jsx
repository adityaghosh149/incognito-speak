import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import topics from "../data/topics"; // Import topics array
import { closeModal } from "../redux/appSlice";
import { addPost } from "../redux/postSlice";

const CreatePostModal = () => {
	const dispatch = useDispatch();
	const modalIsOpen = useSelector((state) => state.app.modalIsOpen);
	const username = useSelector((state) => state.app.username);
	const [newPost, setNewPost] = useState({
		username,
		time: "",
		title: "",
		topic: "",
		description: "",
		media: null,
	});

	const handleCloseModal = () => {
		dispatch(closeModal());
	};

	const handleAddPost = () => {
		console.log("new post", newPost);
		dispatch(addPost(newPost));
		setNewPost({
			username,
			time: "",
			title: "",
			topic: "",
			description: "",
			media: null,
		});
		dispatch(closeModal());
	};

	return (
		<>
			{modalIsOpen && (
				<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
					<div className="bg-white p-4 rounded shadow-md w-full max-w-md">
						<h2 className="text-xl font-bold mb-4">Create New Thread</h2>
						<select
							value={newPost.topic}
							onChange={(e) =>
								setNewPost({ ...newPost, topic: e.target.value })
							}
							className="w-full py-2 px-4 mb-4 rounded bg-gray-200 focus:outline-none"
						>
							<option value="" disabled>
								Select Topic
							</option>
							{topics.map((topic) => (
								<option key={topic} value={topic}>
									{topic}
								</option>
							))}
						</select>
						<input
							type="text"
							placeholder="Title"
							value={newPost.title}
							onChange={(e) =>
								setNewPost({ ...newPost, title: e.target.value })
							}
							className="w-full py-2 px-4 mb-4 rounded bg-gray-200 focus:outline-none"
						/>
						<textarea
							placeholder="Content"
							value={newPost.description}
							onChange={(e) =>
								setNewPost({ ...newPost, description: e.target.value })
							}
							className="w-full py-2 px-4 mb-4 rounded bg-gray-200 focus:outline-none resize-none"
							rows="4"
						/>
						<input
							type="text"
							placeholder="Media URL"
							value={newPost.media || ""}
							onChange={(e) =>
								setNewPost({ ...newPost, media: e.target.value })
							}
							className="w-full py-2 px-4 mb-4 rounded bg-gray-200 focus:outline-none"
						/>
						<div className="flex justify-end gap-4">
							<button
								onClick={handleCloseModal}
								className="py-2 px-4 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 focus:outline-none"
							>
								Cancel
							</button>
							<button
								onClick={handleAddPost}
								className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
							>
								Add Thread
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default CreatePostModal;

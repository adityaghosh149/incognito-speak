import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "../redux/postSlice";
import Post from "./Post";

const PostList = () => {
	const allPosts = useSelector(selectPosts);
	const [visiblePosts, setVisiblePosts] = useState(5); // Initial number of posts to display

	const loadMorePosts = () => {
		setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 5); // Increase by 5 posts each time
	};

	const postsToDisplay = allPosts.slice(0, visiblePosts); // Slice the array to show only visiblePosts number of posts

	return (
		<div className="max-w-xl mx-auto mt-6">
			<h2 className="text-xl font-bold mb-4 text-white">Threads</h2>
			{postsToDisplay.map((post) => (
				<Post key={post.postid} post={post} />
			))}
			{allPosts.length > visiblePosts && (
				<div className="flex justify-center mt-2 mb-10">
					<button
						className=" bg-blue-500 hover:bg-blue-700 text-white font-semibold py-[7px] px-3 rounded"
						onClick={loadMorePosts}
					>
						Load More
					</button>
				</div>
			)}
		</div>
	);
};

export default PostList;

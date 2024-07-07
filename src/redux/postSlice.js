import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import postsData from "../data/posts";

const randomSort = (array) => {
	return array.sort(() => Math.random() - 0.5);
};

const initialState = {
	posts: randomSort(postsData),
};

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		addPost(state, action) {
			const formatDateTime = () => {
				const date = new Date();

				const options = {
					hour: "2-digit",
					minute: "2-digit",
					hour12: true,
				};
				const timeString = date.toLocaleTimeString("en-US", options);

				const day = String(date.getDate()).padStart(2, "0");
				const month = String(date.getMonth() + 1).padStart(2, "0");
				const year = date.getFullYear();
				const dateString = `${day}-${month}-${year}`;

				const dateTimeString = `${timeString} ${dateString}`;
				return dateTimeString;
			};

			const newPost = {
				...action.payload,
				postid: uuidv4(),
				time: formatDateTime(),
			};
			// state.posts.push(newPost);
			console.log("new post:", newPost);
			state.posts.unshift(newPost);
		},
		removePost(state, action) {
			state.posts = state.posts.filter(
				(post) => post.postid !== action.payload
			);
		},
	},
});

export const { addPost, removePost } = postsSlice.actions;
export const selectPosts = (state) => state.posts.posts;

export default postsSlice.reducer;

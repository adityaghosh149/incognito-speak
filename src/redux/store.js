import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import postsReducer from "./postSlice";
import usersReducer from "./userSlice";

const store = configureStore({
	reducer: {
		app: appReducer,
		posts: postsReducer,
		users: usersReducer,
	},
});

export default store;

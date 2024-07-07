import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	users: [],
};

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addUser(state, action) {
			state.users.push(action.payload);
		},
	},
});

export const { addUser } = usersSlice.actions;
export const selectUsers = (state) => state.users.users;

export default usersSlice.reducer;

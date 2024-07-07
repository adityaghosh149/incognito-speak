import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	modalIsOpen: false,
	username: "Guest",
	isLoggedIn: false,
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		openModal(state) {
			state.modalIsOpen = true;
		},
		closeModal(state) {
			state.modalIsOpen = false;
		},
		setUsername(state, action) {
			state.username = action.payload;
			state.isLoggedIn = true;
		},
		logout(state) {
			state.username = "Guest";
			state.isLoggedIn = false;
		},
	},
});

export const { openModal, closeModal, setUsername, logout } = appSlice.actions;

export default appSlice.reducer;

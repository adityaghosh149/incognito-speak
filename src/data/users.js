import { v4 as uuidv4 } from "uuid";
import posts from "./posts"; // Assuming your posts array is imported from a file

const extractUsers = () => {
	const users = posts.map((post) => ({
		userid: uuidv4(),
		username: post.username,
		password: "password123",
	}));
	return users;
};

const users = extractUsers();

const otherUsers = [
	"Aditya",
	"Prathiv",
	"Safik",
	"Aashish",
	"Ankush",
	"Subhajit",
	"Swastik",
	"Srijan",
];

otherUsers.forEach((username) => {
	const user = {
		userid: uuidv4(),
		username: username,
		password: "password",
	};
	users.push(user);
});

export { users };

import { useSelector } from "react-redux";
import Auth from "./Auth"; // Import the new Auth component
import CreatePostButton from "./CreatePostButton";
import CreatePostModal from "./CreatePostModal";
import PostList from "./PostList";

const MainContent = () => {
	const isLoggedIn = useSelector((state) => state.app.isLoggedIn);

	return isLoggedIn ? (
		<>
			<CreatePostButton />
			<CreatePostModal />
			<PostList />
		</>
	) : (
		<div className="max-w-sm mx-auto mt-6">
			<Auth /> {/* Use the new Auth component */}
		</div>
	);
};

export default MainContent;

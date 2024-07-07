import { Provider } from "react-redux";
import MainContent from "./components/MainContent";
import NavigationBar from "./components/NavigationBar";
import store from "./redux/store";

const App = () => (
	<Provider store={store}>
		<div>
			<NavigationBar />
			<MainContent />
		</div>
	</Provider>
);

export default App;

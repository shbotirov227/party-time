import { BrowserRouter } from "react-router-dom";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Upcoming from "./containers/Upcoming/Upcoming";
import MakeEvent from "./containers/MakeEvent/MakeEvent";
import Blog from "./containers/Blog/Blog";
import Package from "./containers/Package/Package";
import OtherServices from "./containers/OtherServices/OtherServices";

import "./assets/index.scss";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Upcoming />
				<OtherServices />
				<MakeEvent />
				<Package />
				<Blog />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;

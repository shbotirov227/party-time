import React from 'react';
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import Upcoming from "../../containers/Upcoming/Upcoming";
import MakeEvent from "../../containers/MakeEvent/MakeEvent";
import Blog from "../../containers/Blog/Blog";
import Package from "../../containers/Package/Package";
import OtherServices from "../../containers/OtherServices/OtherServices";

const Home = () => {
	return (
		<div className="Home">
				<Header />
				<Upcoming />
				<OtherServices />
				<MakeEvent />
				<Package />
				<Blog />
				<Footer />
		</div>
	)
}

export default Home;
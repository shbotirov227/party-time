import React from 'react';
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";

import "./About.scss";

const About = () => {
	return (
		<div className="About">
			<Header />
				<div className="container">
					<h3 className="About-title">Welcome to Party time - Eventick</h3>

					<p className="About-text">
						Welcome to Party time - Eventick !


						Thank you for taking the time to visit our website and considering us to be your rental provider! We would love to partner with you for your upcoming event. Pole Tent

						Party time - Eventick humbly began in 1983. Harmoniously with our genuine passion for the industry, it has grown to be one of the largest rental companies serving the Rocky Mountain Region. With convenient  locations in both Denver and Colorado Springs, we hold the largest inventory of rentals in Colorado. So we can gladly supply to all events.

						While our passion, experience, knowledge, inventory, fleet, and staff have grown over the years, our belief that all events, no matter the size, are special and important, has remained true. Whether you are planning an intimate dinner for two or a large outdoor festival for over 10,000, you will Party Time Truckreceive one on one attention from our Tent & Event Specialists who are eager to learn more about your event and help supply you with the best and right equipment.

						We know that our clients are relying on us for a huge part of their event’s success, whether it’s traditional or out-of-the-box, we are happy to work with you and you can count on us. Our flexible rental periods, dependable delivery services, knowledgeable Installation Specialists and superior customer service are unmatched when it comes to providing a professional and worry-free rental process.
					</p>
				</div>
			<Footer />
		</div>
	)
}

export default About;
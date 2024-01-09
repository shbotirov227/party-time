import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import HeroImg2 from "../../assets/images/girls-removebg.png";

import "./Header.scss";

const Header = () => {

	return (
		<div className="Header">
			<div className="container">
				<div className="Header-navigation">
					<Link to="/"><img src={Logo} alt="logo" /></Link>
					<div>
						<Link to="/" className="Header-link">Themed events</Link>
						<Link to="/" className="Header-link">Marquee parties</Link>
						<Link to="/" className="Header-link">Special celebrations</Link>
						<Link to="tel:+998939052733" className="Header-link">Contact</Link>
						<Link to="/" className="btn-primary">Login</Link>
					</div>
				</div>

				<div className="Header-heroSection">
					<div className="Header-heroSection-left">
						<img className="Header-heroSection-img" src={HeroImg2} alt="" />
					</div>

					<div className="Header-herSection-right">
						<h2 className="Header-heroSection-title">Don't let distance get in the way... Celebrate with a Web Party!</h2>
						<p className="Header-heroSection-text">Create a personalized and interactive website to celebrate a special event for your long-distance loved one. Host a Web Party today!</p>
						<button className="btn-secondary">Get Package</button>
						<button className="btn-primary">Learn More</button>
					</div>
				</div>

				<div className="placesSection">
					<div className="placesSection-input">
						<label htmlFor="event">Search Event</label>
						<input type="text" placeholder="Event..." />
					</div>

					<div className="placesSection-input">
					<label htmlFor="place">Place</label>
						<input type="text" placeholder="Place..." />
					</div>

					<div className="placesSection-input">
						<label htmlFor="date">Time</label>
						<select name="eventTime" id="eventTime">
							<option value="anyDate">Any date</option>
							<option value="month">Month</option>
							<option value="year">Year</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header;
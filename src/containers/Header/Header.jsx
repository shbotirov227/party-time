import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
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
						<HashLink to="/#events" className="Header-link">Events</HashLink>
						<HashLink to="/#services" className="Header-link">Services</HashLink>
						<HashLink to="/#blog" className="Header-link">Blog</HashLink>
						<HashLink to="/#subscribes" className="Header-link">Subscribes</HashLink>
						<Link to="/about-us" className="Header-link">About</Link>
						<Link to="/contact" className="Header-link">Contact us</Link>
						<Link to="/signup" className="btn-primary">Sign up</Link>
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
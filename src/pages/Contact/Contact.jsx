import React from 'react';
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";

import "./Contact.scss";

const Contact = () => {
	return (
		<div className="Contact">
			<Header />

			<div className="container">
				<div className="Contact-informations">
					<div className="Contact-formSection">
						<h4 className="Contact-formSection-title">Contact Us</h4>

						<label htmlFor="name">Name</label>
						<input type="text" id="name" placeholder="Enter your name" />

						<label htmlFor="name">Email</label>
						<input type="email" name="email" id="email" placeholder="Enter a valid email address" />

						<label htmlFor="name">Message</label>
						<textarea name="textarea" id="textarea" cols="30" rows="10" placeholder="Type here..."></textarea>

						<button className="btn-secondary">Submit</button>
					</div>

					<div className="Contact-addressSection">
						<ul>
							<h4 className="addressSection-title">CALL US</h4>
							<li className="addressSection-item">1 (234) 567-891</li>
							<li className="addressSection-item">1 (234) 987-654</li>
						</ul>
						<ul>
							<h4 className="addressSection-title">LOCATION</h4>
							<li className="addressSection-item">121 Rock Sreet, 21 Avenue,New York, NY 92103-9000</li>
						</ul>
						<ul>
							<h4 className="addressSection-title">OUR TOP SERVICES</h4>
							<li className="addressSection-item">Online reservations</li>
							<li className="addressSection-item">Organizing a party</li>
							<li className="addressSection-item">Excursions and Tours</li>
						</ul>
					</div>

					<div className="Contact-mapSection">
						<iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10852.863503609116!2d69.21548027141526!3d41.282726680878476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e1!3m2!1sru!2s!4v1706069161888!5m2!1sru!2s" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					</div>

				</div>
			</div>

			<Footer />
		</div>
	)
}

export default Contact;
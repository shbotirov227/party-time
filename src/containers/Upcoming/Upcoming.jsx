import React from 'react';
import EventCard from "../../components/EventCard/EventCard";
import EventCardImg1 from "../../assets/images/eventCardImg1.jpg";
import EventCardImg2 from "../../assets/images/eventCardImg2.jpg";
import EventCardImg3 from "../../assets/images/eventCardImg3.png";
import EventCardImg4 from "../../assets/images/eventCardImg4.jpg";
import EventCardImg5 from "../../assets/images/eventCardImg5.jpg";
import EventCardImg6 from "../../assets/images/eventCardImg6.jpg";

import "./Upcoming.scss";


const Upcoming = () => {
	
	const data = [
		{
			id: 0,
			eventImg: EventCardImg6,
			eventType: "Special celebrations",
			date: "140",
			month: "USD",
			title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			text: "We’ll get you directly seated and inside for you to enjoy the show."
		},
		
		{
			id: 1,
			eventImg: EventCardImg4,
			eventType: "Entertainment",
			date: "200",
			month: "USD",
			title: "Neque, excepturi quam dicta id odio blanditiis officia ? Porro adipisci, aspernatur",
			text: "Directly seated and inside for you to enjoy the show."
		},
		
		{
			id: 2,
			eventImg: EventCardImg3,
			eventType: "Marquee parties",
			date: "130",
			month: "USD",
			title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, excepturi quam dicta id odio",
			text: "Directly seated and inside for you to enjoy the show."
		},
		
		{
			id: 3,
			eventImg: EventCardImg5,
			eventType: "Entertainment",
			date: "340",
			month: "USD",
			title: "Lorem ipsum dolor sit amet elit.Neque, excepturi quam dicta id odio",
			text: "We’ll get you directly seated and inside for you to enjoy the show."
		},
		
		{
			id: 4,
			eventImg: EventCardImg1,
			eventType: "Special celebrations",
			date: "120",
			month: "USD",
			title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			text: "We’ll get you directly seated and inside for you to enjoy the show."
		},
		
		{
			id: 5,
			eventImg: EventCardImg2,
			eventType: "Marquee parties",
			date: "320",
			month: "USD",
			title: "Neque, excepturi quam dicta id odio blanditiis officia ? Porro adipisci, aspernatur",
			text: "Directly seated and inside for you to enjoy the show."
		}
	];
	
	return (
		<div className="Upcoming container">
			<div className="Upcoming-selectSection">
				<h2 className="Upcoming-title">Current Events</h2>
				<div>
					<select name="eventDates" id="">
						<option value="weekdays">Weekdays</option>
						<option value="weekdays">Every day</option>
						<option value="weekdays">Monthly</option>
						<option value="weekdays">Yearly</option>
					</select>

					<select name="eventType" id="">
						<option value="eventType">Event Type</option>
						<option value="eventType">Special celebrations</option>
						<option value="eventType">Marquee parties</option>
						<option value="eventType">Entertainment</option>
						<option value="eventType">Themed events</option>
					</select>

					<select name="eventCategory" id="">
						<option value="eventCategory">Any Category</option>

						<option value="eventType">Special celebrations</option>
						<option value="eventType">Marquee parties</option>
						<option value="eventType">Entertainment</option>
						<option value="eventType">Themed events</option>
					</select>
				</div>
			</div>

			<div className="Upcoming-cards">
			
				{
					data.map((event) => (
						<EventCard
							value={event}
							key={event.id}
							eventImg={event.eventImg}
							eventType={event.eventType}
							title={event.title}
							text={event.text}
							date={event.date}
							month={event.month}
						/>
					))
				}
			</div>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><button className="btn-linked">Load More</button></div>
		</div>
	)
}

export default Upcoming;
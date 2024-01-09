import React from 'react';

import "./EventCard.scss";


const EventCard = ({ eventImg, title, text, date, month, eventType }) => {
	return (
		<div className="EventCard">
			<img className="EventCard-img" src={eventImg} alt="eventImg" />

			<div className="EventCard-bottom">
				<div className="dates">
					<div style={{ display: "flex" }}>
						<h4 className="EventCard-date">{date}</h4>
						<span className="EventCard-month">{month}</span>
					</div>

					<h4 className="EventCard-type">{eventType}</h4>
				</div>
				<div>
					<h3 className="EventCard-title">{title}</h3>
					<p className="EventCard-text">{text}</p>
				</div>
			</div>
		</div>
	)
}

export default EventCard;
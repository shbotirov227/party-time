import React from 'react';
import MakeEventImg from "../../assets/images/makeEventImg.png";

import "./MakeEvent.scss";

const MakeEvent = () => {
	return (
		<div className="MakeEvent">
			<div className="MakeEvent-inner container">
				<img src={MakeEventImg} alt="" />

				<div className="MakeEvent-content">
					<h3 className="MakeEvent-title">Make your own Event</h3>
					<p className="MakeEvent-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<button className="btn-secondary">Create Events</button>
				</div>
			</div>
		</div>
	)
}

export default MakeEvent;
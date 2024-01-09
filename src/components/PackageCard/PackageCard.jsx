import React from 'react';
import CheckIcon from "../../assets/images/checkIcon.png";

import "./PackageCard.scss";

const PackageCard = ({ title, items, cost }) => {
	return (
		<div className="PackageCard">
			<h4 className="PackageCard-title">{title}</h4>
			<span className="PackageCard-cost">{cost}</span>
			<button className="PackageCard-btn">Buy now</button>
			<ul className="PackageCard-items">

				{
					items.map((index, element) => (
						<div className="PackageCard-services" key={index}>
							<img className="PackageCard-img" src={CheckIcon} alt="packageCardImg" width={15} height={15} />
							<li className="PackageCard-item">{items[element]}</li>
						</div>
					))
				}
			</ul>
		</div>
	)
}

export default PackageCard;
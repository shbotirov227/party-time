import React from 'react';
import PackageCard from "../../components/PackageCard/PackageCard";

import "./Package.scss";

const Package = () => {

	const packageCardData = [
		{
			id: 0,
			title: "Bronze",
			items: [
				"Room decorations – balloons, banners",
				"Table decorations – centrepieces, gifts",
				"DJ entertainment",
				"Cold buffet"
			],
			cost: "$12 per month",
		},

		{
			id: 1,
			title: "Silver – all from Bronze package plus",
			items: [
				"Invitation design and handling",
				"Party cost clear up",
				"Live band entertainment",
				"Cold buffet and soft drinks"
			],
			cost: "$45 per month",
		},

		{
			id: 2,
			title: "Gold – all from Silver package plus",
			items: [
				"Staff in attendance to ensure complete perfection",
				"Finding guest accommodation, booking transport",
				"Live band entertainment and magician",
				"Hot and Cold buffet and soft drinks"
			],
			cost: "$75 per month",
		}
	]

	return (
		<div className="Package container">
			<h3 className="Blog-title">Pricing</h3>
			
			<div className="Package-packages">
				{
					packageCardData.map((index, el) => (
						<PackageCard
							key={packageCardData[el].id}
							title={packageCardData[el].title}
							items={packageCardData[el].items}
							cost={packageCardData[el].cost}
						/>
					))
				}
			</div>
		</div>
	)
}

export default Package;
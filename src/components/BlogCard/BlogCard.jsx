import React from 'react';

import "./BlogCard.scss";

const BlogCard = ({ image, title, text, auth }) => {
	return (
		<div className="BlogCard">
			<img className="BlogCard-img" src={image} alt="blogCardImg" />

			<div className="BlogCard-content">
				<h4 className="BlogCard-title">{title}</h4>
				<p className="BlogCard-text">{text}</p>
				<span className="BlogCard-auth">{auth}</span>
			</div>
		</div>
	)
}

export default BlogCard;
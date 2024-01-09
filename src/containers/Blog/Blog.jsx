import React from 'react';
import BlogCard from "../../components/BlogCard/BlogCard";
import BlogCardImg1 from "../../assets/images/blogCardImg1.png";
import BlogCardImg2 from "../../assets/images/blogCardImg2.png";
import BlogCardImg3 from "../../assets/images/blogCardImg3.png";

import "./Blog.scss";

const Blog = () => {
	const data = [
		{
			id: 0,
			image: BlogCardImg1,
			title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat.",
			text: "Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.",
			auth: "12 Mar - Jhon Doe"
		},

		{
			id: 1,
			image: BlogCardImg2,
			title: "Voluptatibus, placeat. Dolor eligendi ipsa itaque facilis cumque temporibus",
			text: "Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.",
			auth: "12 Mar - Jhon Doe"
		},

		{
			id: 2,
			image: BlogCardImg3,
			title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, placeat. Dolor eligendi",
			text: "Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.",
			auth: "12 Mar - Jhon Doe"
		},
	]

	return (
		<div className="Blog container">
			<h2 className="Blog-title">Blog</h2>
			<p className="Blog-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

			<div className="Blog-cards">
				{
					data.map((index, element) => (
						<BlogCard
							key={data[element].id}
							image={data[element].image}
							title={data[element].title}
							text={data[element].text}
							auth={data[element].auth}
						/>
					))
				}
			</div>

			<button className="btn-linked">Load More</button>
		</div>
	)
}

export default Blog;
import Card from "./Card";

import image1 from "../images/sweetrecipes.png";
import image2 from "../images/ec.png";
import image3 from "../images/blog-image.png";
import { FaReact, FaNodeJs, FaBootstrap, FaSass } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiNextdotjs, SiMaterialui } from "react-icons/si";

const arr = [
	{
		title: "CRUD application",
		desc: "Fullstack CRUD application - you can create, read, update and delete recipes. It is full-stack MERN application but I was mostly focused on frontend part, so it has all needed functionalities and sends request to backend. I also wanted it look good so it is styled with css modules and it is reponsive.",
		image: image1,
		alt: "image1",
		technologies: (
			<>
				<DiMongodb />
				<SiExpress />
				<FaReact />
				<FaNodeJs />
			</>
		),
		github: "https://github.com/fkozlicki/recipes-app",
		website: "https://recipe-crud-app.netlify.app/",
	},
	{
		title: "Store project",
		desc: "Fully functional eCommerce application connected with commerce.js ans Stripe, built with React and Material Design You can add and remove items from cart, fill form with shipping data and make an order using fake card number. It is a demo app so dont worry, it will not handle a real order.",
		image: image2,
		alt: "image2",
		technologies: (
			<>
				<FaReact />
				<SiMaterialui />
			</>
		),
		github: "https://github.com/fkozlicki/ecommerce-proj",
		website: "https://click-it-app.netlify.app/",
	},
	{
		title: "Blog project",
		desc: "My own personal blog application. Built using React, Next.js, MDB, Sass, GraphQL and connected to headless API - GraphCMS. It contains featured and recent posts, categories, full markdown articles, author information, comments. You can also leave a comment and contact using form.",
		image: image3,
		alt: "image3",
		technologies: (
			<>
				<FaReact />
				<SiNextdotjs />
				<FaBootstrap />
				<FaSass />
			</>
		),
		github: "https://github.com/fkozlicki/blog-app",
		website: "http://blog-app-fkozlicki.vercel.app/",
	},
];

const Portfolio = () => {
	return (
		<section className="pt-14 sm:pt-20" id="portfolio">
			<div className="text-gray-700 dark:text-white text-center mb-12">
				<h1 className="text-center font-semibold text-2xl md:text-4xl mb-1">
					Portfolio
				</h1>
				<h1 className="text-xs md:text-sm text-gray-400">
					Coś nie coś potrafię
				</h1>
			</div>
			<div className="md:max-w-screen-md xl:max-w-screen-lg m-3 sm:mx-6 md:m-auto">
				<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-7">
					{arr.map((el, idx) => (
						<Card
							key={idx}
							image={el.image}
							title={el.title}
							description={el.desc}
							alt={el.alt}
							github={el.github}
							website={el.website}
						>
							{el.technologies}
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;

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
		desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quisquam numquam aspernatur itaque facilis in ipsam vero fugiat deleniti officia?",
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
	},
	{
		title: "Store project",
		desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quisquam numquam aspernatur itaque facilis in ipsam vero fugiat deleniti officia?",
		image: image2,
		alt: "image2",
		technologies: (
			<>
				<FaReact />
				<SiMaterialui />
			</>
		),
	},
	{
		title: "Blog project",
		desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quisquam numquam aspernatur itaque facilis in ipsam vero fugiat deleniti officia?",
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

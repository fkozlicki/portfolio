import Card from "./Card";
import SectionHeader from "./SectionHeader";
import projects from "../assets";

const Portfolio = () => {
	return (
		<section className="py-16 sm:py-28 md:py-36" id="portfolio">
			<SectionHeader title={"Portfolio"} subtitle={"Coś nie coś potrafię"} />
			<div className="md:max-w-screen-md xl:max-w-screen-lg m-3 sm:mx-6 md:m-auto">
				<div className="grid justify-center md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-7">
					{projects.map((el, idx) => (
						<Card
							key={idx}
							image={el.image}
							title={el.title}
							description={el.desc}
							alt={el.alt}
							github={el.github}
							website={el.website}
							delay={el.delay}
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

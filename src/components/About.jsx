import image from "../images/about.jpg";
import SectionHeader from "./SectionHeader";
const About = () => {
	return (
		<section
			className="py-16 sm:py-28 md:py-36 dark:text-white duration-300"
			id="about"
		>
			<SectionHeader title={"O mnie"} subtitle={"Kilka słów"} />
			<div
				className="md:max-w-screen-md xl:max-w-screen-lg mx-3 sm:mx-6 md:m-auto"
				data-aos="zoom-in-up"
				data-aos-delay="500"
			>
				<div className="max-w-md md:max-w-none m-auto grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8 text-center xl:text-start items-center">
					<div className="p-4 bg-aliceblue dark:bg-navy-600 rounded-xl duration-300">
						<img className="w-full h-auto rounded-xl" src={image} alt="about" />
					</div>
					<p className="text-[15px] md:text-base md:text-lg text-center md:text-left ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
						perferendis numquam modi libero labore porro explicabo? Minima quos
						voluptate expedita corporis reiciendis, cupiditate a iusto pariatur,
						quidem, sit numquam? Magnam.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;

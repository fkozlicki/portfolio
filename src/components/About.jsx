import React from "react";

import image from "../images/about.jpg";

const About = () => {
	return (
		<section className="pt-14 sm:pt-20 dark:text-white duration-300" id="about">
			<div className="text-gray-700 dark:text-white text-center mb-12 ">
				<h1 className="text-center font-semibold text-2xl md:text-4xl mb-1">
					O mnie
				</h1>
				<h1 className="text-xs md:text-sm text-gray-400">Kilka słów</h1>
			</div>
			<div className="md:max-w-screen-md xl:max-w-screen-lg mx-3 sm:mx-6 md:m-auto">
				<div className="max-w-md md:max-w-none m-auto grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8 text-center xl:text-start items-center">
					<div className="p-4 bg-aliceblue dark:bg-navy-600 rounded-xl duration-300">
						<img className="w-full h-auto rounded-xl" src={image} alt="about" />
					</div>
					<p className="text-[15px] md:text-base md:text-lg text-center md:text-left dark:font-light">
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

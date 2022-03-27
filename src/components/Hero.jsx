import React from "react";

import heroImg from "../images/hero-img.svg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiSend } from "react-icons/bi";

const Hero = () => {
	return (
		<section
			className="flex items-center py-12 md:px-4 md:pt-0 h-screen bg-aliceblue dark:bg-navy-900 duration-300"
			id="hero"
		>
			<div className="mx-3 sm:mx-6 md:m-auto md:max-w-screen-md xl:max-w-screen-lg">
				<div className="grid grid-cols-[3fr_0.25fr] sm:grid-cols-[1fr_1fr_max-content] gap-x-4 gap-y-12 md:pt-12 items-center ">
					<a href="#!" data-mdb-ripple="true">
						<img src={heroImg} alt="img" className="w-full h-auto" />
					</a>
					<div className="self-center items-end flex flex-col gap-6 text-xl md:text-2xl lg:translate-x-20 text-gray-800">
						<a
							href="#!"
							className="hover:text-orange-600 dark:hover:text-orange-600 dark:text-white duration-300"
						>
							<FaGithub />
						</a>
						<a
							href="#!"
							className="hover:text-orange-600 dark:hover:text-orange-600 dark:text-white duration-300"
						>
							<FaLinkedin />
						</a>
						<a
							href="#!"
							className="hover:text-orange-600 dark:hover:text-orange-600 dark:text-white duration-300"
						>
							<FaTwitter />
						</a>
					</div>
					<div className="dark:text-white col-[1/3] md:col-[1/2] md:row-[1] duration-300">
						<h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-2">
							Cześć, jestem <span className="text-orange-600">Filip</span>
						</h1>
						<h2 className="text-base md:text-xl font-normal mb-2">
							Frontend Developer
						</h2>
						<p className="text-sm md:text-base font-light mb-8">
							Witaj na moim osobistym portfolio. Znajdziesz tu wszystkie
							informacje zawodowe na mój temat.
						</p>
						<a
							href="#contact"
							className="inline-flex items-center p-3 md:p-4 rounded-md  text-white text-xs md:text-base bg-navy-400 hover:bg-navy-300 dark:bg-fogra dark:hover:bg-gunmetal group duration-300"
						>
							Kontakt
							<BiSend className="ml-3 group-hover:translate-x-[35%] duration-300" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

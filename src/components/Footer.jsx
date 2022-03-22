import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="pt-16 border-t border-gray-300 dark:text-white dark:border-gray-900 bg-aliceblue dark:bg-navy-900 footer duration-300">
			<div className="flex flex-col items-center justify-center gap-6 md:max-w-screen-md xl:max-w-screen-lg md:m-auto">
				<a
					href="/"
					className="font-md hover:text-navy-400 dark:hover:text-gunmetal duration-300"
				>
					Filip
				</a>
				<div className="flex gap-6 text-xl md:text-2xl">
					<a
						href="www.github.com"
						className="hover:text-navy-400 dark:hover:text-gunmetal duration-300"
					>
						<FaGithub />
					</a>
					<a
						href="www.linkedin.com"
						className="hover:text-navy-400 dark:hover:text-gunmetal duration-300"
					>
						<FaLinkedin />
					</a>
				</div>
				<p className="mt-8 mb-4 text-xs dark:text-gray-400">&copy; Copyright</p>
			</div>
		</footer>
	);
};

export default Footer;

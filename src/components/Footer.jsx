import React from "react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="pt-16 border-t border-gray-300 dark:text-white dark:border-gray-900 bg-aliceblue dark:bg-navy-900 footer duration-300">
			<div className="flex flex-col items-center justify-center gap-6 md:max-w-screen-md xl:max-w-screen-lg md:m-auto">
				<a
					href="#hero"
					className="font-medium text-lg text-gray-600 hover:text-gray-900  dark:text-gray-400 dark:hover:text-white duration-300"
				>
					Filip
				</a>
				<div className="flex gap-6 text-lg md:text-xl text-gray-800 dark:text-white">
					<a
						href="https://github.com/fkozlicki"
						target="_blank"
						rel="noreferrer noopener"
						className="text-gray-600 hover:text-gray-900  dark:text-gray-400 dark:hover:text-white duration-300"
					>
						<FaGithub />
					</a>
					<a
						href="www.linkedin.com"
						target="_blank"
						rel="noreferrer noopener"
						className="text-gray-600 hover:text-gray-900  dark:text-gray-400 dark:hover:text-white duration-300"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://twitter.com/FKozlicki"
						target="_blank"
						rel="noreferrer noopener"
						className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white duration-300"
					>
						<FaTwitter />
					</a>
				</div>
				<p className="mt-8 mb-4 text-xs dark:text-gray-400">&copy; Copyright</p>
			</div>
		</footer>
	);
};

export default Footer;

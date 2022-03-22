import React from "react";

import { FaGithub, FaGlobe } from "react-icons/fa";

const Card = ({ image, title, description, alt, children }) => {
	return (
		<div className="flex justify-center">
			<div className="shadow-xl max-w-sm rounded-xl overflow-hidden dark:bg-navy-600 duration-300">
				<a href="#!">
					<img src={image} alt={alt} />
				</a>
				<div className="p-6 dark:text-white duration-300">
					<h5 className="text-lg md:text-xl text-gray-700 dark:text-white font-medium mb-2">
						{title}
					</h5>
					<div className="flex gap-3 mb-2 text-sm sm:text-md">{children}</div>
					<p className="text-sm md:text-base font-light mb-6">{description}</p>
					<div className="flex justify-between text-xl md:text-2xl text-gray-700 dark:text-gray-300">
						<a
							href="#!"
							className="hover:text-blue-700 dark:hover:text-violet-400 duration-300"
						>
							<FaGlobe />
						</a>
						<a
							href="#!"
							className="hover:text-blue-700 dark:hover:text-violet-400 duration-300"
						>
							<FaGithub />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;

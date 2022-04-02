import React from "react";

import { FaGithub, FaGlobe } from "react-icons/fa";

const Card = ({
	image,
	title,
	description,
	alt,
	children,
	website,
	github,
}) => {
	return (
		<div className="flex flex-wrap shadow-xl max-w-sm rounded-xl overflow-hidden dark:bg-navy-600 duration-300">
			<div className="grow shrink flex-basis-full">
				<a
					href="#!"
					className="block overflow-hidden relative after:w-full after:h-full after:absolute after:bg-black/25 after:top-0 group"
				>
					<img
						src={image}
						alt={alt}
						className="group-hover:scale-110 duration-300"
					/>
				</a>
				<div className="p-6 dark:text-white duration-300">
					<h5 className="text-lg md:text-xl text-gray-700 dark:text-white font-medium mb-2">
						{title}
					</h5>
					<div className="flex gap-3 mb-2 text-sm sm:text-md">{children}</div>
					<p className="text-sm md:text-base dark:font-extralight">
						{description}
					</p>
				</div>
			</div>
			<div className="grow shrink basis-full self-end flex justify-between px-6 pb-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300">
				<a
					href={website}
					target="_blank"
					rel="noreferrer noopener"
					className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white duration-300"
				>
					<FaGlobe />
				</a>
				<a
					href={github}
					target="_blank"
					rel="noreferrer noopener"
					className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white duration-300"
				>
					<FaGithub />
				</a>
			</div>
		</div>
	);
};

export default Card;

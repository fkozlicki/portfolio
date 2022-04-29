import { useState, useEffect } from "react";
import Link from "./Link";
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
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [width]);

	return (
		<div className="flex flex-wrap shadow-xl max-w-sm rounded-xl overflow-hidden dark:bg-navy-600 duration-300">
			<div className="grow shrink flex-basis-full">
				<div className="overflow-hidden relative after:w-full after:h-full after:absolute after:bg-black/25 after:top-0 group">
					<img
						src={image}
						alt={alt}
						className="group-hover:scale-110 duration-300"
						width={1680}
						height={1050}
					/>
				</div>
				<div className="p-6 dark:text-white duration-300">
					<h1 className="text-lg md:text-xl text-gray-700 dark:text-white font-medium mb-2">
						{title}
					</h1>
					<div className="flex gap-3 mb-2 text-sm sm:text-md">{children}</div>
					<p className="text-sm md:text-base dark:font-extralight">
						{description}
					</p>
				</div>
			</div>
			<div className="grow shrink basis-full self-end flex justify-between px-6 pb-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300">
				<Link href={website} label="website">
					<FaGlobe aria-hidden="true" />
				</Link>
				<Link href={github} label="website">
					<FaGithub aria-hidden="true" />
				</Link>
			</div>
		</div>
	);
};

export default Card;

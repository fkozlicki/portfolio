import Link from "./Link";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiSend } from "react-icons/bi";

const Hero = () => {
	return (
		<header
			className="flex items-center h-screen bg-aliceblue dark:bg-navy-900 duration-300"
			id="hero"
		>
			<div className="mx-3 sm:mx-6 md:m-auto md:max-w-screen-md xl:max-w-screen-lg">
				<div
					className="grid grid-cols-[3fr_0.25fr] sm:grid-cols-[1fr_1fr_max-content] gap-x-4 gap-y-12 md:pt-12 items-center"
					data-aos="fade-up"
				>
					<img
						src="/images/hero-img.svg"
						alt="hero illustration"
						width={786}
						height={572}
					/>
					<div className="self-center items-end flex flex-col gap-6 text-lg md:text-xl lg:translate-x-20 text-gray-800">
						<Link href="https://github.com/fkozlicki" label="Github">
							<FaGithub aria-hidden="true" />
						</Link>
						<Link
							href="https://www.linkedin.com/in/fkozlicki/"
							label="LinkedIn"
						>
							<FaLinkedin aria-hidden="true" />
						</Link>
						<Link href="https://twitter.com/FKozlicki" label="Twitter">
							<FaTwitter aria-hidden="true" />
						</Link>
					</div>
					<div className="dark:text-white col-[1/3] md:col-[1/2] md:row-[1] duration-300">
						<h1 className="text-3xl lg:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200 font-semibold mb-2">
							Cześć, jestem <span className="text-orange-600">Filip</span>
						</h1>
						<h2 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300 mb-2">
							Frontend Developer
						</h2>
						<p className="text-sm md:text-base text-gray-600 dark:font-light dark:text-gray-400 mb-8">
							Witaj na moim osobistym portfolio. Znajdziesz tu projekty, którymi
							chcę się pochwalić oraz informacje na mój temat.
						</p>
						<a
							href="#contact"
							className="inline-flex items-center p-3 md:p-4 rounded-md text-white text-sm md:text-base bg-navy-400 hover:bg-navy-300 dark:bg-fogra dark:hover:bg-gunmetal group duration-300"
						>
							Kontakt
							<BiSend className="ml-3 group-hover:translate-x-[35%] duration-300" />
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Hero;

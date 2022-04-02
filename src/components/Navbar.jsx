import React, { useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { FaUserAlt, FaEnvelope } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";

document.addEventListener("scroll", () => {
	if (
		window.scrollY >=
		document.body.offsetHeight -
			document.documentElement.clientHeight -
			document.querySelector(".footer").offsetHeight +
			210
	) {
		document.querySelector(".navbar").classList.remove("top-[90%]");
		document.querySelector(".navbar").classList.add("top-[65%]");
	} else {
		document.querySelector(".navbar").classList.add("top-[90%]");
		document.querySelector(".navbar").classList.remove("top-[65%]");
	}
});

const Navbar = () => {
	const [darkTheme, setDarkTheme] = useState(false);

	return (
		<nav className="fixed top-[90%] left-[50%] translate-x-[-50%] flex bg-navy-400/[80%] dark:bg-fogra/[90%] md:bg-transparent md:dark:bg-transparent navbar md:absolute md:top-0 md:w-full md:max-w-screen-md xl:max-w-screen-lg md:py-6 md:px-4 md:border-b border-gray-300 dark:border-gray-600 rounded-full overflow-hidden md:rounded-none backdrop-blur-sm z-50 dark:text-white duration-300">
			<a
				href="/"
				className="hidden md:block text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white duration-300"
			>
				Filip
			</a>
			<ul className="gap-4 uppercase ml-auto hidden md:flex font-medium">
				<li>
					<a
						href="#about"
						className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white duration-300"
					>
						O mnie
					</a>
				</li>
				<li>
					<a
						href="#portfolio"
						className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white duration-300"
					>
						Portfolio
					</a>
				</li>
				<li>
					<a
						href="#contact"
						className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white duration-300"
					>
						Kontakt
					</a>
				</li>
			</ul>
			<ul className="inline-flex items-center justify-between md:hidden text-white">
				<li>
					<a
						href="#hero"
						className="block p-4"
						data-mdb-ripple="true"
						data-mdb-ripple-color="light"
					>
						<AiFillHome />
					</a>
				</li>
				<li>
					<a
						href="#about"
						className="block p-4"
						data-mdb-ripple="true"
						data-mdb-ripple-color="light"
					>
						<FaUserAlt />
					</a>
				</li>
				<li>
					<a
						href="#portfolio"
						className="block p-4"
						data-mdb-ripple="true"
						data-mdb-ripple-color="light"
					>
						<BsBriefcaseFill />
					</a>
				</li>
				<li>
					<a
						href="#contact"
						className="block p-4"
						data-mdb-ripple="true"
						data-mdb-ripple-color="light"
					>
						<FaEnvelope />
					</a>
				</li>
			</ul>

			<button
				className="py-2 px-4 my-2 md:p-0 md:m-0 md:ml-4 border-l border-gray-300/50 md:border-0 text-white md:text-black md:dark:text-white"
				type="button"
				onClick={() => {
					setDarkTheme(!darkTheme);
					document.documentElement.classList.toggle("dark");
				}}
			>
				{darkTheme ? (
					<BiSun className="md:text-gray-500 md:hover:text-black md:dark:text-gray-400 md:dark:hover:text-white duration-300" />
				) : (
					<BiMoon className="md:text-gray-500 md:hover:text-black md:dark:text-gray-400 md:dark:hover:text-white duration-300" />
				)}
			</button>
		</nav>
	);
};

export default Navbar;

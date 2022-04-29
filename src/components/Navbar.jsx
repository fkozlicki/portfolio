import React, { useState, useEffect } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { FaUserAlt, FaEnvelope } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";

const Navbar = () => {
	const [darkTheme, setDarkTheme] = useState(false);

	useEffect(() => {
		localStorage.theme === "dark" ? setDarkTheme(true) : setDarkTheme(false);
	}, []);

	useEffect(() => {
		darkTheme
			? document.documentElement.classList.add("dark")
			: document.documentElement.classList.remove("dark");
	}, [darkTheme]);

	window.addEventListener("scroll", () => {
		const point =
			document.body.scrollHeight -
			document.querySelector("header").offsetHeight -
			document.querySelector("footer").offsetHeight +
			64;

		if (window.scrollY > point) {
			document.querySelector("nav").classList.add("bottom-[25%]");
		} else {
			document.querySelector("nav").classList.remove("bottom-[25%]");
		}
	});

	return (
		<nav
			className="fixed bottom-[2%] left-[50%] translate-x-[-50%] bg-navy-400/[80%] dark:bg-fogra/[80%] border-gray-300 dark:border-gray-800 rounded-full backdrop-blur-sm z-50 duration-300 dark:text-white md:rounded-none 
		md:backdrop-blur-0 md:bg-aliceblue md:dark:bg-navy-900 md:w-full md:bottom-[unset] md:py-6 md:px-4 md:border-b"
		>
			<div className="flex md:max-w-screen-md xl:max-w-screen-lg m-auto">
				{/* DESKTOP */}
				<a
					href="/"
					className="hidden md:block text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white duration-300"
				>
					Filip
				</a>
				{/* DESKTOP */}
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
				{/* MOBILE */}
				<ul className="inline-flex items-center justify-between md:hidden text-white">
					<li>
						<a
							href="#hero"
							className="block p-4"
							data-mdb-ripple="true"
							data-mdb-ripple-color="light"
							aria-label="Home"
						>
							<AiFillHome aria-hidden="true" />
						</a>
					</li>
					<li>
						<a
							href="#about"
							className="block p-4"
							data-mdb-ripple="true"
							data-mdb-ripple-color="light"
							aria-label="O mnie"
						>
							<FaUserAlt aria-hidden="true" />
						</a>
					</li>
					<li>
						<a
							href="#portfolio"
							className="block p-4"
							data-mdb-ripple="true"
							data-mdb-ripple-color="light"
							aria-label="Portfolio"
						>
							<BsBriefcaseFill aria-hidden="true" />
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="block p-4"
							data-mdb-ripple="true"
							data-mdb-ripple-color="light"
							aria-label="Kontakt"
						>
							<FaEnvelope aria-hidden="true" />
						</a>
					</li>
				</ul>

				<button
					className="py-2 px-4 my-2 md:p-0 md:m-0 md:ml-4 border-l border-gray-300/50 md:border-0 text-white md:text-black md:dark:text-white"
					type="button"
					aria-label="Zmień motyw"
					onClick={() => {
						setDarkTheme(!darkTheme);
						darkTheme
							? (localStorage.theme = "light")
							: (localStorage.theme = "dark");
					}}
				>
					{darkTheme ? (
						<BiSun
							aria-hidden="true"
							className="md:text-gray-500 md:hover:text-black md:dark:text-gray-400 md:dark:hover:text-white duration-300"
						/>
					) : (
						<BiMoon
							aria-hidden="true"
							className="md:text-gray-500 md:hover:text-black md:dark:text-gray-400 md:dark:hover:text-white duration-300"
						/>
					)}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;

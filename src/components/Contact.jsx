import React from "react";

import { BiSend } from "react-icons/bi";

const Contact = () => {
	return (
		<section className="py-14 sm:py-20" id="contact">
			<div className="text-gray-700 dark:text-white text-center mb-12 duration-300">
				<h1 className="text-center font-semibold text-2xl md:text-4xl mb-1">
					Kontakt
				</h1>
				<h1 className="text-xs md:text-sm text-gray-400">
					Chętna/y do współpracy. Pisz śmiało!
				</h1>
			</div>
			<div className="m-auto max-w-md sm:max-w-lg lg:max-w-2xl">
				<form action="/" className="mx-3 sm:mx-6">
					<div className="flex flex-wrap gap-5 p-4 mb-4 bg-navy-400 dark:bg-navy-600 text-sm md:text-base rounded-lg duration-300">
						<div className="flex flex-col p-3 bg-white bg-aliceblue2 dark:bg-navy-500 flex-[100%] lg:flex-1 rounded duration-300">
							<label className="text-gray-400 mb-1" htmlFor="name">
								Imię
							</label>
							<input
								className="w-full outline-none bg-transparent dark:text-white"
								type="text"
								id="name"
							/>
						</div>
						<div className="flex flex-col p-3 bg-white bg-aliceblue2 dark:bg-navy-500 flex-[100%] lg:flex-1 rounded duration-300">
							<label className=" text-gray-400 mb-2" htmlFor="email">
								Email
							</label>
							<input
								className="w-full outline-none bg-transparent dark:text-white "
								type="email"
								id="email"
							/>
						</div>
						<div className="flex flex-col p-3 bg-white bg-aliceblue2 dark:bg-navy-500 flex-[100%] rounded duration-300">
							<label className="text-gray-400 mb-2" htmlFor="content">
								Wiadomość
							</label>
							<textarea
								rows="8"
								cols="10"
								className="w-full outline-none bg-transparent dark:text-white"
								type="text"
								id="content"
							/>
						</div>
					</div>
					<button className="inline-flex items-center p-3 md:p-4 rounded-md  text-white text-sm md:text-base bg-navy-400 hover:bg-navy-300 dark:bg-fogra dark:hover:bg-gunmetal group duration-300">
						Wyślij
						<BiSend className="ml-3 group-hover:translate-x-[35%] duration-300" />
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;

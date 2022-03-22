import bs from "../images/bs.svg";
import css from "../images/css.svg";
import sass from "../images/sass.svg";
import html from "../images/html.svg";
import git from "../images/git.svg";
import tw from "../images/tw.svg";
import react from "../images/react.svg";
import js from "../images/js.svg";
/* import github from "../images/github.svg";
import next from "../images/next.svg";
import ts from "../images/ts.svg";
import vscode from "../images/vscode.svg"; */

const logos = [react, bs, css, sass, html, git, tw, js];

const Technologies = () => {
	return (
		<section className="pt-14 sm:pt-20">
			<div className="text-gray-700 dark:text-white text-center mb-12 duration-300">
				<h1 className="text-center font-semibold text-2xl md:text-4xl mb-1">
					Technologie
				</h1>
				<h1 className="text-xs md:text-sm text-gray-400">
					Z czego kożystam na co dzień
				</h1>
			</div>
			<div className="flex flex-wrap justify-center md:justify-between align-center gap-4 md:max-w-screen-md xl:max-w-screen-lg mx-3 sm:mx-6 md:m-auto">
				{logos.map((logo, idx) => (
					<div key={idx}>
						<img
							className="w-5/6 w-16 sm:w-20 p-3 bg-aliceblue dark:bg-navy-600 rounded-xl hover:grayscale duration-300"
							src={logo}
							alt={idx}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Technologies;

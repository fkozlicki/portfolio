import bs from "../images/bs.svg";
import css from "../images/css.svg";
import sass from "../images/sass.svg";
import html from "../images/html.svg";
import git from "../images/git.svg";
import tw from "../images/tw.svg";
import react from "../images/react.svg";
import js from "../images/js.svg";
import SectionHeader from "./SectionHeader";
/* import github from "../images/github.svg";
import next from "../images/next.svg";
import ts from "../images/ts.svg";
import vscode from "../images/vscode.svg"; */

const logos = [react, bs, css, sass, html, git, tw, js];

const Technologies = () => {
	return (
		<section className="py-16 sm:py-28 md:py-36">
			<SectionHeader
				title={"Technologie"}
				subtitle={"Z czego kożystam na co dzień"}
			/>
			<div className="flex flex-wrap justify-center md:justify-between align-center gap-4 md:max-w-screen-md xl:max-w-screen-lg mx-3 sm:mx-6 md:m-auto">
				{logos.map((logo, idx) => (
					<div
						key={idx}
						data-aos="fade-left"
						data-aos-delay={`${100 + 150 * idx}`}
					>
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

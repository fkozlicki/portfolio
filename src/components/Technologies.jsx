import SectionHeader from "./SectionHeader";

const logos = [
	"react.svg",
	"js.svg",
	"html.svg",
	"css.svg",
	"sass.svg",
	"tw.svg",
	"bs.svg",
	"git.svg",
	"vscode.svg",
];

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
						className="p-2 bg-aliceblue dark:bg-navy-600 rounded-lg"
						key={idx}
					>
						<img
							className="grayscale hover:grayscale-0 duration-300"
							src={`/images/logos/${logo}`}
							alt={idx}
							width={48}
							height={48}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Technologies;

import SectionHeader from "./SectionHeader";
const About = () => {
	return (
		<section
			className="py-16 sm:py-28 md:py-36 dark:text-white duration-300"
			id="about"
		>
			<SectionHeader title={"O mnie"} subtitle={"Kilka słów"} />
			<div className="mx-3 sm:mx-6 md:m-auto max-w-screen-md md:max-w-screen-lg">
				<div className="grid justify-items-center gap-y-10 gap-x-16 md:grid-cols-2 items-center">
					<img
						className="md:w-60 rounded-xl bg-aliceblue dark:bg-navy-600 duration-300"
						src="/images/me.webp"
						alt="about"
						width={170}
						height={300}
					/>

					<p className="text-[15px] md:text-base text-center md:text-left dark:font-extralight">
						Cześć! Jestem Filip, mam 20 lat i jestem studentem pierwszego roku
						informatyki na UMCS'ie. Front-endu uczę się samemu i aktualnie
						jestem na etapie rozwijania umiejętności budowania aplikacji
						webowych przy użyciu nowoczesnych narzędzi. Sprawdź i oceń co
						potrafię ↓
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;

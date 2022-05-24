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
						Nazywam się Filip Koźlicki, mam 20 lat i jestem początkującym
						programistą. Piszę proste strony i aplikacje internetowe w React'ie.
						Programowaniem interesuję się od dawna, natomiast frontendu uczę się
						od roku. Aktualnie skupiam się na rozwijaniu umiejętności oraz
						poznawaniu nowych techologii. Sprawdź i oceń co potrafię.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;

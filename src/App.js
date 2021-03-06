import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
	Navbar,
	Hero,
	About,
	Technologies,
	Portfolio,
	Contact,
	Footer,
	ScrollBtn,
} from "./components";

function App() {
	useEffect(() => {
		Aos.init({ duration: 1500, once: true });
	}, []);

	return (
		<>
			<Navbar />
			<Hero />
			<main className="md:px-4 bg-powder dark:bg-navy-700 duration-300 overflow-hidden">
				<About />
				<Technologies />
				<Portfolio />
				<Contact />
			</main>
			<Footer />
			<ScrollBtn />
		</>
	);
}

export default App;

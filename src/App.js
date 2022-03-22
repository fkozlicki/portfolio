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
	return (
		<>
			<header>
				<Navbar />
				<Hero />
			</header>
			<main className="md:px-4 bg-powder dark:bg-navy-700 duration-300">
				<About />
				<Technologies />
				<Portfolio />
				<Contact />
			</main>
			<ScrollBtn />
			<Footer />
		</>
	);
}

export default App;

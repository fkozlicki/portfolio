import { FaReact, FaNodeJs, FaBootstrap, FaSass } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import {
	SiExpress,
	SiNextdotjs,
	SiMaterialui,
	SiTypescript,
} from "react-icons/si";

const projects = [
	{
		title: "Ulubiony film",
		desc: "Aplikacja z funkcjami CRUD, komunikująca się z bazą danych poprzez REST API. Użytkownik może odczytywać, dodawać, usuwać i aktualizować swoje ulubione filmy.",
		image: "/images/favourite-movies.webp",
		alt: "",
		technologies: (
			<>
				<DiMongodb />
				<SiExpress />
				<FaReact />
				<FaNodeJs />
				<SiTypescript />
			</>
		),
		github: "https://github.com/fkozlicki/favourite-movie",
		website: "https://favourite-movie-client.vercel.app/",
	},
	{
		title: "Click.it",
		desc: "Aplikacja sklepu internetowego połączona z CommerceJS i Stripe. Użytkownik może dodawać/usuwać przedmioty z koszyka oraz składać zamówienia po uzupełnieniu danych kontaktowych.",
		image: "/images/ec.webp",
		alt: "",
		technologies: (
			<>
				<FaReact />
				<SiMaterialui />
			</>
		),
		github: "https://github.com/fkozlicki/ecommerce-proj",
		website: "https://click-it-app.netlify.app/",
	},
	{
		title: "Blog",
		desc: "Mój osobisty blog zarządzany przez GraphCMS, zbudowany przy użyciu Next.js oraz GraphQL. Zawiera moje własne artykuły, kategorie, daty publikacji oraz komentarze, które może opublikować każdy użytkownik.",
		image: "/images/blog.webp",
		alt: "",
		technologies: (
			<>
				<FaReact />
				<SiNextdotjs />
				<FaBootstrap />
				<FaSass />
			</>
		),
		github: "https://github.com/fkozlicki/blog-app",
		website: "http://blog-app-fkozlicki.vercel.app/",
	},
];
export default projects;

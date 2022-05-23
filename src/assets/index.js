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
		desc: "Aplikacja fullstack z funkcjonalnościami CRUD - użytkownik może tworzyć, czytać, aktualizować oraz usuwać swoje ulubione filmy. Do jej zbudowania użyłem MongoDB, ExpressJS, React i NodeJS. W pełni funkcjonalna, responsywna z przyjemnym dla oka interfejsem.",
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
		desc: "W pełni funkcjonalne i responsywne demo aplikacji sklepu internetowego połączona z CommerceJS i Stripe, zbudowana w React przy użyciu Material Design. Użytkownik może dodawać/usuwać przedmioty z koszyka oraz składać zamówienia przy użyciu formularza.",
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
		desc: "Mój osobisty blog zbudowany przy użyciu React'a, Next.js, MDB, Sass, GraphQL oraz połączony z API - GraphCMS. Zawiera moje własne artykuły, kategorie, informacje o autorze, daty publikacji oraz komentarze, które może opublikować każdy użytkownik.",
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

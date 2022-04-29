import { FaReact, FaNodeJs, FaBootstrap, FaSass } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiNextdotjs, SiMaterialui } from "react-icons/si";

const projects = [
	{
		title: "Aplikacja CRUD",
		desc: "Aplikacja fullstack z funkcjonalnościami CRUD - użytkownik może tworzyć, czytać, aktualizować oraz usuwać przepisy. Do jej zbudowania użyłem MongoDB, ExpressJS, React i NodeJS. W pełni funkcjonalna, responsywna z przyjemnym dla oka interfejsem.",
		image: "/images/sweetrecipes.webp",
		alt: "image1",
		technologies: (
			<>
				<DiMongodb />
				<SiExpress />
				<FaReact />
				<FaNodeJs />
			</>
		),
		github: "https://github.com/fkozlicki/recipes-app",
		website: "https://recipe-crud-app.netlify.app/",
	},
	{
		title: "Sklep Online",
		desc: "W pełni funkcjonalne i responsywne demo aplikacji sklepu internetowego połączona z CommerceJS i Stripe, zbudowana w React przy użyciu Material Design. Użytkownik może dodawać/usuwać przedmioty z koszyka oraz składać zamówienia przy użyciu formularza.",
		image: "/images/ec.webp",
		alt: "image2",
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
		image: "/images/blog-image.webp",
		alt: "image3",
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

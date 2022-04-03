import image1 from "../images/sweetrecipes.png";
import image2 from "../images/ec.png";
import image3 from "../images/blog-image.png";
import { FaReact, FaNodeJs, FaBootstrap, FaSass } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiNextdotjs, SiMaterialui } from "react-icons/si";

const projects = [
	{
		title: "Aplikacja CRUD",
		desc: "Aplikacja fullstack z funkcjonalnościami CRUD - użytkownik może tworzyć, czytać, aktualizować oraz usuwać przepisy. Do jej zbudowania użyłem MongoDB, ExpressJS, React i NodeJS. W pełni funkcjonalna, responsywna z przyjemnym dla oka interfejsem.",
		image: image1,
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
		delay: "500",
	},
	{
		title: "Sklep Online",
		desc: "W pełni funkcjonalne i responsywne demo aplikacji sklepu internetowego połączona z CommerceJS i Stripe, zbudowana w React przy użyciu Material Design. Użytkownik może dodawać/usuwać przedmioty z koszyka oraz składać zamówienia przy użyciu formularza.",
		image: image2,
		alt: "image2",
		technologies: (
			<>
				<FaReact />
				<SiMaterialui />
			</>
		),
		github: "https://github.com/fkozlicki/ecommerce-proj",
		website: "https://click-it-app.netlify.app/",
		delay: "1000",
	},
	{
		title: "Blog",
		desc: "Mój osobisty blog zbudowany przy użyciu React'a, Next.js, MDB, Sass, GraphQL oraz połączony z API - GraphCMS. Zawiera moje własne artykuły, kategorie, informacje o autorze, daty publikacji oraz komentarze, które może opublikować każdy użytkownik.",
		image: image3,
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
		delay: "1500",
	},
];
export default projects;

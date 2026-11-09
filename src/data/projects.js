import evernestImg from "../assets/images/evernest.jpg";
import geospinImg from "../assets/images/geospin.jpg";
import shopShopImg from "../assets/images/shop-shop.jpg";
import deepThoughtsImg from "../assets/images/deep-thoughts.jpg";
import buyLocalImg from "../assets/images/buy-local.jpg";
import weatherImg from "../assets/images/weather-dashboard.jpg";

// Featured projects get a large card with highlights.
// Leave `live` or `github` as null to hide that link.
export const featuredProjects = [
	{
		name: "EverNest",
		tagline: "Website for a family-run after-school center",
		image: evernestImg,
		imageAlt: "EverNest home page with a photo collage of kids doing art, music and pottery",
		live: "https://evernestedu.com",
		github: null,
		codeNote: "Private repository · code available on request",
		highlights: [
			"Full site in English, Armenian and Russian with a language switcher",
			"“Ask the Owl” AI assistant on a Vercel Edge Function using the OpenAI API, with rate limiting and topic guardrails",
			"Responsive photo gallery with optimized WebP images in several sizes",
			"Validated contact form, FAQ, program pages and a seasonal holiday theme",
		],
		tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Vercel Edge Functions", "OpenAI API"],
	},
	{
		name: "GeoSpin",
		tagline: "Explore a random country in one click",
		image: geospinImg,
		imageAlt: "GeoSpin home page with a globe and a 'Start generating countries' button",
		live: "https://country-generator-iota.vercel.app/",
		github: null,
		codeNote: "Private repository · code available on request",
		highlights: [
			"Picks a random country (optionally by region) and shows its flag, capital, population and languages",
			"Combines three APIs: REST Countries, GeoDB Cities and Open-Meteo live weather",
			"Firebase Authentication with email verification, password reset, “remember me” and auto-logout after inactivity",
			"Top cities, map view, best months to visit and a generated 5-day trip plan",
		],
		tech: ["React", "React Router", "Tailwind CSS", "Firebase Auth", "REST APIs", "Vite"],
	},
];

// Earlier projects get a compact card.
export const moreProjects = [
	{
		name: "Shop-Shop",
		description: "E-commerce store with categories, a shopping cart and order history. The cart is saved offline with IndexedDB.",
		image: shopShopImg,
		imageAlt: "Shop-Shop product listing page",
		live: null,
		github: "https://github.com/davitshirkhanyan/redux-store",
		tech: ["React", "Redux", "GraphQL", "Apollo Server", "MongoDB", "Express"],
	},
	{
		name: "Deep Thoughts",
		description: "Social app where users sign up, post their thoughts and reply to and befriend other users.",
		image: deepThoughtsImg,
		imageAlt: "Deep Thoughts feed of user posts",
		live: null,
		github: "https://github.com/davitshirkhanyan/deep-thoughts",
		tech: ["React", "MongoDB", "Express", "Node.js"],
	},
	{
		name: "Buy Local",
		description: "Marketplace where home-based sellers open a shop and list products, and buyers check out from several stores at once with Stripe.",
		team: true,
		image: buyLocalImg,
		imageAlt: "Buy Local marketplace home page",
		live: null,
		github: "https://github.com/matt-gross-27/buy-local",
		tech: ["React", "GraphQL", "MongoDB", "Express", "Stripe", "Cloudinary"],
	},
	{
		name: "Weather Dashboard",
		description: "City weather search with a 5-day forecast and saved search history.",
		image: weatherImg,
		imageAlt: "Weather Dashboard showing current weather and a 5-day forecast",
		live: "https://davitshirkhanyan.github.io/weather-dashboard/",
		github: "https://github.com/davitshirkhanyan/weather-dashboard",
		tech: ["JavaScript", "jQuery", "Bootstrap", "OpenWeather API"],
	},
];

export const skillGroups = [
	{
		title: "Front end",
		items: ["JavaScript (ES6+)", "React", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Framer Motion", "jQuery"],
	},
	{
		title: "Back end",
		items: ["Node.js", "Express", "REST APIs", "GraphQL & Apollo", "Serverless / Edge functions", "Stripe"],
	},
	{
		title: "Data & auth",
		items: ["MongoDB & Mongoose", "MySQL & Sequelize", "Firebase Auth", "IndexedDB / PWAs"],
	},
	{
		title: "Tools",
		items: ["Git & GitHub", "Vite", "Webpack", "Jest", "Vercel", "OpenAI API"],
	},
];

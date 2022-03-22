module.exports = {
	darkMode: "class",
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./src/**/*.{html,js}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		extend: {
			colors: {
				navy: {
					900: "#070721",
					800: "#0b0b23",
					700: "#0d0d26",
					600: "#17172e",
					500: "#25254b",
					400: "#112D4E",
					300: "#173D68",
				},
				aliceblue: "#DBE2EF",
				aliceblue2: "#F1F5FA",
				fogra: "#0B1B23",
				gunmetal: "#132E3C",
				powder: "#FDFAF6",
			},
		},
		screens: {
			sm: "450px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	plugins: [require("tw-elements/dist/plugin")],
};

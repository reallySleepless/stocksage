/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		require.resolve("react-widgets/styles.css"),
	],

	theme: {
		extend: {
			colors: {
				white: "#fff",
				whitesmoke: "#f8fafb",
				royalblue: {
					100: "#407bff",
					200: "rgba(64, 123, 255, 0.7)",
				},
				crimson: "#e8464c",
				darkslateblue: {
					100: "#2d56b2",
					200: "rgba(45, 86, 178, 0.7)",
				},
				cornflowerblue: {
					100: "#7aa3ff",
					200: "#4770cc",
				},
				yellowgreen: "#77b900",
				blue: "#6425fe",
				gray: {
					100: "rgba(255, 255, 255, 0.8)",
					200: "rgba(131, 131, 131, 0.5)",
				},
				lime: "#42ff00",
				red: "#ff2f2f",
			},
			spacing: {},
			fontFamily: {
				actor: "Actor",
				"readex-pro": "'Readex Pro'",
				"plus-jakarta-sans": "'Plus Jakarta Sans'",
			},
			borderRadius: {
				"8xs-4": "4.4px",
				"12xs": "1px",
				"81xl": "100px",
			},
		},
		fontSize: {
			xs: "0.75rem",
			sm: "0.875rem",
			lg: "1.125rem",
			xl: "1.25rem",
			base: "1rem",
			"9xl": "1.75rem",
			inherit: "inherit",
		},
		screens: {
			mq1300: {
				raw: "screen and (max-width: 1300px)",
			},
			mq1125: {
				raw: "screen and (max-width: 1125px)",
			},
			mq800: {
				raw: "screen and (max-width: 800px)",
			},
			mq450: {
				raw: "screen and (max-width: 450px)",
			},
		},
	},
	corePlugins: {
		preflight: false,
	},
	plugins: [require("react-widgets-tailwind")],
};

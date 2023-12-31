// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	icon: "./src/brand.svg",
	siteName: "refmathew",
	siteUrl: "https://refmathew.github.io",
	titleTemplate: "refmathew | %s",
	configureWebpack: {
		module: {
			rules: [
				// https://github.com/vuejs/pinia/issues/675
				{
					test: /\.mjs$/,
					include: /node_modules/,
					type: "javascript/auto",
				},
			],
		},
	},
};

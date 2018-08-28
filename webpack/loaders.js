module.exports = {

	//
	// Javascript Loader
	//

	JSLoader: {
		test: /\.js$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		]
	},

	//
	// CSS Loader
	//

	CSSLoader: {
		test: /\.css$/,
		use: [
			require("mini-css-extract-plugin").loader,
			{
				loader: 'css-loader',
				options: {
					importLoaders: 1
				},
			},
			{
				loader: 'postcss-loader',
				options: {
					config: {
						path: __dirname + '/postcss.config.js'
					}
				}
			}
		]
	},

	//
	// SSSLoader
	//

	SSSLoader: {
		test: /\.sss$/,
		use: [
			require("mini-css-extract-plugin").loader,
			{
				loader: 'css-loader',
				options: {
					importLoaders: 1
				},
			},
			{
				loader: 'postcss-loader',
				options: {
					config: {
						path: __dirname + '/postcss.sss.config.js'
					}
				}
			}
		]
	}
};
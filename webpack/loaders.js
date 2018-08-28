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
		test: /\.css$|\.sss$/,
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
			{
				loader: 'postcss-loader',
				options: {
					sourceMap: true,
					parser: 'subarss'
				}
			}
		]
	}
};

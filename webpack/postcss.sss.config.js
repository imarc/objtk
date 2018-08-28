module.exports = {
	sourceMap: true,
	parser: require('postcss-sugarss'),
	plugins: {
		'postcss-easy-import': {
			extensions: ['.sss']
		},
		'postcss-mixins': {

		},
		'postcss-preset-env': {
			stage: 0,
			browsers: ['last 2 versions', '> 5%'],
		},
	},
};

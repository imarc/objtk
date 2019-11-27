module.exports = prod => ({
	parser: 'sugarss',
	plugins: {
		'postcss-nested': {},
		'postcss-mixins': {},
		'postcss-property-lookup': {},
		'postcss-color-mod-function': {},
		'postcss-easy-import': {
			extensions: [
				'.sss'
			]
		},
		'postcss-preset-env': {
			stage: 0,
			browsers: [
				'last 2 versions',
				'> 5%'
			],
			features: {
				'custom-properties': false
			}
		},
		'cssnano': prod
	},
});

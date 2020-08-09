module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: ['@deepvision', '@deepvision/eslint-config/plugins/vue'],
	rules: {
		'vue/html-indent': ['error', 4],
		'vue/html-self-closing': ['error', {
			'html': {
				'void': 'never',
				'normal': 'never',
				'component': 'always'
			},
			'svg': 'never',
			'math': 'never'
		}],
		'camelcase': 'off',
		// 'no-async-promise-executor' : 'off',
		// 'no-misleading-character-class' : 'off',
		// 'no-useless-catch' : 'off'
	}
};

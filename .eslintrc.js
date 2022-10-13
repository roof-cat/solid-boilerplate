module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: ['only-warn'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
}

module.exports = {
	env: {
		es2021: true,
		browser: false,
		node: true,
	},
	extends: [
		'eslint:recommended',
		// 'airbnb-base',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'no-unused-vars': 'warn',
	},
};

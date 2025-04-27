const path = require('path');

module.exports = {
	target: 'node', // Important for Lambda environment
	mode: 'production',
	entry: {
		getProductsListHandler:
			'./services/products/handlers/getProductsListHandler.ts',
		getProductsByIdHandler:
			'./services/products/handlers/getProductsByIdHandler.ts',
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: '[name].js', // [name] will be getProductsList.js and getProductsById.js
		path: path.resolve(__dirname, 'dist/products/handlers'), // output bundled files into dist/products
		libraryTarget: 'commonjs2', // Important for Lambda
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	externals: {
		// aws-sdk is available in Lambda runtime, no need to bundle it
		'aws-sdk': 'commonjs aws-sdk',
	},
};

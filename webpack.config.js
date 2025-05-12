const path = require('path');

module.exports = {
	target: 'node', // Important for Lambda environment
	mode: 'production',
	entry: {
		getProductsListHandler:
			'./services/products/handlers/getProductsListHandler.ts',
		getProductsAvailableListHandler:
			'./services/products/handlers/getProductsAvailableListHandler.ts',
		getProductsByIdHandler:
			'./services/products/handlers/getProductsByIdHandler.ts',
		createProductHandler:
			'./services/products/handlers/createProductHandler.ts',
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
		'aws-sdk': 'commonjs aws-sdk',
	},
};

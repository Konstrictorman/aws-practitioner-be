const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
		importProductsFileHandler:
			'./services/import/handlers/importProductsFileHandler.ts',
		importFileParserHandler:
			'./services/import/handlers/importFileParserHandler.ts',
		createBatchProductHandler:
			'./services/products/handlers/createBatchProductHandler.ts',
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: '[name].js', // [name] will be getProductsList.js and getProductsById.js
		path: path.resolve(__dirname, 'dist/handlers/'), // output bundled files into dist
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
	plugins: [
		new CleanWebpackPlugin(), // Clean the dist folder before building
	],
	optimization: {
		minimize: true, // Minimize the final bundle
	},
	externals: [],
};

// webpack.populate.config.js
const path = require('path');

module.exports = {
	target: 'node',
	mode: 'production',
	entry: {
		populateProducts: './scripts/populateProducts.ts',
		populateStock: './scripts/populateStock.ts', // Your populate script
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist/scripts'),
		libraryTarget: 'commonjs2',
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
		'aws-sdk': 'commonjs aws-sdk', // AWS SDK should not be bundled
	},
};

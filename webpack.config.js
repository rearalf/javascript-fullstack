const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './frontend/app.js',
	output: {
		path: path.join(__dirname, 'backend/public'),
		filename: 'js/bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css/,
				use: [ 'style-loader', 'css-loader' ],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './frontend/index.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
			},
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		open: true,
		port: 9000,
	},
	devtool: 'source-map',
};

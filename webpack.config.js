const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ['style-loader','css-loader','sass-loader']
			},
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'svg-url-loader'],
      }
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html'
		})
	]
}
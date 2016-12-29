var webpack = require('webpack');

module.exports = {
	devtool: "source-map",
	entry:[
			"./app-client",
		  ],
	output: {
		filename: "bundle.js",
		path: __dirname + "/public",
		pubicPath: "/public/"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	}
}
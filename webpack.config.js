
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: './client/components/app.js',
  output: {
    path: require("path").resolve("./dist"),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}

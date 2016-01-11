var HtmlWebpackPlugin = require('../..');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './example.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.png$/, loader: 'file-loader' },
      { test: /\.jade$/, loader: 'jade'}
    ]
  },
  devtool: 'eval',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      favicon: 'favicon.ico',
      template: 'template.jade',
      title: 'Jade demo'
    }),
    new ExtractTextPlugin('styles.css')
  ]
};
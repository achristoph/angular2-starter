var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: "tslint"
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    contentBase: './src/public',
    historyApiFallback: true,
    stats: 'minimal'
  }
});

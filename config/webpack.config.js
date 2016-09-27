var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;
var isProd = ENV === 'build';
var isTest = ENV === 'test';

var webpackConfig = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/app.ts'
  },

  output: {
    path: './dist',
    // publicPath: '/'
  },

  plugins: [],

  module: {
    // current version is incompatible
    // preLoaders: isTest ? [] : [
    //   {
    //     test: /\.ts$/,
    //     loader: "tslint",
    //     include: [path.resolve(__dirname, 'src/app')],
    //   }
    // ],
    loaders: [
      { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] },
      { test: /\.html$/, loader: 'html' },
      { test: /\.css$/, loader: 'raw' },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      }
    ],
    postLoaders: []
  },

};

if (isProd) {
  webpackConfig.devtool = 'source-map';
  webpackConfig.plugins.push(
    // // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
    // // Only emit files when there are no errors
    // new webpack.NoErrorsPlugin(),
    //
    // // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
    // // Dedupe modules in the output
    // new webpack.optimize.DedupePlugin(),
    //
    // // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    // // Minify all javascript, switch loaders to minimizing mode
    // new webpack.optimize.UglifyJsPlugin({
    // }),
    new CopyWebpackPlugin([
      { from: './src/public' }
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  );
}
else {
  webpackConfig.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development')
    }
  }));
}

if (isTest) {
  webpackConfig.devtool = 'inline-source-map';
  // instrument only testing sources with Istanbul, covers js compiled files for now :-/
  webpackConfig.module.postLoaders.push({
    test: /\.(js|ts)$/,
    include: path.resolve('src'),
    loader: 'istanbul-instrumenter',
    exclude: [/\.spec\.ts$/, /\.e2e\.ts$/, /node_modules/]
  });
} else {
  //there's issue when using this plugin with karma, thus disabled for now. enable this for non-test env
  webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills'],
      minChunks: Infinity
    })
  );
}

//Webpack Defaults
var defaultConfig = {
  devtool: 'cheap-module-eval-source-map',
  cache: true,
  debug: true,
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    noParse: [
      path.join(__dirname, 'node_modules', 'zone.js', 'dist'),
      path.join(__dirname, 'node_modules', '@angular', 'bundles')
    ]
  },

  resolve: {
    root: [path.join(__dirname, 'src')],
    extensions: ['', '.ts', '.js']
  },

  devServer: {
    contentBase: './src/public',
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    stats: 'minimal'
  },

  node: {
    global: 1,
    crypto: 'empty',
    module: 0,
    Buffer: 0,
    clearImmediate: 0,
    setImmediate: 0
  },
};

var webpackMerge = require('webpack-merge');
module.exports = webpackMerge(defaultConfig, webpackConfig);

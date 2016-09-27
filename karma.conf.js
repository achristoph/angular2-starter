var webpackConfig = require('./config/webpack.test');

module.exports = function (config) {
  var _config = {
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    // list of files / patterns to load in the browser
    files: [
      {pattern: './config/karma-shim.js', watched: false}
    ],
    // list of files to exclude
    exclude: [],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './config/karma-shim.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      // webpack-dev-middleware configuration
      stats: 'errors-only'
    },
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'text-summary'},
        {type: 'html'}
      ]
    },
    webpackServer: {
      noInfo: true // please don't spam the console when running in karma!
    },
    // test results reporter to use
    // possible values: 'dots', 'progress', 'mocha'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'], // you can also use Chrome
    // Continuous Integration mode
    singleRun: false
  };
  config.set(_config);
};

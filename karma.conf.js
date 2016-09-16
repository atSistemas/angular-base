/**
 * @fileoverview Karma configuration object. Enables testing and coverage features
 */

var webpackConfig = require('./webpack/webpack-test');
webpackConfig.devtool = 'inline-source-map';

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    // karma only needs to know about the test bundle
    files: [
      './karma-shim.js'
    ],
    frameworks: ['jasmine'],
    plugins: [
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-typescript-preprocessor',
      'karma-coverage',
      'karma-mocha-reporter',
      'karma-remap-istanbul'
    ],
    
    preprocessors: {
      // run the bundle through the webpack and sourcemap plugins
      './karma-shim.js': ['webpack', 'sourcemap'],
      // additionally, run the bundle through coverage
      '.src/**/*.ts': ['coverage']
    },
    reporters: ["mocha", "coverage", "karma-remap-istanbul"],
    // webpack config object
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    // coverage config object
    coverageReporter: {
      dir: 'coverage/',
      reporters: [{
        type: 'json',
        dir: 'coverage',
        subdir: 'json',
        file: 'coverage-final.json'
      }]
    },
    remapIstanbulReporter: {
      src: 'coverage/json/coverage.json',
      reports: {
        lcovonly: 'coverage/json/lcov.info',
        html: 'coverage/html',
        'text': null
      },
      timeoutNotCreated: 1000, // default value
      timeoutNoMoreFiles: 1000 // default value
    },
    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    singleRun: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO
  });
};


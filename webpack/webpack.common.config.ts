import * as path from 'path';
import * as base from '../src/base';

const chalk = require('chalk');
const webpack = require('webpack');
const { DefinePlugin } = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

export const context = path.resolve(__dirname, '../');
export const mainPath = path.resolve(__dirname, '../src');
export const stylesPath = path.resolve(__dirname, '../src/app/styles');
export const appPath = path.resolve(__dirname, '../src/app');
export const aotPath = path.resolve(__dirname, '../src/app/index.aot.ts');
export const buildPath = path.resolve(__dirname, '../dist');
export const basePath = path.resolve(__dirname, '../src/base');
export const dllPath = path.resolve(__dirname, '../dist/');
export const cache = true;
export const polyfills = [
  'core-js/es6/reflect',
  'core-js/client/shim',
  'zone.js/dist/zone',
  'zone.js/dist/long-stack-trace-zone',

];
export const vendor = [
  '@angular/core',
  '@angular/http',
  '@angular/common',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@ngrx/store',
  '@ngrx/effects',
  '@ngrx/router-store',
  'angular2-template-loader',
  './src/base/imports/rx'
];

export const entry = {
  polyfills,
  vendor
};

export const plugins = [
  new DefinePlugin({
    BASE_ENVIRONMENT: JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new ProgressBarPlugin({
    format: `  [BASE] ${chalk.blue('i')} Bundling... [:bar] ${chalk.green(':percent')} (:elapsed seconds)`,
    clear: true,
    summary: false,
  }),
  new webpack.optimize.OccurrenceOrderPlugin(true),
  new AssetsPlugin({
    path: buildPath,
    filename: 'webpack-assets.json',
    prettyPrint: true
  }),
];

export const module = {
  rules: [
    {
      test: /\.ts$/,
      loaders: [
        'awesome-typescript-loader',
        'angular2-template-loader',
      ],
      exclude: [/\.(spec|e2e|d)\.ts$/]
    },
    { test: /\.json$/, loader: 'json-loader', include: [mainPath] },
    { test: /\.html/, loader: 'raw-loader', include: [mainPath] },
    { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
  ]
};

export const node = {
  global: true,
  process: true,
  Buffer: false,
  crypto: 'empty',
  module: false,
  clearImmediate: false,
  setImmediate: false,
  clearTimeout: true,
  setTimeout: true
};

export const postcss = [
  require('postcss-import')({ addDependencyTo: webpack }),
  require('postcss-cssnext')(),
  require('postcss-modules-extract-imports'),
  require('postcss-nested')(),
  require('postcss-reporter')(),
  require('postcss-url')()
];
 

export const resolve = {
  extensions: ['.js', '.ts', '.tsx', '.css'],
  alias: {
    base: path.resolve(__dirname, '../src/base')
  }
};

export const compileError = function () {
  this.plugin('done', function (stats) {
    if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') === -1) {
      base.console.error(stats.compilation.errors);
    }
  });
};
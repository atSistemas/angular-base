import * as path from 'path';
import * as base from '../src/base';
import {ENV} from "../src/base/shared/Env";

const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const chalk = require('chalk');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { ForkCheckerPlugin, TsConfigPathsPlugin} = require('awesome-typescript-loader');
const { ContextReplacementPlugin, HotModuleReplacementPlugin, DefinePlugin, DllReferencePlugin, } = require('webpack');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

export const context = path.resolve(__dirname, '../');
export const mainPath = path.resolve(__dirname, '../src');
export const appPath = path.resolve(__dirname, '../src/app');
export const aotPath = path.resolve(__dirname, '../src/app/index.aot.ts');
export const buildPath = path.resolve(__dirname, '../dist');
export const basePath = path.resolve(__dirname, '../src/base');
export const dllPath = path.resolve(__dirname, '../dist/');
export const cache = true;
export const polyfills = [
  'core-js/es6/reflect',
  'core-js/es7/reflect',
  'core-js/client/shim',
  'zone.js/dist/zone',
  'zone.js/dist/long-stack-trace-zone',
  'ts-helpers'
];
export const vendor = [
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/core',
  '@angular/common',
  '@angular/http',
  '@angular/router',
  'angular2-template-loader',
  './src/base/imports/rx'
];

export const entry = {
  polyfills: polyfills,
  vendor: vendor
};

export const output =  {
  path: buildPath,
  publicPath: '/',
  library: '[name]',
  filename: '[name].js',
  sourceMapFilename: '[name].map',
  chunkFilename: '[name].chunk.js',
};

export const plugins = [

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
  new CommonsChunkPlugin({
    name: 'polyfills',
    chunks: ['polyfills']
  }),
  // This enables tree shaking of the vendor modules
  new CommonsChunkPlugin({
    name: 'vendor',
    chunks: ['app'],
    minChunks: module => /node_modules/.test(module.resource)
  }),
  // Specify the correct order the scripts will be injected in
  new CommonsChunkPlugin({
    name: ['polyfills','vendor'].reverse()
  }),
  new DefinePlugin({
      'BASE_ENVIRONMENT': JSON.stringify(process.env.NODE_ENV)
  })
];

export const module = {
  rules : [
    {
      test: /\.ts$/,
      loaders: [
          '@angularclass/hmr-loader',
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular-router-loader'
      ],
      exclude: [/\.(spec|e2e|d)\.ts$/]
    },
    { test: /\.json$/, loader: 'json-loader', include: [mainPath] },
    { test: /\.html/, loader: 'raw-loader', include: [mainPath] },
    { test: /\.css$/, loader: 'raw-loader', include: [mainPath] }
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

export const resolve = {
  extensions: ['.js', '.ts', '.tsx', '.css'],
  alias: {
    'base': path.resolve(__dirname, '../src/base')
  }
};

export const compileError = function() {
  this.plugin('done', function(stats) {
    if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1) {
      base.console.error(stats.compilation.errors);
    }
  })
};

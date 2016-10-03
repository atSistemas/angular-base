import * as path from 'path';
import * as base from '../.base';

import environment, { isTesting } from '../server/environment';

const chalk = require('chalk');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const resolveNgRoute = require('@angularclass/resolve-angular-routes');
const { ForkCheckerPlugin, TsConfigPathsPlugin} = require('awesome-typescript-loader');
const { ContextReplacementPlugin, HotModuleReplacementPlugin, DefinePlugin, DllReferencePlugin, } = require('webpack');

export const context = path.resolve(__dirname, '../');
export const mainPath = path.resolve(__dirname, '../src');
export const appPath = path.resolve(__dirname, '../src/app');
export const buildPath = path.resolve(__dirname, '../dist');
export const basePath = path.resolve(__dirname, '../src/base');
export const polyfillsPath = require('../package.json')._packages.polyfills;
export const vendorModules = Object.keys(require('../../package.json').dependencies)
export const dllPath = path.resolve(__dirname, '../dist/dll');

export const devtool = 'cheap-module-source-map';
export const entry = {

    polyfills: [
      'zone.js/dist/zone',
      'zone.js/dist/long-stack-trace-zone',
      'ts-helpers'
    ],
    vendor:[
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/http',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      'angular2-template-loader',
      'immutable',
      'ng2-redux',
      'ng2-redux-router',
      'redux',
      'redux-observable',
      'reflect-metadata',
      'rxjs',
      'typed-immutable-record',
    ]

};

export const output =  {
    path: buildPath,
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    publicPath: '/'
};

export const plugins = [
    new ProgressBarPlugin({
      format: `[BASE] ${chalk.blue('i')} Bundling... [:bar] ${chalk.green(':percent')} (:elapsed seconds)`,
      clear: true,
      summary: false,
    }),
    new AssetsPlugin({
        path: buildPath,
        filename: 'webpack-assets.json',
        prettyPrint: true
    }),
    new DefinePlugin({
        'BASE_ENVIRONMENT': JSON.stringify(process.env.NODE_ENV)
    }),
    new TsConfigPathsPlugin(),
    new ForkCheckerPlugin(),
    //new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    //new base.webpack.CompileErrorsPlugin()
];

export const module = {
  rules : [
    {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'string-replace-loader',
        query: {
            search: '(System|SystemJS)(.*[\\n\\r]\\s*\\.|\\.)import\\((.+)\\)',
            replace: '$1.import($3).then(mod => mod.__esModule ? mod.default : mod)',
            flags: 'g'
        },
        include: [mainPath]
    },
    {
        test: /\.ts$/,
        loaders: [
            'awesome-typescript-loader',
            'angular2-template-loader'
        ],
        //exclude: isTesting ? [] : [/\.(spec|e2e|d)\.ts$/],
        include: [mainPath]
    },
    { test: /\.json$/, loader: 'json-loader', include: [mainPath] },
    { test: /\.html/, loader: 'raw-loader', include: [mainPath] },
    { test: /\.css$/, loader: 'raw-loader', include: [mainPath] }
]
};

export const resolve = {
  extensions: ['.js', '.ts', '.tsx', '.css'],
  alias: {
    'base': path.resolve(__dirname, '../src/base')
  }
}

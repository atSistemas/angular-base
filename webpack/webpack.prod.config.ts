import * as path from 'path';
import * as base from '../src/base';
import * as common from './webpack.common.config';

const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const BabiliPlugin = require("babili-webpack-plugin");

export const cache = common.cache;
export const output = common.output;
export const resolve = common.resolve;
export const context = common.context;
export const devtool = 'cheap-module-source-map';
export const entry = {
  app: [
    common.aotPath,
  ],
  polyfills: common.polyfills
};

export const module = {
  rules: [
    {
      test: /\.ts$/,
      loaders: [
        'awesome-typescript-loader',
        'angular2-template-loader',
        'angular-router-loader?loader=system&genDir=src/compiled&aot=true'
      ],
      exclude: [/\.(spec|e2e|d)\.ts$/]
    },
    { test: /\.json$/, loader: 'json-loader', include: [common.mainPath] },
    { test: /\.html/, loader: 'raw-loader', include: [common.mainPath] },
    { test: /\.css$/, loader: 'raw-loader', include: [common.mainPath] }
  ]
};

export const plugins = [
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"production"'}}),
  new AddAssetHtmlPlugin([
    { filepath: require('../dist/polyfills-manifest.json')},
    { filepath: require('../dist/vendor-manifest.json')}
  ]),
  new webpack.DllReferencePlugin({
    context: path.join(__dirname),
    manifest: require('../dist/vendor-manifest.json')
  }),
  new webpack.DllReferencePlugin({
    context: path.join(__dirname),
    manifest: require('../dist/polyfills-manifest.json')
  }),
  new CommonsChunkPlugin({
    name: 'polyfills',
    chunks: ['polyfills']
  }),
  new CommonsChunkPlugin({
    name: 'vendor',
    chunks: ['app'],
    minChunks: module => /node_modules/.test(module.resource)
  }),
  new BabiliPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
]
.concat(common.plugins);

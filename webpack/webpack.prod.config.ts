import * as path from 'path';
import * as common from './webpack.common.config';

const webpack = require('webpack');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
  rules: common.module.rules.concat([
    {
      test: /\.ts$/,
      loaders: [
        'angular-router-loader?loader=system&genDir=src/compiled&aot=true'
      ],
      exclude: [/\.(spec|e2e|d)\.ts$/]
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader',
        fallback: 'style-loader',
      }),
    },
  ] as any[])
};

export const plugins = [
  new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }),
  new AddAssetHtmlPlugin([
    { filepath: require('../dist/polyfills-manifest.json') },
    { filepath: require('../dist/vendor-manifest.json') }
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

  new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true }),
  new BabiliPlugin({}, {
    comments: false
  }),
  new webpack.NoEmitOnErrorsPlugin()
]
  .concat(common.plugins);

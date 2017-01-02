import * as base from '../.base';
import * as common from './webpack.common.config';

const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

export const cache = common.cache;
export const output = common.output;
export const resolve = common.resolve;
export const context = common.context;
export const devtool = 'cheap-module-source-map';
export const entry = {
  app: common.polyfills.concat(
    common.aotPath,
  )
};

export const module = {
  rules: [
    {
      test: /\.ts$/,
      loaders: [
        '@angularclass/hmr-loader',
        'awesome-typescript-loader',
        'angular2-template-loader',
        'angular-router-loader?loader=system&genDir=src/compiled/src/app&aot=true'
      ],
      exclude: [/\.(spec|e2e|d)\.ts$/]
    },
    { test: /\.json$/, loader: 'json-loader', include: [common.mainPath] },
    { test: /\.html/, loader: 'raw-loader', include: [common.mainPath] },
    { test: /\.css$/, loader: 'raw-loader', include: [common.mainPath] }
  ]
};

export const plugins = [
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"development"'}}),
  new webpack.HotModuleReplacementPlugin(),
  new UglifyJsPlugin({
   beautify: false,
   comments: false
 }),
  new AssetsPlugin({
      path: common.buildPath,
      filename: 'webpack-assets.json',
      prettyPrint: true
  }),
]
.concat(common.plugins);

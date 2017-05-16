import * as path from 'path';
import * as base from '../src/base';
import * as common from './webpack.common.config';

const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');

export const cache = common.cache;
export const entry = common.entry;
export const module = common.module;
export const resolve = common.resolve;
export const context = common.context;
export const devtool = 'cheap-module-source-map';

export const output =  {
  path: common.buildPath,
  publicPath: '/',
  library: '[name]',
  filename: '[name].dll.js',
};

export const plugins = [
  new webpack.DllPlugin({
    path: path.join(common.dllPath, "[name]-manifest.json"),
    name: "[name]",
  }),
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"production"'}}),
  new AssetsPlugin({
      path: common.buildPath,
      filename: 'webpack-assets.json',
      prettyPrint: true
  }),
  common.compileError
]
.concat(common.plugins);

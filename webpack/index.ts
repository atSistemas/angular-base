/// <reference path="./webpack.d.ts" />
/// <reference path="../node_modules/@types/node/index.d.ts"/>
import * as path from 'path';
import envConfig from './env-config';
import * as base from '../.base';
import { root as dllRoot } from './externals';

const webpackConfig = {

  devtool: envConfig.devtool,

  entry: envConfig.entry,

  context: path.resolve(envConfig['context'], '../'),

  plugins: envConfig.plugins,

  //postcss: envConfig.postCss,

  module: {
    preLoaders: envConfig.preLoaders,
    loaders: envConfig.loaders
  },
  
  output: {
    path: dllRoot('build'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.tsx', '.css'],
    alias: {
      'base': path.resolve(__dirname, '../src/base')
    }
  }

};

export default webpackConfig;

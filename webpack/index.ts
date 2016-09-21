import * as path from 'path';
import envConfig, { isTesting } from './env-config';
import * as base from '../.base';
import { root } from './dll';

const webpackConfig = {

  devtool: envConfig.devtool,

  entry: envConfig.entry,

  context: path.resolve(envConfig['context'], '../'),

  plugins: envConfig.plugins,

  //postcss: envConfig.postCss,

  /*tslint: {
    emitErrors: false,
    failOnHint: false,
    formattersDirectory: './node_modules/custom-tslint-formatters/formatters',
    formatter: 'grouped'
  },*/

  module: {
    rules: envConfig.rules
  },

  output: isTesting ? {} : {
    path: root('build'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css'],
    alias: {
      'base': path.resolve(__dirname, '../src/base')
    }
  }

};

export default webpackConfig;

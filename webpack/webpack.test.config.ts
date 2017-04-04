const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

import * as path from 'path';
import { appPath } from './webpack.common.config';

module.exports = {
  target: 'node',
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      base: path.resolve(__dirname, '../src/base')
    }
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['istanbul-instrumenter-loader', 'awesome-typescript-loader', 'angular2-template-loader'],
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null',
      },
      {
        test: /\.css$/,
        exclude: appPath,
        loader: 'null',
      },
      {
        test: /\.css$/,
        include: appPath,
        loader: 'raw-loader',
      },
    ],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, 
      path.resolve(__dirname, '../src')
    )
  ],
  externals: [
    nodeExternals()
  ],
  performance: {
    hints: false
  }
};

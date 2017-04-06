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
    rules: [
      {
        test: /\.ts$/,
        loaders: ['istanbul-instrumenter-loader', 'awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.ts$/,
        include: path.resolve('./src/**/*.spec.ts'),
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null-loader'
      },
      {
        test: /\.css$/,
        exclude: path.resolve('./src/app'),
        loader: 'null-loader'
      },
      {
        test: /\.css$/,
        include: path.resolve('./src/app'),
        loader: 'raw-loader'
      }
    ]
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

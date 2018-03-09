const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

import * as path from 'path';
import * as common from './webpack.common.config';
import { nodePathReplacePlugin } from '../src/base/wp-plugins/nodePathReplacePlugin';


module.exports = {
  target: 'node',
  node: common.node,

  devtool: 'cheap-module-source-map',

  resolve: common.resolve,

  module: {
    rules: [
      {
        test: /(?!spec)\.ts$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        loaders: ['istanbul-instrumenter-loader', 'ts-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.json$/,
        include: path.resolve(__dirname, '../src/app'),
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null-loader'
      },
      {
        test: /\.(scss)$/,
        exclude: [/node_modules/],
        use: [{ loader: 'raw-loader' }, { loader: 'sass-loader' }]
      },
      {
        test: /\.css$/,
        use: ['raw-loader', 'css-loader'],
      },
    ]
  },

  plugins: [
      // Workaround for angular/angular#11580
      new webpack.ContextReplacementPlugin(
          /angular(\\|\/)core(\\|\/)@angular/,
          path.resolve(__dirname, '../src'),
          {}
      ),
      new nodePathReplacePlugin()
  ],
  externals: [
    nodeExternals()
  ],
  performance: {
      hints: false
  }
};

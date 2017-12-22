const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

import * as path from 'path';
import * as common from './webpack.common.config';
import { nodePathReplacePlugin } from '../src/base/wp-plugins/nodePathReplacePlugin';


module.exports = {
  target: 'node',
  node: common.node,

  devtool: 'cheap-module-source-map',

  resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        base: path.resolve(__dirname, '../src/base')
      },
      modules: [
        path.resolve(__dirname, 'node_modules')
      ]
    },

  resolveLoader: {
      moduleExtensions: ['-loader']
  },

  module: {
      rules: [
          {
              test: /(?!spec)\.ts$/,
              loaders: ['istanbul-instrumenter-loader', 'awesome-typescript-loader', 'angular2-template-loader']
          },
          {
              test: /\.spec\.ts$/,
              loaders: [
                  {
                      loader: 'awesome-typescript-loader',
                      options: {configFileName: path.resolve(__dirname, '../tsconfig.json')}
                  }, 'angular2-template-loader'
              ]
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
              exclude: path.resolve(__dirname, '../src/app'),
              loader: 'null-loader'
          },
          {
              test: /\.css$/,
              include: path.resolve(__dirname, '../src/app'),
              loader: 'raw-loader'
          }
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

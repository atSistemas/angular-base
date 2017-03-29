import * as path from 'path';
import { appPath } from './webpack.common.config';

const nodeExternals = require('webpack-node-externals');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.ts', '.js'],
      alias: {
        'base': path.resolve(__dirname, '../src/base')
      }
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
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
   new TsConfigPathsPlugin(/* { tsconfig, compiler } */)
  ],
  externals: [
    nodeExternals(),
  ],
}

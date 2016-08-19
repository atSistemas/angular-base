import path from 'path';
import webpack from 'webpack';
import copyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { symbols, color } from '../src/base/shared/console';

const mainPath = path.resolve(__dirname, '..');
const clientPath = path.resolve(__dirname, '..', 'app','client/');

export const prodTool = 'cheap-module-source-map';

export const prodContext = path.resolve(__dirname, '../app');

export const prodPlugins = [
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('bundle.css'),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
  new copyWebpackPlugin([{ from: '../app/assets', to: 'assets' }]),
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"production"'}}),
  new webpack.optimize.UglifyJsPlugin({compressor: { warnings: false }, output: {comments: false}}),
  function(){
    this.plugin("done", function(stats){
      if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1){
        console.log('[BASE] ' + color('error', symbols.error) + stats.compilation.errors);
      }
    });
  }
];

export const prodEntries = {
  app: clientPath,
  common: [
    'react',
    'redux',
    'react-dom',
    'immutable',
    'classNames',
    'react-redux',
    'react-router',
    'isomorphic-fetch'
  ]
};

export const prodLoaders = [
  { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: /node_modules/},
  { test: /\.tsx?$/, loader: 'angular2-template-loader', exclude: /node_modules/},
  { test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/ },,
  { test: /\.css/, loader: ExtractTextPlugin.extract('style-loader',  'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:4]!postcss-loader')}
];

export const prodPostCss = function (webpack) {
  return [
    require("postcss-import")({ addDependencyTo: webpack }),
    require('postcss-modules-extract-imports'),
    require("postcss-url")(),
    require("postcss-cssnext")(),
    require('cssnano')({autoprefixer: false}),
    require("postcss-reporter")()
  ];
};

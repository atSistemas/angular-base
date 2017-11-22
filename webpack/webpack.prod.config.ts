import * as path from 'path';
import * as common from './webpack.common.config';

const webpack = require('webpack');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

export const cache = common.cache;
export const resolve = common.resolve;
export const context = common.context;
export const devtool = 'cheap-module-source-map';
export const entry = {
  app: [
    common.aotPath,
  ],
  polyfills: common.polyfills
};

export const output = {
  path: common.buildPath,
  publicPath: '/',
  library: '[name]',
  filename: '[name].[hash].js',
  sourceMapFilename: '[name].map',
  chunkFilename: '[name].[hash].chunk.js',
};

export const module = {
  rules: common.module.rules.concat([
    {
      test: /\.ts$/,
      loaders: [
        'angular-router-loader?loader=system&genDir=compiled&aot=true'
      ],
      exclude: [
        /dist/,
        /spec/,
        /server/,
        /webpack/,
        /node_modules/
      ]},
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: ['style-loader'],
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: true,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => common.postcss
            }
          }
        ]
      }),
    },
  ] as any[])
};

export const plugins = [
  new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }),
  new webpack.DllReferencePlugin({
    context: path.join(__dirname),
    manifest: require('../dist/vendor-manifest.json')
  }),
  new webpack.DllReferencePlugin({
    context: path.join(__dirname),
    manifest: require('../dist/polyfills-manifest.json')
  }),
  new CommonsChunkPlugin({
    name: 'polyfills',
    chunks: ['polyfills']
  }),
  new CommonsChunkPlugin({
    name: 'vendor',
    chunks: ['app'],
    minChunks: module => /node_modules/.test(module.resource)
  }),
  new HtmlWebpackPlugin({
     inject: 'body',
     title: 'Base App',
     filename: 'eo.html',
     template: 'server/templates/index.ejs',
     chunks: ['polyfills', 'vendor', 'app'],
     //FIXME
     chunksSortMode: (a, b) => {
      const order = ['polyfills', 'vendor', 'app'];
      if (order.indexOf(a.names[0]) > order.indexOf(b.names[0])) {
        return 1;
      }
      if (order.indexOf(a.names[0]) < order.indexOf(b.names[0])) {
        return -1;
      }

      return 0;
    }
   }),
  new CopyWebpackPlugin([{ from: 'src/app/assets', to: 'assets' }]),
  new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true }),
  new webpack.optimize.UglifyJsPlugin(
    {compressor: { warnings: false, screw_ie8 : true },
    output: {comments: false, beautify: false},
    mangle: { screw_ie8 : true }
  }),
  new webpack.NoEmitOnErrorsPlugin()
]
  .concat(common.plugins);
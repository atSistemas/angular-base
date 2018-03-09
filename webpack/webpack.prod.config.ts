import { AngularCompilerPlugin } from '@ngtools/webpack';
import * as path from 'path';
import * as common from './webpack.common.config';

const webpack = require('webpack');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

export const cache = common.cache;
export const resolve = common.resolve;
export const context = common.context;
export const devtool = 'cheap-module-source-map';
export const entry = {
  app: common.aotPath,
  polyfills:  common.polyfillsPath,
  vendor: common.vendorPath
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
      test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
      loader: '@ngtools/webpack',
      exclude: [
        /compiled/,
        /dist/,
        /spec/,
        /server/,
        /webpack/,
        /node_modules/
      ]
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
  ] as any[])
};

export const plugins = [
  //new BundleAnalyzerPlugin(),
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
    chunks: ['vendor'],
    minChunks: minChunksModule => /node_modules/.test(minChunksModule.resource)
  }),
  new HtmlWebpackPlugin({
     inject: 'body',
     title: 'Base App',
     filename: 'index.html',
     template: 'server/templates/index.ejs',
     chunks: ['polyfills', 'vendor', 'app'],
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
  new webpack.optimize.UglifyJsPlugin(
    { compressor: { warnings: false, screw_ie8 : true },
    output: { comments: false, beautify: false },
    mangle: { screw_ie8 : true }
  }),
  new webpack.NoEmitOnErrorsPlugin(),
  new AngularCompilerPlugin({
    tsConfigPath: './tsconfig.aot.json',
    entryModule: path.join(__dirname, '../src/app/app.module#AppModule'),
    sourceMap: true
  })
].concat(common.plugins);

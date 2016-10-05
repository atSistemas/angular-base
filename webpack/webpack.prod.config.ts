import * as base from '../.base';
import * as common from './webpack.common.config';
import environment, { isTesting } from '../server/environment';

const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const resolveNgRoute = require('@angularclass/resolve-angular-routes');

export const node = common.node;
export const cache = common.cache;
export const module = common.module;
export const output = common.output;
export const resolve = common.resolve;
export const context = common.context;
export const devtool = 'cheap-module-source-map';
export const entry = {
  app: common.appPath,
  polyfills: common.entry.polyfills,
  vendor: common.entry.vendor
};

export const plugins = [
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"development"'}}),
   new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    },
    output: {
        comments: false
    },
    sourceMap: false
  }),
  new AssetsPlugin({
      path: common.buildPath,
      filename: 'webpack-assets.json',
      prettyPrint: true
  }),
  new webpack.ContextReplacementPlugin(
    /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
    common.mainPath,
    resolveNgRoute(common.mainPath)
  ),
  new webpack.DllReferencePlugin({
    context: context,
    manifest: require(`${common.dllPath}/polyfills-manifest.json`)
  }),
  new webpack.DllReferencePlugin({
    context: context,
    manifest: require(`${common.dllPath}/vendor-manifest.json`)
  }),/*
  new webpack.optimize.CommonsChunkPlugin({
    names: ["polyfills", "vendor"],
    minChunks: Infinity
  }),*/
  new webpack.NoErrorsPlugin(),
  common.compileError
]
.concat(common.plugins);

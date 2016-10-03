import * as base from '../.base';
import * as common from './webpack-config-common';
import environment, { isTesting } from '../server/environment';

const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');

export const devtool = 'cheap-source-map';

export const entry = {
  application: common.entry.application.concat(
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false'
  )
};

export const context = common.context;
export const plugins = [
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"development"'}}),
  new webpack.HotModuleReplacementPlugin(),
  new AssetsPlugin({
      path: common.buildPath,
      filename: 'webpack-assets.json',
      prettyPrint: true
  }),
  new webpack.DllReferencePlugin({
    context: context,
    manifest: require(`${common.manifestPath}/vendor-manifest.json`)
  }),
  new webpack.DllReferencePlugin({
    context: context,
    manifest: require(`${common.manifestPath}/polyfills-manifest.json`)
  }),
].concat(common.plugins);

export const module = common.module;
export const output = common.output;
export const resolve = common.resolve;

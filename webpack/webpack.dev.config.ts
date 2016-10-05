import * as base from '../.base';
import * as common from './webpack.common.config';
import environment, { isTesting } from '../server/environment';

const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const resolveNgRoute = require('@angularclass/resolve-angular-routes');

export const cache = common.cache;
export const module = common.module;
export const output = common.output;
export const resolve = common.resolve;
export const context = common.context;
export const devtool = 'cheap-source-map';
export const entry = {
  app: [
    common.appPath,
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false'
  ].concat(common.entry.vendor)
};

export const plugins = [
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"development"'}}),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DllReferencePlugin({
    context: context,
    manifest: require(`${common.dllPath}/vendor-manifest.json`)
  }),
  new AssetsPlugin({
      path: common.buildPath,
      filename: 'webpack-assets.json',
      prettyPrint: true
  }),
  common.compileError
]
.concat(common.plugins);

const webpack = require('webpack');

import * as common from './webpack.common.config';

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
    'webpack-hot-middleware/client'
  ],
  polyfills: common.polyfills
};

export const plugins = [
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"development"'}}),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DllReferencePlugin({
    context,
    manifest: require(`${common.dllPath}/vendor-manifest.json`)
  }),
]
.concat(common.plugins);

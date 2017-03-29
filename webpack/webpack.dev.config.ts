import * as base from '../src/base';
import * as common from './webpack.common.config';

const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');

export const cache = common.cache;
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

export const module = {
  rules: common.module.rules.concat([
    {
      test: /\.ts$/,
      loaders: [
        '@angularclass/hmr-loader',
        'angular-router-loader'
      ],
      exclude: [/\.(spec|e2e|d)\.ts$/]
    },
    {
      test: /\.css$/,
      use: ['to-string-loader', 'style-loader', 'css-loader'],
      include: [common.mainPath]
    },
  ] as any[])
};

export const plugins = [
  new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"development"' } }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DllReferencePlugin({
    context,
    manifest: require(`${common.dllPath}/vendor-manifest.json`)
  }),
].concat(common.plugins);

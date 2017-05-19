import * as common from './webpack.common.config';

const webpack = require('webpack');
const path = require('path');

export const cache = common.cache;
export const output = common.output;
export const resolve = common.resolve;
export const context = common.context;
export const devtool = 'cheap-source-map';
export const entry = {

  polyfills:  common.polyfills,
  vendor: common.vendor,
    app: [
    common.appPath,
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client'
  ]
};

export const module = {
  rules: common.module.rules.concat([
    {
      test: /\.ts$/,
      loaders: [
        '@angularclass/hmr-loader',
        'angular-router-loader'
      ],
      exclude: [
        /dist/,
        /spec/,
        /server/,
        /webpack/,
        /node_modules/
      ]
    },
      {
      test: /\.css$/,
      use: [
        { loader: 'to-string-loader' },
        { loader: 'style-loader' },
        { loader: 'css-loader',
          options: {
            minimize: false,
            sourceMap: false,
          }
        }
      ],
    },
  ] as any[])
};

export const plugins = [
  new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"development"' } }),
  new webpack.HotModuleReplacementPlugin(),
    new webpack.DllReferencePlugin({
    context,
    manifest: require(`${common.dllPath}/polyfills-manifest.json`)
  }),
    new webpack.DllReferencePlugin({
    context,
    manifest: require(`${common.dllPath}/vendor-manifest.json`)
  }),
].concat(common.plugins);
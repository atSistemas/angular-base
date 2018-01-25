import * as common from './webpack.common.config';

const webpack = require('webpack');
const path = require('path');

export const cache = common.cache;
export const resolve = common.resolve;
export const context = common.context;
export const devtool = 'cheap-source-map';
export const entry = {
  polyfills:  common.polyfillsPath,
  vendor: common.vendorPath,
  app: [
    common.appPath,
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client'
  ]
};

export const output = {
  path: common.buildPath,
  publicPath: '/',
  library: '[name]',
  filename: '[name].js',
  sourceMapFilename: '[name].map',
  chunkFilename: '[name].chunk.js',
};

export const module = {
  rules: common.module.rules.concat([
    {
      test: /\.ts$/,
      loaders: [
        'ts-loader',
        '@angularclass/hmr-loader',
        'angular2-template-loader',
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
      exclude: /node_modules/,
      use: [
        { loader: 'to-string-loader' },
        { loader: 'style-loader' },
        { loader: 'css-loader',
          options: {
            importLoaders: 1,
            localIdentName: '[name]__[local]-[hash:base64:4]'
          }
        }
      ]
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        { loader: 'to-string-loader' },
        { loader: 'style-loader' },
        { loader: 'css-loader',
          options: {
            importLoaders: 1,
            localIdentName: '[name]__[local]-[hash:base64:4]'
          }
        },
        { loader: 'sass-loader' }
      ]
    }
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
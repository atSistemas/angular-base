import * as path from 'path';
import environment from '../server/environment';
import buildConfig from './webpack-config';
import * as externals from './externals';

const base = require('../.base');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { ConcatSource } = require('webpack-sources');
const { ForkCheckerPlugin, TsConfigPathsPlugin } = require('awesome-typescript-loader');
const AssetsPlugin = require('assets-webpack-plugin');

const {
  ContextReplacementPlugin,
  HotModuleReplacementPlugin,
  DefinePlugin,
  DllReferencePlugin,
  optimize: {
    CommonsChunkPlugin,
    DedupePlugin
  }
} = require('webpack');

const polyfills = externals.getPolyfills(environment.ENV);

const context = buildConfig['context'] || path.resolve(__dirname, '../')

const webpackConfig = {

  devtool: buildConfig.devTool || 'eval',

  entry: {
    main: (buildConfig['entries'] ?
      polyfills.concat('./src/app/bootstrap').concat(buildConfig['entries']) :
      polyfills.concat('./src/app/bootstrap'))
  },

  context: context,

  plugins: [
    new AssetsPlugin({
      path: externals.root('dist'),
      filename: 'webpack-assets.json',
      prettyPrint: true
    }),
    new DllReferencePlugin({
      context: context,
      manifest: externals.getManifest('vendor'),
    }),
    new DllReferencePlugin({
      context: context,
      manifest: externals.getManifest('polyfills'),
    }),
    new TsConfigPathsPlugin(/* { tsconfig, compiler } */),
    new ProgressBarPlugin({}),
    new ForkCheckerPlugin(),
    function () {
      this.plugin("done", function (stats) {
        if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1) {
          base.console.error(stats.compilation.errors);
        }
      });
    }
  ].concat(buildConfig.plugins),

  //postcss: buildConfig.postCss,

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'string-replace-loader',
        query: {
          search: '(System|SystemJS)(.*[\\n\\r]\\s*\\.|\\.)import\\((.+)\\)',
          replace: '$1.import($3).then(mod => mod.__esModule ? mod.default : mod)',
          flags: 'g'
        },
        include: [externals.root('src')]
      },
    ],
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          '@angularclass/hmr-loader'
        ],
        exclude: [/\.(spec|e2e|d)\.ts$/],
        include: [externals.root('./src')]
      },
      { test: /\.json$/, loader: 'json-loader', include: [externals.root('./src')] },
      { test: /\.html/, loader: 'raw-loader', include: [externals.root('./src')] },
      { test: /\.css$/, loader: 'raw-loader', include: [externals.root('./src')] }
      //{ test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:4]!postcss-loader'}
    ].concat(buildConfig.loaders)
  },
  output: {
    path: externals.root('build'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.tsx', '.css']
  }

};

export default webpackConfig;

///<reference path="../node_modules/@types/node/index.d.ts"/>
import * as base from '../.base';
import environment from '../server/environment';
import { getPolyfills, getManifest, root as dllRoot } from './externals';
const { ForkCheckerPlugin, TsConfigPathsPlugin} = require('awesome-typescript-loader');
const { ContextReplacementPlugin, HotModuleReplacementPlugin, DefinePlugin, DllReferencePlugin, } = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');

export const devtool = 'source-map';

export const context = __dirname;

export const entry = {
  main: getPolyfills().concat(
    './src/app/bootstrap',
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false'
  )
};

export const plugins = [
  new HotModuleReplacementPlugin(),
  new AssetsPlugin({
    path: dllRoot('dist'),
    filename: 'webpack-assets.json',
    prettyPrint: true
  }),
  new DllReferencePlugin({
    context: context,
    manifest: getManifest('vendor'),
  }),
  new DllReferencePlugin({
    context: context,
    manifest: getManifest('polyfills'),
  }),
  new TsConfigPathsPlugin(/* { tsconfig, compiler } */),
  //  TODO: Enable ForkCheckerPlugin as soon as the plugin is fixed
  //new ForkCheckerPlugin(),
  function () {
    this.plugin("done", function (stats) {
      if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1) {
        base.console.error(stats.compilation.errors);
      }
    });
  }
];

export const preLoaders = [
  {
    test: /\.ts$/,
    loader: 'string-replace-loader',
    query: {
      search: '(System|SystemJS)(.*[\\n\\r]\\s*\\.|\\.)import\\((.+)\\)',
      replace: '$1.import($3).then(mod => mod.__esModule ? mod.default : mod)',
      flags: 'g'
    },
    include: [dllRoot('src')]
  },
];
export const loaders = [
  {
    test: /\.ts$/,
    loaders: [
      'awesome-typescript-loader',
      'angular2-template-loader',
      '@angularclass/hmr-loader'
    ],
    exclude: [/\.(spec|e2e|d)\.ts$/],
    include: [dllRoot('./src')]
  },
  { test: /\.json$/, loader: 'json-loader', include: [dllRoot('./src')] },
  { test: /\.html/, loader: 'raw-loader', include: [dllRoot('./src')] },
  { test: /\.css$/, loader: 'raw-loader', include: [dllRoot('./src')] }
  //{ test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:4]!postcss-loader'}
];

export const postCss = function (webpack) {
  return [
    /*require("postcss-import")({ addDependencyTo: webpack }),
    require('postcss-modules-extract-imports')(),
    require("postcss-url")(),
    require("postcss-cssnext")(),
    require("postcss-reporter")()*/
  ];
}

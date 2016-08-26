/// <reference path="./webpack.d.ts" />


import * as path from 'path';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'ts-helpers';
import { root } from './externals';
import {polyfills, vendor} from './dll';
// needed to create context for resolveNgRoute

const {
  ContextReplacementPlugin,
  HotModuleReplacementPlugin,
  DefinePlugin,
  ProgressPlugin,
  DllPlugin,

  optimize: {
    CommonsChunkPlugin,
    DedupePlugin
  }

} = require('webpack');
const {ForkCheckerPlugin} = require('awesome-typescript-loader');
const resolveNgRoute = require('@angularclass/resolve-angular-routes');
const AssetsPlugin = require('assets-webpack-plugin');




// type definition for WebpackConfig is defined in webpack.d.ts
function webpackConfig(options: EnvOptions = {}): WebpackConfig {

  return {
    devtool: '#source-map',
    entry: {
      polyfills: polyfills(options),
      vendor: vendor(options)
    },
    context: options.context || path.resolve(__dirname + '../'),
    output: {
      path: root('dist/dll'),
      filename: '[name].[hash].js',
      sourceMapFilename: '[name].[hash].map',
      library: "__[name]"
    },

    module: {
      preLoaders: [
        // fix angular2
        {
          test: /(systemjs_component_resolver|system_js_ng_module_factory_loader)\.js$/,
          loader: 'string-replace-loader',
          query: {
            search: '(lang_1(.*[\\n\\r]\\s*\\.|\\.))?(global(.*[\\n\\r]\\s*\\.|\\.))?(System|SystemJS)(.*[\\n\\r]\\s*\\.|\\.)import\\((.+)\\)',
            replace: '$5.import($7)',
            flags: 'g'
          },
          include: [root('node_modules/@angular/core')]
        },
        {
          test: /.js$/,
          loader: 'string-replace-loader',
          query: {
            search: 'moduleId: module.id,',
            replace: '',
            flags: 'g'
          }
        }
        // end angular2 fix
      ],

      loaders: [
        {
          test: /\.ts$/,
          loader: 'awesome-typescript-loader',
          exclude: [root('src/app')],
          include: [root('./src')]
        },
      ],
      postLoaders: [
        {
          test: /.json$/,
          loader: 'string-replace-loader',
          query: {
            search: '}(.*[\\n\\r]\\s*)}(.*[\\n\\r]\\s*)}"activeExports": \\[\\]',
            replace: '',
            flags: 'g'
          }
        }
      ]

    },

    plugins: [
      new AssetsPlugin({
        path: root('dist/dll'),
        filename: 'webpack-assets.json',
        prettyPrint: true
      }),
      new DllPlugin({
        name: '__[name]',
        path: root('dist/dll/[name]-manifest.json'),
      }),

      // fix angular2
      new ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        root('./src'),
        resolveNgRoute(root('./src'))
      ),
      // end angular2 fix

      new ProgressPlugin({}),

      new DedupePlugin(),

    ],
    node: {
      global: 'window',
      process: true,
      Buffer: false,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false,
      clearTimeout: true,
      setTimeout: true
    }
  };
}


// Export
module.exports = webpackConfig;

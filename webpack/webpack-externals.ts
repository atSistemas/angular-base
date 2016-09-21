/**
 * @fileoverview Defines webpack configuration for project's third party dependencies
 * @author Rafa Bernad [rbernad@atsistemas.com]
 */

import * as path from 'path';
import * as base from '../.base';
import { root, externalsPath, getPolyfills, getVendorModules } from './dll';
import environment, { constants as envConstants } from '../server/environment';

const {
  ContextReplacementPlugin,
  HotModuleReplacementPlugin,
  DefinePlugin,
  ProgressPlugin,
  DllPlugin,
  LoaderOptionsPlugin,
  optimize: {
    CommonsChunkPlugin,
    DedupePlugin,
    UglifyJsPlugin
  }

} = require('webpack');
const {ForkCheckerPlugin} = require('awesome-typescript-loader');
const resolveNgRoute = require('@angularclass/resolve-angular-routes');
const AssetsPlugin = require('assets-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');



// type definition for WebpackConfig is defined in webpack.d.ts
function webpackConfig(options: EnvOptions = {}): WebpackConfig {
  return {
    devtool: '#source-map',
    entry: {
      polyfills: getPolyfills(),
      vendor: getVendorModules(options)
    },
    context: options.context || path.resolve(__dirname + '../'),
    output: {
      path: root(externalsPath),
      filename: '[name].[hash].js',
      sourceMapFilename: '[name].[hash].map',
      library: "__[name]"
    },

    module: {

      rules: [
        // fix angular 2 imports
        {
          enforce: 'right',
          test: /(systemjs_component_resolver|system_js_ng_module_factory_loader)\.js$/,
          loader: 'string-replace-loader',
          query: {
            search: '(lang_1(.*[\\n\\r]\\s*\\.|\\.))?(global(.*[\\n\\r]\\s*\\.|\\.))?(System|SystemJS)(.*[\\n\\r]\\s*\\.|\\.)import\\((.+)\\)',
            replace: '$5.import($7)',
            flags: 'g'
          },
          include: [root('node_modules/@angular/core')]
        },
        // end fix angular 2 imports
        {
          enforce: 'right',
          test: /.js$/,
          loader: 'string-replace-loader',
          query: {
            search: 'moduleId: module.id,',
            replace: '',
            flags: 'g'
          }
        },
        {
          test: /\.ts$/,
          loader: 'awesome-typescript-loader',
          exclude: [root('src/app')],
          include: [root('./src')]
        },
        {
          enforce: 'left',
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
        path: root(externalsPath),
        filename: 'webpack-assets.json',
        prettyPrint: true
      }),
      new DllPlugin({
        name: '__[name]',
        path: root(`${externalsPath}/[name]-manifest.json`),
      }),

      // fix angular2
      new ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        root('./src'),
        resolveNgRoute(root('./src'))
      ),
      new LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: environment.ENV === envConstants.DEVELOPMENT
    }),
      // end angular2 fix
      new base.webpack.ProgressBarPlugin(),

      // FIXME: WE NEED THE DEDUPE PLUGIN;
      //new DedupePlugin(),

    ],
    node: {
      global: true,
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

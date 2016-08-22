import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { symbols, color } from '../src/base/shared/console';

const clientPath = path.resolve(__dirname, '../src/app/bootstrap.ts');
export const devTool = 'eval';

export const devContext = clientPath;

export const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin('bundle.css', { allChunks: true }),
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"development"'}}),
  function(){
    this.plugin("done", function(stats){
      if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1){
        console.log('[BASE] ' + color('error', symbols.error) + stats.compilation.errors);
      }
    });
  }
];

export const devEntries = [
  clientPath,
  'webpack/hot/dev-server',
  'webpack-hot-middleware/client'
];

export const devLoaders = [
  { test: /\.tsx?$/, loaders: ['angular2-template-loader', 'awesome-typescript-loader'], exclude: /node_modules/},
  { test: /\.html$/, loader: 'raw', exclude: /node_modules/ },
  { test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:4]!postcss-loader'}
];

export const devPostCss = function (webpack) {
  return [
    require("postcss-import")({ addDependencyTo: webpack }),
    require('postcss-modules-extract-imports'),
    require("postcss-url")(),
    require("postcss-cssnext")(),
    require("postcss-reporter")()
  ];
};

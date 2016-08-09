import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const clientPath = path.resolve(__dirname, '../src/app/index.ts');

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
        console.log(stats.compilation.errors);
        //throw new Error(stats.compilation.errors);
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
  { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: /node_modules/},
  //{ test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/},
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

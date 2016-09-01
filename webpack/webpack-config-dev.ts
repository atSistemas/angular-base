///<reference path="../node_modules/@types/node/index.d.ts"/>
const { ForkCheckerPlugin } = require('awesome-typescript-loader');
const { HotModuleReplacementPlugin } = require('webpack');

export const devTool = 'source-map';

export const entries = [
  'webpack/hot/dev-server',
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false'
];

export const plugins = [

  new HotModuleReplacementPlugin(),
  new ForkCheckerPlugin()
];

export const loaders = [

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

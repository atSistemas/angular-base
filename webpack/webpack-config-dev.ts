const { ForkCheckerPlugin } = require('awesome-typescript-loader');
const { HotModuleReplacementPlugin } = require('webpack');

export const devTool = 'source-map';

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

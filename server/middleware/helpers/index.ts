///<reference path="../../../node_modules/@types/node/index.d.ts"/>
///<reference path="../../../node_modules/@types/webpack/index.d.ts"/>

import * as base from '../../../src/base';
const perfy = require('perfy');
const webpack = require('webpack');

export default function timedCompiler(config: any): any {

  const compiler = webpack(config);

  compiler.plugin('compile', function () {
    perfy.start('build');
    base.console.info('Bundling project...');
  });

  compiler.plugin('done', function () {
    const timing = perfy.end('build');
    base.console.success(`Bundled project in ${timing.time} seconds`);
  });

  return compiler;
}

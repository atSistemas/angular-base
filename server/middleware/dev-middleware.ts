import config from '../../webpack';
import { ExternalsMiddleware } from '../../webpack/externals';
import { RequestHandler } from 'express';


const base = require('../../.base');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bundleTimer = base.timer('bundleStart');
const perfy = require('perfy');

const compiler = webpack(config);

compiler.plugin('compile', function () {
  perfy.start('build');
  base.console.info('Bundling project...');
});

compiler.plugin('done', function () {
  const timing = perfy.end('build');
  base.console.success(`Bundled project in ${timing.time} seconds`);
});

const serverOptions = {
  hot: true,
  lazy: false,
  quiet: true,
  watch: true,
  noInfo: true,
  progress: false,
  stats: { colors: true },
  publicPath: config.output.publicPath || '/',
  headers: { 'Access-Control-Allow-Origin': '*' }
};

const devMiddleware = webpackDevMiddleware(compiler, serverOptions);
const hotMiddleware = webpackHotMiddleware(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
});
const externalsMiddleware = new ExternalsMiddleware('\/externals\/*');
const middlewares: RequestHandler[] = [
  externalsMiddleware,
  devMiddleware,
  hotMiddleware,

];

export default middlewares;
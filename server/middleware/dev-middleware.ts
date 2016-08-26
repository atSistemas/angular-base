import config from '../../webpack';

const base = require('../../.base');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const bundleTimer = base.timer('bundleStart');
const compiler = webpack(config);

compiler.plugin('done', function() {
  let timing = bundleTimer();
  base.console.success(`Bundled project in ${timing.time} seconds!`);
});

const serverOptions = {
  hot: true,
  lazy: false,
  quiet: true,
  watch: true,
  noInfo: true,
  inline: true,
  progress: false,
  stats: { colors: true },
  publicPath: config.output.publicPath || '/',
  headers: { 'Access-Control-Allow-Origin': '*' }
};

const middlewares:Array<any> = [
    webpackHotMiddleware(compiler),
    webpackDevMiddleware(compiler, serverOptions)
];

export default middlewares;
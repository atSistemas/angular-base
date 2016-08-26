import config from '../../webpack';

const base  = require ('../../.base');
const webpack = require('webpack');

const bundleTimer = base.timer('bundleStart');
const compiler = webpack(config);

compiler.plugin('done', function() {
  base.console.success(`Bundled project in ${bundleTimer()} ms!`);
});

const middlewares:Array<any> = [];

export default middlewares;
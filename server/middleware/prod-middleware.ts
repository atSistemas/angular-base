import config from '../../webpack';
import { RequestHandler } from 'express';

const base  = require ('../../.base');
const webpack = require('webpack');

const bundleTimer = base.timer('bundleStart');
const compiler = webpack(config);

compiler.plugin('done', function() {
  base.console.success(`Bundled project in ${bundleTimer()} ms!`);
});

const middlewares:RequestHandler[] = [];

export default middlewares;
///<reference path="../../node_modules/@types/node/index.d.ts"/>
import { RequestHandler } from 'express';
const base  = require ('../../.base');
const webpack = require('webpack');

export default function():RequestHandler[] {
   
    const config = require('../../webpack').default;

    const bundleTimer = base.timer('bundleStart');
    const compiler = webpack(config);

    compiler.plugin('done', function() {
      base.console.success(`Bundled project in ${bundleTimer()} ms!`);
    });

    const middlewares:RequestHandler[] = [];

    return middlewares;
}

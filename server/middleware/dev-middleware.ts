///<reference path="../../node_modules/@types/node/index.d.ts"/>
//import { ExternalsMiddleware } from '../../webpack/dll';
import { RequestHandler } from 'express';
import timedCompiler from './helpers';

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

export default function():RequestHandler[] {

    const config = require('../../webpack').default;
    const compiler = timedCompiler(config);

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
      log: false, path: '/__webpack_hmr', heartbeat: 10 * 1000
    });
  //  const externalsMiddleware = new ExternalsMiddleware('\/dll\/*');
    const middlewares: RequestHandler[] = [
      //externalsMiddleware,
      devMiddleware,
      hotMiddleware,

    ];

    return middlewares;
};

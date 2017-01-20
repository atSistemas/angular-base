import * as express from 'express';
import * as base from '../../src/base';

import environment, { constants as envConstants } from '../environment';
import devMiddleware from './dev-middleware';
import prodMiddleware from './prod-middleware';
import { RequestHandler } from 'express';

export function configureMiddlewares(): RequestHandler[] {
  const commonMiddlewares: RequestHandler[] = [];
  const middlewares: RequestHandler[] = commonMiddlewares.concat((environment.ENV === envConstants.DEVELOPMENT) ? devMiddleware() : prodMiddleware());
  return middlewares;
}

export function applyEnvMiddleWare(app): PromiseLike<boolean> {

  const envMiddleware: express.RequestHandler[] = configureMiddlewares();

  return new Promise((resolve, reject) => {

    let serverUp = false;

    envMiddleware.forEach((middleware: express.RequestHandler) => {
      const middlewareName = middleware.name || 'middleware';
      app.use(middleware);

      if (environment.ENV == 'production' && !serverUp) {
        serverUp = true;
        base.console.success(`Applied ${middlewareName} middleware`);
        resolve(true);
      } else {
        if (middleware['waitUntilValid']) {
          middleware['waitUntilValid'](() => {
            base.console.success(`Applied ${middlewareName} middleware`);
            resolve(true);
          });
        }
      }
    });
  });
}

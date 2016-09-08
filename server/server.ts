///<reference path="../node_modules/@types/node/index.d.ts"/>

import * as express from 'express';
import * as path from 'path';
import statics, { iStaticRoute } from './statics';
import renderIndex from './templates';
import environment from './environment';
import configureMiddlewares from './middleware';
import buildExternals from '../webpack/dll';
import { RequestHandler } from 'express';
import * as base from '../.base';

const context = 'server';

export class Server {

  public app: express.Application;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {

    this.app = express();

    this.configure();

  }

  private configure() {
    buildExternals().then(() => {
      this.initializeMiddlewares().then(() => {
        this.initializeStaticPaths();
        this.initializeIndex();
        this.app.listen(environment.port, function (err: any) {
          if (err) {
            console.log(err);
            return;
          }
          base.console.success(`Server up on http://localhost:${environment.port}`);
        });
      });
    });
  }

  private initializeIndex() {

    this.app.use((req: express.Request, res: express.Response, next: any) => {
      let page = renderIndex();
      res.status(200).send(page);
      return;
    });
  }

  private initializeMiddlewares(): PromiseLike<boolean> {

    const middlewares: RequestHandler[] = configureMiddlewares();

    return new Promise((resolve, reject) => {

      let wait = false;

      middlewares.forEach((middleware: RequestHandler) => {
        this.app.use(middleware);
        if (middleware['waitUntilValid']) {
          wait = true;
          middleware['waitUntilValid'](function () {
            base.console.success(`Applied ${middleware.name} middleware`);
            resolve(true);
          });
        } else {
          base.console.success(`Applied ${middleware.name || ''} middleware`);
        }
      });

      if (!wait) {
        resolve(true);
      }
    });

  }

  private initializeStaticPaths() {
    statics.map((staticRoute: iStaticRoute) => {
      this.app.use(staticRoute.route, express.static(staticRoute.path));
      base.console.success(`Applied static path "${staticRoute.route}"`);
    });
  }
};

const server = new Server();
export default server;

/*
export default function applyEnvMiddleWare(app) {

  base.console.info(`Checking Env middlewares...`);

  return new Promise((resolve, reject) => {
    let serverUp = false;

    envMiddleware().forEach(function(middleware) {
      const middlewareName = middleware.name || 'middleware';
      app.use(middleware);

      if (base.env == 'production' && !serverUp) {
        serverUp = true;
        base.console.success(`Applied ${middlewareName} middleware`);
        resolve(true);
      } else {
        if (middleware.waitUntilValid) {
          middleware.waitUntilValid(function() {
            base.console.success(`Applied ${middlewareName} middleware`);
            resolve(true);
          });
        }
      }
    });
  });
}
*/
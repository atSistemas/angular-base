/// <reference path="../typings/index.d.ts" />

import * as express from "express";
import * as path from 'path';
import statics from './statics/main';
import { staticRoute } from './statics/main';
import templateBuilder from './common/template-builder';
import environment from './environment';
import middlewares from './middlewares';

const base = require('../.base');

const port: number = 8000;

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

    this.initializeStaticPaths();
    this.initializeMiddlewares();

    this.app.listen(port, function (err: any) {
      if (err) {
        console.log(err);
        return;
      }
      base.console.success(`Server up on http://localhost:${port}`);

    });

  }

  private initializeMiddlewares() {
    middlewares.forEach((middleware) => {
      this.app.use(middleware.route, middleware.middleware);
      base.console.success(`Applied ${middleware.name || ''} middleware`);
    });
  }

  private initializeStaticPaths() {
    statics.map((staticRoute: staticRoute) => {
    
      this.app.use(staticRoute.route, express.static(staticRoute.path));
      base.console.success(`Applied static path "${staticRoute.route}"`);
    });
  }
};

const server = new Server();
export default server;
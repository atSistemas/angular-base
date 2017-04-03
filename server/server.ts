import * as path from 'path';
import * as express from 'express';

import * as base from '../src/base';
import environment from './environment';
import { applyViewEngine } from './lib/viewEngine';
import { applyEnvMiddleWare } from './middleware';
import { applyStaticsPaths } from './statics';
import { applyServerRouting } from './routes/routing-middleware';

export class Server {

  public app: express.Application;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();
    this.configureServer();
  }

  private configureServer() {
    applyEnvMiddleWare(this.app)
      .then(() => {
        base.console.info(`Checking view engine...`);
        applyViewEngine(this.app);
      })
      .then(() => {
        base.console.info(`Checking static paths...`);
        applyStaticsPaths(this.app);
      })
      .then(() => {
        base.console.info(`Checking server routing...`);
        applyServerRouting(this.app);
      })
      .then(() => {
        base.console.info(`Setting up server...`);
        this.launch();
      });
  }

  private launch(): void {
    this.app.listen(environment.port, function (err: any) {
      if (err) return base.console.error(`${err}`);
      base.console.success(`Server up on http://localhost:${environment.port}`);
    });
  };
};

export default Server;

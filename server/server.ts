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

/**
 * @class {object} Server
 * @description Generates development server instances, with configurable environment middlewares
 */
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
          middleware['waitUntilValid'](() => {
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

export default Server;

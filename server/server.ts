import * as express from "express";
import * as path from 'path';
import statics, { iStaticRoute } from './statics';
import renderIndex from './templates';
import environment from './environment';
import buildExternals from '../webpack/externals';

const base = require('../.base');

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
      this.initializeMiddlewares();
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
  }

  private initializeIndex() {

    this.app.use((req: express.Request, res: express.Response, next: any) => {
      let page = renderIndex();
      res.status(200).send(page);
      return;
    });
  }

  private initializeMiddlewares() {
    const middlewares = require('./middleware').default;
    
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
      base.console.success(`Applied ${middleware.name || ''} middleware`);
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
import * as express from "express";
import * as path from 'path';
import statics, { staticRoute } from './statics';
import Template from './common/template';
import environment from './environment';
import middlewares from './middlewares';
import SystemConfig from '../system';

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

    this.initializeIndex();
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

  private initializeIndex() {

    let systemConfig = new SystemConfig();

    systemConfig.extend({
      typescriptOptions: {
        "tsconfig": false
      },
      packages: {
        "ts": {
          "main": "plugin.js"
        },
        "typescript": {
          "main": "lib/typescript.js",
          "meta": {
            "lib/typescript.js": {
              "exports": "ts"
            }
          }
        }
      },
      map: {
        "ts": "/plugin-typescript",
        "typescript": "/typescript"
      }
    });

    const templateContent = {
      system: systemConfig
    };

    const page = new Template("index.tpl.html");

    //console.log(page.populate(templateContent));

    this.app.use((req: express.Request, res: express.Response, next: any) => {
      if (req.url === '/') {
        console.log(templateContent)
        res.status(200).send(page.populate(templateContent));
        return;
      }
      next();

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
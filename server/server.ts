import { express, path } from './common/node-libs';
import statics from './statics/main';
import { staticRoute } from './statics/main';
import templateBuilder from './common/template-builder';
import environment from '../environment';

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

    this.app.listen(port, function (err: any) {
      if (err) {
        console.log(err);
        return;
      }
      console.log('[BASE] Server up on http://localhost:' + port);

    });

  }

  private initializeStaticPaths() {
    statics.map((staticRoute: staticRoute) => {
      this.app.use(staticRoute.route, express.static(staticRoute.dir));
    });
  }
};

const server = new Server();
export default server;
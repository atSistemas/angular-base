import * as path from 'path';
import { createEngine } from 'angular2-express-engine';

import * as base from '../../.base';

const viewEngine = createEngine({});
const viewPath = path.resolve(__dirname, '../templates');

export function applyViewEngine(app) {
  app.engine('.html', viewEngine);
  app.set('views', viewPath);
  app.set('view engine', 'html');
  base.console.success(`Applied Angular2 Express Engine`);

}

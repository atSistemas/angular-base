import * as path from 'path';
//import { createEngine } from 'angular2-express-engine';

import * as base from '../../.base';
import { ENV } from '../../src/base/shared/Env';
import { AppModule } from '../../src/app/app.module';

const viewPath = path.resolve(__dirname, '../templates');

export function applyViewEngine(app) {
  /*
    app.engine('.html', createEngine({ngModule: AppModule}));
    app.set('views', viewPath);
    app.set('view engine', 'html');
    base.console.success(`Applied Angular2 Express Engine`);
  */
}

import * as path from 'path';
import * as express from 'express';

import * as base from '../../src/base';
import environment, {constants as envConstants} from '../environment';

export interface StaticRoute {
  route: string,
  path: string,
  source?: boolean
};

const common:StaticRoute[] = [
  { route: '/mocks', path: path.join(__dirname, '..', '..', 'src/app/api/mocks') }
];

const development:StaticRoute[] = [
  { route: '/dlls', path: path.join(__dirname, '..', '..', 'dist') },
  { route: '/', path: path.join(__dirname, '../../src/app') },
];

const production:StaticRoute[] = [
  { route: '/', path: path.join(__dirname, '..', '..', 'dist') },
  { route: '/assets', path: path.join(__dirname, '..', '..', 'dist', 'assets') },
];

const envStatics = (environment.ENV === envConstants.DEVELOPMENT) ? common.concat(development) : common.concat(production);
const statics = envStatics;

export function applyStaticsPaths(app) {
  statics.map((staticRoute: StaticRoute) => {
    app.use(staticRoute.route, express.static(staticRoute.path));
    base.console.success(`Applied static path "${staticRoute.route}"`);
  });
}
//export default statics;

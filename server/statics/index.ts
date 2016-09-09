import * as path from 'path';
import environment, {constants as envConstants} from '../environment';

export interface iStaticRoute {
  route: string,
  path: string,
  source?: boolean
};

const common:iStaticRoute[] = [
  { route: '/mocks', path: path.join(__dirname, '..', '..', 'src/app/api/mocks') }
];

const development:iStaticRoute[] = [
  { route: '/dll', path: path.join(__dirname, '..', '..', 'build', 'dll') }
];

const production:iStaticRoute[] = [
  { route: '/', path: path.join(__dirname, '..', '..', 'build') },
  { route: '/assets', path: path.join(__dirname, '..', '..', 'build', 'assets') },
];

const envStatics = (environment.ENV === envConstants.DEVELOPMENT) ? common.concat(development) : common.concat(production);
const statics = envStatics;
export default statics;

import env from '../src/base/shared/Env';
import * as development from './webpack-config-dev';
import * as production from './webpack-config-prod';

export default (env == 'development') ? development : production;

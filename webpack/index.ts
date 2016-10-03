import env from '../src/base/shared/Env';
import * as development from './webpack.dev.config';
import * as production from './webpack.prod.config';

export default (env == 'development') ? development : production;

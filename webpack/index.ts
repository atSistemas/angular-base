import { ENV, MODE } from '../src/base/shared/Env';
import * as development from './webpack.dev.config';
import * as production from './webpack.prod.config';
import * as universal from './webpack.universal.config';

export default (ENV == 'development') ? (MODE == 'universal')
              ? universal : development
              : production;

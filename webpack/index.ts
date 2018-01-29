import { ENV } from '../src/base';
import * as development from './webpack.dev.config';
import * as production from './webpack.prod.config';

export default (ENV === 'development') ? development : production;

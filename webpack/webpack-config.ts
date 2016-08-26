import * as development from './webpack-config-dev';
import * as production from './webpack-config-prod';
import environment, { constants as envConstants } from '../server/environment';

export default ( environment.ENV === envConstants.DEVELOPMENT ) ? development : production;

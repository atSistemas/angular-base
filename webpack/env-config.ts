import * as development from './webpack-config-dev';
import * as production from './webpack-config-prod';
import environment, { constants as envConstants } from '../server/environment';
export { isTesting } from '../server/environment';

export interface envConfig {
    devtool?: string,
    debug?: boolean,
    entry?: { [propName: string]: any },
    context?: string,
    plugins?: any[],
    module?: any,
    postCss?: Function
}


const envConfig: envConfig = (environment.ENV === envConstants.DEVELOPMENT) ? development : production;

export default envConfig;

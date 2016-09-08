
import * as development from './webpack-config-dev';
import * as production from './webpack-config-prod';
import environment, { constants as envConstants } from '../server/environment';

export interface envConfig {
    devtool?: string,
    entry?: { [propName: string]: any },
    context?: string,
    plugins?: any[],
    preLoaders?: any[],
    loaders?: any[],
    postCss?: Function
}

const envConfig: envConfig = (environment.ENV === envConstants.DEVELOPMENT) ? development : production;

export default envConfig; 
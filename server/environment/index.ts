import devEnv from './development';
import prodEnv from './production';

const ENV = process.env.NODE_ENV || 'development';
const NPM_ENV = process.env.npm_lifecycle_event;

export const constants = {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production'
};


export interface iEnvironment {
    port: number,
    ENV: string
}

export const isTesting: boolean = NPM_ENV === 'test' || NPM_ENV === 'test-watch' || process.env.NODE_ENV === 'test';

const environment = (ENV === 'production') ? prodEnv : devEnv;

export default environment;
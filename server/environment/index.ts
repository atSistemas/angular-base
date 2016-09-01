import devEnv from './development';
import prodEnv from './production';

const ENV = process.env.NODE_ENV || 'development';

export const constants = {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production'
};

export interface iEnvironment {
    port: number,
    ENV: string
}

const environment = (ENV === 'production') ? prodEnv : devEnv; 

export default environment;
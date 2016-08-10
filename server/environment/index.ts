import devEnv from './development';
import prodEnv from './production';

const ENV = process.env.NODE_ENV || 'development';
const environment = (ENV === 'production') ? prodEnv : devEnv; 

export interface environmentInterface {
    port: number,
    ENV: string
}

export default environment;
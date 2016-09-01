import { iEnvironment } from './index';

const development: iEnvironment = {
    port: 8000,
    ENV: process.env.NODE_ENV
};


export default development;
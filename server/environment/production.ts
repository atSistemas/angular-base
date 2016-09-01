import { iEnvironment } from './index';

const production: iEnvironment = {
    port: 8000,
    ENV: process.env.NODE_ENV
};

export default production;
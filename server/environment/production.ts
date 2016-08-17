import { environmentInterface as environment } from './index';

const production: environment = {
    port: 8000,
    ENV: process.env.NODE_ENV
};

export default production;
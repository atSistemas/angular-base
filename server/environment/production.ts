import environmentInterface as environment from './environment';

const production: environment = {
    port: 8000,
    ENV: process.env.NODE_ENV
};

export default production;
require('ts-node/register');
const base = require('../.base');
const Server = require('./server').default;
process.env['NODE_ENV'] = process.env.NODE_ENV || 'development';
const ENV = ( process.env['NODE_ENV'] == 'production') ? 'PRODUCTION AOT' : 'DEVELOPMENT';

base.console.info(`Starting ${ENV} enviroment...`);
const server = new Server();

require('ts-node/register');

const base = require('../.base');
const Server = require('./server').default;

process.env['NODE_ENV'] = process.env.NODE_ENV || 'development';

base.console.info(`Starting ${(process.env.NODE_ENV).toUpperCase()} enviroment...`);
const server = new Server();

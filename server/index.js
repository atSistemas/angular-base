require('ts-node/register');

const base = require('../.base');

process.env['NODE_ENV'] = process.env.NODE_ENV || 'development';

base.console.info(`Starting ${ (process.env.NODE_ENV).toUpperCase() } enviroment...`);

require('./server');
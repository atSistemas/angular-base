const base = require('../.base');

process.env['NODE_ENV'] = process.env.NODE_ENV || 'development';

base.console.info(`Starting ${ (process.env.NODE_ENV  || 'development').toUpperCase() } enviroment...`);

const System = require('./bootstrap');



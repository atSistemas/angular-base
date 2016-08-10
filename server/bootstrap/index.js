import environment from '../environment';

const System = require('systemjs');

const config = (environment.ENV === 'production') ? require('./production') : require('./development')

System.config(config);

module.exports = System;
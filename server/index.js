require('ts-node/register');
const base = require('../src/base');
const Server = require('./server').default;

const EnvName = (base.ENV == 'development') ? (base.MODE == 'universal')
              ? 'Universal Development': 'Development'
              : 'Production AOT';
base.console.info(`Starting ${EnvName} enviroment...`);

const server = new Server();

require('ts-node/register');
const base = require('../.base');
const Server = require('./server').default;
const baseEnv = require('../src/base/shared/Env');

const EnvName = (baseEnv.ENV == 'development') ? 'Development': 'Production';
base.console.info(`Starting ${EnvName} enviroment...`);

const server = new Server();

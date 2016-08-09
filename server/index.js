require('babel-core/register');
var ENV = require('../src/base/shared/Env');
console.log('[BASE] Starting '+ ENV.default +' enviroment...');
require("./server.js");

'use strict';

var fs = require('fs');
var dir = `${__dirname}/logo.txt`;
console.log(fs.readFileSync(dir, 'utf-8'));

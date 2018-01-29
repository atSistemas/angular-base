const fs = require('fs');
const dir = `${__dirname}/logo.txt`;

console.log(fs.readFileSync(dir, 'utf-8'));

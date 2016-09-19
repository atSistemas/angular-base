require('babel-core/register');

const generator = require('./generator').default;

module.exports = generator;
module.exports.defaults = generator;
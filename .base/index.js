const console = require('./console');
const timer = require('./timer');
const webpackPlugins = require('./webpack-plugins');
const fileSystem = require('./FileSystem');

module.exports = {
    console: console,
    timer: timer,
    webpack: webpackPlugins,
    fs: fileSystem
};
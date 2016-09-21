import console from './console';
import timer from './timer';
import webpackPlugins from './webpack-plugins';
import * as fileSystem from './file-system';

const base = {
    console: console,
    timer: timer,
    webpack: webpackPlugins,
    fs: fileSystem
};

export default base;
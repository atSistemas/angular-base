import console from './console';
import timer from './timer';
import webpackPlugins from './webpack-plugins';
import fileSystem from './FileSystem';

const base = {
    console: console,
    timer: timer,
    webpack: webpackPlugins,
    fs: fileSystem
};

export default base;